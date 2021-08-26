import React,{useState} from 'react'
import {Link} from "react-router-dom"

function Header({title,width="100%"}) {
    const [display,setDisplay] = useState("none")
    return (
        <div className="mini-header" style={{width:width}}>
            <div className="burger-wrap">
            <div className="burger" onClick={()=>{
                if(display=="none"){
                    setDisplay("flex")
                }else{
                    setDisplay("none")
                }
            }}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className="burger-menu sp2 " style={{display:display}}>
                <Link to="/overview">Home</Link>
                <Link to="/edit-sensor">Settings</Link>
                <Link to="/">Alerts</Link>
                <Link to="/">Statistics</Link>
                <Link to="/">Help</Link>
                <Link to="/">Logout</Link>
             
            </div>
            </div>
            

            <div className="title">{title}</div>
        </div>
    )
}

export default Header