import React from 'react';
import TodoItem from './TodoItem'


class App extends React.Component{
constructor(){
  super()
  this.state = {items: [
    {description: 'First',completed: true},
    {description: 'Second',completed: false},
    {description: 'Third',completed: true},
    {description: 'Fourth',completed: false},
    {description: 'Fifth',completed: false}
]}
}
render(){
  const items = this.state.items;

  return(
<div className="App">
{
items.map((item,index)=>(
<TodoItem key={index}>
</TodoItem>
))
}
</div>
  )
}
}

export default App
