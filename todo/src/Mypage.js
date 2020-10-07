import React from 'react';
//import queryString from 'query-string';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import { Menu } from 'antd';
import { StarFilled, ThunderboltFilled, SwapRightOutlined } from '@ant-design/icons';
import 'Mypage.css';

import Todo from 'pages/Todo';
import Todogroup from 'pages/Todogroup';
import Favorite from 'pages/Favorite';
import Favoritegroup from 'pages/Favoritegroup';


const { SubMenu } = Menu;

export default function Mypage() {

    const active = {
        color: "Blue"
    }

    const handleClick = (e) => {
        console.log('click ', e);
    }

    return (
      <BrowserRouter>
        <div>
            <Menu onClick={handleClick} style={{ width: 256} } 
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline" id="menu" >

                <div id="TodoProject">
                    <NavLink exact to="/" id="TodoColor">Todo Project</NavLink>
                </div>
                <SubMenu key="sub2" icon={<StarFilled />} title="즐겨찾기" id="submenu" >
                    <Menu.Item key="5" icon={<SwapRightOutlined />}>
                        <NavLink to="/favoritegroup" activeStyle={active}>그룹관리</NavLink>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<SwapRightOutlined />}>
                        <NavLink to="/favorite" activeStyle={active}>즐겨찾기</NavLink>
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="sub4" icon={<ThunderboltFilled />} title="할일" id="submenu">
                    <Menu.Item key="9" icon={<SwapRightOutlined />}>
                        <NavLink to="/todogroup" activeStyle={active}>그룹관리</NavLink>
                    </Menu.Item>
                    <Menu.Item key="10" icon={<SwapRightOutlined />}>
                        <NavLink to="/todo" activeStyle={active}>할일</NavLink>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </div>
        

        <div id="content">
            <Switch>
                <Route exact path="/" component = {Home}/>
                <Route exact path="/favoritegroup" component = {Favoritegroup}/>
                <Route exact path="/favorite" component = {Favorite}/>
                <Route exact path="/todogroup" component = {Todogroup}/>
                <Route exact path="/todo" component = {Todo}/>
            </Switch>
        </div>

      </BrowserRouter>
    )
  
}

function Home({history, location, match})
{
    return(
        <>
        <div id="topPlace"></div>
        <div id="home">Welcome to hyun's page</div>

        </>
        
    )
}





