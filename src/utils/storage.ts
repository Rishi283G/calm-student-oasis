
// Types for our data
export interface MoodEntry {
  date: string; // ISO date string
  mood: number; // 1-5 scale
  note?: string;
}

export interface JournalEntry {
  id: string;
  date: string; // ISO date string
  content: string;
  title?: string;
}

// Storage keys
const STORAGE_KEYS = {
  MOOD_ENTRIES: 'mindease_mood_entries',
  JOURNAL_ENTRIES: 'mindease_journal_entries',
};

// Mood tracking functions
export const saveMoodEntry = (entry: MoodEntry): void => {
  const entries = getMoodEntries();
  
  // Check if an entry for this date already exists
  const existingIndex = entries.findIndex(e => e.date.split('T')[0] === entry.date.split('T')[0]);
  
  if (existingIndex >= 0) {
    // Update existing entry
    entries[existingIndex] = entry;
  } else {
    // Add new entry
    entries.push(entry);
  }
  
  localStorage.setItem(STORAGE_KEYS.MOOD_ENTRIES, JSON.stringify(entries));
};

export const getMoodEntries = (): MoodEntry[] => {
  const entriesJson = localStorage.getItem(STORAGE_KEYS.MOOD_ENTRIES);
  return entriesJson ? JSON.parse(entriesJson) : [];
};

export const getTodaysMoodEntry = (): MoodEntry | undefined => {
  const today = new Date().toISOString().split('T')[0];
  return getMoodEntries().find(entry => entry.date.split('T')[0] === today);
};

export const getLastNDaysMoodEntries = (days: number): MoodEntry[] => {
  const entries = getMoodEntries();
  const now = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);
  
  return entries
    .filter(entry => {
      const entryDate = new Date(entry.date);
      return entryDate >= startDate && entryDate <= now;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

// Journal functions
export const saveJournalEntry = (entry: JournalEntry): void => {
  const entries = getJournalEntries();
  
  const existingIndex = entries.findIndex(e => e.id === entry.id);
  
  if (existingIndex >= 0) {
    // Update existing entry
    entries[existingIndex] = entry;
  } else {
    // Add new entry
    entries.push(entry);
  }
  
  localStorage.setItem(STORAGE_KEYS.JOURNAL_ENTRIES, JSON.stringify(entries));
};

export const getJournalEntries = (): JournalEntry[] => {
  const entriesJson = localStorage.getItem(STORAGE_KEYS.JOURNAL_ENTRIES);
  return entriesJson ? JSON.parse(entriesJson) : [];
};

export const getJournalEntryById = (id: string): JournalEntry | undefined => {
  return getJournalEntries().find(entry => entry.id === id);
};

export const deleteJournalEntry = (id: string): void => {
  let entries = getJournalEntries();
  entries = entries.filter(entry => entry.id !== id);
  localStorage.setItem(STORAGE_KEYS.JOURNAL_ENTRIES, JSON.stringify(entries));
};

// Helper for generating unique IDs
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};
