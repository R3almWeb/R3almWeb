                                                                                                                import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { VisionMission } from './pages/VisionMission';
import { Partnerships } from './pages/Partnerships';
import { TechArchitecture } from './pages/TechArchitecture';
import { DivisionTemplate } from './pages/DivisionTemplate';
import { ProductTemplate } from './pages/ProductTemplate';
import { Subsidiaries } from './pages/Subsidiaries';
import { RCrowdfund } from './pages/subsidiaries/RCrowdfund';
import { RAssets } from './pages/subsidiaries/RAssets';
import { RTrade } from './pages/subsidiaries/RTrade';
import { RGovernance } from './pages/subsidiaries/RGovernance';
import { RConnect } from './pages/subsidiaries/RConnect';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Article } from './pages/Article';
import { FAQ } from './pages/FAQ';
import { Waitlist } from './pages/Waitlist';
import { WaitlistDetail } from './pages/waitlist/WaitlistDetail';
import { EarlyAccess } from './pages/waitlist/EarlyAccess';
import { SpecialPricing } from './pages/waitlist/SpecialPricing';
import { BetaTesting } from './pages/waitlist/BetaTesting';
import { PrioritySupport } from './pages/waitlist/PrioritySupport';
import { RVentures } from './pages/waitlist/RVentures';
import { RInsurance } from './pages/waitlist/RInsurance';
import { RLending } from './pages/waitlist/RLending';
import { RAnalytics } from './pages/waitlist/RAnalytics';
import { REducation } from './pages/waitlist/REducation';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { AdminDashboard } from './pages/admin/Dashboard';
import { ArticleEditor } from './pages/admin/ArticleEditor';
import { FAQEditor } from './pages/admin/FAQEditor';
import { BlogManager } from './pages/admin/BlogManager';
import { FAQManager } from './pages/admin/FAQManager';
import { ProductManager } from './pages/admin/ProductManager';
import { PipelineManager } from './pages/admin/PipelineManager';
import { SystemSettings } from './pages/admin/SystemSettings';
import { ContentSettings } from './pages/admin/ContentSettings';
import { UserManager } from './pages/admin/UserManager';
import { UserEditor } from './pages/admin/UserEditor';
import { UserAnalytics } from './pages/admin/UserAnalytics';
import { WaitlistManager } from './pages/admin/WaitlistManager';
import { WaitlistEditor } from './pages/admin/WaitlistEditor';
import { WaitlistAnalytics } from './pages/admin/WaitlistAnalytics';
import { EmailSettings } from './pages/admin/EmailSettings';
import { divisionsData, productsData } from './data/content';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-[#121212] text-white">
          <ScrollToTop />
          <Navbar />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/about/partnerships" element={<Partnerships />} />
              <Route path="/about/architecture" element={<TechArchitecture />} />
              
              {/* Products Overview */}
              <Route path="/products" element={<Subsidiaries />} />
              
              {/* Detailed Product Pages */}
              <Route path="/products/crowdfund" element={<RCrowdfund />} />
              <Route path="/products/assets" element={<RAssets />} />
              <Route path="/products/trade" element={<RTrade />} />
              <Route path="/products/governance" element={<RGovernance />} />
              <Route path="/products/connect" element={<RConnect />} />
              
              {/* Legacy Subsidiary Routes - redirect to products */}
              {Object.entries(divisionsData).map(([key, division]) => (
                <Route 
                  key={key}
                  path={`/products/template/${key}`} 
                  element={<DivisionTemplate data={division} />} 
                />
              ))}
              
              {/* Products in Development Routes */}
              {Object.entries(productsData).map(([key, product]) => (
                <Route 
                  key={key}
                  path={`/products-dev/${key}`} 
                  element={<ProductTemplate data={product} />} 
                />
              ))}
              
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<Article />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/waitlist" element={<Waitlist />} />
              <Route path="/waitlist/:id" element={<WaitlistDetail />} />
              
              {/* Dedicated Waitlist Division Pages */}
              <Route path="/waitlist/r3alm-ventures/info" element={<RVentures />} />
              <Route path="/waitlist/r3alm-insurance/info" element={<RInsurance />} />
              <Route path="/waitlist/r3alm-lending/info" element={<RLending />} />
              <Route path="/waitlist/r3alm-analytics/info" element={<RAnalytics />} />
              <Route path="/waitlist/r3alm-education/info" element={<REducation />} />
              
              <Route path="/waitlist/early-access" element={<EarlyAccess />} />
              <Route path="/waitlist/special-pricing" element={<SpecialPricing />} />
              <Route path="/waitlist/beta-testing" element={<BetaTesting />} />
              <Route path="/waitlist/priority-support" element={<PrioritySupport />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              
              {/* Authentication Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Admin Routes */}
              <Route path="/admin/dashboard" element={
                <ProtectedRoute requiredRole="editor">
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin/articles/new" element={
                <ProtectedRoute requiredRole="editor">
                  <ArticleEditor />
                </ProtectedRoute>
              } />
              <Route path="/admin/faqs/new" element={
                <ProtectedRoute requiredRole="editor">
                  <FAQEditor />
                </ProtectedRoute>
              } />
              <Route path="/admin/products" element={
                <ProtectedRoute requiredRole="editor">
                  <ProductManager />
                </ProtectedRoute>
              } />
              <Route path="/admin/pipeline" element={
                <ProtectedRoute requiredRole="editor">
                  <PipelineManager />
                </ProtectedRoute>
              } />
              <Route path="/admin/users" element={
                <ProtectedRoute requiredRole="admin">
                  <UserManager />
                </ProtectedRoute>
              } />
              <Route path="/admin/analytics" element={
                <ProtectedRoute requiredRole="editor">
                  <UserAnalytics />
                </ProtectedRoute>
              } />
              <Route path="/admin/users/new" element={
                <ProtectedRoute requiredRole="admin">
                  <UserEditor />
                </ProtectedRoute>
              } />
              <Route path="/admin/users/:id" element={
                <ProtectedRoute requiredRole="admin">
                  <UserEditor />
                </ProtectedRoute>
              } />
              <Route path="/admin/users/:id/edit" element={
                <ProtectedRoute requiredRole="admin">
                  <UserEditor />
                </ProtectedRoute>
              } />
              <Route path="/admin/settings" element={
                <ProtectedRoute requiredRole="admin">
                  <SystemSettings />
                </ProtectedRoute>
              } />
              <Route path="/admin/content" element={
                <ProtectedRoute requiredRole="editor">
                  <ContentSettings />
                </ProtectedRoute>
              } />
              <Route path="/admin/articles/:id" element={
                <ProtectedRoute requiredRole="editor">
                  <ArticleEditor />
                </ProtectedRoute>
              } />
              <Route path="/admin/faqs/:id" element={
                <ProtectedRoute requiredRole="editor">
                  <FAQEditor />
                </ProtectedRoute>
              } />
              <Route path="/admin/blog" element={
                <ProtectedRoute requiredRole="editor">
                  <BlogManager />
                </ProtectedRoute>
              } />
              <Route path="/admin/faq-manager" element={
                <ProtectedRoute requiredRole="editor">
                  <FAQManager />
                </ProtectedRoute>
              } />
              <Route path="/admin/waitlist" element={
                <ProtectedRoute requiredRole="editor">
                  <WaitlistManager />
                </ProtectedRoute>
              } />
              <Route path="/admin/waitlist/new" element={
                <ProtectedRoute requiredRole="editor">
                  <WaitlistEditor />
                </ProtectedRoute>
              } />
              <Route path="/admin/waitlist/:id/edit" element={
                <ProtectedRoute requiredRole="editor">
                  <WaitlistEditor />
                </ProtectedRoute>
              } />
              <Route path="/admin/waitlist-analytics" element={
                <ProtectedRoute requiredRole="editor">
                  <WaitlistAnalytics />
                </ProtectedRoute>
              } />
              <Route path="/admin/email-settings" element={
                <ProtectedRoute requiredRole="admin">
                  <EmailSettings />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;