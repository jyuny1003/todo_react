import React from 'react';
import Axios from 'axios';
import API from 'Api'
import 'StudentScore.css'

//이 파일은 score list axiostest!!!!!!!!!!!!!


export default function AxiosTest2(){

    const[scores, setScores] = React.useState([])
    const[id,setId] = React.useState(null)

    React.useEffect(()=>{
        API.get("study/scores/")
        .then(res =>{
            const{data} = res;
            setScores(data);
            
        }).catch(error=>{
            console.log(error);
        })
    },[])

    // const click = (e) =>{
    //     console.log(e.target.id)
    //     setId(e.target.id);
    // }

    return(
        <>
            {scores.map((v)=>{
                return (
                <div id="scorelist">
                <div id={v.id} >{v.name}</div>
                <div id="detail">수학: {v.math} / 과학: {v.science} / 영어: {v.english} </div>
                </div>
            )})}
            
            

        </>
    )
}

// function AxiosTestDetail2({id}){
//     const[score, setScore] = React.useState()

//     React.useEffect(()=>{
//         API.get("study/scores" + id)
//         .then(res=>{
//             const {data} = res;
//             setScore(data);
//         }).catch(error=>{
//             console.log(error);
//         })
//         console.log("id가 변경됨!~")
//     },[id])

//     return(
//         <>
//             {score && <div>
//                             <span>{score.name}</span>
//                             <span>{score.math}</span>
//                             <span>{score.science}</span>
//                             <span>{score.english}</span>
//                         </div>}
        
        
        
//         </>
//     )
// }