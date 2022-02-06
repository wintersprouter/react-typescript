import React, { useRef } from 'react'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = props => {
  const todoTextInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = todoTextInputRef.current!.value
    /**
     * * ?. enteredText代表value type 可能是 string || null
     * * !. enteredText代表value type 必定是 string 不會有 null 的 type
     * */
    if (enteredText.trim().length === 0) {
      //throw an error
      return
    }
    props.onAddTodo(enteredText)
  }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  )
}
export default NewTodo
