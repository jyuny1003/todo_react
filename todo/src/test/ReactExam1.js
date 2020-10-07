import React from 'react';

export default function ReactExam1() {
    
    const students = [
        {name:'이수만', age:'60', address:'인천'},
        {name:'유희열', age:'45', address:'서울'},
        {name:'방시혁', age:'43', address:'부산'},
        {name:'박진영', age:'34', address:'광주'}
    ]

    return(
        <>
            <div><span>이름</span>  <span>나이</span>  <span>주소</span></div>
            <div>{students[0].name} {students[0].age} {students[0].address}</div>
            <div>{students[1].name} {students[1].age} {students[1].address}</div>
            <div>{students[2].name} {students[2].age} {students[2].address}</div>
            <div>{students[3].name} {students[3].age} {students[3].address}</div>
        </>
    )
}