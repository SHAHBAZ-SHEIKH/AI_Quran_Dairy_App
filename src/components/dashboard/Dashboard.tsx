import { DashboardHeader } from "./DashboardHeader";
import { TodayReading } from "./TodayReading"; 
import { MonthlyStats } from "./MonthlyStats";
import { ReadingPlan } from "./ReadingPlan";
import { QuickActions } from "./QuickActions";

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <DashboardHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <TodayReading />
            <ReadingPlan />
          </div>
          
          <div className="space-y-6">
            <MonthlyStats />
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
};