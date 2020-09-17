import React from 'react';
import { Button } from 'antd';


function Fruits() {
    // const [name, setName] = React.useState('')

    // const click1 = () => {
    //     setName('바나나')
    // }
    // const click2 = () => {
    //     setName('사과')
    // }
    // const click3 = () => {
    //     setName('딸기')
    // }

    const [state, setState] = React.useState('')

    const change = (e) => {     
        console.log(e.target)   
        setState(e.target.innerHTML)
    }


    return (
        
            <div>
                <div>{state}</div>
                <div>
                    <span><Button type="primary" onClick={change}>바나나</Button></span>
                    <span><Button type="primary" onClick={change}>사과</Button></span>
                    <span><Button type="primary" onClick={change}>딸기</Button></span>
                </div>
            </div>
    )
}

export default Fruits