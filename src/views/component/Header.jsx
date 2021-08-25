import React from 'react'

function Header({title}) {
    return (
        <div className="mini-header">
            <div className="burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className="title">{title}</div>
        </div>
    )
}

export default Header
