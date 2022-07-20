import React from 'react'

export default function Twitter() {
    return (
        <>
            <section className="twitter_section">
                <div className="big_container ">
                    <div className="d-flex justify_spc_btwn res_twitter_sec ">
                        <div className='twitter_img brdr_line'>
                            <img src="./img/twitter.png" alt="" />
                            <div className='twitter_img_txt'>
                                <span>VCCircle.com</span>
                                <p>
                                    World Bank arm IFC to double down its investments into funds in 2022
                                </p>
                            </div>
                        </div>

                        <div className='infographic_img brdr_line'>
                            <h1>Infographic</h1>
                            <img src="./img/Infographic.png" alt="" />
                        </div>

                        <div className='ed_pop restwo_sudhir twiter_sudhir_responsive '>
                            <div className='ad_bg'>
                                <h5 className='ad_head'>Advertisment</h5>
                                <div className='ad_img'>
                                    <img src="./img/sudhir.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style={{ backgroundColor: '#e3e3e3', marginTop: "45px" }} />
                </div>

            </section>

        </>
    )
}
