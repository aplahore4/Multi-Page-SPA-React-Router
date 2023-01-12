import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AllQuotes from './pages/AllQuotes'
import NewQuote from './pages/NewQuote'
import NotFound from './pages/NotFound'
import QuoteDetail from './pages/QuoteDetail'

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path='/'
          element={<AllQuotes />}
          render={() => <Navigate to='/quotes' replace />}
          end
        />
        <Route path='/quotes' element={<AllQuotes />} end />
        <Route path='/quotes/:quoteId' element={<QuoteDetail />} />
        <Route path='/new-quote' element={<NewQuote />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
