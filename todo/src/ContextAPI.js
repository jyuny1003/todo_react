import React from 'react';
import 'ContextAPI.css'


const courseContext = React.createContext()

export default function ContextAPI() {

    const[course, setCourse] = React.useState('')

    const change=(e) =>{
        const{value} = e.target;
        setCourse(value);
        console.log('과정은   ', course)  
    }

    return(
        <>
            <div id="container">
                <div id="level1">
                    <p1 id="category">과정명</p1>
                    <input id="inputCourse" type="text" value={course} onChange={change}/> 
                </div>               
                <courseContext.Provider value={course}>
                    <Child1/>
                </courseContext.Provider>
                
            </div>
        </>
    )
}

function Child1(course){
 
    const[name, setName] = React.useState()
    const[age, setAge] = React.useState()
    const [student, setStudent] = React.useState([])

    const nameNage =(e) =>{
        const{id,value} = e.target;
        if (id == "inputname"){
            setName(value)
        }
        else if(id=="inputage"){
            setAge(value)
        }
    }

    const register =()=>{
        
        setStudent([...student,
        {name}+ '/' + {age} + '/' + {course} ])
        console.log(student)

    }


    return(
        <div>
            <div id="level2">
                <span id="name">
                    <p2 id="category">학생이름</p2>
                    <input id="inputname" type="text" value={name} onChange={nameNage}/>
                </span>

                <span id="age">
                    <p2 id="category">나이</p2>
                    <input id="inputage" type="text" value={age} onChange={nameNage}/>
                </span>
                
                <span>
                    <button id="register" onClick={register} >등록</button>
                </span>

            </div>

            <Child2 />
            
        </div>
    )
}

function Child2(){
    


    return(
        <>

            맵 돌리기.
        
        
        </>
    )
}