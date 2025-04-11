
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Pencil, BarChart3, BookOpen, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import MoodSelector from '@/components/MoodSelector';

const Index = () => {
  // Array of random positive quotes
  const quotes = [
    "You don't have to control your thoughts. You just have to stop letting them control you.",
    "Mental health is not a destination, but a process. It's about how you drive, not where you're going.",
    "Self-care is how you take your power back.",
    "You are not alone in this journey.",
    "Progress, not perfection.",
    "Your mental health is a priority.",
    "It's okay not to be okay.",
    "Recovery is not linear."
  ];
  
  // Pick a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return (
    <Layout>
      <div className="page-container">
        <section className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-mindease-blue to-mindease-green bg-clip-text text-transparent animate-fade-in">
            Welcome to MindEase
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Your personal space for mental wellbeing. Track your mood, journal your thoughts, and access resources to support your mental health journey.
          </p>
        </section>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <MoodSelector />
          
          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl text-mindease-blue-dark">Today's Affirmation</CardTitle>
              <CardDescription>A gentle reminder for your day</CardDescription>
            </CardHeader>
            <CardContent>
              <blockquote className="italic text-lg border-l-4 border-mindease-blue-light pl-4 py-2">
                "{randomQuote}"
              </blockquote>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-mindease-blue-dark">Quick Access</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Link to="/journal" className="block">
            <Card className="card-hover h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="bg-mindease-purple-light p-3 rounded-full mb-4">
                    <Pencil className="h-6 w-6 text-mindease-purple-dark" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Journal</h3>
                  <p className="text-gray-500 text-sm">Write down your thoughts and feelings</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/dashboard" className="block">
            <Card className="card-hover h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="bg-mindease-blue-light p-3 rounded-full mb-4">
                    <BarChart3 className="h-6 w-6 text-mindease-blue-dark" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Dashboard</h3>
                  <p className="text-gray-500 text-sm">View your mood trends and progress</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/resources" className="block">
            <Card className="card-hover h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="bg-mindease-green-light p-3 rounded-full mb-4">
                    <BookOpen className="h-6 w-6 text-mindease-green-dark" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Resources</h3>
                  <p className="text-gray-500 text-sm">Access helpful mental health resources</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/emergency" className="block">
            <Card className="card-hover h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="bg-mindease-peach-light p-3 rounded-full mb-4">
                    <Phone className="h-6 w-6 text-mindease-peach-dark" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Emergency Help</h3>
                  <p className="text-gray-500 text-sm">Get immediate support when needed</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500 mb-4">Need immediate support?</p>
          <Button asChild variant="outline" className="bg-mindease-peach text-white hover:bg-mindease-peach-dark">
            <Link to="/emergency">Access Emergency Resources</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
