
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Pencil, Trash2, Save, Plus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { getJournalEntries, saveJournalEntry, deleteJournalEntry, generateId, JournalEntry } from '@/utils/storage';
import { format } from 'date-fns';

const Journal = () => {
  const { toast } = useToast();
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [currentEntry, setCurrentEntry] = useState<JournalEntry | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  
  // Load journal entries on component mount
  useEffect(() => {
    const loadedEntries = getJournalEntries();
    setEntries(loadedEntries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
  }, []);
  
  const createNewEntry = () => {
    const newEntry: JournalEntry = {
      id: generateId(),
      date: new Date().toISOString(),
      content: '',
      title: 'Untitled Entry'
    };
    
    setCurrentEntry(newEntry);
    setIsEditing(true);
  };
  
  const editEntry = (entry: JournalEntry) => {
    setCurrentEntry(entry);
    setIsEditing(true);
  };
  
  const saveEntry = () => {
    if (!currentEntry) return;
    
    // Make sure we have content
    if (!currentEntry.content.trim()) {
      toast({
        title: "Cannot save empty entry",
        description: "Please write something before saving.",
        variant: "destructive"
      });
      return;
    }
    
    saveJournalEntry(currentEntry);
    
    // Refresh entries list
    const updatedEntries = getJournalEntries();
    setEntries(updatedEntries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    
    setIsEditing(false);
    
    toast({
      title: "Journal saved",
      description: "Your entry has been saved successfully."
    });
  };
  
  const handleDeleteEntry = (id: string) => {
    deleteJournalEntry(id);
    
    // Refresh entries list
    const updatedEntries = getJournalEntries();
    setEntries(updatedEntries);
    
    // If we're currently editing this entry, close the editor
    if (currentEntry && currentEntry.id === id) {
      setCurrentEntry(null);
      setIsEditing(false);
    }
    
    toast({
      title: "Entry deleted",
      description: "Journal entry has been removed."
    });
  };
  
  return (
    <Layout>
      <div className="page-container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-mindease-purple-dark">Journal</h1>
            <p className="text-gray-600">Write down your thoughts and feelings</p>
          </div>
          <Button onClick={createNewEntry} className="bg-mindease-purple hover:bg-mindease-purple-dark">
            <Plus className="h-4 w-4 mr-2" /> New Entry
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Journal entries list */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xl font-semibold mb-4 text-mindease-purple">Your Entries</h2>
            
            {entries.length === 0 ? (
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <p className="text-center text-gray-500">No journal entries yet.</p>
                  <Button onClick={createNewEntry} variant="outline" className="mt-4 w-full">
                    Write your first entry
                  </Button>
                </CardContent>
              </Card>
            ) : (
              entries.map(entry => (
                <Card 
                  key={entry.id} 
                  className={`transition-all cursor-pointer hover:shadow-md ${
                    currentEntry?.id === entry.id ? 'border-mindease-purple' : ''
                  }`}
                  onClick={() => editEntry(entry)}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{entry.title || 'Untitled Entry'}</CardTitle>
                    <CardDescription>
                      {format(new Date(entry.date), 'PPP')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-gray-600 truncate">
                      {entry.content}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 ml-auto"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteEntry(entry.id);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
          
          {/* Journal editor */}
          <div className="lg:col-span-2">
            <Card className="glass-card h-full">
              {isEditing && currentEntry ? (
                <>
                  <CardHeader>
                    <Input
                      value={currentEntry.title || ''}
                      onChange={(e) => setCurrentEntry({...currentEntry, title: e.target.value})}
                      placeholder="Entry Title"
                      className="text-xl font-medium border-none shadow-none focus-visible:ring-0 px-0"
                    />
                    <CardDescription>
                      {format(new Date(currentEntry.date), 'PPP p')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={currentEntry.content}
                      onChange={(e) => setCurrentEntry({...currentEntry, content: e.target.value})}
                      placeholder="Write your thoughts here..."
                      className="min-h-[300px] focus-visible:ring-mindease-purple"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-end space-x-2">
                    <Button 
                      variant="ghost" 
                      onClick={() => {
                        setIsEditing(false);
                        // If this was a new entry that wasn't saved, remove it from current editing
                        if (!entries.find(e => e.id === currentEntry.id)) {
                          setCurrentEntry(null);
                        }
                      }}
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={saveEntry}
                      className="bg-mindease-purple hover:bg-mindease-purple-dark"
                    >
                      <Save className="h-4 w-4 mr-2" /> Save
                    </Button>
                  </CardFooter>
                </>
              ) : (
                <CardContent className="flex flex-col items-center justify-center h-[400px] text-center p-6">
                  <Pencil className="h-12 w-12 text-mindease-purple-light mb-4" />
                  <h3 className="text-xl font-medium mb-2">Your Private Journal</h3>
                  <p className="text-gray-500 mb-6 max-w-md">
                    This is your personal safe space to express your thoughts and feelings. Your entries are stored locally on your device only.
                  </p>
                  <Button onClick={createNewEntry} className="bg-mindease-purple hover:bg-mindease-purple-dark">
                    <Plus className="h-4 w-4 mr-2" /> Create New Entry
                  </Button>
                </CardContent>
              )}
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Journal;
