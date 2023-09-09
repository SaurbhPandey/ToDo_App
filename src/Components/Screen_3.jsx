import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Navbar, Button } from 'react-bootstrap'
import FooterBar from './FooterBar'
import { Link } from 'react-router-dom'
const Screen_3 = () => {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [pressButtton, SetButton] = useState(false);
    const [id, setId] = useState(1);
    const [updatedTask , setUpdatedTask] = useState(null);
    
    useEffect(() => {
        if(updatedTask !== null){
            setInput(updatedTask.task);
        }
        if(input === ""){
            SetButton(false);
        }
        if (input !== "") {
            
            if(updatedTask !== null){
                const newTask = {
                    "id" : updatedTask.id,
                    "task" : input
                }
                console.log(updatedTask)
                const updatedTaskList = tasks.filter((task) => task.id !== newTask.id);
                console.log("update task list" , updatedTaskList);
                setTasks([...updatedTaskList , newTask])
                setInput("");
                setUpdatedTask(null)
            }
            else{
                console.log(id);
                const newTask = {
                    "id": id,
                    "task": input
                }
                console.log(newTask);
                setTasks([...tasks, newTask]);
                setId(id + 1);
                setInput("");
            } 
            SetButton(false);
        }
    }, [pressButtton , updatedTask])
   
  
    function deleteTask(id) {
        const updatedTaskList = tasks.filter((task) => task.id !== id);
        setTasks(updatedTaskList);
    }

    function updateTask(id , task){
         const updatedTask = {
            "id" : id,
            "task" : task
         }
         setUpdatedTask(updatedTask);
    }

    return (
        <Row className='bg-body-tertiary d-flex justify-content-center'>
            <Row className='bg-body-tertiary d-flex justify-content-center'>
                <Col lg={12} className='d-flex justify-content-center align-items-center' style={{ "minHeight": "60vh", "marginLeft": "20px", "marginRight": "200px" }}>
                    <input type="text" className='me-5 p-2 px-4' style={{ "minWidth": "600px", "borderRadius": "10px" }} value={input} onChange={(e) => setInput(e.target.value)} />
                    <Button onClick={(e) => { SetButton(true) }}><h6>Add Task</h6></Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul style={{ "listStyle": "none" }}>
                        {tasks.map((item) => {
                            return (
                                <li key={item.id}>
                                    <Row className='d-flex justify-content-center container align-items-center py-2' >
                                        <Col className='d-flex align-items-center justify-content-between ' style={{ "marginLeft": "250px", "marginRight": "100px" }}>
                                            <h6 style={{ "border": "1px solid black", "borderRadius": "10px", "minWidth": "600px", "backgroundColor": "#e3dfde" }} className='p-2 px-4'>{item.task}</h6>
                                            <Button style={{ "backgroundColor": "#e3dfde", "color": "black", "marginTop": "-10px" }} className='mx-4 ' onClick={()=> updateTask(item.id , item.task)}><h6>Edit Task</h6></Button>
                                            <Button style={{ "backgroundColor": "#e3dfde", "color": "black", "marginTop": "-10px" }} onClick={() => deleteTask(item.id)}><h6>Delete Task</h6></Button>
                                        </Col>
                                    </Row>
                                </li>
                            )
                        })}
                    </ul>
                </Col>
            </Row>
        </Row>
    )
}

export default Screen_3