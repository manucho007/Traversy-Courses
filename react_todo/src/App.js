import React from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Finish the crash course",
        completed: true
      },
      {
        id: 3,
        title: "Really finish the course",
        completed: false
      }
    ]
  };
  // Toggle Completes
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  render() {
    // console.log(this.state.todos);
    return (
      <div className='App'>
        {/* We pass the todos as a props*/}
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
