import React from 'react'
import {Link} from "react-router-dom"
function Ayar() {
    return (
        <div className="ayar">
            <b>Sayfalar</b>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/connect-router">Connect Router</Link>
            <Link to="/overview">Overview</Link>
            <Link to="/account-settings">Account Settingss</Link>
            <Link to="/statistic">Statistic</Link>
            <Link to="/stats">Stats</Link>
            <Link to="/edit-sensor">Edit sensor</Link>


        </div>
    )
}

export default Ayar
