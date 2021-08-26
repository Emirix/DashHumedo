import React,{useState} from 'react'
    import Header from '../component/Header'
import Slider from '@material-ui/core/Slider';
import Pil from '../component/Pil';
import Switch from "react-switch";

function EditSensor() {

    const [humidityVal,setHumidityVal] = useState(20);
    const [humidityMin,setHumidityMin] = useState(40);
    const [humidityMax,setHumidityMax] = useState(10);

    const [tMin,setTMin] = useState(40);
    const [tMax,setTMax] = useState(10);

    const [c1,s1] = useState(true);
    const [c2,s2] = useState(false);
    const [c3,s3] = useState(true);
    const [c4,s4] = useState(true);

    React.useEffect(()=>{
      /*  if(c1 == false){
            s2(false)
            s3(false)
            s4(false)
            s1(false)
        }

        if(c2==true||c3==true||c4==true){
            s1(true)
        }*/

    },[c1,c2,c3,c4])



    const handleChange = (event, newValue) => {
        setHumidityVal(newValue);
      };
    return (
        <div className="center">
            <div className="register"><Header title="Edit Sensor"/>

                    <div className="d-flex mt-3">
                       <div className="w-40">
                            <label htmlFor="" className="rt">Sensor Name</label>
                            <input type="text " className="w-100" />
                       </div>

                       <div className="w-40">
                           <div className="edit-pilsensor">
                               <span>Sensor</span>
                               <Pil/>
                           </div>
                           <div className="badge badge-mavi w-70 ml-auto">Connected</div>
                       </div>
                    </div>


                <div className="slider-container mt-3">
                    <div className="slider-container__flex">
                        <div className="title">Intervall</div>
                        <div className="val">{humidityVal} min <img src="svg/saat.svg" alt="" /></div>
                    </div>
                    <Slider  value={humidityVal} onChange={handleChange} aria-labelledby="continuous-slider" />
                   
                </div>


                <div className="rt mt-3">Out of Range Alerts</div>
                <div className="slider-container mt-1">
                    <div className="slider-container__flex">
                        <div className="title">Humidity</div>
                        <div className="val">{humidityMin}% -  {humidityMax}% <img src="svg/damla.svg" alt="" /></div>
                    </div>
                    <div className="min-max">min</div>
                    <Slider max={humidityMax} step={10} value={humidityMin} onChange={(e,v) => setHumidityMin(v)} aria-labelledby="continuous-slider" />
                    <div className="min-max">max</div>
                    <Slider min={humidityMin} step={10} value={humidityMax} onChange={(e,v) => setHumidityMax(v)} aria-labelledby="continuous-slider" />
                   
                </div>



                <div className="slider-container mt-1">
                    <div className="slider-container__flex">
                        <div className="title">Temperature</div>
                        <div className="val">{tMin}% -  {tMax}% <img src="svg/wind.svg" alt="" /></div>
                    </div>
                    <div className="min-max">min</div>
                    <Slider max={tMax} step={10} value={tMin} onChange={(e,v) => setTMin(v)} aria-labelledby="continuous-slider" />
                    <div className="min-max">max</div>
                    <Slider min={tMin} step={10} value={tMax} onChange={(e,v) => setTMax(v)} aria-labelledby="continuous-slider" />
                </div>

                <div className="mt-3">
                <div className="rt">Notifications</div>
                <div className="d-flex  mt-1">
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
          <div className="swi-rt">Enable</div>

        

          
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
          <div className="swi-rt">Desktop</div>

        

          
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
          <div className="swi-rt">SMS</div>

        

          
                    </div>


                    <div className={c4 ? "swi" : "swi-de"}>
                    <Switch
            checked={c4}
            onChange={()=>{s4(!c4)}}
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
          <div className="swi-rt">E-Mail</div>

        

          
                    </div>
                </div>
            </div>

            <div className="btn mt-3">Back</div>
            
          
            
            </div>
        </div>
    )
}

export default EditSensor
