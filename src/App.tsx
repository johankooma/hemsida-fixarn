import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RedirectTo } from "@/components/RedirectTo";
import Index from "./pages/Index.tsx";
import Cookies from "./pages/Cookies.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/integritetspolicy" element={<Cookies />} />
          <Route path="/privacy-policy" element={<Cookies />} />
          {/* 301 redirects from old URLs */}
          <Route path="/author/nina/*" element={<RedirectTo to="/#om" />} />
          <Route path="/tjanster/*" element={<RedirectTo to="/#tjanster" />} />
          <Route path="/om-oss-2/*" element={<RedirectTo to="/#om" />} />
          <Route path="/kontakt/*" element={<RedirectTo to="/#kontakt" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
