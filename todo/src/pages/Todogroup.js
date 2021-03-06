import React from 'react';
import API from 'Api';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import 'Mypage.css';


export default function Todogroup({location, match, history})
{
    const [contents, setContents] = React.useState([])

    React.useEffect(()=> {
        API.get("work/todogroup")
        .then(res =>{
            const {data} = res;
            setContents(data);
        }).catch(error=>{
            console.log(error);
        })
    },[])


    const deletethis = (e) =>{
        API.delete("work/todogroup/"+ e)
        .then(res=>{
            return(
                API.get("work/todogroup")
            )
        })
        .then(res=>{
            const{data} = res;
            setContents(data);
        })
        .catch(error=>{
            console.log(error);
        })
    }
        



    return(
        <>
            <div id="topPlace">
                <div id="addbutton"><AddButton setContents={setContents}/></div>
            </div>
            
            <div id="white">
                {contents.map((v)=>{
                    return(    
                        <div id="tag">
                            <h1 id="tag1">{v.name}</h1><button id="deleteButton" onClick={()=>{deletethis(v.seq)}} ><DeleteOutlined/></button>
                            <h2 id="tag2">{v.reg_date}</h2>
                            
                        </div> 
                    )
                })}
            </div>

        </>  
    )
}

function AddButton({setContents}) {

    const [state, setState] = React.useState({ visible: false });
    const [name, setName] = React.useState('');


    const newname = (e) =>{
        setName(e.target.value);
    }

    const showModal = () => {
      setState({
        visible: true,
      });
    };
  
    const handleOk = (e) => {
      
        API.post("work/todogroup/", {name})
        .then(res =>{
            console.log('성공')
            return API.get("work/todogroup")
        })
        .catch(error=>{
            console.log(error);
        })
        .then(res=>{
            const {data} = res;
            console.log(data);
            setContents(data);
        })
        .catch(error=>{
            console.log(error);
        })
      

        console.log(e);
        setState({
        visible: false,
      });
    };
  
    const handleCancel = (e) => {
      console.log(e);
      setState({
        visible: false,
      });
    };
  
    
    return (
    <>
        <Button type="primary" onClick={showModal} id="addbutton"> + 추가 </Button>
        <Modal
        title="TodoGroup 추가"
        visible={state.visible}
        onOk={handleOk}
        onCancel={handleCancel}
        >
        <p>명칭 : <input value={name} onChange={newname}/> </p>

        </Modal>
    </>
    );
    
  }