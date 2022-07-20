import React from 'react'
import Advertisment from './advertisment'

export default function Manufacturing() {
    return (
        <>
            <div className='big_container'>
                <div className='d-flex manufact_banner justify_spc_btwn flex_drct_clum'>
                    <div className='manufact_info manufact_resinfo'>
                        <h5>
                            Manufacturing
                        </h5>
                        <h1>
                            Warburg Pincus set to acquire majority stake in auto parts maker
                        </h1>
                        <p>
                            Private equity firm TPG, which is reportedly heading towards a public listing, said on Thursday it had appointed long-time company executive Todd Sisitsky as president, effective immediately.
                        </p>
                        <span>30 September</span>
                        <span className='dot'></span>
                        <span >Madhurima Nandy</span>
                        <p><button className='btn'>READ MORE</button></p>
                    </div>
                    <div className='manufact_respimg big_fact_respimg'>
                        <img src="./img/Manufacturing.png" alt="" />
                    </div>
                </div>


                {/* sudhir respons ad start*/}

                <div className=''>
                    <div className='res_display '>
                        <div className='ed_pop res_ed_pop_sudhir'>
                            <div className='ad_bg'>
                                <h5 className='ad_head'>Advertisment</h5>
                                <div className='ad_img'>
                                    <img src="./img/sudhir2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* sudhir respons ad end */}

                <div className='d-flex justify_spc_btwn manufact-sm-card flex_rap'>
                    <div className='manfact_crd responsive_manfact_crd'>
                        <div className='manfact_crd_img manufact_respimg'>
                            <img src="./img/economy.png" alt="" />
                            <span className='respons_premium'>PREMIUM</span>
                        </div>
                        <div className='mnfact_crd_info_respon'>
                            <h5>ECONOMY</h5>
                            <p>Indian shares snap 5-day rally on weak global cues, post weekly gain</p>
                            <span>30 September</span>
                            <span className='dot'></span>
                            <span >Madhurima Nandy +1</span>
                        </div>
                    </div>


                    <div className='manfact_crd responsive_manfact_crd'>
                        <div className='manfact_crd_img manufact_respimg'>
                            <img src="./img/finance.png" alt="" />
                            <span className='respons_premium'>PREMIUM</span>
                        </div>
                        <div className='mnfact_crd_info_respon'>
                            <h5>FINANCE</h5>
                            <p>Paytm to shut Canada B2C app amid eroding market capitalisation</p>
                            <span>30 September</span>
                            <span className='dot'></span>
                            <span >Madhurima Nandy</span>
                        </div>
                    </div>

                    <div className='manfact_crd manufact_respimg responsive_manfact_crd '>
                        <div>
                            <img src="./img/consumer.png" alt="" />
                        </div>
                        <div className='mnfact_crd_info_respon'>
                            <h5>CONSUMER</h5>
                            <p>Exclusive: PE-backed sauce maker Wingreens acquires Lok Capital-backed cereal maker</p>
                            <span>30 September</span>
                            <span className='dot'></span>
                            <span >Madhurima Nandy +3</span>

                        </div>
                    </div>
                    <div className='manfact_crd responsive_manfact_crd'>
                        <div className='manfact_crd_img manufact_respimg '>
                            <img src="./img/economyblock.png" alt="" />
                            <span className='respons_premium'>PREMIUM</span>
                        </div>
                        <div className='mnfact_crd_info_respon'>
                            <h5>ECONOMY</h5>
                            <p>GLOBAL MARKETS-European shares in the red after hawkish Fed comments</p>
                            <span>30 September</span>
                            <span className='dot'></span>
                            <span >Madhurima Nandy</span>
                        </div>
                    </div>
                </div>
            </div>
            <Advertisment img="./img/adv2.png" width="100%" />

            <div className='big_container'>
                <div className='res_display '>
                    <div className='ed_pop res_ed_pop_sudhir'>
                        <div className='ad_bg'>
                            <h5 className='ad_head'>Advertisment</h5>
                            <div className='ad_img'>
                                <img src="./img/sudhir2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
