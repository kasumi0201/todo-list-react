import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 662,description: 'First', completed: true },
        { id: 663,description: 'Second', completed: false },
        { id: 664,description: 'Third', completed: true },
        { id: 665,description: 'Fourth', completed: false },
        { id: 666,description: 'Fifth', completed: true }
      ]
    };
  }

  handleToggle = (event) => {
    console.log(event.target);
  }

    render() {
    const items = this.state.items;
    return (
      <div>
        {items.map((item, index) => <TodoItem {...item} key={index} onToggle={this.handleToggle}/>
      )}
      </div>
    )
  }
}
