import Form from '@/components/Form'
import TodoList from '@/components/TodoList'

const App: React.FunctionComponent = () => {
  return (
    <>
      <header className='max-w-2xl mx-auto w-11/12'>
        <h1 className='text-center text-3xl bg-gradient-to-r from-sky-400 text-transparent font-semibold to-sky-800 bg-clip-text mt-4'>
          RTK Query
        </h1>
      </header>
      <main className='max-w-2xl mx-auto w-11/12'>
        <Form />
        <TodoList />
      </main>
    </>
  )
}

export default App
