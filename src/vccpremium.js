import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';
import Onemaincard from './onemaincard';
// import Premium from './premium';
function Vccpremium(props) {
    return (<>
        <div className='vccpremium' key={props.item.stories_list.feid}>
            <div className='big_container'>
                <div className='d-flex justify_spc_btwn align_cntr'>
                    <div className='vccprim_had'>
                        <h2>
                            {props.item.section_name}<img src="./img/crown.png" alt="" />
                        </h2>
                    </div>
                    <div className='subscribe_btn_desk'>
                        <button className='sub_btn'>SUBSCRIBE</button>
                    </div>
                </div>


                <div className="kalupri">

                    <Swiper
                        breakpoints={{
                            340: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        effect='Cube'
                        // - Coverflow
                        // - Flip
                        // - Cards
                        // - Creative
                        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
                        spaceBetween={10}
                        slidesPerView={4}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}>

                        <div className='d-flex justify_spc_btwn  '>
                            <div className='vcckalupri'>
                                {props.item.stories_list.map((item, index) => {

                                    return (
                                        <SwiperSlide>
                                            <div className='rltiv'>

                                                <Onemaincard

                                                    // edcls="slidr_eachcrd main_crds_box"
                                                    crd_img="manfact_crd_img vccpmium_span vccpri_img"
                                                    src={item.file_url}
                                                    premium={item.premium}
                                                    imgcls='brdr_rdus'
                                                    imgslug={item.slug}
                                                    width="100%"
                                                    cntncls="vccpremium_img_txt"
                                                    // para="slidr_text"
                                                    // authdet="slidr_author"
                                                    heading={item.industry_details[0].name}
                                                    headingslug={item.industry_details[0].name}
                                                    title={item.title}
                                                    titleslug={item.slug}
                                                    publish={item.publish}
                                                    author={item.author_details[0].name}
                                                />
                                            </div>

                                        </SwiperSlide>
                                    )
                                })}

                            </div>
                        </div>
                    </Swiper>
                </div>
                <div className='subscribe_btn_respon'>
                    <button className='sub_btn'>SUBSCRIBE</button>
                </div>
            </div>
        </div>




    </>
    )
}

export default Vccpremium