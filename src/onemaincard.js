import React from 'react'

function Onemaincard(props) {
     return (

          <div className={props.Mcls} >
               <div className={props.edcls}>
                    <div className={props.crd_img}>
                         <img src={props.src} alt=" " className={props.imgcls} width={props.width} />
                    </div>
                    <div className={props.cntncls}>
                         <h5>{props.heading}</h5>
                         <p className={props.para}>{props.title}</p>
                         <span className={props.authdet}>{props.publish}</span>
                         <span className='dot'></span>
                         <span className={props.authdet}>{props.author}</span>
                    </div>
               </div>
          </div>
     )
}

export default Onemaincard