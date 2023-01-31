import classes from './QuoteForm.module.css'
import Card from '../UI/Card'
import { Fragment, useRef } from 'react'
import { useState } from 'react'

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false)
  const authorInputRef = useRef()
  const textInputRef = useRef()

  const finishEnteringHandler = () => {
    setIsEntering(false)
  }
  const submitFormHandler = (event) => {
    event.preventDefault()
    const enteredAuthor = authorInputRef.current.value
    const enteredText = textInputRef.current.value

    props.onAddQuote({ author: enteredAuthor, text: enteredText })
  }
  const focusedFormHandler = () => {
    setIsEntering(true)
  }
  return (
    <Fragment>
      {isEntering && (
        <p>
          Are you sure you want to leave? All your entered data will be lost!
        </p>
      )}
      <Card>
        <form
          onFocus={focusedFormHandler}
          onSubmit={submitFormHandler}
          className={classes.form}
        >
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
            <button onClick={finishEnteringHandler} className='btn'>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  )
}

export default QuoteForm
