
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Coffee, Moon, Brain, Dumbbell, Heart } from 'lucide-react';

const Resources = () => {
  return (
    <Layout>
      <div className="page-container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-mindease-green-dark">Mental Health Resources</h1>
          <p className="text-gray-600">Helpful information and resources for students</p>
        </div>
        
        <Tabs defaultValue="coping">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            <TabsTrigger value="coping" className="data-[state=active]:bg-mindease-green-light data-[state=active]:text-mindease-green-dark">Coping Strategies</TabsTrigger>
            <TabsTrigger value="self-care" className="data-[state=active]:bg-mindease-green-light data-[state=active]:text-mindease-green-dark">Self-Care</TabsTrigger>
            <TabsTrigger value="academic" className="data-[state=active]:bg-mindease-green-light data-[state=active]:text-mindease-green-dark">Academic Stress</TabsTrigger>
            <TabsTrigger value="resources" className="data-[state=active]:bg-mindease-green-light data-[state=active]:text-mindease-green-dark">External Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="coping" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Healthy Coping Strategies</CardTitle>
                <CardDescription>
                  Techniques to help manage stress and difficult emotions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-mindease-green" />
                    Deep Breathing Exercises
                  </h3>
                  <p className="text-gray-600 pl-7">
                    Practice the 4-7-8 technique: Inhale for 4 seconds, hold your breath for 7 seconds, 
                    and exhale for 8 seconds. Repeat this cycle 3-4 times whenever you feel stressed.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-mindease-green" />
                    Grounding Techniques
                  </h3>
                  <p className="text-gray-600 pl-7">
                    Use the 5-4-3-2-1 method: Acknowledge 5 things you can see, 4 things you can touch, 
                    3 things you can hear, 2 things you can smell, and 1 thing you can taste.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-mindease-green" />
                    Journaling
                  </h3>
                  <p className="text-gray-600 pl-7">
                    Write down your thoughts and feelings to process them. Try to identify patterns in your thinking
                    and challenge negative thoughts.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-mindease-green" />
                    Progressive Muscle Relaxation
                  </h3>
                  <p className="text-gray-600 pl-7">
                    Tense and then release each muscle group in your body, starting from your toes and 
                    working up to your head. Hold each tension for 5 seconds before releasing.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Mindfulness Practices</CardTitle>
                <CardDescription>
                  Simple mindfulness techniques for everyday use
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Body Scan Meditation</h3>
                  <p className="text-gray-600">
                    Take 5-10 minutes to mentally scan your body from head to toe, noticing any 
                    sensations without judgment. This helps reconnect with your physical self and 
                    reduce tension.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Mindful Walking</h3>
                  <p className="text-gray-600">
                    Take a short walk while focusing completely on the experience of walking. 
                    Notice the sensation of your feet touching the ground, the movement of your body, 
                    and the environment around you.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Mindful Eating</h3>
                  <p className="text-gray-600">
                    Practice eating one meal a day without distractions. Focus on the flavors, 
                    textures, and sensations of eating. This helps build awareness and can improve 
                    your relationship with food.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="self-care" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Self-Care Essentials</CardTitle>
                <CardDescription>
                  Fundamental self-care practices for mental wellbeing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium flex items-center">
                    <Moon className="h-5 w-5 mr-2 text-mindease-purple" />
                    Sleep Hygiene
                  </h3>
                  <p className="text-gray-600 pl-7">
                    Aim for 7-9 hours of quality sleep. Establish a consistent sleep schedule, avoid 
                    screens before bed, and create a comfortable sleep environment.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium flex items-center">
                    <Dumbbell className="h-5 w-5 mr-2 text-mindease-purple" />
                    Physical Activity
                  </h3>
                  <p className="text-gray-600 pl-7">
                    Even light exercise like walking or stretching for 30 minutes daily can significantly
                    improve your mood and reduce stress levels.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium flex items-center">
                    <Coffee className="h-5 w-5 mr-2 text-mindease-purple" />
                    Balanced Nutrition
                  </h3>
                  <p className="text-gray-600 pl-7">
                    Eat regular meals, stay hydrated, and be mindful of caffeine and sugar intake as they
                    can affect your mood and energy levels.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-mindease-purple" />
                    Social Connection
                  </h3>
                  <p className="text-gray-600 pl-7">
                    Maintain relationships with friends, family, or peers. Even brief social interactions 
                    can improve your mood and provide emotional support.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Self-Care Activities</CardTitle>
                <CardDescription>
                  Simple activities to incorporate into your routine
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-mindease-purple-light/40 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">For Busy Days</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Take a 5-minute stretch break</li>
                      <li>• Practice deep breathing for 2 minutes</li>
                      <li>• Write down three things you're grateful for</li>
                      <li>• Listen to a favorite song</li>
                      <li>• Step outside for fresh air</li>
                    </ul>
                  </div>
                  
                  <div className="bg-mindease-green-light/40 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">When You Have More Time</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Take a nature walk</li>
                      <li>• Call a friend or family member</li>
                      <li>• Practice a hobby you enjoy</li>
                      <li>• Take a relaxing bath or shower</li>
                      <li>• Try a 15-minute guided meditation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="academic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Managing Academic Stress</CardTitle>
                <CardDescription>
                  Strategies to cope with academic pressures
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Time Management</h3>
                  <p className="text-gray-600">
                    Break large assignments into smaller tasks. Use a planner or digital calendar to schedule 
                    study sessions and deadlines. The Pomodoro technique (25 minutes of focused work followed 
                    by a 5-minute break) can help maintain productivity.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Setting Realistic Goals</h3>
                  <p className="text-gray-600">
                    Set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) for your academics.
                    Remember that perfection is not the goal—growth and learning are.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Study Environment</h3>
                  <p className="text-gray-600">
                    Create a dedicated study space that's comfortable and free from distractions. Ensure you have 
                    good lighting, a comfortable chair, and all necessary materials nearby.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Seeking Help</h3>
                  <p className="text-gray-600">
                    Don't hesitate to utilize academic resources like tutoring centers, professor office hours, 
                    or study groups. Most universities also offer academic coaching services.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Exam Anxiety Tips</CardTitle>
                <CardDescription>
                  Techniques to manage test anxiety
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Before the Exam</h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Prepare thoroughly but avoid cramming the night before</li>
                      <li>Get a good night's sleep (7-9 hours)</li>
                      <li>Eat a balanced meal with protein and complex carbohydrates</li>
                      <li>Arrive early to the exam venue to settle your nerves</li>
                      <li>Practice visualization of successfully completing the exam</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">During the Exam</h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Start with a quick breathing exercise (4-7-8 technique)</li>
                      <li>Read all instructions carefully</li>
                      <li>Begin with questions you're confident about</li>
                      <li>If you feel anxious, pause and take a few deep breaths</li>
                      <li>Use positive self-talk: "I've prepared for this" or "I'm doing my best"</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">After the Exam</h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Avoid immediately analyzing or discussing all your answers</li>
                      <li>Reward yourself for completing the exam, regardless of the outcome</li>
                      <li>Take time to decompress before focusing on the next challenge</li>
                      <li>Reflect on effective study strategies for future exams</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Helpful Websites & Apps</CardTitle>
                <CardDescription>
                  Digital resources for mental health support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">Mental Health Websites</h3>
                    
                    <div className="space-y-1">
                      <h4 className="font-medium">Active Minds</h4>
                      <p className="text-gray-600 text-sm">Resources for student mental health and campus programs</p>
                      <Button variant="link" className="p-0 h-auto text-mindease-blue" asChild>
                        <a href="https://www.activeminds.org/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          Visit <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="font-medium">ULifeline</h4>
                      <p className="text-gray-600 text-sm">Online resource for college mental health</p>
                      <Button variant="link" className="p-0 h-auto text-mindease-blue" asChild>
                        <a href="https://www.ulifeline.org/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          Visit <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="font-medium">National Alliance on Mental Illness (NAMI)</h4>
                      <p className="text-gray-600 text-sm">Mental health resources and support groups</p>
                      <Button variant="link" className="p-0 h-auto text-mindease-blue" asChild>
                        <a href="https://www.nami.org/Your-Journey/Teens-Young-Adults" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          Visit <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">Mobile Apps</h3>
                    
                    <div className="space-y-1">
                      <h4 className="font-medium">Headspace</h4>
                      <p className="text-gray-600 text-sm">Guided meditation and mindfulness exercises</p>
                      <div className="flex space-x-2">
                        <Button variant="link" className="p-0 h-auto text-mindease-blue" asChild>
                          <a href="https://www.headspace.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            Website <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="font-medium">Calm</h4>
                      <p className="text-gray-600 text-sm">Sleep stories, meditation, and relaxing music</p>
                      <Button variant="link" className="p-0 h-auto text-mindease-blue" asChild>
                        <a href="https://www.calm.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          Website <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="font-medium">Woebot</h4>
                      <p className="text-gray-600 text-sm">AI-powered chatbot for cognitive behavioral therapy</p>
                      <Button variant="link" className="p-0 h-auto text-mindease-blue" asChild>
                        <a href="https://woebothealth.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          Website <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Books on Mental Health</CardTitle>
                <CardDescription>
                  Recommended reading for students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h4 className="font-medium">The Anxiety and Phobia Workbook</h4>
                      <p className="text-gray-600 text-sm">By Edmund J. Bourne, PhD</p>
                      <p className="text-gray-600 text-sm">A comprehensive guide for managing anxiety with practical exercises.</p>
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="font-medium">Why Has Nobody Told Me This Before?</h4>
                      <p className="text-gray-600 text-sm">By Dr. Julie Smith</p>
                      <p className="text-gray-600 text-sm">Simple, accessible strategies for managing emotions and building resilience.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h4 className="font-medium">Atomic Habits</h4>
                      <p className="text-gray-600 text-sm">By James Clear</p>
                      <p className="text-gray-600 text-sm">Building small habits that lead to remarkable results, perfect for developing consistent self-care.</p>
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="font-medium">Maybe You Should Talk to Someone</h4>
                      <p className="text-gray-600 text-sm">By Lori Gottlieb</p>
                      <p className="text-gray-600 text-sm">A therapist's memoir that destigmatizes therapy and mental health challenges.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Resources;
