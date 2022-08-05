import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';
import Onemaincard from './onemaincard';
import Premium from './premium';
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
                                    {/* if (index === 0) return null; */ }
                                    return (
                                        <SwiperSlide>
                                            <div className='rltiv'>
                                                {item.premium === "1" ? <Premium premium="premium_tag prmum_tag_vcc" /> : null}
                                                <Onemaincard

                                                    // edcls="slidr_eachcrd main_crds_box"
                                                    crd_img="manfact_crd_img vccpmium_span vccpri_img"
                                                    src={item.file_url}
                                                    imgcls='brdr_rdus'
                                                    width="100%"
                                                    cntncls="vccpremium_img_txt"
                                                    // para="slidr_text"
                                                    // authdet="slidr_author"
                                                    heading={item.industry_details[0].name}
                                                    title={item.title}
                                                    publish={item.publish}
                                                    author={item.author_details[0].name}
                                                />
                                            </div>
                                            {/* <div>
                                                <div className='manfact_crd_img vccpmium_span' style={{ height: "145px" }}>
                                                    <img src={item.src} alt="" />
                                                    <span>PREMIUM</span>
                                                </div>
                                                <div className='vccpremium_img_txt'>
                                                    <h5>{item.vchead}</h5>
                                                    <p>{item.para}</p>
                                                    <span>{item.author}</span>
                                                </div>
                                            </div> */}
                                        </SwiperSlide>
                                    )
                                })}
                                {/*  */}
                                {/* </div>  */}
                            </div>
                        </div>
                    </Swiper>
                </div>
                <div className='subscribe_btn_respon'>
                    <button className='sub_btn'>SUBSCRIBE</button>
                </div>
            </div>
        </div>

        {/* Upcoimg events */}

        {/* <div className='big_container'>
            <div className='d-flex justify_spc_btwn align_cntr'>
                <div className=''>
                    <h2>
                        Upcoming Events
                    </h2>
                </div>
                <div>
                    <p>
                        View more <img src="./img/Iconright.svg" alt="" />
                    </p>
                </div>
            </div>

            <div className="d-flex justify_spc_btwn flex_rap">
                <div className="d-flex justify_spc_btwn align_cntr evnts_blocks">
                    <div>
                        <img src="./img/limited.png" alt="limited" />
                    </div>
                    <div className="evnts_txt">
                        <h4>Limited Partners Summit 2022</h4>
                        <p>Hyatt Regency, New Delhi | New Hybrid Masterclass.</p>
                    </div>
                </div>
                <div className="d-flex justify_spc_btwn align_cntr evnts_blocks">
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
                </div>
            </div>
        </div> */}


    </>
    )
}

export default Vccpremium