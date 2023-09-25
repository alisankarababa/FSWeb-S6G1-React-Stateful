import { func } from 'prop-types';
import React, { useState } from 'react';

const taskList = [];
let nextId = 0;

export default function Todos()
{   
    // const [nextId, setNextId] = useState(0);
    const [todoList, setTodoList] = useState(taskList);
    const [inputText, setInputText] = useState("");

    function changeInputText(e)
    {
        setInputText(e.target.value);
    }

    function addTask()
    {
        let task = {id: nextId++, text: inputText};
        // setNextId(nextId + 1);
        taskList.push(task);
        setTodoList(taskList);
        setInputText("");

        console.log("List");
        console.log(todoList);
    }

    return (
        <div className='widget-todolist container'>
            <h2>Yapılacaklar Listesi</h2>
            <div>
                {
                todoList.forEach( function (task) {
                    <div className="task" id = {task.id}>
                        <p>{task.text}</p>
                    </div>
                })
                }
            </div>
            <div>
                <input id="todosInput" type='text' onChange={changeInputText} value={inputText}/>
                <button id='todosAddTask' onClick={addTask}>Add Task</button>
            </div>
        </div>
    );
}