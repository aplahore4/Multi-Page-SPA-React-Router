import { Fragment, useEffect } from 'react'
import { Routes, Route, Link, useParams, useMatch } from 'react-router-dom'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'
import LoadingSpinner from '../components/UI/LoadingSpinner'

const QuoteDetail = () => {
  const path = '/quotes/:quoteId'
  const params = useParams()
  const match = useMatch(path)

  const { quoteId } = params

  const {
    sendRequest,
    data: loadedQuote,
    status,
    error,
  } = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return <p className='centered'>{error}</p>
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route
          path={path}
          element={
            <div className='centered'>
              <Link className='btn--flat' to={`${match.pathname}/comments`}>
                Load Comments
              </Link>
            </div>
          }
          exact
        />
        <Route path={`${path}/comments`} element={<Comments />} />
      </Routes>
    </Fragment>
  )
}

export default QuoteDetail
