import React from 'react'
// import Advertisment from './advertisment'
import Onemaincard from './onemaincard'
export default function Morestories(props) {
    return (
        <>
            <div className='big_container' key={props.item.stories_list[0].feid}>
                <h2>
                    {props.item.section_name}

                    {/* More Stories */}
                </h2>
                <div className='justify_spc_btwn responsive_stories '>
                    <div className='stes_flx'>
                        {props.item.stories_list.map((item, index) => {

                            return (

                                <Onemaincard
                                    Mcls=""
                                    edcls="d-flex stes_crd"
                                    crd_img="manfact_crd_img imageswidth"
                                    src={item.file_url}
                                    premium={item.premium}
                                    imgcls='brdr_rdus'
                                    imgslug={item.slug}
                                    width="100%"
                                    height="156px"
                                    cntncls="stes_crd_info"
                                    para=""
                                    authdet=""
                                    heading={item.industry_details[0].name}
                                    headingslug={item.industry_details[0].name}
                                    title={item.title}
                                    titleslug={item.slug}
                                    publish={item.publish}
                                    author={item.author_details[0].name}
                                />


                            )
                        })}
                        {/* {props.item.stories_list.map((item, index) => {
                           
                            return (

                                <Onemaincard

                                    edcls="d-flex stes_crd"
                                    crd_img="manfact_crd_img imageswidth"
                                    src={item.file_url}
                                    imgcls='brdr_rdus'
                                    width="100%"
                                    cntncls="stes_crd_info"
                                    para="slidr_text"
                                    authdet="slidr_author"

                                    title={item.title}
                                    publish={item.publish}
                                    author={item.author_details[0].name}
                                />


                            )
                        })} */}
                        {/* <div className='d-flex stes_crd imageswidth'>
                            <img src="./img/stesfinance.png" alt="" />
                            <div className='stes_crd_info'>
                                <h5>FINANCE</h5>
                                <p>DSG Consumer Partners likely to raise nearly $125 mn for new fund</p>
                                <span>30 Sep </span>
                                <span>Madhurima Nandy,</span>
                                <span>Madhurima Nandy</span>
                            </div>
                        </div>

                        <div className='d-flex stes_crd'>
                            <div className='manfact_crd_img imageswidth'>
                                <img src="./img/stesconsumer.png" alt="" />
                                <span>PREMIUM</span>
                            </div>

                            <div className="stes_crd_info">
                                <h5>CONSUMER</h5>
                                <p>RPSG Capital Ventures to raise Rs 500 cr for consumer-focused fund</p>
                                <span>30 Sep </span>
                                <span>Madhurima Nandy</span>
                            </div>
                        </div>



                        <div className='d-flex stes_crd imageswidth'>
                            <img src="./img/stesppl.png" alt="" />
                            <div className="stes_crd_info">
                                <h5>PEOPLE</h5>
                                <p>Jobs portal Apna appoints former PayU’s Shantanu Preetam as its first CTO</p>
                                <span>30 Sep </span>
                                <span>Madhurima Nandy</span>
                            </div>
                        </div>
 */}

                    </div>

                    <div>
                        {/* <div className='d-flex stes_crd'>
                            <div className='manfact_crd_img imageswidth'>
                                <img src="./img/stesecomy.png" alt="" />
                                <span>PREMIUM</span>
                            </div>

                            <div className="stes_crd_info">
                                <h5>ECONOMY</h5>
                                <p>GLOBAL MARKETS - Asia shares fall as Treasury yields hit fresh highs</p>
                                <span>30 Sep </span>
                                <span>Madhurima Nandy</span>
                            </div>
                        </div>
                        <div className='d-flex stes_crd imageswidth'>
                            <img src="./img/stestmt.png" alt="" />
                            <div className="stes_crd_info">
                                <h5>TMT</h5>
                                <p>Kotak’s asset arm, others lead $6 mn bet on cancer detection platform Epigeneres</p>
                                <span>30 Sep </span>
                                <span>Madhurima Nandy</span>
                            </div>
                        </div>
                        <div className='d-flex stes_crd'>
                            <div className='manfact_crd_img imageswidth'>
                                <img src="./img/stespipe.png" alt="" />
                                <span>PREMIUM</span>
                            </div>

                            <div className="stes_crd_info">
                                <h5>FINANCE</h5>
                                <p>Actis in talks to acquire Welspun group’s roads for up to Rs 10,000 cr</p>
                                <span>30 Sep </span>
                                <span>Madhurima Nandy</span>
                            </div>
                        </div>
                        <div className="stes_7_crd">
                            <div className='d-flex stes_crd '>
                                <div className='manfact_crd_img imageswidth'>
                                    <img src="./img/block.png" alt="" />
                                </div>

                                <div className='stes_crd_info'>
                                    <h5>CONSUMER</h5>
                                    <p>Actor Tiger Shroff, BharatPe’s Ashneer Grover, others back Freadom</p>
                                    <span>30 Sep </span>
                                    <span>Madhurima Nandy,</span>
                                    <span>Madhurima Nandy</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* <Advertisment img="./img/adv2.png" width="100%" /> */}




            {/* ///////////////////////////////SECOND PART\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

            {/* <div className='big_container'>
                <div className='d-flex stes_crd2 justify_spc_btwn'>
                    <div>
                        <div className='d-flex stes_crd'>
                            <img src="./img/block.png" alt="" />
                            <div className='stes_crd_info'>
                                <h5>CONSUMER</h5>
                                <p>Actor Tiger Shroff, BharatPe’s Ashneer Grover, others back Freadom</p>
                                <span>30 Sep </span>
                                <span>Madhurima Nandy,</span>
                                <span>Madhurima Nandy</span>
                            </div>
                        </div>

                        <div className='d-flex stes_crd'>
                            <div className='manfact_crd_img'>
                                <img src="./img/building.png" alt="" />
                                <span>PREMIUM</span>
                            </div>

                            <div className="stes_crd_info">
                                <h5>ECONOMY</h5>
                                <p>Indian shares slip after five-day rally; HCL top drag ahead of results</p>
                                <span>30 Sep </span>
                                <span>Madhurima Nandy</span>
                            </div>
                        </div>



                        <div className='d-flex stes_crd'>
                            <div className='manfact_crd_img'>
                                <img src="./img/medicine.png" alt="" />
                                <span>PREMIUM</span>
                            </div>

                            <div className="stes_crd_info">
                                <h5>CONSUMER</h5>
                                <p>Dogsee Chew raises Rs 50 cr in Series A from Mankind Pharma; Sixth Sense Ventures</p>
                                <span>30 Sep </span>
                                <span>Madhurima Nandy</span>
                            </div>
                        </div>


                    </div>

                    <div>
                        <div className='d-flex stes_crd'>
                            <div className='manfact_crd_img'>
                                <img src="./img/infrastr.png" alt="" />
                                <span>PREMIUM</span>
                            </div>

                            <div className="stes_crd_info">
                                <h5>INFRASTRUCTURE</h5>
                                <p>Shadowfax’s pivot pays off as focus sharpens on last mile delivery</p>
                                <span>30 Sep </span>
                                <span>Madhurima Nandy</span>
                            </div>
                        </div>
                        <div className='d-flex stes_crd'>
                            <img src="./img/hcare.png" alt="" />
                            <div className="stes_crd_info">
                                <h5>HEALTH CARE</h5>
                                <p>Health Care At Home India secures $15 mn from new PE investor ABC World Asia</p>
                                <span>30 Sep </span>
                                <span>Madhurima Nandy</span>
                            </div>
                        </div>
                        <div className='d-flex stes_crd'>
                            <img src="./img/buildpipe.png" alt="" />
                            <div className="stes_crd_info">
                                <h5>FINANCE</h5>
                                <p>Walton Street BlackSoil Real Estate Debt Fund II invests in two housing projects</p>
                                <span>30 Sep </span>
                                <span>Madhurima Nandy</span>
                            </div>
                        </div>
                    </div>
                </div>
                 </div> */}






        </>
    )
}
