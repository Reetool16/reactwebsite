import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';
import { useRef } from 'react';
// import { EffectFade } from 'swiper';
import Onemaincard from './onemaincard';
// import Premium from './premium';
function Maincards(props) {
     const maincol = useRef();

     // if (SwiperSlide === 8) {
     //      maincol.current.style.Width = "260px"
     // }

     return (
          <div>
               <div className='big_container responsive_big_container more_crd' key={props.item.stories_list[0].feid}>
                    <div className='d-flex justify_spc_btwn align_cntr'>
                         <div className='main_crd_res_head'>
                              <h2>
                                   {props.item.section_name}
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



                    <div className='maincard_col' ref={maincol}>
                         <Swiper
                              breakpoints={{
                                   340: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
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



                                        {props.item.stories_list.map((item, index) => {

                                             return (
                                                  <SwiperSlide>
                                                       <div className='rltiv'>
                                                            <Onemaincard

                                                                 edcls="slidr_eachcrd main_crds_box"
                                                                 crd_img="slidr_primum"
                                                                 src={item.file_url}
                                                                 premium={item.premium}
                                                                 imgslug={item.slug}
                                                                 imgcls='brdr_rdus'
                                                                 width="100%"
                                                                 cntncls=""
                                                                 para="slidr_text"
                                                                 authdet="slidr_author"
                                                                 // heading={item.industry_details[0].name}
                                                                 title={item.title}
                                                                 publish={item.publish}
                                                                 author={item.author_details[0].name}
                                                            />

                                                       </div>
                                                  </SwiperSlide>

                                             )
                                        })}
                                        {/* <div className='slidr_eachcrd main_crds_box'>
                                                  <div className='slidr_primum'>
                                                       <img src={props.item.stories_list[0].file_url} alt="" />
                                                       <span>Premium</span>
                                                  </div>

                                                  <p className="slidr_text">{props.item.stories_list[0].title}</p>
                                                  <span className="slidr_author">{props.item.stories_list[0].author_details[0].name}</span>
                                             </div> */}
                                        {/* <div className='slidr_eachcrd main_crds_box'>
                                                  <div className='slidr_primum'>
                                                       <img src={props.item.stories_list[0].file_url} alt="" />
                                                       <span>Premium</span>
                                                  </div>

                                                  <p className="slidr_text">{props.item.stories_list[0].title}</p>
                                                  <span className="slidr_author">{props.item.stories_list[0].author_details[0].name}</span>
                                             </div> */}
                                        {/* <div className='slidr_eachcrd main_crds_box'>
                                                  <div className='slidr_primum'>
                                                       <img src={props.item.stories_list[0].file_url} alt="" />
                                                       <span>Premium</span>
                                                  </div>

                                                  <p className="slidr_text">{props.item.stories_list[0].title}</p>
                                                  <span className="slidr_author">{props.item.stories_list[0].author_details[0].name}</span>
                                             </div> */}
                                        {/* <div className='slidr_eachcrd main_crds_box'>
                                                  <div className='slidr_primum'>
                                                       <img src={props.item.stories_list[0].file_url} alt="" />
                                                       <span>Premium</span>
                                                  </div>

                                                  <p className="slidr_text">{props.item.stories_list[0].title}</p>
                                                  <span className="slidr_author">{props.item.stories_list[0].author_details[0].name}</span>
                                             </div> */}


                                   </div>

                              </div>
                         </Swiper>
                    </div>

               </div >
          </div >

     )
}

export default Maincards

