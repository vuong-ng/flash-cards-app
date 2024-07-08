import React, {useState, useEffect} from 'react';
// useEffect to make sure calling API as soon as the page loads
import FlashcardList from './FlashcardList';
import './app.css'
import axios from 'axios'

function App() {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
    
    useEffect(() => {
      axios
        .get('https://opentdb.com/api.php?amount=10')
        .then(res => {
          setFlashcards(res.data.results.map((questionItem,index) => {
            const answer = decodeString(questionItem.correct_answer)
            const options = [...questionItem.incorrect_answers.map(a => decodeString(a)), 
              answer]
            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - .5)
            }
          }))
        })
    },[])
    function decodeString(str) {
      const textArea = document.createElement('textarea')
      textArea.innerHTML=str
      return textArea.value
    }

  return (
    <div className='container'>
    <FlashcardList flashcards={flashcards} />
    </div>
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

