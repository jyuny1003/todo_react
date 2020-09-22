import React from 'react';
import logo from './logo.svg';
import 'App.css';
import 'antd/dist/antd.css';
import Count from 'Count';
import Welcome from 'Welcome';
import Act from 'Act';
import Fruits from 'Fruits';
import Plus from 'JSXss';
import CountArray from 'CountArray';
import Timer from 'Clock';
import Rockscissorpaper from 'rsp';
import TestReducer from 'TestReducer';
import TestReducer2 from 'TestReducer2';

//import  from 'JSXss';
//컴포넌트 클래스, 함수형 (함수형이 더 최신식)


function App() {
  return (
    <div>
      {/* <Add x={10} y={10}/>
      
      
      <Gugudan />


      <TodoList />


      <CountArray/> 


      <Timer/>

      <Rockscissorpaper />*/}

      <TestReducer2 />


    </div>
  );
}
export default App;

function Add(prop) {
  
  return(
    <>
      {prop.x} + {prop.y} = {Number(prop.x) + Number(prop.y)}

    </>
  )
}


function Gugudan() {
  const [x,setX] = React.useState()
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <input value={x} onChange = { e => setX(e.target.value)}/>
      {nums.map((n,i) => {
        return <div key = {i}> {x} x {n} = {Number(x)*Number(n)} </div>
      })}

    </div>
  )
}

// function List(prop) {
//   return (
//     <div>{prop.i} {prop.v}</div>
//   )
// }

function TodoList() {

  const [todo, setTodo] = React.useState("")
  const [sen, setSen] = React.useState([])
  
  const add = (e) =>{
    // setTodo(todo)
    // setSen(sen = {i} + {todo})
    setSen([...sen, todo])
  }



  const enter = (e) =>{
    if (e.key === 'Enter'){
      add()
      setTodo('')
    }
  }

  const remove = (e) =>{
    const i = e.target.value;
    console.log(Number(i)+1)
    setSen([...sen.slice(0,i), ...sen.slice(Number(i)+1, sen.length)])
    
  }
  return(
    <>
      <div>
        <input value={todo} onChange = { e => setTodo(e.target.value)} onKeyPress={enter}/>
        <button onClick={add}>추가</button>
      </div>
      
      <div>
        {
        sen.map((v, i)=>{
          return <div> {i} {v} <button value={i} onClick={remove}>삭제</button></div>
        })
        }
      </div>
        
    </>
  )
}



function StateTest() {

  const [x1, setX1] = React.useState(10)
  const [x2, setX2] = React.useState('hello')
  const [x3, setX3] = React.useState({name:"홍길동", age:30})
  const [x4, setX4] = React.useState([1, 2, 3, 4])

  return (
    <>
      <div>{x1}</div>
      <div>{x2}</div>
      <div>{x3.name}</div>
      <div>{x4[0]}</div>


    
    </>
  )
}
//export default StateTest


function Parents()
{
  const [num, setNum] = React.useState(50)
  const changeNumber = (number) => {
    setNum(number);
  }
  return (
    <>
      {num}
      <Child changeNumber={changeNumber} 
             color={"red"}
             number={10}
             student={{name:'홍길동', age:35, address:'인천'}}
      />
    </>
  )
}



function Child({changeNumber, color, number, student})
{
  // const x = {name:"홍길동", age:35};
  // const {name, age} = x;  
  console.log(number)
  console.log(color)
  console.log(student)
  const click = () => {
    changeNumber(10)
  }
  return(
    <>
    <button onClick={click}>클릭</button>
    </>
  )
}


