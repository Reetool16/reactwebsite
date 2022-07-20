import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';

function Upevent(props) {
     return (

          <div className='big_container'>
               <div>
                    <div className='d-flex justify_spc_btwn align_cntr'>
                         <div className='Upevent_heading'>
                              <h2>
                                   Upcoming Events
                              </h2>
                         </div>
                         <div className='Upevent_heading'>
                              <p>
                                   View more <img src="./img/Iconright.svg" alt="" />
                              </p>
                         </div>
                    </div>

                    <Swiper

                         effect='Cube'
                         // - Coverflow
                         // - Flip
                         // - Cards
                         // - Creative
                         modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
                         spaceBetween={10}
                         slidesPerView={3}
                         navigation
                         pagination={{ clickable: true }}
                         scrollbar={{ draggable: true }}
                         onSwiper={(swiper) => console.log(swiper)}
                         onSlideChange={() => console.log('slide change')}>
                         <div className="d-flex justify_spc_btwn flex_rap">

                              {props.info.map((item) => {
                                   return (
                                        <div>
                                             <SwiperSlide>
                                                  <div className='upcoimg_desk_'>
                                                       <div className="d-flex justify_spc_btwn align_cntr evnts_blocks ">
                                                            <div>
                                                                 <img src={item.src} alt="limited" />
                                                            </div>
                                                            <div className="evnts_txt">
                                                                 <h4>{item.heading}</h4>
                                                                 <p>{item.txt}</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </SwiperSlide>
                                        </div>
                                   )
                              }

                              )}


                              {/* <div className="d-flex justify_spc_btwn align_cntr evnts_blocks">
                                   <div>
                                        <img src="./img/cloud.png" alt="cloud" />
                                   </div>
                                   <div className="evnts_txt">
                                        <h4>Cloud- The Digital Infrastructure</h4>
                                        <p>
                                             Hyatt Regency, New Delhi | New Hybrid Masterclass.
                                        </p>
                                   </div>
                              </div>
                              <div className="d-flex justify_spc_btwn align_cntr evnts_blocks">
                                   <div>
                                        <img src="./img/trust.png" alt="trust" />
                                   </div>
                                   <div className="evnts_txt">
                                        <h4>FUTURE OF TRUST</h4>
                                        <p>
                                             Hyatt Regency, New Delhi | New Hybrid Masterclass.
                                        </p>
                                   </div>
                              </div> */}
                         </div>
                    </Swiper>
               </div>
          </div>

     )
}

export default Upevent