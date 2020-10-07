import React from 'react';
import API from 'Api';
import { DeleteOutlined } from '@ant-design/icons';
import { Form, List, Button, Modal, Select, DatePicker } from 'antd';
import 'Mypage.css';
//import Password from 'antd/lib/input/Password';

export default function Todo({location, match, history})
{
    const [contents, setContents] = React.useState({
        pending: [],
        inprogress: [],
        end: []
    })

    const [group, setGroup] = React.useState([]);
    
    React.useEffect(()=> {
        
        API.get("work/todo?status=pending")
        .then(res =>{
            const {data} = res;
            setContents(prev =>({
                ...prev,
                pending: data
            }));
        }).catch(error=>{
            console.log(error);
        })

        API.get("work/todo?status=inprogress")
        .then(res =>{
            const {data} = res;
            setContents(prev =>({
                ...prev,
                inprogress: data
            }));
        }).catch(error=>{
            console.log(error);
        })

        API.get("work/todo?status=end")
        .then(res =>{
            const {data} = res;
            setContents(prev =>({
                ...prev,
                end: data
            }));
        }).catch(error=>{
            console.log(error);
        })
    },[])


    React.useEffect(()=>{
        API.get("work/todogroup")
        .then(res=>{
            const {data} = res;
            setGroup(prev => data);
            console.log(data);
        })

    },[])

    const deletethis = (e) => {
        API.delete("work/todo/"+ e)
        .then(res=>{
            return(
                API.get("work/todo?status=pending")
                .then(res=>{
                    const {data} = res;
                    setContents(prev => ({
                    ...prev,
                    pending: data
                    }))
                })
                .then(res=>{
                   API.get("work/todo?status=inprogress")
                    .then(res=>{
                        const{data}=res;
                        setContents(prev=>({
                            ...prev,
                            inprogress:data
                        }))
                    }).catch(error=>{
                        console.log(error);
                    }) 
                })
                .then(res=>{
                    API.get("work/todo?status=end")
                    .then(res=>{
                        const{data}=res;
                        setContents(prev=>({
                            ...prev,
                            end:data
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
            <div id="addbutton"><AddButton setContents={setContents} group={group}/></div>
            </div>

            <List
                header={<div id="todostatus">할일</div>}
                id= "todolist"
                itemLayout="horizontal"
                dataSource={contents.pending}
                renderItem={item =>(
                    <List.Item>
                        <List.Item.Meta
                        title = {<span id="tag1">{item.name}</span>}
                        description = {<div id="tag2">
                                        <span>등록일: {item.reg_date}</span> / <span>마감일: {item.end_date}</span>
                                        <Button style={{float:"right"}} shape="circle" icon={<DeleteOutlined />} onClick={()=>{deletethis(item.seq)}} />
                                        </div>}
                        />
                    </List.Item>
                )}
            />

            <List
                header={<div id="todostatus">진행중</div>}
                id= "todolist"
                itemLayout="horizontal"
                dataSource={contents.inprogress}
                renderItem={item =>(
                    <List.Item>
                        <List.Item.Meta
                        title = {<span id="tag1">{item.name}</span>}
                        description = {<div id="tag2">
                                        <span>등록일: {item.reg_date}</span> / <span>마감일: {item.end_date}</span>
                                        <Button style={{float:"right"}} shape="circle" icon={<DeleteOutlined />}  onClick={()=>{deletethis(item.seq)}}/>
                                        </div>}
                        />
                    </List.Item>
                )}
            />


            <List
                header={<div id="todostatus">완료</div>}
                id= "todolist"
                itemLayout="horizontal"
                dataSource={contents.end}
                renderItem={item =>(
                    <List.Item>
                        <List.Item.Meta
                        title = {<span id="tag1">{item.name}</span>}
                        description = {<div id="tag2">
                                        <span>등록일: {item.reg_date}</span> / <span>마감일: {item.end_date}</span>
                                        <Button style={{float:"right"}} shape="circle" icon={<DeleteOutlined />} onClick={()=>{deletethis(item.seq)}} />
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

    const onFinish =(e)=>{
        e.end_date = e.end_date.format("YYYY-MM-DD");
        console.log(e);

        API.post("work/todo/",e)
        .then(res=>{
            return(
                API.get("work/todo?status=" + e.status)
            )
        }).then(res=>{
            const {data} = res;
            setContents(prev=> ({
                ...prev,
                [e.status]:data
            }));
            form.resetFields();
            setState({
                visible: false
            });
        })

    }
  
    
    return (
    <>
        <Button type="primary" onClick={showModal} id="addbutton"> + 추가 </Button>
        <Modal
        title="Todo 추가"
        visible={state.visible}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}>
            <Form form={form}  onFinish={onFinish} labelcol={{ span:4 }} wrapperCol={{ span:14 }} layout="horizontal">
            
                <Form.Item  name="name" label="이름"><input/></Form.Item>
                
                <Form.Item  name="status" label="상태">
                    <Select placeholder="상태를 선택하세요" allowClear>
                        <Select.Option value="">선택</Select.Option>
                        <Select.Option value="pending">보류</Select.Option>
                        <Select.Option value="inprogress">진행중</Select.Option>
                        <Select.Option value="end">완료</Select.Option>
                    </Select> 
                </Form.Item>
                
                <Form.Item  name="end_date" label="종료일">
                    <DatePicker />
                </Form.Item>

                <Form.Item name="group" label="그룹">
                    <Select>
                        <Select.Option value="">선택</Select.Option>
                            {group.map((v)=>{
                                return <Select.Option value={v.seq}>{v.name}</Select.Option>            
                            })}
                    </Select>
                </Form.Item>

                <Button type="primary" htmlType="submit">등록</Button>
                <Button type="primary" onClick={handleCancel}>취소</Button>

            </Form>
        </Modal>
    </>
    );
    
  }


