import {
  useChangeStatusTodoMutation,
  useDeleteTodoMutation,
  useGetTodoQuery
} from '@/services/todos'

import Button from './Button'

import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai'

const TodoList: React.FunctionComponent = () => {
  const { data, error, isLoading } = useGetTodoQuery()
  const [deleteTodo] = useDeleteTodoMutation()
  const [changeStatusTodo] = useChangeStatusTodoMutation()

  return error ? (
    <p className='mt-8 text-red-500 text-center'>There is an error</p>
  ) : isLoading ? (
    <LoadingIcon className='mt-8 animate-spin text-4xl mx-auto' />
  ) : data && data.length ? (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8'>
      {data.map((todo) => (
        <div className='border border-slate-300 p-4' key={todo.id}>
          <h4>{todo.task}</h4>
          <Button variant='success' className='mt-4 mr-2' onClick={() => changeStatusTodo(todo)}>
            {todo.completed ? 'Uncompleted' : 'Completed'}
          </Button>
          <Button variant='danger' onClick={() => deleteTodo(todo.id)} className='mt-4'>
            Delete
          </Button>
        </div>
      ))}
    </div>
  ) : (
    <p className='mt-8 text-center'>No assignments have been made yet</p>
  )
}

export default TodoList
