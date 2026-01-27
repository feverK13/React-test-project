import { useEffect, useState } from 'react'

import { quotes } from '../../data/quotes'
import './QuoteBlock.css'

export default function QuoteBlock() {
  const [quoteId, setQuoteId] = useState(0)
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuoteId(randomIndex)
  }, [])

  let currentQuote = quotes[quoteId]

  return (
    <div className='quoteBlock'>
      <p className='quoteText'>“{currentQuote.text}”</p>
      <p className='quoteAuthor'>- {currentQuote.author}</p>
    </div>
  )
}
