import { useEffect, useState } from 'react'

import { quotes } from '../../data/quotes'
import styles from './QuoteBlock.module.css'

export default function QuoteBlock() {
  const [quoteId, setQuoteId] = useState(0)
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuoteId(randomIndex)
  }, [])

  let currentQuote = quotes[quoteId]

  return (
    <div className={styles.quoteBlock}>
      <p className={styles.quoteText}>“{currentQuote.text}”</p>
      <p className={styles.quoteAuthor}>— {currentQuote.author}</p>
    </div>
  )
}
