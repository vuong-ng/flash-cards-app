import React from 'react'
import Flashcard from './Flashcard';

export default function FlashcardList({ flashcards}) {
  return (
    <div className='card-grid'>
        {flashcards.map(flashcard => {
            return <Flashcard flashcard={flashcard} key={flashcard.id} /> 
            // key is for React not to re-render all flashcards unnecessarily
        })}
    </div>
  )
}
