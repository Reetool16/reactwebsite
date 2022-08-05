import React from 'react'
import Onemaincard from './onemaincard'
import Premium from './premium';

export default function Editor(props) {
    return (
        <section className="editors_sections_banner" key={props.item.stories_list[0].feid}>
            <div className='big_container'>
                <div className='d-flex justify_spc_btwn ed_poprap'>
                    <div className='ed_pop res_ed_pop'>
                        <h2>{props.item.section_name}</h2>


                        {/* {props.item.stories_list.map((item, index) => {
                            if (index === 1) return null
                            return (
                                <Onemaincard
                                    Mcls="manfact_crd responsive_manfact_crd"
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
                        })} */}

                        <div className='ed_pop_img'>
                            <div className='manfact_crd_img'>
                                <img src={props.item.stories_list[0].file_url} alt="" className='brdr_rdus' />
                            </div>
                        </div>

                        <div>
                            <h5 className='ed_pop_head'>
                                {props.item.stories_list[0].industry_details[0].name}
                            </h5>
                            <p className='ed_pop_txt'>
                                {props.item.stories_list[0].title}
                            </p>
                            <span className='ed_pop_span'>{props.date} </span>
                            <span className='ed_pop_span'>{props.item.stories_list[0].author_details[0].name}</span>
                        </div>
                    </div>

                    {/* secondary */}
                    <div className='ed_pop ed_pop_sec2 res_ed_pop'>
                        {props.item.stories_list.map((item, index) => {
                            if (index === 0) return null
                            return (<>
                                <div className='rltiv'>
                                    {item.premium === "1" ? <Premium premium="premium_tag prm_tag_chn" /> : null}
                                    <Onemaincard
                                        edcls="d-flex ed_pop_line justify_spc_btwn res_ed_pop_line"
                                        crd_img=""
                                        src={item.file_url}
                                        imgcls='brdr_rdus'
                                        width="100%"
                                        cntncls="ed_pop_sec2txt"
                                        heading={item.industry_details[0].name}
                                        title={item.title}
                                        publish={item.publish}
                                        author={item.author_details[0].name}
                                    />
                                </div>
                            </>

                            )
                        })}
                        {/* <div className='d-flex ed_pop_line justify_spc_btwn res_ed_pop_line'>
                            <div>
                                <div className='manfact_crd_img'>
                                    <img src={props.item.stories_list[1].file_url} alt="" width="100%" className='brdr_rdus' />
                                    
                                </div>
                            </div>
                            <div className='ed_pop_sec2txt'>
                                <h5> {props.item.stories_list[1].industry_details[0].name}</h5>
                                <p>{props.item.stories_list[1].title}</p>
                                <span>{props.date} </span>
                                <span>{props.item.stories_list[1].author_details[0].name}</span>
                            </div>
                        </div> */}

                        {/* <div className='d-flex ed_pop_line2 justify_spc_btwn res_ed_pop_line'>
                            <div>
                                <div className='manfact_crd_img'>
                                    <img src={props.item.stories_list[2].file_url} alt="" width="100%" className='brdr_rdus' />
                                    
                                </div>

                            </div>
                            <div className='ed_pop_sec2txt'>
                                <h5> {props.item.stories_list[2].industry_details[0].name}</h5>
                                <p>{props.item.stories_list[2].title}</p>
                                <span>{props.date} </span>
                                <span>{props.item.stories_list[2].author_details[0].name}</span>
                            </div>
                        </div> */}

                        {/* <div className='d-flex ed_pop_line3 justify_spc_btwn res_ed_pop_line'>
                            <div className='manfact_crd_img'>
                                <img src={props.item.stories_list[3].file_url} alt="" width="100%" className='brdr_rdus' />
                                <span className='ede_pre_span'>PREMIUM</span>
                            </div>
                            <div className='ed_pop_sec2txt'>
                                <h5> {props.item.stories_list[3].industry_details[0].name}</h5>
                                <p>{props.item.stories_list[3].title}</p>
                                <span>{props.date} </span>
                                <span>{props.item.stories_list[3].author_details[0].name}</span>
                            </div>
                        </div> */}
                    </div>


                    {/* sudhri */}

                    <div className='ed_pop res_edi_pop'>
                        <div className='ed_pop_ad'>
                            <h5 className='ad_head'>Advertisment</h5>
                            <div className='ad_img res_ad_img'>
                                <img src="./img/sudhir2.png" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                {/* <hr style={props.style} /> */}
            </div>
        </section>
    )
}
