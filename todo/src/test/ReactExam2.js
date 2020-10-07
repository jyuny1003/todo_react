import React from 'react';
import Axios from 'axios';
import 'ReactExam2.css';

export default function ReactExam2() {
    
    const[users, setUsers] = React.useState([])
    const[img, setImg] = React.useState([])


    React.useEffect(()=>{
        Axios.get("https://api.github.com/users?since=1000")        
        .then(res =>{
            const{data} = res;
            setUsers(data);
            console.log('user데이터', users);
        }).catch(error=>{
            console.log(error)
        })
    },[])


    return(
        <>
            {users.map((v)=>{
                return(
                    <div><img src={v.avatar_url} id="img"/> {v.login}</div>
                )
            })}
        </>
    )
}