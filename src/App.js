import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { description: 'First', completed: true },
        {description: 'Second', completed: false },
        { description: 'Third', completed: true },
        { description: 'Fourth', completed: false },
        { description: 'Fifth', completed: true }
      ]
    };
  }

  handleToggle = (index) => {
    console.log(index);
        this.setState((prevState)=>{
      let items = prevState.items;
    let newItem = Object.assign({},items[index],{completed: !items[index].completed})
      items[index].completed =! items[index].completed;
      return {items: items}

    })
  }

  render() {
    const items = this.state.items;
    return (
      <div>
      {items.map((item, index) =>
        <TodoItem {...item} key={index} onToggle={()=> this.handleToggle(index)}/>
      )}
      </div>
    )
  }
}
