import React from 'react'
import { useParams } from 'react-router-dom'

const QuoteDetail = () => {
  const { quoteId } = useParams()
  return <div>QuoteDetail {quoteId}</div>
}

export default QuoteDetail
