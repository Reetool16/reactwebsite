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
                              <img src={props.src} alt=" " className={props.imgcls} width={props.width} height={props.height} />
                              {props.premium === "1" ? <Premium premium="premium_tag prmum_tag_vcc" /> : null}
                         </Link>
                         {/* {props.premium === "1" ? <Premium premium="premium_tag prmum_tag_vcc" /> : null} */}
                    </div>
                    <div className={props.cntncls}>
                         <Link to={props?.headingslug || " "}>
                              <h5>{props.heading}</h5>
                         </Link>

                         <p className={props.para}>
                              <Link to={props?.titleslug || " "}>
                                   {props.title}
                              </Link></p>
                         <span className={props.authdet}>{moment(props.publish).format("Do MMM YYYY ")}</span>
                         <span className='dot'></span>
                         <span className={props.authdet}>{props.author}</span>
                    </div>
               </div>
          </div>
     )
}

export default Onemaincard