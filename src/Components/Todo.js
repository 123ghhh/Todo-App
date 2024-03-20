import React, { useRef,useState } from "react";



const Todo =()=>{
    const [tasks,setTasks]=useState([]);
    const taskInputRef =useRef(null);

const addTask =(event)=>{
event.preventDefault();
const taskText=taskInputRef.current.value.trim();
if(taskText!==""){
    setTasks((prevTasks)=>[...prevTasks,taskText]);
    taskInputRef.current.value="";
}
console.log("Tasks are",tasks);
};
const toggletask=(index)=>{
setTasks((prevTasks) => {
    const updateTasks=[...prevTasks];
    updateTasks.splice(index,1);
return updateTasks;
});
};


    return(
        <div className="container">
           <h1>Todo List</h1>
           <div className="input-container">
            <input type="text" placeholder="Enter text" className="task-input" ref={taskInputRef}/>
            <button className="add-btton" onClick={addTask}>
                Add
            </button>
           </div>
           <ul className="task-list" id="tasklist">
            {
                tasks.map((task,index)=>(
                    <li key={index}>
                        <input type="checkbox" className="task-checkbox"
                         onChange={()=>toggletask(index)}
                        />
                        <span className="task-text">{task}</span>
                    </li>
                ) )}
                
            
           </ul>
        </div>
    )
}



export default Todo;