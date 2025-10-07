import { useState } from "react";
import { BookText, Sparkles, Save, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function DiaryPage() {
  const [entry, setEntry] = useState("");
  const [aiSummary, setAiSummary] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateInsights = () => {
    if (!entry.trim()) {
      toast.error("Please write your reflection first");
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setAiSummary(
        "Your reflection shows deep contemplation on patience and faith. The Quran reminds us: 'And seek help through patience and prayer' (2:45). Consider reflecting on how patience has manifested in your life today, and remember that every challenge is an opportunity for growth in faith."
      );
      setIsGenerating(false);
      toast.success("AI insights generated!");
    }, 2000);
  };

  const handleSaveEntry = () => {
    if (!entry.trim()) {
      toast.error("Please write your reflection first");
      return;
    }
    toast.success("Diary entry saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-6 max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-islamic-green">Quran Diary</h1>
            <p className="text-muted-foreground mt-1">
              Reflect on your daily reading and deepen your understanding
            </p>
          </div>
          <Badge variant="outline" className="text-islamic-gold border-islamic-gold flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Entry Editor */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-islamic-green">
                <BookText className="w-5 h-5" />
                Today's Reflection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="Write your thoughts and reflections after reading the Quran today... What verses touched your heart? What lessons did you learn?"
                className="min-h-[300px] resize-none"
              />
              
              <div className="flex gap-2">
                <Button
                  onClick={handleGenerateInsights}
                  disabled={isGenerating}
                  className="bg-gradient-royal hover:opacity-90 flex-1"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  {isGenerating ? "Generating..." : "Generate AI Insights"}
                </Button>
                <Button
                  onClick={handleSaveEntry}
                  variant="outline"
                  className="hover:bg-islamic-green/10 hover:border-islamic-green"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-islamic-gold">
                <Sparkles className="w-5 h-5" />
                AI-Powered Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {aiSummary ? (
                <div className="bg-gradient-glass rounded-lg p-6 border border-border/50">
                  <p className="text-sm leading-relaxed">{aiSummary}</p>
                </div>
              ) : (
                <div className="bg-muted/30 rounded-lg p-6 min-h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground text-center">
                    Write your reflection and click "Generate AI Insights" to receive personalized guidance and related Quranic wisdom.
                  </p>
                </div>
              )}

              {aiSummary && (
                <div className="space-y-3">
                  <div className="bg-islamic-green/10 border border-islamic-green/20 rounded-lg p-4">
                    <p className="text-sm font-medium text-islamic-green mb-1">Suggested Reflection</p>
                    <p className="text-xs text-muted-foreground">
                      How has patience strengthened your relationship with Allah?
                    </p>
                  </div>
                  
                  <div className="bg-islamic-blue/10 border border-islamic-blue/20 rounded-lg p-4">
                    <p className="text-sm font-medium text-islamic-blue mb-1">Related Verse</p>
                    <p className="text-xs text-muted-foreground italic">
                      "Indeed, with hardship comes ease." - Quran 94:6
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recent Entries */}
        <Card className="shadow-soft mt-6">
          <CardHeader>
            <CardTitle className="text-islamic-green">Recent Entries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors cursor-pointer"
                >
                  <div className="bg-islamic-green/10 rounded-lg p-2">
                    <BookText className="w-4 h-4 text-islamic-green" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-sm">Day {i} - Sipara Reflection</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString()}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      Today's reading reminded me of the importance of gratitude and patience...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
