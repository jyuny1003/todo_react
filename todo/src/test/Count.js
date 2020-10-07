import React from 'react';



function Count() {
    //상태값
    const [cnt, setCnt] = React.useState(0)
  
    //이벤트
    const click = () => {
      setCnt(cnt + 1)
    }
  
    //JSX
    return(
      <div>
        합계숫자는?<span>{cnt}</span>
        <div onClick={click}>클릭</div>
  
      </div>
    );
  }


export default Count