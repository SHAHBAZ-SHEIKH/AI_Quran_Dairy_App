import { MapPin, Clock, BookOpen, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ReadingPlan = () => {
  const planData = [
    { sipara: 1, name: "Al-Fatihah & Al-Baqarah", pages: "1-20", days: "Day 1-5", status: "active", progress: 60 },
    { sipara: 2, name: "Al-Baqarah (continued)", pages: "21-40", days: "Day 6-10", status: "upcoming", progress: 0 },
    { sipara: 3, name: "Al-Baqarah & Al-Imran", pages: "41-60", days: "Day 11-15", status: "upcoming", progress: 0 },
    { sipara: 4, name: "Al-Imran & An-Nisa", pages: "61-80", days: "Day 16-20", status: "upcoming", progress: 0 },
  ];

  return (
    <Card className="shadow-soft hover:shadow-elegant transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-islamic-blue">
          <MapPin className="w-5 h-5" />
          30-Day Reading Plan
        </CardTitle>
        <p className="text-sm text-muted-foreground">Complete the Quran in 6 months</p>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {planData.map((item) => (
          <div 
            key={item.sipara}
            className={`p-4 rounded-lg border transition-all duration-300 ${
              item.status === 'active' 
                ? 'bg-islamic-blue/5 border-islamic-blue/20 shadow-sm' 
                : 'bg-muted/30 border-border hover:bg-muted/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    item.status === 'active' 
                      ? 'bg-islamic-blue text-white' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {item.sipara}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        Pages {item.pages}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.days}
                      </span>
                    </div>
                  </div>
                </div>
                
                {item.status === 'active' && (
                  <div className="ml-11">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progress</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div 
                        className="bg-islamic-blue h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <Badge variant={item.status === 'active' ? 'default' : 'secondary'} className="text-xs">
                  {item.status === 'active' ? 'Current' : 'Upcoming'}
                </Badge>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};