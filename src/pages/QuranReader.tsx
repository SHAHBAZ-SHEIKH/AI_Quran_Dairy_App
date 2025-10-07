import { useState } from "react";
import { BookOpen, ChevronLeft, ChevronRight, Bookmark, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function QuranReader() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSipara, setCurrentSipara] = useState(1);
  const totalPages = 604;
  const pagesPerSipara = Math.floor(totalPages / 30);

  const progressPercentage = (currentPage / totalPages) * 100;

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      setCurrentSipara(Math.ceil((currentPage + 1) / pagesPerSipara));
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      setCurrentSipara(Math.ceil((currentPage - 1) / pagesPerSipara));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-islamic-green">Quran Reader</h1>
            <p className="text-muted-foreground mt-1">
              Sipara {currentSipara} • Page {currentPage} of {totalPages}
            </p>
          </div>
          <Badge variant="outline" className="text-islamic-gold border-islamic-gold">
            {Math.round(progressPercentage)}% Complete
          </Badge>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Reader Card */}
        <Card className="shadow-elegant border-2 border-primary/10">
          <CardContent className="p-8">
            {/* Page Display */}
            <div className="bg-gradient-glass rounded-xl p-8 min-h-[500px] border border-border/50 backdrop-blur-sm">
              <div className="text-right mb-6">
                <h2 className="text-2xl font-bold text-islamic-green mb-2">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </h2>
                <p className="text-sm text-muted-foreground">
                  In the name of Allah, the Most Gracious, the Most Merciful
                </p>
              </div>
              
              <div className="space-y-6 text-right" dir="rtl">
                <p className="text-xl leading-loose font-serif">
                  الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ • الرَّحْمَٰنِ الرَّحِيمِ • مَالِكِ يَوْمِ الدِّينِ
                </p>
                <p className="text-xl leading-loose font-serif">
                  إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ • اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ
                </p>
                <p className="text-xl leading-loose font-serif">
                  صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  [This is a placeholder. In production, actual Quran text would be displayed here from an API or database.]
                </p>
              </div>
            </div>

            {/* Navigation & Actions */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-islamic-green/10 hover:border-islamic-green"
                >
                  <Bookmark className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-islamic-gold/10 hover:border-islamic-gold"
                >
                  <MessageSquare className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  variant="outline"
                  className="hover:bg-islamic-green/10 hover:border-islamic-green"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                <span className="text-sm font-medium px-4">
                  Page {currentPage}
                </span>
                <Button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className="bg-gradient-primary hover:opacity-90"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <Card className="shadow-soft">
            <CardContent className="p-4 text-center">
              <BookOpen className="w-6 h-6 text-islamic-green mx-auto mb-2" />
              <p className="text-2xl font-bold text-islamic-green">{currentSipara}</p>
              <p className="text-xs text-muted-foreground">Current Sipara</p>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-islamic-gold">{currentPage}</p>
              <p className="text-xs text-muted-foreground">Pages Read</p>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-islamic-blue">{totalPages - currentPage}</p>
              <p className="text-xs text-muted-foreground">Pages Remaining</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
