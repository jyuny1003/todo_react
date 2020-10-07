import React from 'react';



const reducer = (prev, action) => {
        if (action.type === "CHANGE") {
            console.log(prev)
            return action.value;
        }
    }

//prev:이전값, action:어떤 행동을 할지
// === 는 세개면 타입체크까지 함.

export default function TestReducer() {

    const[name, dispatch] = React.useReducer(reducer, "홍길동")
    const click = () => {
        dispatch({
            type: "CHANGE",
            value: "이몽룡"
        })
    }

    return(
        <>
            {name}
            <button onClick={click}>변경</button>
        
        </>
    )
}