import React from 'react'
import LoadingSpinner from '../UI/LoadingSpinner'
import NoQuotesFound from '../quotes/NoQuotesFound'
import QuoteList from '../quotes/QuoteList'
import { useState } from 'react'

const SAMPLE_QUOTES = [
  {
    key: '1',
    id: '1',
    author: 'Author - Asif',
    text: 'This is text',
  },
  {
    key: '2',
    id: '2',
    author: 'Author - Aslam',
    text: 'This is a text',
  },
  {
    key: '3',
    id: '3',
    author: 'Author - Zain',
    text: 'This is a text',
  },
]

const AllQuotes = () => {
  const [loadedQuotes, setLoadedQuotes] = useState(SAMPLE_QUOTES)

  const status = 'completed'
  const error = null

  if (status === 'pending') {
    return <LoadingSpinner />
  }

  if (error) {
    return <p className='centered focused'>{error}</p>
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />
  }

  return <QuoteList quotes={loadedQuotes} />
}

export default AllQuotes
