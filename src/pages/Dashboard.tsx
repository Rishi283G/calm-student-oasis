
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { format, subDays, differenceInDays } from 'date-fns';
import { getMoodEntries, MoodEntry } from '@/utils/storage';
import { SmileOpen, Smile, Meh, Frown, FrownOpen, Activity, Calendar, Clock } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Dashboard = () => {
  const [moodData, setMoodData] = useState<MoodEntry[]>([]);
  const [timeRange, setTimeRange] = useState('30');
  const [averageMood, setAverageMood] = useState(0);
  const [moodCounts, setMoodCounts] = useState<{[key: number]: number}>({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0
  });
  
  // Get mood icon based on value
  const getMoodIcon = (mood: number) => {
    switch (mood) {
      case 1: return <FrownOpen className="h-6 w-6 text-red-500" />;
      case 2: return <Frown className="h-6 w-6 text-orange-500" />;
      case 3: return <Meh className="h-6 w-6 text-yellow-500" />;
      case 4: return <Smile className="h-6 w-6 text-green-500" />;
      case 5: return <SmileOpen className="h-6 w-6 text-emerald-500" />;
      default: return null;
    }
  };
  
  // Get mood color based on value
  const getMoodColor = (mood: number) => {
    switch (mood) {
      case 1: return "#ef4444";
      case 2: return "#f97316";
      case 3: return "#eab308";
      case 4: return "#22c55e";
      case 5: return "#10b981";
      default: return "#94a3b8";
    }
  };
  
  // Load and process mood data
  useEffect(() => {
    const allMoodEntries = getMoodEntries();
    const days = parseInt(timeRange);
    const startDate = subDays(new Date(), days);
    
    // Filter entries by date range
    const filteredEntries = allMoodEntries.filter(entry => 
      new Date(entry.date) >= startDate
    ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    // Fill in missing dates with null values for the chart
    const filledData: MoodEntry[] = [];
    const today = new Date();
    
    for (let i = days; i >= 0; i--) {
      const currentDate = subDays(today, i);
      const formattedDate = format(currentDate, 'yyyy-MM-dd');
      
      const existingEntry = filteredEntries.find(
        entry => format(new Date(entry.date), 'yyyy-MM-dd') === formattedDate
      );
      
      if (existingEntry) {
        filledData.push(existingEntry);
      } else {
        filledData.push({
          date: currentDate.toISOString(),
          mood: 0 // No mood recorded
        });
      }
    }
    
    setMoodData(filledData);
    
    // Calculate average mood (excluding missing entries)
    const validEntries = filteredEntries.filter(entry => entry.mood > 0);
    const total = validEntries.reduce((sum, entry) => sum + entry.mood, 0);
    setAverageMood(validEntries.length > 0 ? +(total / validEntries.length).toFixed(1) : 0);
    
    // Calculate mood distribution
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    validEntries.forEach(entry => {
      counts[entry.mood] = (counts[entry.mood] || 0) + 1;
    });
    setMoodCounts(counts);
    
  }, [timeRange]);
  
  // Chart data transformation
  const chartData = moodData.map(entry => ({
    date: format(new Date(entry.date), 'MMM dd'),
    mood: entry.mood || null, // Recharts handles null values by skipping them
    value: entry.mood || null,
    fullDate: format(new Date(entry.date), 'PP')
  }));
  
  // Calculate streaks
  const calculateCurrentStreak = () => {
    const sortedEntries = [...moodData]
      .filter(e => e.mood > 0)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    if (!sortedEntries.length) return 0;
    
    let streak = 1;
    let currentDate = new Date(sortedEntries[0].date);
    
    for (let i = 1; i < sortedEntries.length; i++) {
      const entryDate = new Date(sortedEntries[i].date);
      const dayDiff = differenceInDays(currentDate, entryDate);
      
      if (dayDiff === 1) {
        streak++;
        currentDate = entryDate;
      } else {
        break;
      }
    }
    
    return streak;
  };
  
  const currentStreak = calculateCurrentStreak();
  
  // Distribution chart data
  const distributionData = Object.entries(moodCounts).map(([mood, count]) => ({
    mood: parseInt(mood),
    count,
    color: getMoodColor(parseInt(mood))
  }));
  
  return (
    <Layout>
      <div className="page-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-mindease-blue-dark">Mood Dashboard</h1>
            <p className="text-gray-600">Track your mental wellbeing over time</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Last 7 days</SelectItem>
                <SelectItem value="14">Last 14 days</SelectItem>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Quick stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-mindease-blue-light">
                  <Activity className="h-6 w-6 text-mindease-blue-dark" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Average Mood</p>
                  <div className="flex items-center">
                    <h3 className="text-2xl font-bold">{averageMood}</h3>
                    {averageMood > 0 && getMoodIcon(Math.round(averageMood))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-mindease-green-light">
                  <Calendar className="h-6 w-6 text-mindease-green-dark" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Entries</p>
                  <h3 className="text-2xl font-bold">
                    {moodData.filter(entry => entry.mood > 0).length} 
                    <span className="text-sm text-gray-500 font-normal ml-2">
                      of {moodData.length} days
                    </span>
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-mindease-purple-light">
                  <Clock className="h-6 w-6 text-mindease-purple-dark" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Current Streak</p>
                  <h3 className="text-2xl font-bold">
                    {currentStreak} 
                    <span className="text-sm text-gray-500 font-normal ml-1">
                      {currentStreak === 1 ? 'day' : 'days'}
                    </span>
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Main chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Mood Trends</CardTitle>
            <CardDescription>
              Your mood changes over the past {timeRange} days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="date"
                    tickMargin={10}
                  />
                  <YAxis 
                    domain={[0, 5]} 
                    ticks={[1, 2, 3, 4, 5]} 
                    allowDecimals={false}
                    tickMargin={10}
                  />
                  <Tooltip 
                    formatter={(value: any) => [`Mood: ${value}`, 'Mood']}
                    labelFormatter={(label: any, data: any) => data[0]?.payload?.fullDate || label}
                  />
                  <Line
                    type="monotone"
                    dataKey="mood"
                    stroke="#8AB6F9"
                    strokeWidth={3}
                    dot={(props) => {
                      if (!props.payload.mood) return null;
                      return (
                        <circle
                          cx={props.cx}
                          cy={props.cy}
                          r={5}
                          fill={getMoodColor(props.payload.mood)}
                          stroke="white"
                          strokeWidth={2}
                        />
                      );
                    }}
                    activeDot={{ r: 8 }}
                    connectNulls
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Mood distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Mood Distribution</CardTitle>
            <CardDescription>
              How often you've experienced each mood level
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={distributionData}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis 
                    dataKey="mood" 
                    tickFormatter={(value) => {
                      const labels = ['', 'Very Bad', 'Bad', 'Okay', 'Good', 'Great'];
                      return labels[value] || '';
                    }}
                    tickMargin={10}
                  />
                  <YAxis allowDecimals={false} />
                  <Tooltip 
                    formatter={(value: any) => [`${value} entries`, 'Count']}
                    labelFormatter={(mood: any) => {
                      const labels = ['', 'Very Bad', 'Bad', 'Okay', 'Good', 'Great'];
                      return labels[mood] || '';
                    }}
                  />
                  <Bar 
                    dataKey="count" 
                    name="Entries"
                    fill="#8AB6F9"
                    radius={[4, 4, 0, 0]}
                    fillOpacity={0.9}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Show a message if no data */}
        {moodData.filter(entry => entry.mood > 0).length === 0 && (
          <div className="text-center mt-6 p-6 glass-card">
            <h3 className="text-xl font-medium mb-2">No mood data yet</h3>
            <p className="text-gray-500 mb-4">
              Start tracking your mood daily to see trends and insights here.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
