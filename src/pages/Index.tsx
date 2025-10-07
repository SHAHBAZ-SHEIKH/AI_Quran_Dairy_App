import { Dashboard } from "@/components/dashboard/Dashboard";

const Index = () => {
  // For demo purposes, we'll show the dashboard directly
  // In a real app, this would check authentication status
  const isAuthenticated = true;

  if (!isAuthenticated) {
    // This would render the AuthLayout component
    return <div>Please log in</div>;
  }

  return <Dashboard />;
};

export default Index;
