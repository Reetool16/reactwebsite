import React from 'react'
// import Advertisment from './advertisment'
import Onemaincard from './onemaincard'
export default function Morestories(props) {
    return (
        <>
            {props.item.stories_list[0] ?
                <div className='big_container' key={props.item.stories_list[0].feid}>
                    <h2 className='stres_heading'>
                        {props.item.section_name}

                        {/* More Stories */}
                    </h2>
                    <div className='justify_spc_btwn responsive_stories '>
                        <div className='stes_flx'>
                            {props.item.stories_list.map((item, index) => {

                                return (

                                    <Onemaincard
                                        Mcls="wi"
                                        edcls="d-flex stes_crd"
                                        crd_img="manfact_crd_img imageswidth"
                                        src={item.file_url}
                                        premium={item.premium}
                                        imgcls='brdr_rdus'
                                        imgslug={item.slug}

                                        cntncls="stes_crd_info"
                                        para=""
                                        authdet="manufact_authordate"
                                        aotho="manufact_author"
                                        heading={item.industry_details[0].name}
                                        headingslug={item.industry_details[0].name}
                                        title={item.title}
                                        titleslug={item.slug}
                                        publish={item.publish}
                                        author={item.author_details[0].name}
                                        authornameslug={item.author_details[0].slug}
                                        athordetails="d-flex align_item fllex_wrrp"
                                    />


                                )
                            })}


                        </div>

                        <div>

                        </div>
                    </div>
                </div>










                : null}
        </>
    )
}
