
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PhoneCall, MessageCircle, ExternalLink, AlertTriangle, HelpCircle, Globe } from 'lucide-react';

const Emergency = () => {
  return (
    <Layout>
      <div className="page-container">
        <Alert className="mb-8 border-red-300 bg-red-50">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <AlertTitle className="text-red-600 text-lg">Emergency Resources</AlertTitle>
          <AlertDescription className="text-red-800">
            If you're experiencing a mental health emergency, please reach out to one of the crisis resources below.
            <strong className="block mt-1">If you or someone else is in immediate danger, call emergency services (911 in the US) immediately.</strong>
          </AlertDescription>
        </Alert>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-mindease-peach-light border-mindease-peach">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PhoneCall className="h-5 w-5 mr-2 text-mindease-peach-dark" />
                Crisis Hotlines
              </CardTitle>
              <CardDescription>
                24/7 phone support for immediate help
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-b border-mindease-peach pb-3">
                <h3 className="font-medium">National Suicide Prevention Lifeline</h3>
                <p className="text-gray-700 mb-1">Call or text 988</p>
                <p className="text-sm text-gray-500">24/7, free and confidential support for people in distress</p>
                <div className="mt-2">
                  <Button asChild variant="outline" size="sm" className="text-mindease-peach-dark border-mindease-peach-dark hover:bg-mindease-peach-light hover:text-mindease-peach-dark">
                    <a href="tel:988" className="flex items-center">
                      <PhoneCall className="h-3 w-3 mr-1" /> Call 988
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="border-b border-mindease-peach pb-3">
                <h3 className="font-medium">Crisis Text Line</h3>
                <p className="text-gray-700 mb-1">Text HOME to 741741</p>
                <p className="text-sm text-gray-500">24/7 text support with a trained crisis counselor</p>
                <div className="mt-2">
                  <Button asChild variant="outline" size="sm" className="text-mindease-peach-dark border-mindease-peach-dark hover:bg-mindease-peach-light hover:text-mindease-peach-dark">
                    <a href="sms:741741?&body=HOME" className="flex items-center">
                      <MessageCircle className="h-3 w-3 mr-1" /> Text 741741
                    </a>
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium">Trevor Project (LGBTQ+ Youth)</h3>
                <p className="text-gray-700 mb-1">Call 1-866-488-7386</p>
                <p className="text-sm text-gray-500">Crisis intervention and suicide prevention for LGBTQ+ young people</p>
                <div className="mt-2">
                  <Button asChild variant="outline" size="sm" className="text-mindease-peach-dark border-mindease-peach-dark hover:bg-mindease-peach-light hover:text-mindease-peach-dark">
                    <a href="tel:18664887386" className="flex items-center">
                      <PhoneCall className="h-3 w-3 mr-1" /> Call Hotline
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-mindease-blue bg-mindease-blue-light/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-mindease-blue-dark" />
                Online Resources
              </CardTitle>
              <CardDescription>
                Websites with immediate help and resources
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-b border-mindease-blue/30 pb-3">
                <h3 className="font-medium">National Alliance on Mental Illness (NAMI)</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Information, resource referrals and support for people living with mental health conditions.
                </p>
                <Button asChild variant="outline" size="sm" className="text-mindease-blue-dark border-mindease-blue hover:bg-mindease-blue-light hover:text-mindease-blue-dark">
                  <a href="https://www.nami.org/help" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ExternalLink className="h-3 w-3 mr-1" /> Visit Website
                  </a>
                </Button>
              </div>
              
              <div className="border-b border-mindease-blue/30 pb-3">
                <h3 className="font-medium">ULifeline</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Mental health resources for college students, including a self-evaluation tool and campus-specific resources.
                </p>
                <Button asChild variant="outline" size="sm" className="text-mindease-blue-dark border-mindease-blue hover:bg-mindease-blue-light hover:text-mindease-blue-dark">
                  <a href="https://www.ulifeline.org/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ExternalLink className="h-3 w-3 mr-1" /> Visit Website
                  </a>
                </Button>
              </div>
              
              <div>
                <h3 className="font-medium">Mental Health America</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Tools, screening, and resources to support mental health.
                </p>
                <Button asChild variant="outline" size="sm" className="text-mindease-blue-dark border-mindease-blue hover:bg-mindease-blue-light hover:text-mindease-blue-dark">
                  <a href="https://mhanational.org/finding-help" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ExternalLink className="h-3 w-3 mr-1" /> Visit Website
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              Campus Resources
            </CardTitle>
            <CardDescription>
              Support services available at most colleges and universities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="pb-3 border-b">
                <h3 className="font-medium">University Counseling Center</h3>
                <p className="text-gray-600">
                  Most colleges offer free or low-cost counseling services to enrolled students. 
                  These services typically include individual therapy, group therapy, and crisis intervention.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  <strong>How to access:</strong> Check your university's website or visit the student services/health center.
                </p>
              </div>
              
              <div className="pb-3 border-b">
                <h3 className="font-medium">Resident Advisors (RAs)</h3>
                <p className="text-gray-600">
                  If you live in campus housing, RAs are trained to handle crisis situations and can 
                  connect you with appropriate resources.
                </p>
              </div>
              
              <div className="pb-3 border-b">
                <h3 className="font-medium">Student Health Center</h3>
                <p className="text-gray-600">
                  Many campus health centers provide mental health assessments and can refer you to 
                  appropriate resources or prescribe medication if needed.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium">Dean of Students Office</h3>
                <p className="text-gray-600">
                  This office can help coordinate support services, communicate with professors about 
                  absences due to mental health concerns, and connect you with campus resources.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Self-Care During a Crisis</CardTitle>
            <CardDescription>
              Immediate steps you can take while waiting for help
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-medium">Breathing Exercise</h3>
                <ol className="space-y-2 text-gray-700 list-decimal pl-5">
                  <li>Find a quiet place to sit or lie down</li>
                  <li>Place one hand on your chest and the other on your stomach</li>
                  <li>Breathe in slowly through your nose for 4 seconds</li>
                  <li>Hold your breath for 2 seconds</li>
                  <li>Exhale slowly through your mouth for 6 seconds</li>
                  <li>Repeat for 5-10 cycles</li>
                </ol>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium">Grounding Technique</h3>
                <p className="text-gray-700">
                  Use the 5-4-3-2-1 method to reconnect with your surroundings:
                </p>
                <ul className="space-y-1 text-gray-700 list-disc pl-5">
                  <li><strong>5:</strong> Name five things you can see</li>
                  <li><strong>4:</strong> Name four things you can touch/feel</li>
                  <li><strong>3:</strong> Name three things you can hear</li>
                  <li><strong>2:</strong> Name two things you can smell</li>
                  <li><strong>1:</strong> Name one thing you can taste</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-mindease-gray-light rounded-lg">
              <h3 className="font-medium mb-2">Create a Safety Plan</h3>
              <p className="text-gray-700 mb-3">
                Having a personal safety plan can help during moments of crisis. Consider including:
              </p>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Contact information for trusted friends, family, and professionals</li>
                <li>Personal warning signs that indicate you need help</li>
                <li>Coping strategies that have worked for you in the past</li>
                <li>Places that provide a safe, calming environment</li>
                <li>A list of reasons to keep going</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Emergency;
