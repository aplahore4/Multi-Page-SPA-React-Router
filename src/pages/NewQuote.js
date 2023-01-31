import React from 'react'
import { useNavigate } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
  const status = 'completed'
  const navigate = useNavigate()
  const addQuoteHandler = (quoteData) => {
    navigate('/quotes')
  }
  return (
    <QuoteForm
      isLoading={status === 'pending'}
      onAddQuote={addQuoteHandler}
    ></QuoteForm>
  )
}

export default NewQuote
