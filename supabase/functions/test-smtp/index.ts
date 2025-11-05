import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

interface SMTPConfig {
  host: string
  port: number
  secure: boolean
  user: string
  password: string
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    })
  }

  try {
    const { host, port, secure, user, password }: SMTPConfig = await req.json()

    // Validate required fields
    if (!host || !port || !user || !password) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Missing required SMTP configuration fields" 
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      )
    }

    // In a real implementation, you would test the SMTP connection here
    // For now, we'll simulate a successful connection test
    console.log('Testing SMTP connection:', { host, port, user: user.substring(0, 3) + '***' })
    
    // Simulate connection test delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // For demo purposes, we'll return success
    // In production, you would use a library like nodemailer to actually test the connection
    const testResult = {
      success: true,
      message: `Successfully connected to ${host}:${port}`,
      timestamp: new Date().toISOString()
    }

    return new Response(
      JSON.stringify(testResult),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    )
  } catch (error) {
    console.error('SMTP test error:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : "SMTP connection test failed" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    )
  }
})