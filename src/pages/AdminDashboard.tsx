import { Users, BookOpen, TrendingUp, Activity, Sparkles, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Users", value: "1,234", icon: Users, color: "islamic-green", change: "+12%" },
    { label: "Active Readers", value: "892", icon: BookOpen, color: "islamic-blue", change: "+8%" },
    { label: "Completions", value: "156", icon: TrendingUp, color: "islamic-gold", change: "+23%" },
    { label: "Avg. Progress", value: "67%", icon: Activity, color: "islamic-green", change: "+5%" },
  ];

  const recentUsers = [
    { name: "Ahmed Ali", email: "ahmed@example.com", progress: 45, plan: "1 Month", status: "Active" },
    { name: "Fatima Khan", email: "fatima@example.com", progress: 78, plan: "3 Months", status: "Active" },
    { name: "Usman Shah", email: "usman@example.com", progress: 23, plan: "6 Months", status: "Active" },
    { name: "Aisha Malik", email: "aisha@example.com", progress: 92, plan: "1 Month", status: "Completing" },
    { name: "Ibrahim Hassan", email: "ibrahim@example.com", progress: 12, plan: "3 Months", status: "Active" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-islamic-green">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Manage users, analytics, and AI-powered features
            </p>
          </div>
          <Button className="bg-gradient-royal hover:opacity-90">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Assistant
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, idx) => (
            <Card key={idx} className="shadow-soft hover:shadow-elegant transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold mt-2" style={{ color: `hsl(var(--${stat.color}))` }}>
                      {stat.value}
                    </p>
                    <Badge variant="secondary" className="mt-2 text-xs">
                      {stat.change} this month
                    </Badge>
                  </div>
                  <div className={`bg-${stat.color}/10 rounded-lg p-3`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="shadow-elegant bg-gradient-primary border-0 text-white">
            <CardContent className="p-6">
              <Sparkles className="w-8 h-8 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Daily Hadith Broadcast</h3>
              <p className="text-sm opacity-90 mb-4">
                Generate and send daily Hadiths to all users
              </p>
              <Button variant="secondary" size="sm">
                Generate Now
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-elegant bg-gradient-gold border-0 text-white">
            <CardContent className="p-6">
              <Mail className="w-8 h-8 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Smart Reminders</h3>
              <p className="text-sm opacity-90 mb-4">
                AI-powered personalized reading reminders
              </p>
              <Button variant="secondary" size="sm">
                Configure
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-elegant bg-gradient-royal border-0 text-white">
            <CardContent className="p-6">
              <TrendingUp className="w-8 h-8 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Insights Report</h3>
              <p className="text-sm opacity-90 mb-4">
                AI analysis of community reading patterns
              </p>
              <Button variant="secondary" size="sm">
                View Report
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Users Table */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-islamic-green">Recent Users</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentUsers.map((user, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div
                            className="bg-islamic-green h-2 rounded-full"
                            style={{ width: `${user.progress}%` }}
                          />
                        </div>
                        <span className="text-sm">{user.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{user.plan}</TableCell>
                    <TableCell>
                      <Badge
                        variant={user.status === "Active" ? "default" : "secondary"}
                        className={user.status === "Active" ? "bg-islamic-green" : ""}
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
