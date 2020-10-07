import React from 'react';
import { Button } from 'antd';


function JsxTest() {
  
    const [a,setA] = React.useState(true);
    
    let user = 2
    const datas = [1, 2, 3, 4, 5, 6, 7]
    
    return (
      <>
        {datas.map((v,i) => {
          return <div>{v}</div>
        })}
  
  
        {a && <div>참일 경우만 나오는</div>}
        {a ? <div>참일경우</div> : <div>거짓일경우</div>}
        {
          (
            () => {
              if(user ==1) {
                return <div>User가 1</div>
              }
              else if (user == 2){
                return <div>User가 2</div>
              }
            }
          )()
        }
      </>
      
    );
  }
//export default JsxTest;
  

function Students() {
    const  students = [
      {name:'이수만', age:'60', address:'인천'},
      {name:'유희열', age:'45', address:'서울'},
      {name:'방시혁', age:'43', address:'부산'},
      {name:'박진영', age:'34', address:'광주'}
    ]
  
    return (
      <div>
      <div>이름  나이  주소</div>
      <>
        {students.map((student,i) => {
          return <div key={i}>{student.name} {student.age} {student.address}</div> 
        })}
      </>
      </div>
    )
  }
//export default Students;

function TorF() {

    const [i,setI] = React.useState(true)
    const change = (e) => {
        
        if (i == true){
            setI(false)
        } else if (i == false){
            setI(true)
        }            
    }
    return (
        <>
            {i ? <div>True 입니다.</div> : <div>False 입니다.</div>}
            <Button onClick={change}>클릭</Button>
        </>
    )
}
//export default TorF;


function Score() {

    const [student, setStudent] = React.useState({name:'홍길동', math:80, science:30, english:60});

    const zero = (e) => {
        setStudent({...student, math:0, english:0, science:0})
    }

    return(
        <>
        name:{student.name}, math:{student.math}, science:{student.science}, english:{student.english}
        <Button onClick = {zero}>클릭</Button>

        </>
    )
}
//export default Score;

function Number() {
    const [number, setNumber] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const change = (e) => {
       setNumber([...number.slice(0,4), 0, 0, ...number.slice(6,8)])

       //setNumber([1, 2, 3, 4, 0, 0,    ])
    }


    return (
        <>
        <span>{JSON.stringify(number)}</span><button onClick={change} >클릭</button>
                
        </>
    )
}
//export default Number;

function HoverTest() {
    const style = {
        width: '100px',
        height: '100px',
        fontsize: '20px',
        backgroundColor: 'yellow',
        textAlign: 'center',
        lineHeight: '100px'
    }

    const [x,setX] = React.useState(0)

    const OnMouse = (e) => {
        setX(1)
    }
    const OutMouse = (e) => {
        setX(0)
    }
    return (
        <>
            <div style={style} onMouseOver={OnMouse} onMouseOut={OutMouse}>{x}</div>
        </>
    )
}
//export default HoverTest;


function Plus() {

    const [num1, setNum1] = React.useState(0)
    const [num2, setNum2] = React.useState(0)
    
    return(
        <>
        <input value={num1} onChange = { e => setNum1(e.target.value)}/>
        +<input value={num2} onChange = { e => setNum2(e.target.value)}/>
        =<input value={ parseInt(num1) + parseInt(num2)} />
         
              
        </>
    )
}
export default Plus;