import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';
import Onemaincard from './onemaincard';
// import Premium from './premium';
function Vccpremium(props) {
    return (<>
        {props.item.stories_list ?
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
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                400: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 20,
                                },
                                480: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 20,
                                },
                                576: {
                                    slidesPerView: 2,
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
                                    slidesPerView: 3.5,
                                    spaceBetween: 50,
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                }
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
                                                        nameshow="slidr_author shwNme"
                                                        plusone="slidr_author plusONE"
                                                        heading={item.industry_details[0].name}
                                                        headingslug={item.industry_details[0].name}
                                                        title={item.title}
                                                        titleslug={item.slug}
                                                        publish={item.publish}
                                                        authdet="manufact_authordate"
                                                        aotho="manufact_author"
                                                        author={item.author_details[0].name}
                                                        authornameslug={item.author_details[0].slug}
                                                        athordetails="d-flex align_item fllex_wrrp"
                                                        incrval={item.author_details.length > 1 ? item.author_details[1].name : " "}
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
                    <div className='subscribe_btn_respon'>
                        <button className='sub_btn'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>



            : null}
    </>
    )
}

export default Vccpremium