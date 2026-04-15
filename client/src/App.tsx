import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Schedule from "@/pages/Schedule";
import Nathaniel from "@/pages/Nathaniel";
import Terms from "@/pages/Terms";
import Hire from "@/pages/Hire";
import Join from "@/pages/Join";
import Roles from "@/pages/Roles";
import RoleDetail from "@/pages/RoleDetail";
import PricingForYou from "@/pages/PricingForYou";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/nathaniel" component={Nathaniel} />
      <Route path="/terms" component={Terms} />
      <Route path="/hire" component={Hire} />
      <Route path="/join" component={Join} />
      <Route path="/roles" component={Roles} />
      <Route path="/roles/:slug" component={RoleDetail} />
      <Route path="/our-pricing-for-you" component={PricingForYou} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
