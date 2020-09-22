import React from 'react';


const reducer = (prev, action) => {
    //const {value} = action;
  
    return {number: prev.number + 1}

}



export default function ReducerEx(){

    const[num, dispatch] = React.useReducer(reducer,{
        "number":11
    })

    const click =(e) =>{
                
        dispatch()
    }


    return(
        <>
            <div>
                <h2>현재 숫자는?</h2><div>{num.number}</div>
            </div>
            <div onClick={click} >클릭</div>
        
        
        </>
    )
}