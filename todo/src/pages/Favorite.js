import React from 'react';
import API from 'Api';
import 'Mypage.css';
import { DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import { Form, List, Button, Modal, Input, Select, Upload, message } from 'antd';
import reqwest from 'reqwest';

export default function Favorite({location, match, history})
{
    const [contents, setContents] = React.useState({
        actor: [],
        movie: [],
        food: []
    })


    const [group, setGroup] = React.useState([])

    React.useEffect(()=> {
        
        API.get("work/favorite?group=1")
        .then(res =>{
            const {data} = res;
            setContents(prev =>({
                ...prev,
                actor: data
            }));
        }).catch(error=>{
            console.log(error);
        })

        API.get("work/favorite?group=2")
        .then(res =>{
            const {data} = res;
            setContents(prev =>({
                ...prev,
                movie: data
            }));
        }).catch(error=>{
            console.log(error);
        })

        API.get("work/favorite?group=3")
        .then(res =>{
            const {data} = res;
            setContents(prev =>({
                ...prev,
                food: data
            }));
        }).catch(error=>{
            console.log(error);
        })

    },[])

    React.useEffect(()=>{
        API.get("work/favoritegroup")
        .then(res=>{
            const{data} = res;
            setGroup(data);
            console.log(data);
        })
    },[])


    const deletethis = (e) => {
        API.delete("work/favorite/"+ e)
        .then(res=>{
            return(
                API.get("work/favorite?group=1")
                .then(res=>{
                    const {data} = res;
                    setContents(prev => ({
                    ...prev,
                    movie:data
                     }))
                })
                .then(res=>{
                   API.get("work/favorite?group=2")
                    .then(res=>{
                        const{data}=res;
                        setContents(prev=>({
                            ...prev,
                            movie:data
                        }))
                    }).catch(error=>{
                        console.log(error);
                    }) 
                })
                .then(res=>{
                    API.get("work/favorite?group=3")
                    .then(res=>{
                        const{data}=res;
                        setContents(prev=>({
                            ...prev,
                            food:data
                        }))
                    }).catch(error=>{
                        console.log(error);
                    })
                })
                
            )
        })
    }
        

  
    return(
        <>
            <div id="topPlace">
            <div id="addbutton"><AddButton setContents={setContents} group={group} /></div>
            </div>

            <List
                header={<div id="favorgroup">배우</div>}
                id= "favorlist"
                itemLayout="horizontal"
                dataSource={contents.actor}
                renderItem={item =>(
                    <List.Item>
                        <List.Item.Meta
                        title = {<span id="tag1">{item.name}</span>}
                        description = {<div id="tag2">
                                        <span>등록일: {item.reg_date}</span> / <span>{item.memo}</span>
                                        <Button style={{float:"right"}} shape="circle" icon={<DeleteOutlined />} onClick={()=>{ deletethis(item.seq)}}/>
                                        </div>}
                        />
                    </List.Item>
                )}
            />

            <List
                header={<div id="favorgroup">영화</div>}
                id= "favorlist"
                itemLayout="horizontal"
                dataSource={contents.movie}
                renderItem={item =>(
                    <List.Item>
                        <List.Item.Meta
                        title = {<span id="tag1">{item.name}</span>}
                        description = {<div id="tag2">
                                        <span>등록일: {item.reg_date}</span> / <span>{item.memo}</span>
                                        <Button style={{float:"right"}} shape="circle" icon={<DeleteOutlined />} onClick={()=>{ deletethis(item.seq)}}/>
                                        </div>}
                        />
                    </List.Item>
                )}
            />

            <List
                header={<div id="favorgroup">음식</div>}
                id= "favorlist"
                itemLayout="horizontal"
                dataSource={contents.food}
                renderItem={item =>(
                    <List.Item>
                        <List.Item.Meta
                        title = {<span id="tag1">{item.name}</span>}
                        description = {<div id="tag2">
                                        <span>등록일: {item.reg_date}</span> / <span>{item.memo}</span>
                                        <Button style={{float:"right"}} shape="circle" icon={<DeleteOutlined />} onClick={()=>{ deletethis(item.seq)}} />
                                        </div>}
                        />
                    </List.Item>
                )}
            />

        </>
    )
}


function AddButton({setContents, group}) {

    const [state, setState] = React.useState({ visible: false });
    const {TextArea} = Input;
    const [form] = Form.useForm();


    const showModal = () => {
      setState({
        visible: true,
      });
    };
  
    const handleOk = (e) => {
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
  
    
    const onFinish = (e) =>{
        console.log(e);

        API.post("work/favorite/", e)
        .then(res=>{
            return(
                API.get("work/favorite/?group=" + e.group)
            )
        }).then(res=>{
            const text = ["","actor","movie","food"]
            const{data} = res;
            console.log(data);
            setContents(prev=> ({
                ...prev,
                [text[e.group]]:data
            }));
            form.resetFields();
            setState({
                visible:false
            });
        })
    }




//////////////////////////이미지업로드////////////////////////////////////

    const [state2, setState2] = React.useState({
        fileList: [],
        uploading: false,
    })

    const handleUpload = () => {
            const { fileList } = state2;
            const formData = new FormData();
            fileList.forEach(file => {
            formData.append('files[]', file);
        });
    
        setState2({
            uploading: true,
        });
    
        
        reqwest({
          url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
          method: 'post',
          processData: false,
          data: formData,
          success: () => {
            setState2({
              fileList: [],
              uploading: false,
            });
            message.success('upload successfully.');
          },
          error: () => {
            this.setState2({
              uploading: false,
            });
            message.error('upload failed.');
          },
        });
    };

    const { uploading, fileList } = state2;
    const props = {
      onRemove: file => {
        this.setState(state2 => {
          const index = state2.fileList.indexOf(file);
          const newFileList = state2.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState2(state2 => ({
          fileList: [...state2.fileList, file],
        }));
        return false;
      }
        fileList,
    };
    




    return (
    <>
        <Button type="primary" onClick={showModal} id="addbutton"> + 추가 </Button>
        <Modal title="Favorite 추가" footer={null} visible={state.visible} onOk={handleOk} onCancel={handleCancel} >
            <Form form={form} onFinish={onFinish} labelcol={{span:4}} wrapperCol={{span:14}} layout="horizontal">

                <Form.Item name="name" label="명칭"><input placeholder="명칭을 적어주세요"/></Form.Item>
                
                <Form.Item name="url" label="URL"><input placeholder="url을 적어주세요"/></Form.Item>
                
                <Form.Item name="memo" label="메모"><TextArea rows={3} placeholder="메모를 적어주세요"/></Form.Item>
                
                <Form.Item name="group" label="그룹">
                    <Select>
                        <Select.Option value="">선택</Select.Option>
                        {group.map((v)=>{
                            return <Select.Option value={v.seq}>{v.name}</Select.Option>
                        })}
                    </Select>
                </Form.Item>

                <Button id="regbutton" type="primary" htmlType="submit">등록</Button>


                <Button type="primary" onClick={handleCancel}>취소</Button>

        </Form>
        </Modal>
    </>
    );
    
  }