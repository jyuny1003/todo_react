import React, { useEffect } from 'react';

function Clock() {
    const [timer,setTimer] = React.useState([])
    const [cnt, setCnt] = React.useState(-1)

    // React.useEffect(() => {
    //     //console.log("컴포넌트가 생성될때");
    //     //console.log("aa");

       
    //     const timer = setInterval(()=>{
    //         setDate2(new Date())
    //     }, 1000)

    // },[]);

    React.useEffect(() => {
        console.log("date가 변경될때");
    }, [timer])



    const click = () => {
        setTimer(...timer, new Date())
        setCnt(Number(cnt)+1)
    }

    return (
        <>
            <div>타이머개수: </div>
            <button onClick={click}>추가</button>
            <div>{timer.toISOString()}</div>
            
        
        </>
    )
}


export default function Timer(){

    const[timer, setTimer] = React.useState([]);
    const [cnt, setCnt] = React.useState(0);
    const click = () =>{
        setTimer([...timer, new Date()])
        setCnt(cnt+1)
    }

    React.useEffect(() => {
        console.log(cnt)


    },[timer])

    return(
        <>
        <div>타이머개수: {cnt}</div>
        <div><button onClick={click}>추가</button></div>
        {timer.map((v,i) =>{
            return <List startDate={v}/>
        })}
        </> 
    )
}

function List({startDate}){
    
    const[after, setAfter] = React.useState(0);
    
    
    React.useEffect(()=>{
        setInterval(()=>{
        setAfter(new Date().getTime() - startDate.getTime())
        },1000)
    },[]);

    return(
        <>
            <div>
                {startDate.toISOString()} / {parseInt(after/1000)}초 경과
            </div>      
        </>

    )
            

}