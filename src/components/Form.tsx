import { useAddTodoMutation } from '@/services/todos'

import Button from './Button'

import { useState } from 'react'

const Form: React.FunctionComponent = () => {
  const [task, setTask] = useState<string>('')

  const [addTodo] = useAddTodoMutation()

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addTodo({
      id: Date.now(),
      task,
      completed: false
    })

    setTask('')
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type='text'
        className='border-2 border-sky-300 mt-8 px-4 py-2 w-full outline-none'
      />
      <Button variant='primary' className='mt-4'>
        Add Task
      </Button>
    </form>
  )
}

export default Form
