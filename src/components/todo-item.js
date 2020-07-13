import React from 'react'
import '../App.css';

import { useRecoilState } from "recoil";
import { todoListAtom } from "../state/atom";


export default function TodoItem({item, index}) {
    const [todoList, setTodoList] = useRecoilState(todoListAtom);

    const doneClickEvent = () => {
        const todos = [...todoList];
        todos[index] = {todo: todos[index].todo, isDone: !todos[index].isDone}
        setTodoList(todos);
    } 
    const deleteClickEvent = () => {
        const todos = [...todoList];
        todos.splice(index, 1);
        setTodoList(todos);
    }

    return (
        <div className={`todo-item ${index === 0 && "list-top-item"} ${index === todoList.length - 1 && "list-bottom-item"}` } >
            <input name="isDone" type="checkbox" className="todo-checkbox" onClick={doneClickEvent} checked={item.isDone ? true : false}/>
            <span className="item-name" style={item.isDone ? {textDecoration: "line-through"}: {}}>{item.todo}</span>
            <div className="item-delete" onClick={deleteClickEvent}>Delete</div>
        </div>
    )
}
