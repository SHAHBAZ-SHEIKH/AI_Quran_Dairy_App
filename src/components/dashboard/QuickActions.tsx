import { Play, Pause, RotateCcw, Share2, Bookmark, Volume2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const QuickActions = () => {
  const [isListening, setIsListening] = useState(false);

  return (
    <Card className="shadow-soft hover:shadow-elegant transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-foreground">Quick Actions</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            className="h-20 flex-col gap-2 hover:bg-islamic-green/10 hover:border-islamic-green"
          >
            <Bookmark className="w-6 h-6" />
            <span className="text-xs">Bookmark</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex-col gap-2 hover:bg-islamic-blue/10 hover:border-islamic-blue"
            onClick={() => setIsListening(!isListening)}
          >
            <Volume2 className="w-6 h-6" />
            <span className="text-xs">Audio</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex-col gap-2 hover:bg-islamic-gold/10 hover:border-islamic-gold"
          >
            <Share2 className="w-6 h-6" />
            <span className="text-xs">Share</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex-col gap-2 hover:bg-destructive/10 hover:border-destructive"
          >
            <RotateCcw className="w-6 h-6" />
            <span className="text-xs">Reset</span>
          </Button>
        </div>
        
        <div className="space-y-2">
          <Button 
            className={`w-full h-12 ${
              isListening 
                ? "bg-destructive hover:bg-destructive/90" 
                : "bg-gradient-primary hover:opacity-90"
            }`}
            onClick={() => setIsListening(!isListening)}
          >
            <div className="flex items-center gap-2">
              {isListening ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              <span>{isListening ? "Pause Reading" : "Start Reading Session"}</span>
            </div>
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            Track your reading time and stay focused
          </p>
        </div>
      </CardContent>
    </Card>
  );
};