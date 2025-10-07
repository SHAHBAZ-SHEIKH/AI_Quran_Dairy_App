import { BookMarked, Search, Sparkles, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const books = [
  {
    title: "Seerat-un-Nabi ﷺ",
    author: "Allama Shibli Nomani",
    category: "Biography",
    pages: 800,
    progress: 45,
    color: "islamic-green"
  },
  {
    title: "Bayan-ul-Quran",
    author: "Dr. Israr Ahmed",
    category: "Tafsir",
    pages: 1200,
    progress: 23,
    color: "islamic-gold"
  },
  {
    title: "Fazail-e-Amal",
    author: "Muhammad Zakariya",
    category: "Hadith",
    pages: 600,
    progress: 67,
    color: "islamic-blue"
  },
  {
    title: "Tahzeeb-ul-Akhlaq",
    author: "Allama Abdul Mustafa Azmi",
    category: "Ethics",
    pages: 450,
    progress: 12,
    color: "islamic-green"
  },
  {
    title: "Stories of the Prophets",
    author: "Ibn Kathir",
    category: "History",
    pages: 550,
    progress: 0,
    color: "islamic-gold"
  },
  {
    title: "Riyad-us-Saliheen",
    author: "Imam An-Nawawi",
    category: "Hadith",
    pages: 700,
    progress: 89,
    color: "islamic-blue"
  }
];

export default function Library() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-islamic-green">Islamic Library</h1>
          <p className="text-muted-foreground mt-1">
            Access authentic Islamic books and enhance your learning with AI-powered insights
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search books by title, author, or category..."
              className="pl-10"
            />
          </div>
        </div>

        {/* AI Features Banner */}
        <Card className="shadow-elegant mb-6 bg-gradient-royal border-0 text-white">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 rounded-lg p-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">AI-Enhanced Reading</h3>
                <p className="text-sm opacity-90">
                  Get chapter summaries, key teachings highlights, and personalized reflection prompts powered by AI
                </p>
              </div>
              <Button variant="secondary" size="sm">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {["All", "Biography", "Tafsir", "Hadith", "Ethics", "History", "Fiqh"].map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={`cursor-pointer whitespace-nowrap ${
                category === "All" ? "bg-gradient-primary" : "hover:bg-muted"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, idx) => (
            <Card
              key={idx}
              className="shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className={`bg-${book.color}/10 rounded-lg p-2`}>
                    <BookMarked className={`w-5 h-5 text-${book.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {book.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-islamic-green transition-colors">
                  {book.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{book.author}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{book.pages} pages</span>
                    {book.progress > 0 && (
                      <span className="text-islamic-green font-medium flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {book.progress}%
                      </span>
                    )}
                  </div>
                  
                  {book.progress > 0 && (
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`bg-${book.color} h-2 rounded-full transition-all`}
                        style={{ width: `${book.progress}%` }}
                      />
                    </div>
                  )}

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:opacity-90"
                    >
                      {book.progress > 0 ? "Continue" : "Start Reading"}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-islamic-blue/10 hover:border-islamic-blue"
                    >
                      <Sparkles className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
