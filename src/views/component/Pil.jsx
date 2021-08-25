import React from 'react'

function Pil({val}) {
    return (
        <div className="pil">
            <div className="pil__sol">
                <div className="cubuk" style={{width:val+"%"}}></div>
            </div>
            <div className={val == 100 ? "pil__sag bg-white":"pil__sag"} ></div>
        </div>
    )
}

export default Pil
