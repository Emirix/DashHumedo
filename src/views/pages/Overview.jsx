import React,{useState,useCallback, useEffect} from 'react'
import { Line as LineChart } from "react-chartjs-2";
import Header from '../component/Header';
import Pil from '../component/Pil';
import '@natscale/react-calendar/dist/main.css';
import { Calendar } from '@natscale/react-calendar';


function Overview() {
  const [tarih, setTarih] = useState();

  useEffect(()=>{
 
   
    document.querySelectorAll(".arc_view_weekdays_cell span").forEach(e=>{
      e.innerHTML = e.innerText.charAt(0)
    })
  },[])

  const tarihChange = useCallback(
    (value) => {
      setTarih(value);
    },
    [setTarih],
  );

    const data2 = (canvas) => {
        const ctx = canvas.getContext("2d")
        const gradient = ctx.createLinearGradient(0,0,0,400);
        gradient.addColorStop(0, 'rgba(3,218,197,1)');   
        gradient.addColorStop(1, 'rgba(28,88,100,1)');
          return {
              
            scaleFontColor: "white",

              labels: ["30","20","20","20","20","2"],
              datasets: [
                {
                    scaleStepWidth: 1,

                  fill: true,
                  lineTension: 0.5,
                  backgroundColor: gradient,
                  borderColor: "#30a8bb",
                  borderWidth: 1,
                  borderJoinStyle: "miter",
                  borderCapStyle: "butt",
                  pointBackgroundColor: "#51d7bf",
                  pointBorderColor: "#51d7bf",
                  pointBorderWidth: 1,
                  pointRadius: 0.3,
                  pointHoverRadius: 10,
                  borderWidth: 3,
                  data: [50,100,20,74,20,0],
                  
                },
              ]
          }
        }


    return (
        <div className="ov">
             <Header title="Overview"/>
             <div className="mb-3"></div>
             <div className="overview-top">
               <div className="sol">

               <div className="sp box">
                   <div className="box__title parlat">Router</div>
                   <div className="box__sag">
                     <Pil val={20}/>
                     <div className="info">
                       <span>53%</span>
                       <img src="svg/damla.svg" alt="" />
                     </div>

                     <div className="info">
                       <span>23°</span>
                       <img src="svg/wind.svg" alt="" />
                     </div>

                     <div className="info">
                       <span>15min</span>
                       <img src="svg/saat.svg" alt="" />
                     </div>
                   </div>
                 </div>
                 
                 <div className="sp box">
                   <div className="box__title parlat">Bedroom</div>
                   <div className="box__sag">
                     <Pil val={90}/>
                     <div className="info">
                       <span>53%</span>
                       <img src="svg/damla.svg" alt="" />
                     </div>

                     <div className="info">
                       <span>23°</span>
                       <img src="svg/wind.svg" alt="" />
                     </div>

                     <div className="info">
                       <span>15min</span>
                       <img src="svg/saat.svg" alt="" />
                     </div>
                   </div>
                 </div>

                 <div className="sp box">
                   <div className="box-y-center">
                   <div className="box__title block-self sari">Alarm <img src="svg/zil.svg" alt="" /></div>
                   <div className="box__title parlat">Humidor</div>
                   </div>
                   <div className="box__sag">
                     <Pil val={20}/>
                     <div className="info">
                       <span>53%</span>
                       <img src="svg/damla.svg" alt="" />
                     </div>

                     <div className="info">
                       <span>23°</span>
                       <img src="svg/wind.svg" alt="" />
                     </div>

                     <div className="info">
                       <span>15min</span>
                       <img src="svg/saat.svg" alt="" />
                     </div>
                   </div>
                 </div>
               
                 <div className="sp box">
                   
                   <div className="box__sag">
                     </div>
                 </div>
               
               </div>
               <div className="sag sp">
                 <div className="takvim ">
                 <Calendar size={250} lockView={true} value={tarih} onChange={tarihChange} />
                 <div className="takvim-copyright">2020 | Húmedo</div>
                 </div>
               </div>
             </div>
        </div>
    )
}

export default Overview
