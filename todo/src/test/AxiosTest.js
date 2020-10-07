import React from 'react';
import Axios from 'axios';
import API from 'Api'
import 'StudentScore.css'

//이 파일은 student list axiostest!!!!!!!!!!!!!

export default function AxiosTest(){

    const [students, setStudents] = React.useState([]);
    const[id, setId] = React.useState(null);

    React.useEffect(()=>{
        API.get("study/students/")

        .then(res => {
            const { data } = res;
            setStudents(data);
            console.log(data);
        }).catch(error=>{
            console.log(error);
        })
    },[])

    // const click = (e) => {
    //     console.log(e.target.id)
    //     setId(e.target.id);
    // }

    return(
        <>
            <div>
                {students.map((v)=>{
                return (
                <div id="studentlist">
                <div /*onClick={click}*/>{v.name}</div>
                <div id="detail">{v.address} / {v.email} </div>
                </div>
                )})}
            </div>
            {/* <AxiosTestDetail id={id} /> */}
        </>
    )
}

 
// function AxiosTestDetail({id}) {
    
//     const[student, setStudent] = React.useState([])

//     React.useEffect(()=>{
//         API.get("study/students/" + id)
//         .then(res => {
//             const {data} = res;
//             setStudent(data);
//         }).catch(error=>{
//             console.log(error);
//         })
//         console.log("id가 변경됨!~")
//     },[id])

//     return(
//         <div>
//             {student && <div>
//                             <span>{student.name}</span>
//                             <span>{student.address}</span>
//                             <span>{student.email}</span>
//                         </div>}
//         </div>
//     )
// }


