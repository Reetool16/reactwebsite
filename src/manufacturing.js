import React from 'react'
import Advertisment from './advertisment'
// import axios from 'axios'
import Onemaincard from './onemaincard'

export default function Manufacturing(props) {


    return (
        <>
            <div className='big_container' key={props.item.stories_list.feid}>
                <div className='d-flex manufact_banner justify_spc_btwn flex_drct_clum'>
                    <div className='manufact_info manufact_resinfo'>
                        <h5>
                            {/* Manufacturing */}
                            {props.item.stories_list[0].industry_details[0].name.toUpperCase()}
                        </h5>
                        <h1>
                            {/* Warburg Pincus set to acquire majority stake in auto parts maker */}
                            {props.item.stories_list[0].title}
                        </h1>
                        <p>
                            {/* Private equity firm TPG, which is reportedly heading towards a public listing, said on Thursday it had appointed long-time company executive Todd Sisitsky as president, effective immediately. */}
                            {props.item.stories_list[0].summary}
                        </p>
                        <span>30 September</span>
                        <span className='dot'></span>
                        <span >{props.item.stories_list[0].author_details[0].name}</span>
                        <p><button className='btn'>READ MORE</button></p>
                    </div>
                    <div className='manufact_respimg big_fact_respimg'>
                        <img src={props.item.stories_list[0].file_url} alt="" className='brdr_rdus manufacture_bigimg ' />
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
                    {props.item.stories_list.map((item, index) => {
                        if (index === 0) return null;
                        return (
                            <Onemaincard
                                Mcls="manfact_crd"
                                edcls="responsive_manfact_crd"
                                crd_img="manfact_crd_img manufact_respimg"
                                src={item.file_url}
                                imgcls='brdr_rdus'
                                width="100%"
                                cntncls="mnfact_crd_info_respon"
                                heading={item.industry_details[0].name}
                                title={item.title}
                                publish={item.publish}
                                author={item.author_details[0].name}
                            />
                        )
                    })}
                    {/* <div className='manfact_crd responsive_manfact_crd'>
                        <div className='manfact_crd_img manufact_respimg'>
                            
                            <img src={props.item.stories_list[1].file_url} alt="" width="100%" className='brdr_rdus' />
                           
                        </div>
                        <div className='mnfact_crd_info_respon'>
                            <h5>{props.item.stories_list[1].industry_details[0].name}</h5>
                            <p>
                               
                                {props.item.stories_list[1].title}
                            </p>
                            <span>30 September</span>
                            <span className='dot'></span>
                            <span >{props.item.stories_list[1].author_details[0].name}</span>
                        </div>
                    </div> */}


                    {/* <div className='manfact_crd responsive_manfact_crd'>
                        <div className='manfact_crd_img manufact_respimg'>
                            
                            <img src={props.item.stories_list[2].file_url} alt="" width="100%" className='brdr_rdus' />
                            <span className='respons_premium'>PREMIUM</span>
                        </div>
                        <div className='mnfact_crd_info_respon'>
                            <h5>
                                
                                {props.item.stories_list[2].industry_details[0].name}
                            </h5>
                            <p>
                                
                                {props.item.stories_list[2].title}
                            </p>
                            <span>30 September</span>
                            <span className='dot'></span>
                            <span >{props.item.stories_list[2].author_details[0].name}</span>
                        </div>
                    </div> */}

                    {/* <div className='manfact_crd manufact_respimg responsive_manfact_crd '>
                        <div>
                            
                            <img src={props.item.stories_list[3].file_url} alt="" width="100%" className='brdr_rdus' />
                        </div>
                        <div className='mnfact_crd_info_respon'>
                            <h5>
                                {props.item.stories_list[2].industry_details[0].name}
                            </h5>
                            <p>
                               
                                {props.item.stories_list[3].title}
                            </p>
                            <span>30 September</span>
                            <span className='dot'></span>
                            <span >{props.item.stories_list[3].author_details[0].name}</span>

                        </div>
                    </div> */}
                    {/* <div className='manfact_crd responsive_manfact_crd'>
                        <div className='manfact_crd_img manufact_respimg '>
                         
                            <img src={props.item.stories_list[4].file_url} alt="" width="100%" className='brdr_rdus' />
                            
                        </div>
                        <div className='mnfact_crd_info_respon'>
                            <h5>
                                
                                {props.item.stories_list[4].industry_details[0].name}
                            </h5>
                            <p>{props.item.stories_list[4].title}</p>
                            <span>30 September</span>
                            <span className='dot'></span>
                            <span >{props.item.stories_list[4].author_details[0].name}</span>
                        </div>
                    </div> */}
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
