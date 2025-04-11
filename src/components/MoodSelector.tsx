
import React, { useState, useEffect } from 'react';
import { Smile, Meh, Frown, FrownOpen, SmileOpen } from 'lucide-react';
import { saveMoodEntry, getTodaysMoodEntry, MoodEntry } from '@/utils/storage';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const MoodSelector: React.FC = () => {
  const { toast } = useToast();
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState('');
  const [saved, setSaved] = useState(false);
  
  // Mood options
  const moods = [
    { value: 1, icon: <FrownOpen size={32} />, label: 'Very Bad' },
    { value: 2, icon: <Frown size={32} />, label: 'Bad' },
    { value: 3, icon: <Meh size={32} />, label: 'Okay' },
    { value: 4, icon: <Smile size={32} />, label: 'Good' },
    { value: 5, icon: <SmileOpen size={32} />, label: 'Great' }
  ];
  
  // Check if user already recorded mood today
  useEffect(() => {
    const todaysMood = getTodaysMoodEntry();
    if (todaysMood) {
      setSelectedMood(todaysMood.mood);
      setNote(todaysMood.note || '');
      setSaved(true);
    }
  }, []);
  
  const handleSaveMood = () => {
    if (selectedMood === null) return;
    
    const entry: MoodEntry = {
      date: new Date().toISOString(),
      mood: selectedMood,
      note: note.trim() || undefined
    };
    
    saveMoodEntry(entry);
    setSaved(true);
    
    toast({
      title: "Mood saved",
      description: "Your mood has been recorded for today.",
    });
  };
  
  const handleMoodChange = (mood: number) => {
    setSelectedMood(mood);
    setSaved(false);
  };
  
  return (
    <div className="glass-card p-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4 text-mindease-blue-dark">How are you feeling today?</h2>
      
      <div className="flex justify-between mb-6">
        {moods.map((mood) => (
          <button
            key={mood.value}
            onClick={() => handleMoodChange(mood.value)}
            className={`flex flex-col items-center p-3 rounded-xl transition-all ${
              selectedMood === mood.value
                ? 'bg-mindease-blue-light text-mindease-blue-dark scale-110'
                : 'hover:bg-mindease-gray-light text-gray-500'
            }`}
          >
            {mood.icon}
            <span className="mt-2 text-sm">{mood.label}</span>
          </button>
        ))}
      </div>
      
      <div className="mb-4">
        <label htmlFor="mood-note" className="block text-sm font-medium text-gray-700 mb-1">
          Add a note (optional)
        </label>
        <Textarea
          id="mood-note"
          placeholder="What's on your mind today?"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
            if (saved) setSaved(false);
          }}
          className="min-h-[80px]"
        />
      </div>
      
      <Button
        onClick={handleSaveMood}
        disabled={selectedMood === null}
        className={`w-full ${saved ? 'bg-green-500 hover:bg-green-600' : 'bg-mindease-blue hover:bg-mindease-blue-dark'}`}
      >
        {saved ? 'Updated' : 'Save Mood'}
      </Button>
    </div>
  );
};

export default MoodSelector;
