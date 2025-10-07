import { BookOpen, CheckCircle2, Circle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

export const TodayReading = () => {
  const [completedPages, setCompletedPages] = useState(2);
  const targetPages = 4;
  const currentSipara = 1;
  const siparaName = "Al-Fatihah & Al-Baqarah";
  
  const pages = [
    { number: 1, completed: true },
    { number: 2, completed: true },
    { number: 3, completed: false },
    { number: 4, completed: false },
  ];

  const togglePage = (pageNumber: number) => {
    const isCompleted = pages.find(p => p.number === pageNumber)?.completed;
    if (!isCompleted) {
      setCompletedPages(prev => prev + 1);
    } else {
      setCompletedPages(prev => prev - 1);
    }
  };

  const progressPercentage = (completedPages / targetPages) * 100;

  return (
    <Card className="shadow-soft hover:shadow-elegant transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-islamic-green">
              <BookOpen className="w-5 h-5" />
              Today's Reading
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Sipara {currentSipara}: {siparaName}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-islamic-green">{completedPages}/{targetPages}</p>
            <p className="text-xs text-muted-foreground">Pages</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium">{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {pages.map((page) => (
            <Button
              key={page.number}
              variant={page.completed ? "default" : "outline"}
              className={`h-12 ${
                page.completed 
                  ? "bg-gradient-primary hover:opacity-90 shadow-elegant" 
                  : "hover:border-islamic-green hover:text-islamic-green"
              }`}
              onClick={() => togglePage(page.number)}
            >
              <div className="flex items-center gap-2">
                {page.completed ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <Circle className="w-4 h-4" />
                )}
                <span>Page {page.number}</span>
              </div>
            </Button>
          ))}
        </div>
        
        {completedPages === targetPages && (
          <div className="bg-success/10 border border-success/20 rounded-lg p-3 text-center">
            <p className="text-success font-medium">🎉 Today's target completed! Barakallahu feek!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};