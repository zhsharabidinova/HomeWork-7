import React, {useState} from 'react';
import Header from './components/Header/Header.js'
import AddTask from './components/AddTask/AddTask.js'
import TodoList from'./components/TodoList/TodoList.js'


function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'first todo',
      status: false
    },
    {
      id: 2,
      title: 'second todo',
      status: false
    },
    {
      id: 3,
      title: 'third todo',
      status: false
    }
  ]);
  console.log(todo);
  return (
    <div className="App">
      <Header />
      <AddTask todo={todo} setTodo={setTodo} />
      <TodoList todo = {todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
