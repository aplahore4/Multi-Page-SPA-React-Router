import { Fragment, useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import Card from '../UI/Card'
import LoadingSpinner from '../UI/LoadingSpinner'
import classes from './QuoteForm.module.css'

const QuoteForm = (props) => {
  // const [isEntering, setIsEntering] = useState(false)
  // const [isBlocking, setIsBlocking] = useState(false)

  const authorInputRef = useRef()
  const textInputRef = useRef()

  // const navigate = useNavigate()

  // const finishEnteringHandler = () => {
  //   setIsEntering(false)
  // }

  function submitFormHandler(event) {
    event.preventDefault()
    const enteredAuthor = authorInputRef.current.value
    const enteredText = textInputRef.current.value

    props.onAddQuote({ author: enteredAuthor, text: enteredText })
  }
  // const formFocusedHandler = () => {
  //   setIsEntering(true)
  // }

  // const btnYesHandler = () => {
  //   setIsBlocking(false)
  //   // redirect
  // }

  // const btnNoHandler = () => {
  //   setIsEntering(false)
  // }

  return (
    <Fragment>
      {/* {isBlocking && isEntering && (
        <div className='centered'>
          Are you sure you want to leave? All your entered data will be lost!
          <button className='btn-small' onClick={btnYesHandler}>
            Yes
          </button>
          <button className='btn-small' onClick={btnNoHandler}>
            No
          </button>
        </div>
      )} */}
      <Card>
        <form
          // onFocus={formFocusedHandler}
          onSubmit={submitFormHandler}
          className={classes.form}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}
          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' name='author' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea
              name='textarea'
              id='text'
              rows='5'
              ref={textInputRef}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button
              // onClick={finishEnteringHandler}
              className='btn'
            >
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  )
}

export default QuoteForm
