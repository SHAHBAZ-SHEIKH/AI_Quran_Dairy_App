import { Calendar, User, Settings, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const DashboardHeader = () => {
  const today = new Date();
  const islamicDate = "15 Rabi' al-Awwal 1446"; // Mock Islamic date
  const userName = "Ahmad"; // Mock user name

  return (
    <Card className="bg-gradient-primary shadow-elegant border-0 text-primary-foreground p-6 mb-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Assalamu Alaikum, {userName}</h1>
              <p className="text-primary-foreground/80">May Allah bless your reading journey</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{today.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <p className="text-sm text-primary-foreground/60">{islamicDate}</p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};