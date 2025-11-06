// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';

// === Pages ===
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

// === Admin Pages ===
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
// New imports for expanded content management
import { PageManager } from './pages/admin/PageManager';
import { MediaManager } from './pages/admin/MediaManager';
import { CategoryManager } from './pages/admin/CategoryManager';

// === Data ===
import { divisionsData, productsData } from './data/content';

import './App.css';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const collapsed = localStorage.getItem('sidebar-collapsed') === 'true';
      setIsCollapsed(collapsed);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sidebar-collapsed', isCollapsed.toString());
    }
  }, [isCollapsed]);

  const toggleCollapse = () => setIsCollapsed(prev => !prev);
  const toggleMobile = () => setIsMobileOpen(prev => !prev);

  return (
    <AuthProvider>
      <Router>
        <div className="flex min-h-screen bg-[#121212] text-white">
          <Sidebar
            isCollapsed={isCollapsed}
            toggleCollapse={toggleCollapse}
            isMobileOpen={isMobileOpen}
            toggleMobile={toggleMobile}
          />
          <div className={`flex-1 flex flex-col transition-all duration-300 ${
            isCollapsed ? 'lg:ml-16' : 'lg:ml-64'
          } ${isMobileOpen ? 'ml-0' : ''}`}>
            <TopNav toggleMobile={toggleMobile} isMobileOpen={isMobileOpen} />
            <ScrollToTop />
            <main className="flex-1 overflow-y-auto">
              <Routes>
                {/* === Public Routes === */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/vision-mission" element={<VisionMission />} />
                <Route path="/about/partnerships" element={<Partnerships />} />
                <Route path="/about/architecture" element={<TechArchitecture />} />

                {/* === Products === */}
                <Route path="/products" element={<Subsidiaries />} />
                <Route path="/products/crowdfund" element={<RCrowdfund />} />
                <Route path="/products/assets" element={<RAssets />} />
                <Route path="/products/trade" element={<RTrade />} />
                <Route path="/products/governance" element={<RGovernance />} />
                <Route path="/products/connect" element={<RConnect />} />

                {/* === Legacy Division Templates === */}
                {Object.entries(divisionsData).map(([key, division]) => (
                  <Route
                    key={key}
                    path={`/products/template/${key}`}
                    element={<DivisionTemplate data={division} />}
                  />
                ))}

                {/* === Products in Development === */}
                {Object.entries(productsData).map(([key, product]) => (
                  <Route
                    key={key}
                    path={`/products-dev/${key}`}
                    element={<ProductTemplate data={product} />}
                  />
                ))}

                {/* === Content === */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<Article />} />
                <Route path="/faq" element={<FAQ />} />

                {/* === Waitlist === */}
                <Route path="/waitlist" element={<Waitlist />} />
                <Route path="/waitlist/:id" element={<WaitlistDetail />} />
                <Route path="/waitlist/r3alm-ventures/info" element={<RVentures />} />
                <Route path="/waitlist/r3alm-insurance/info" element={<RInsurance />} />
                <Route path="/waitlist/r3alm-lending/info" element={<RLending />} />
                <Route path="/waitlist/r3alm-analytics/info" element={<RAnalytics />} />
                <Route path="/waitlist/r3alm-education/info" element={<REducation />} />
                <Route path="/waitlist/early-access" element={<EarlyAccess />} />
                <Route path="/waitlist/special-pricing" element={<SpecialPricing />} />
                <Route path="/waitlist/beta-testing" element={<BetaTesting />} />
                <Route path="/waitlist/priority-support" element={<PrioritySupport />} />

                {/* === Legal & Contact === */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />

                {/* === Auth === */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* === Admin Routes (Protected) === */}
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute requiredRole="EDITOR">
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/articles/new"
                  element={
                    <ProtectedRoute requiredRole="EDITOR">
                      <ArticleEditor />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/faqs/new"
                  element={
                    <ProtectedRoute requiredRole="EDITOR">
                      <FAQEditor />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/products"
                  element={
                    <ProtectedRoute requiredRole="EDITOR">
                      <ProductManager />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/pipeline"
                  element={
                    <ProtectedRoute requiredRole="EDITOR">
                      <PipelineManager />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/users"
                  element={
                    <ProtectedRoute requiredRole="ADMIN">
                      <UserManager />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/analytics"
                  element={
                    <ProtectedRoute requiredRole="EDITOR">
                      <UserAnalytics />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/users/new"
                  element={
                    <ProtectedRoute requiredRole="ADMIN">
                      <UserEditor />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/users/:id"
                  element={
                    <ProtectedRoute requiredRole="ADMIN">
                      <UserEditor />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/users/:id/edit"
                  element={
                    <ProtectedRoute requiredRole="ADMIN">
                      <UserEditor />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/settings"
                  element={
                    <ProtectedRoute requiredRole="ADMIN">
                      <SystemSettings />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/content"
                  element={
                    <ProtectedRoute requiredRole="EDITOR">
                      <ContentSettings />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/articles/:id"
                  element={
                    <ProtectedRoute requiredRole="EDITOR">
                      <ArticleEditor />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/faqs/:id"
                  element={
                    <ProtectedRoute requiredRole="EDITOR">
                      <FAQEditor />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/blog"
                  element={
                    <ProtectedRoute requiredRole="EDITOR">
                      <BlogManager />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/faq-manager"
                  element={
                    <ProtectedRoute requiredRole="EDITOR">
                      <FAQManager />
                    </ProtectedRoute>
                  }
                />
                {/* New routes for expanded content management */}
                <Route
                  path="/admin/pages"
                  element={
                    <ProtectedRoute requiredRole="EDITOR">
                      <PageManager />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/media"
                  element={
                    <ProtectedRoute requiredRole="ADMIN">
                      <MediaManager />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/categories"
                  element={
                    <ProtectedRoute requiredRole="EDITOR">
                      <CategoryManager />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/waitlist"
                  element={
                    <ProtectedRoute requiredRole="EDITOR">
                      <WaitlistManager />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/waitlist/new"
                  element={
                    <ProtectedRoute requiredRole="EDITOR">
                      <WaitlistEditor />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/waitlist/:id/edit"
                  element={
                    <ProtectedRoute requiredRole="EDITOR">
                      <WaitlistEditor />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/waitlist-analytics"
                  element={
                    <ProtectedRoute requiredRole="EDITOR">
                      <WaitlistAnalytics />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/email-settings"
                  element={
                    <ProtectedRoute requiredRole="ADMIN">
                      <EmailSettings />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
          {isMobileOpen && (
            <div
              className="fixed inset-0 bg-black/50 lg:hidden z-40"
              onClick={toggleMobile}
            />
          )}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;