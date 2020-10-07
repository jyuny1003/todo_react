import React, { useEffect } from 'react';
import img1 from 'img/1.png';
import img2 from 'img/2.png';
import img3 from 'img/3.png';
import "./rsp.css";

// import style from "./rsp.module.css"

export default function Rockscissorpaper(){
    
    const images = [img1, img2, img3]
    const[x, setX] = React.useState('')
    const[com, setCom] =React.useState('')
    const[user, setUser] = React.useState('')
    const[message,setMessage] = React.useState('')


    const scissor = (e)=> {
        setX(Math.floor(Math.random()*3) + 1);

        setUser(images[0]);
        setCom(images[Number(x)-1]);

        if (x-1 == 0){
            setMessage('비겼습니다')
        } else if (x-1 == 1){
            setMessage('졌습니다')
        }else if (x-1 == 2){
            setMessage('이겼습니다')
        }
    }
    
    const rock = (e)=> {
        setX(Math.floor(Math.random()*3) + 1);

        setUser(images[1]);
        setCom(images[Number(x)-1]);

        if (x-1 == 0){
            setMessage('이겼습니다')
        } else if (x-1 == 1){
            setMessage('비겼습니다')
        }else if (x-1 == 2){
            setMessage('졌습니다')
        }
    }

    const paper = (e)=> {
        setX(Math.floor(Math.random()*3) + 1);

        setUser(images[2]);
        setCom(images[Number(x)-1]);

        if (x-1 == 0){
            setMessage('졌습니다')
        } else if (x-1 == 1){
            setMessage('이겼습니다')
        }else if (x-1 == 2){
            setMessage('비겼습니다')
        }
    }


    return(
        <div id="container">
            <div id="command">셋 중 하나를 선택해주세요</div>

            <div id="imgs">
                <img onClick={scissor} id={1} src={img1} style={{width:'200px', height:'200px'}}/>
                <img onClick={rock} id={2} src={img2} style={{width:'200px', height:'200px'}}/>
                <img onClick={paper} id={3} src={img3} style={{width:'200px', height:'200px'}}/>  
            </div>

            <div>
                <img src={user} style={{width:'200px', height:'200px'}}/>
                <img src={com} style={{width:'200px', height:'200px'}}/>               
            </div>
            <div id="message">{message}</div>
        
        </div>
    )
}