import React, { useState } from "react";
import Header from "../component/Header";
import Switch from "react-switch";

function AS() {
  const [c1, s1] = useState(true);
  const [c2, s2] = useState(false);
  const [c3, s3] = useState(false);
  const [c4, s4] = useState(true);
  return (
    <div className="center">
      <div className="register">
        <Header title="Account Settings" />
        <div className="register-form mt-5">
          <form action="">
            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="">E-Mail</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="">WiFi Name</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="text" />
            </div>

            <div className="rt">Notification</div>
            <div className="form-group mt-1">
              <label htmlFor="">E-Mail</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="">Phone Number</label>
              <input type="text" />
            </div>

            <button className="badge badge-mavi badge-btn">Add New</button>
          </form>
          <div className="sag text-center">
            <div className="rt">Router</div>
            <div className="badge badge-mavi ">connected</div>
          </div>
        </div>
        <div className="mt-3">
          <div className="rt">Connection Mode</div>
          <div className="d-flex w-50 mt-1">
            <div className={c1 ? "swi" : "swi-de"}>
              <Switch
                checked={c1}
                onChange={() => {
                  s1(!c1);
                }}
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
                onChange={() => {
                  s2(!c2);
                }}
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
                onChange={() => {
                  s3(!c3);
                }}
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

        <div className="mt-3">
            <div className="d-flex"><div className="rt">Advanced Mode</div>  <Switch      checked={c4}
                onChange={() => {
                  s4(!c4);
                }}
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
                width={30}/></div>
        </div>

        <div className={ c4 ? "register-form mt-3"  : "d-none"}>
            <form action="">

            <div className="form-group">
              <label htmlFor="">User</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="">Server</label>
              <input type="text" />
            </div>

            </form>
        </div>        <div className="btn mb-1 mt-1">submit Settings</div>

      </div>
    </div>
  );
}

export default AS;
