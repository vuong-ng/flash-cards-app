import React, {useState} from 'react';
import FlashcardList from './FlashcardList';

function App() {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  return (
    <FlashcardList flashcards={flashcards} />
  );
}

export default App;
 
const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: "Question 1 ?",
        answer: "4",
        options: [
        '2',
        '3',
        '4',
        '5',]
    },
    {
        id: 2,
        question: "Question 2 ?",
        answer: "Answer",
        options: [
        'Opt 1',
        'Opt 2',
        'Opt 3',
        'Opt 4',]
    }
]

