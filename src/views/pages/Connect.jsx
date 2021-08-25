import React,{useState} from 'react'
import Header from '../component/Header'
import Switch from "react-switch";

function Connect() {

    const [c1,s1] = useState(true)
    const [c2,s2] = useState(false)
    const [c3,s3] = useState(false)

    return (
        <div className="center">
            <div className="register">
            <Header title="connect Router"/>
            <div className="register-form">
                <form action="" className="mt-5">
                    <div className="form-group">
                        <label htmlFor="">Router Name</label>
                        <input type="text" placeholder=""/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">IMEI No.</label>
                        <input type="text" placeholder=""/>
                    </div>

                    <div className="rt mt-3  ">Notification</div>
                    <div className="form-group  mt-1">
                        <label htmlFor="">E-Mail</label>
                        <input type="text" placeholder=""/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Phone Number</label>
                        <input type="text" placeholder=""/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">WiFi Name</label>
                        <input type="text" placeholder=""/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder=""/>
                    </div>
                </form>
            </div>
            
            <div className="mt-3">
                <div className="rt">Connection Mode</div>
                <div className="d-flex w-50 mt-1">
                    <div className={c1 ? "swi" : "swi-de"}>
                    <Switch
            checked={c1}
            onChange={()=>{s1(!c1)}}
            onColor="#2a6f71"
            onHandleColor="#06c1af"
            offColor="#60676e"
            offHandleColor="#60686f"
            

            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
           
            boxShadow=""
            activeBoxShadow="0px 0px 1px 10px #2a6f72"
            height={10}
            width={30}
           
          />
          <div className="swi-rt">WiFi</div>

        

          
                    </div>

                    <div className={c2 ? "swi" : "swi-de"}>
                    <Switch
            checked={c2}
            onChange={()=>{s2(!c2)}}
            onColor="#2a6f71"
            onHandleColor="#06c1af"
            offColor="#60676e"
            offHandleColor="#60686f"
            

            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
           
            boxShadow=""
            activeBoxShadow="0px 0px 1px 10px #2a6f72"
            height={10}
            width={30}
           
          />
          <div className="swi-rt">Bluetooth</div>

        

          
                    </div>

                    <div className={c3 ? "swi" : "swi-de"}>
                    <Switch
            checked={c3}
            onChange={()=>{s3(!c3)}}
            onColor="#2a6f71"
            onHandleColor="#06c1af"
            offColor="#60676e"
            offHandleColor="#60686f"
            

            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
           
            boxShadow=""
            activeBoxShadow="0px 0px 1px 10px #2a6f72"
            height={10}
            width={30}
           
          />
          <div className="swi-rt">LTE</div>

        

          
                    </div>
                </div>
            </div>
            
            <button className="btn mt-1 mb-1">connect Router</button>
            </div>

            
        </div>
    )
}

export default Connect
