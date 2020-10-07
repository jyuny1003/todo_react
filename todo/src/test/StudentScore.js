import React from 'react';
import queryString from 'query-string';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'
import AxiosTest from 'AxiosTest';
import AxiosTest2 from 'AxiosTest2';
import 'StudentScore.css'


export default function MyRouterTest() {
    const active = {
        color:"Blue"
    }
    return (        
        <>
        <BrowserRouter>
            <div id="menu">
                <NavLink exact to="/" activeStyle={active} id="menu1">홈</NavLink>
                <NavLink to="/students" activeStyle={active} id="menu2">학생</NavLink>
                <NavLink to="/scores" activeStyle={active} id="menu3">점수</NavLink>

            </div>
            <div id="content">               
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/students" component={Students}/>
                    <Route path="/scores" component={Scores}/>                
                    <Route component={NoPage}/>
                </Switch>           
            </div>
            </BrowserRouter>
        </>        
    )
}


function Home({history, location, match})
{
    console.dir(location)
    console.dir(match)

    return(
        <div>
            HOME
        </div>
    )
}


function Students({location, match, history})
{
    
    const click = () => {
        history.push('/')
    }
    return(
        <div>
            <AxiosTest/>        
        </div>
    )
}

function Scores({location, match, history})
{

    const click = () => {
        history.push('/')
    }
    return(
        <div>
            <AxiosTest2/>
            
        </div>
    )
}



function NoPage({history, location, match})
{
    console.dir(location)
    console.dir(match)
    return(
        <div>
            NoPage
        </div>
    )
}