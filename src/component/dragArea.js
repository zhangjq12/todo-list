import React, { useEffect, useState } from 'react';
import TodoListItem from './todoListItem';

const DragArea = ({props, todoList, deleteItem, selectedItem}) => {
  const [list, setList] = useState([]);

  // const getList = useCallback(() => {
  //   setList(todoList);
  // }, [todoList])
  const deleteItemCallback = (index) => {
    deleteItem(index);
  }

  const selected = (key) => {
    selectedItem(key);
  }

  useEffect(() => {
    // getList();
    setList(todoList);
  }, [todoList])

  const renderItem = () => {
    return list.map((item, index) => {
      return <TodoListItem key={index} item={item} selected={() => selected(index)} deleteItemCallback={() => deleteItemCallback(index)}/>
    })
  }

  return (
    <div
      {...props}
      style={{
        width: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <div
        style={{
          margin: '20px 20px',
          boxShadow: '2px 2px 1px lightgray',
          border: '1px solid lightgray'
        }}
      >
        {renderItem()}
      </div>
    </div>
  )
}

export default DragArea