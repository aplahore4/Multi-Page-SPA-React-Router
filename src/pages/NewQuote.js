import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'

import useHttp from '../hooks/use-http'
import { addQuote } from '../lib/api'

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote)

  const navigate = useNavigate()

  useEffect(() => {
    if (status === 'completed') {
      navigate('/quotes')
    }
  }, [navigate, status])

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData)
  }

  return (
    <QuoteForm
      isLoading={status === 'pending'}
      onAddQuote={addQuoteHandler}
    ></QuoteForm>
  )
}

export default NewQuote
