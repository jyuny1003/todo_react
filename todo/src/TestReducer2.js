import React from 'react';



const reducer = (prev, action) => {
    const{type, value} = action;

    if (type==="SET_NAME"){
        return {
            ...prev,
            name: value
        }
    }else if (type==="SET_AGE"){
        return{
            ...prev,
            age:value
        }
    }
}


export default function TestReducer2() {

    // const[name, setName] = React.useState("홍길동")
    // const[age,setAge] = React.useState(35)
    // const[student,setStudent] = React.useState({
    //     "name":"홍길동",
    //     "age":35
    // })

    const[student,dispatch] = React.useReducer(reducer,{
        "name":"홍길동",
        "age":35
    })

    const change = (e)=> {
        // const{value, name} = e.target;
        // setStudent((prev) => ({
        //     ...prev,
        //     name:value
        // }))

        const{value, name:type} = e.target;
        dispatch({
            type,
            value

        })
    }


    return(
        <>
            <div> {student.name} {student.age}</div>
            <input name="SET_NAME" type="text" value={student.name} onChange={change}/>
            <input name="SET_AGE" type="text" value={student.age} onChange={change}/>

        
        
        </>
    )




}