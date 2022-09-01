import React from 'react'
import Onemaincard from './onemaincard'
// import Premium from './premium';
import moment from 'moment'

export default function Editor(props) {
    return (<>
        {props.item.stories_list[0] ?
            <section className="editors_sections_banner" key={props.item.stories_list[0].feid}>
                <div className='big_container'>
                    <h2 className='edpophead'>{props.item.section_name}</h2>
                    <div className='d-flex justify_spc_btwn ed_poprap edpopgap'>
                        <div className='ed_pop res_ed_pop'>
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
                                <ul className='d-flex'>
                                    <li className="manufact_authordate">{moment(props.publish).format("Do MMM  ")}</li>
                                    <li className="manufact_author">{props.item.stories_list[0].author_details[0].name}</li>
                                </ul>
                                {/* <span className='ed_pop_span'>{moment(props.publish).format("Do MMM YYYY")} </span>
                                <span className='ed_pop_span'>{props.item.stories_list[0].author_details[0].name}</span> */}
                            </div>
                        </div>

                        {/* secondary */}
                        <div className='ed_pop ed_pop_sec2 res_ed_pop'>
                            {props.item.stories_list.map((item, index) => {
                                if (index === 0) return null
                                return (<>


                                    <Onemaincard
                                        edcls="d-flex ed_pop_line justify_spc_btwn res_ed_pop_line"
                                        crd_img="edtor_pop_img_sec2"
                                        src={item.file_url}
                                        premium={item.premium}
                                        imgslug={item.slug}
                                        imgcls='brdr_rdus'
                                        width="100%"
                                        height="93px"
                                        cntncls="ed_pop_sec2txt"
                                        nameshow="slidr_author shwNme"
                                        plusone="slidr_author plusONE"
                                        heading={item.industry_details[0].name}
                                        headingslug={item.industry_details[0].name}
                                        title={item.title}
                                        titleslug={item.slug}
                                        publish={item.publish}
                                        author={item.author_details[0].name}
                                        authdet="manufact_authordate"
                                        aotho="manufact_author"
                                        athordetails="d-flex align_item fllex_wrrp"
                                        incrval={item.author_details.length > 1 ? item.author_details[1].name : " "}
                                        one={item.author_details.length > 1 ? "+1" : null}
                                        Mcls="brdr_ed_pop"
                                    />

                                </>

                                )
                            })}

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
            : null}
    </>
    )
}
