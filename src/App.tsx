import Todos from './components/Todos'
import Todo from './models/todo'
import './App.css'

function App() {
  const todos = [new Todo('買東西'), new Todo('看書'), new Todo('寫作業')]
  return (
    <div>
      <Todos items={todos} />
    </div>
  )
}

export default App
