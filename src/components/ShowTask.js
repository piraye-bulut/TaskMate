

export const ShowTask = ({tasklist,setTaskList,task,setTask}) => {
    
    const handleDelete = (id) => {
        const updatedTaskList=tasklist.filter((task) => task.id !== id);
        setTaskList(updatedTaskList);
    }
    const handleEdit = (id) => {
        const selectedTask = tasklist.find((task) => task.id === id);
        setTask(selectedTask);
        
    }
    

  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">To Do</span>
                <span className="count">{tasklist.length}</span>
            </div>
            <button className="clearAll" onClick= {() => setTaskList([])}>Clear All</button>
        </div>
        <ul>
            { tasklist.map((todo) => (  
                <li key={todo.id}>
                <p>
                    <span className="name">{todo.name}</span>
                    <span className="time">{todo.time}</span>
                </p>
                <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
                <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
            </li>

            ))}
            
        </ul>
    </section>
  )
}
