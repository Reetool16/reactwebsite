import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';

function Vccpremium(props) {
    return (<>
        <div className='vccpremium'>
            <div className='big_container'>
                <div className='d-flex justify_spc_btwn align_cntr'>
                    <div className='vccprim_had'>
                        <h2>
                            VCCircle Premium <img src="./img/crown.png" alt="" />
                        </h2>
                    </div>
                    <div className='subscribe_btn_desk'>
                        <button className='sub_btn'>SUBSCRIBE</button>
                    </div>
                </div>


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
                        <div className=''>
                            {props.info.map((item) => {
                                return (
                                    <SwiperSlide>
                                        <div>
                                            <div className='manfact_crd_img vccpmium_span' style={{ height: "145px" }}>
                                                <img src={item.src} alt="" />
                                                <span>PREMIUM</span>
                                            </div>
                                            <div className='vccpremium_img_txt'>
                                                <h5>{item.vchead}</h5>
                                                <p>{item.para}</p>
                                                <span>{item.author}</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/*  */}
                            {/* </div>  */}
                        </div>
                    </div>
                </Swiper>

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