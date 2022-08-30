import React from 'react'
// import moment from 'moment'
import Advertisment from './advertisment'

function Skeleton() {

     return (
          <>

               <Advertisment img="" width="100%" adtismnt_head="skelead" st={{ height: "50px" }} />
               <div className='big_container'>
                    <div className='d-flex manufact_banner justify_spc_btwn flex_drct_clum gap'>
                         <div className='manufact_info manufact_resinfo'>
                              <span className='skeleton_smhead'>
                                   Manufacturing
                                   {/* {props.item.stories_list[0].industry_details[0].name.toUpperCase()} */}
                              </span>
                              <h1 className='skeleton_smhead'>
                                   Warburg Pincus set to acquire majority stake in auto parts maker
                                   {/* {props.item.stories_list[0].title} */}
                              </h1>
                              <p className='skeleton_smhead'>
                                   Private equity firm TPG, which is reportedly heading towards a public listing, said on Thursday it had appointed long-time company executive Todd Sisitsky as president, effective immediately.
                                   {/* {props.item.stories_list[0].summary} */}
                              </p>
                              <span className='skeleton_smhead'>30 September</span>
                              <span className='dot'></span>
                              <span className='skeleton_smhead' >Madhurima Nandy</span>
                              <p><button className='btn skeleton_smhead'>READ MORE</button></p>
                         </div>
                         <div className='manufact_respimg big_fact_respimg skeleton_smhead'>
                              <img src="./img/Manufacturing.png" alt="" className='brdr_rdus  skele_img' />
                         </div>
                    </div>

                    <div className='d-flex justify_spc_btwn skeleflex_rap'>
                         <div className='manfact_crd responsive_manfact_crd skeleton_btom'>
                              <div className='manfact_crd_img manufact_respimg skeleton_smhead'>
                                   <img src="./img/economy.png" alt="" className='skele_img' />
                                   {/* <span className='respons_premium'>PREMIUM</span> */}
                              </div>
                              <div className='mnfact_crd_info_respon'>
                                   <span className='skeleton_smhead'>ECONOMY</span>
                                   <p className='skeleton_smhead'>Indian shares snap 5-day rally on weak global cues, post weekly gain</p>
                                   <span className='skeleton_smhead'>30 September</span>
                                   <span className='dot'></span>
                                   <span className='skeleton_smhead'>Madhurima Nandy +1</span>
                              </div>
                         </div>


                         <div className='manfact_crd responsive_manfact_crd skeleton_btom '>
                              <div className='manfact_crd_img manufact_respimg skeleton_smhead'>
                                   <img src="./img/finance.png" alt="" className='skele_img' />
                                   {/* <span className='respons_premium'>PREMIUM</span> */}
                              </div>
                              <div className='mnfact_crd_info_respon'>
                                   <span className='skeleton_smhead'>FINANCE</span>
                                   <p className='skeleton_smhead'>Paytm to shut Canada B2C app amid eroding market capitalisation</p>
                                   <span className="skeleton_smhead">30 September</span>
                                   <span className='dot'></span>
                                   <span className='skeleton_smhead'>Madhurima Nandy</span>
                              </div>
                         </div>

                         <div className='manfact_crd manufact_respimg responsive_manfact_crd skeleton_btom '>
                              <div className='skeleton_smhead'>
                                   <img src="./img/consumer.png" alt="" className='skele_img' />
                              </div>
                              <div className='mnfact_crd_info_respon'>
                                   <span className='skeleton_smhead'>CONSUMER</span>
                                   <p className='skeleton_smhead'>Exclusive: PE-backed sauce maker Wingreens acquires Lok Capital-backed cereal maker</p>
                                   <span className='skeleton_smhead'>30 September</span>
                                   <span className='dot'></span>
                                   <span className='skeleton_smhead'>Madhurima Nandy +3</span>

                              </div>
                         </div>
                         <div className='manfact_crd responsive_manfact_crd skeleton_btom'>
                              <div className='manfact_crd_img manufact_respimg skeleton_smhead '>
                                   <img src="./img/economyblock.png" alt="" className='skele_img' />
                                   {/* <span className='respons_premium'>PREMIUM</span> */}
                              </div>
                              <div className='mnfact_crd_info_respon'>
                                   <span className='skeleton_smhead'>ECONOMY</span>
                                   <p className='skeleton_smhead'>GLOBAL MARKETS-European shares in the red after hawkish Fed comments</p>
                                   <span className='skeleton_smhead'>30 September</span>
                                   <span className='dot'></span>
                                   <span className='skeleton_smhead'>Madhurima Nandy</span>
                              </div>
                         </div>
                    </div>

               </div>

          </>
     )
}

export default Skeleton