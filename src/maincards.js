import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';
import { useRef } from 'react';
// import { EffectFade } from 'swiper';
function Maincards(props) {
     const maincol = useRef();

     // if (SwiperSlide === 8) {
     //      maincol.current.style.Width = "260px"
     // }

     return (
          <div>
               <div className='big_container responsive_big_container more_crd'>
                    <div className='d-flex justify_spc_btwn align_cntr'>
                         <div className='main_crd_res_head'>
                              <h2>
                                   {props.heading}
                                   <span className="mergers_desk_display">{props.heading2}</span>
                                   <span className="mergers_respons_display">
                                        {props.heading3}
                                   </span>
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
                    <div className='maincard_col' ref={maincol}>
                         <Swiper
                              breakpoints={{
                                   340: {
                                        slidesPerView: 1,
                                        // spaceBetween: 20,
                                   },
                                   768: {
                                        slidesPerView: 2,
                                        // spaceBetween: 20,
                                   },
                                   1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 10,
                                   },
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
                              autoplay={true}
                              stopOnLastSlide={true}
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
          </div>

     )
}

export default Maincards

