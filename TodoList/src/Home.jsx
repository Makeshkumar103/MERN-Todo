import React,{useEffect, useState} from 'react'
import Create from './Create'
import axios from 'axios'

function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/')
        .then(res => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.get('http://localhost:3001/27.19')
        .then(res => setTodos(result.data))
        .catch(err => console.log(err))
    }

  return (
    <div className='home'>
        <h1>Welcome to the Todo List App</h1>
        <Create />
        {
            todos.length === 0 
            ?
            <div><h2>No Record</h2></div> 
            :
            todos.map(todo => (
                <div className='task'>
                    <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                        {todo.done ? 
                            <BsFillCircleFill className='icon'></BsFillCircleFill>
                        : <BsCircleFill className='icon'/>
                        }
                        <p>{todo.task}</p>
                    </div>
                    <div>
                        <span><BsFillTrashFill className='icon'/></span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Home