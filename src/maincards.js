import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';
// import { EffectFade } from 'swiper';
function Maincards(props) {


     return (
          <div>
               <div className='big_container responsive_big_container more_crd'>
                    <div className='d-flex justify_spc_btwn align_cntr'>
                         <div className='main_crd_res_head'>
                              <h2>
                                   {props.heading}
                              </h2>
                         </div>
                         <div className='main_crd_res_head'>
                              <p>
                                   View more <img src="./img/Iconright.svg" alt="" />
                              </p>
                         </div>
                    </div>


                    {/* <div className='d-flex justify_spc_btwn manufact-sm-card flex_rap'>
                         {props.info.map((item) => {
                              return (
                                   <div className='manfact_crd main_crds_box respon_crds_box'>
                                        <div className='manfact_crd_img'>
                                             <img src={item.src} alt="" width="100%" /> */}
                    {/* <span>PREMIUM</span> */}
                    {/* </div> */}
                    {/* <h5>{item.heading}</h5> */}
                    {/* <p>{item.para}</p>
                                        <span>{item.author}</span> */}
                    {/* <span>{item.customer}</span> */}
                    {/* </div> */}
                    {/* )
                         })}
                    </div> */}
                    <Swiper
                         breakpoints={{

                              768: {
                                   width: 768,
                                   slidesPerView: 2,
                              }
                         }
                         }
                         // effect='fade'
                         // effect='Cube'
                         // - Coverflow
                         // - Flip
                         // - Cards
                         // - Creative
                         modules={[Navigation, Pagination, Scrollbar, A11y]}
                         spaceBetween={10}
                         slidesPerView={4}
                         navigation
                         pagination={{ clickable: true }}
                         scrollbar={{ draggable: true }}
                         onSwiper={(swiper) => console.log(swiper)}
                         onSlideChange={() => console.log('slide change')}>

                         <div className=''>
                              <div className=''>
                                   {props.info.map((item) => {
                                        return (
                                             <SwiperSlide>
                                                  <div className='slidr_eachcrd main_crds_box'>
                                                       <div className='slidr_primum'>
                                                            <img src={item.src} alt="" />
                                                            <span>Premium</span>
                                                       </div>

                                                       <p className="slidr_text">{item.para}</p>
                                                       <span className="slidr_author">{item.author}</span>
                                                  </div>
                                             </SwiperSlide>
                                        )
                                   })}
                              </div>

                         </div>
                    </Swiper>
               </div>
          </div>

     )
}

export default Maincards

