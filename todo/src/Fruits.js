import React from 'react';
import { Button } from 'antd';


function Fruits() {
    const [name, setName] = React.useState('')

    const click1 = () => {
        setName('바나나')
    }
    const click2 = () => {
        setName('사과')
    }
    const click3 = () => {
        setName('딸기')
    }

    return (
        
            <div>
                <div>{name}</div>
                <div>
                    <span><Button type="primary" onClick={click1}>바나나</Button></span>
                    <span><Button type="primary" onClick={click2}>사과</Button></span>
                    <span><Button type="primary" onClick={click3}>딸기</Button></span>
                </div>
            </div>
    )
}

export default Fruits