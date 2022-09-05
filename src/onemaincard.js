import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import Premium from './premium'

function Onemaincard(props) {
     return (

          <div className={props.Mcls} >
               <div className={props.edcls}>
                    <div className={props.crd_img}>
                         <Link to={props?.imgslug || " "}>

                              {props.src ? (<img src={props.src} alt=" " className={props.imgcls} width={props.width} height={props.height} />) : <img src="./img/noimg.webp" alt=" " className={props.imgcls} width={props.width} height={props.height} />}
                              {props.premium === "1" ? <Premium premium="premium_tag prmum_tag_vcc" /> : null}
                         </Link>

                    </div>
                    <div className={props.cntncls}>
                         <Link to={props?.headingslug || " "}>
                              <h5>{props.heading}</h5>
                         </Link>

                         <p className={props.para}>
                              <Link to={props?.titleslug || " "}>
                                   {props.title}
                              </Link>
                         </p>
                         <ul className={props.athordetails}>
                              <li className={props.authdet}>{moment(props.publish).format("Do MMM  ")}</li>
                              <Link to={props?.authornameslug || ""}>
                                   <li className={props.aotho}>{props.author}</li>
                              </Link>

                              <li className={props.plusone}> {props.one}</li>
                              <li className={props.nameshow}>{props.incrval}</li>
                         </ul>

                         {/* <span className={props.authdet}>{moment(props.publish).format("Do MMM YYYY ")}</span>
                         <span className='dot'></span>
                         <span className={props.authdet}>{props.author}</span>
                         <span className={props.plusone}> {props.one} </span>
                         <span className={props.nameshow}>{props.incrval}</span> */}
                    </div>
               </div>
          </div>
     )
}

export default Onemaincard