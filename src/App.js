import React, { useState } from 'react';
import AddArea from './component/addArea';
import DragArea from './component/dragArea';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const getValue = (value) => {
    let arr = [...todoList];
    arr.push(value);
    setTodoList(arr);
  }
  
  const deleteItem = (index) => {
    let arr = [...todoList];
    arr.splice(index, 1);
    setTodoList(arr);
  }

  const selectedItem = (index) => {
    console.log(index);
    let arr = [...todoList];
    arr[index].select = !arr[index].select;
    setTodoList(arr);
  }

  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid lightgray',
          margin: '10px'
        }}
      >
        <AddArea getvalue={getValue}></AddArea>
        <DragArea todoList={todoList} deleteItem={deleteItem} selectedItem={selectedItem}></DragArea>
      </div>
    </div>
  );
}

export default App;
