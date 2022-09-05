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


     return (
          <>
               {props.item.stories_list[0] ?
                    <div className='slider_top'>
                         <div className='big_container responsive_big_container more_crd' key={props.item.stories_list[0].feid}>
                              <div className='d-flex justify_spc_btwn align_cntr slid_heading'>
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
                                             320: {
                                                  slidesPerView: 1,
                                                  spaceBetween: 20,
                                             },
                                             360: {
                                                  slidesPerView: 1.5,
                                                  spaceBetween: 20,
                                             },
                                             400: {
                                                  slidesPerView: 1.8,
                                                  spaceBetween: 20,
                                             },
                                             480: {
                                                  slidesPerView: 1.8,
                                                  spaceBetween: 20,
                                             },
                                             576: {
                                                  slidesPerView: 2.3,
                                                  spaceBetween: 20,
                                             },
                                             768: {
                                                  slidesPerView: 3,
                                                  spaceBetween: 20,
                                             },
                                             876: {
                                                  slidesPerView: 3.2,
                                                  spaceBetween: 10,
                                             },
                                             1024: {
                                                  slidesPerView: 4.2,
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
                                        slidesPerView={4.2}
                                        autoplay={true}
                                        stopOnLastSlide={true}
                                        navigation
                                        pagination={{ clickable: true }}
                                        scrollbar={{ draggable: true }}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        onSlideChange={console.log("onSlideChange")}>

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
                                                                           authdet="manufact_authordate"
                                                                           aotho="manufact_author"
                                                                           nameshow="slidr_author shwNme"
                                                                           plusone="slidr_author plusONE"
                                                                           // heading={item.industry_details[0].name}
                                                                           title={item.title}
                                                                           publish={item.publish}
                                                                           author={item.author_details[0].name}
                                                                           incrval={item.author_details.length > 1 ? item.author_details[1].name : " "}
                                                                           athordetails="d-flex align_item fllex_wrrp"
                                                                           one={item.author_details.length > 1 ? "+1" : null}
                                                                      />

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
                    : null}
          </>

     )
}

export default Maincards

