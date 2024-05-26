import './App.css';
import PlayersCount from "./components/playersCount";
import MostGoals from "./components/mostGoals";
import Players from "./components/Players";
import CustomTodo from "./components/customTodo";
import Counter1 from "./components/counter1";
import TodoList from "./components/todoList";

function App() {
  return (
    <div className="App">
        {/*<Players/>*/}
        {/*<PlayersCount/>*/}
        {/*<MostGoals/>*/}
        <CustomTodo/>
        {/*<Counter1/>*/}
        {/*<TodoList isBoolean = {true}/>*/}
    </div>
  );
}
export default App;
