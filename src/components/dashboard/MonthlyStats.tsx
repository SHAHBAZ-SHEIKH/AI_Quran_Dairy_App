import { Calendar, TrendingUp, Target, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const MonthlyStats = () => {
  const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const daysInMonth = 30; // Simplified
  const currentDay = 15;
  const completedDays = 12;
  const totalPagesRead = 48;
  const targetPagesPerMonth = 120;
  
  const completionRate = (completedDays / currentDay) * 100;
  const monthlyProgress = (totalPagesRead / targetPagesPerMonth) * 100;

  return (
    <Card className="shadow-soft hover:shadow-gold transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-islamic-gold">
          <Calendar className="w-5 h-5" />
          Monthly Progress - {currentMonth}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-gradient-subtle rounded-lg">
            <div className="text-2xl font-bold text-islamic-green">{completedDays}</div>
            <div className="text-sm text-muted-foreground">Days Completed</div>
          </div>
          <div className="text-center p-4 bg-gradient-subtle rounded-lg">
            <div className="text-2xl font-bold text-islamic-gold">{totalPagesRead}</div>
            <div className="text-sm text-muted-foreground">Pages Read</div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="flex items-center gap-1">
                <Target className="w-4 h-4" />
                Daily Consistency
              </span>
              <span className="font-medium">{Math.round(completionRate)}%</span>
            </div>
            <Progress value={completionRate} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                Monthly Target
              </span>
              <span className="font-medium">{Math.round(monthlyProgress)}%</span>
            </div>
            <Progress value={monthlyProgress} className="h-2" />
          </div>
        </div>
        
        <div className="bg-islamic-gold/10 border border-islamic-gold/20 rounded-lg p-4">
          <div className="flex items-center gap-2 text-islamic-gold mb-2">
            <Award className="w-5 h-5" />
            <span className="font-medium">Achievement</span>
          </div>
          <p className="text-sm text-muted-foreground">
            You're ahead of schedule! Keep up the excellent work.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};