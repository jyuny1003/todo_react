import React from 'react';

export default function CountArray() {
    const [cnt, setCnt] = React.useState(0);

    console.log('렌더링될때마다')

    const click = () => {
        setCnt(cnt + 1);
    }

    React.useEffect(() => {
        console.log('처음 만들어졌을때');
        return () => {
            console.log('컴포넌트 삭제시')
        }
    },[])


    return (
        <div>
            {cnt} <button onClick={click}>버튼</button>
        </div>
    )

}