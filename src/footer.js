import React from 'react'

function Footer() {
     return (
          <div>
               {/* ////////////////Footer\\\\\\\\\\\\\\\\ */}


               <div className='footer'>
                    <div className='big_container'>
                         <div className='footer_head'>
                              <img src="./img/Mosaic-digital.png" alt="" />
                              <p>
                                   <img src="./img/facebook.png" alt="" />
                                   <img src="./img/twit.png" alt="" />
                                   <img src="./img/linkedin.png" alt="" />
                              </p>
                         </div>

                         <div className='big'>
                              <ul className='d-flex nav_list justify_spc_ard flex_rap fot_nav'>
                                   <li>
                                        <a href="/" className='nav_link_list' style={{ color: "#FFFFFFB2" }}> About us</a>
                                   </li>
                                   <li>
                                        <a href="/" className='nav_link_list' style={{ color: "#FFFFFFB2" }}> Advertise with us</a>
                                   </li>
                                   <li>
                                        <a href="/" className='nav_link_list' style={{ color: "#FFFFFFB2" }}> Contact us</a>
                                   </li>
                                   <li>
                                        <a href="/" className='nav_link_list' style={{ color: "#FFFFFFB2" }}> Copyright</a>
                                   </li>
                                   <li>
                                        <a href="/" className='nav_link_list' style={{ color: "#FFFFFFB2" }}>Privacy Policy </a>
                                   </li>
                                   <li>
                                        <a href="/" className='nav_link_list' style={{ color: "#FFFFFFB2" }}> Terms of use</a>
                                   </li>
                                   <li>
                                        <a href="/" className='nav_link_list' style={{ color: "#FFFFFFB2" }}>Company Listing</a>
                                   </li>
                                   <li>
                                        <a href="/" className='nav_link_list' style={{ color: "#FFFFFFB2" }}>Tag Listing</a>
                                   </li>
                              </ul>
                              <ul className='d-flex nav_list justify_spc_evely flex_rap fot_nav'>
                                   <li>Our Product :</li>
                                   <li>VCCircle</li>
                                   <li>TechCircle</li>
                                   <li>Events</li>
                                   <li>Training</li>
                                   <li>VCCEdge</li>
                                   <li>SalesEdge</li>
                                   <li>PartnerEdge</li>
                                   <li>Edge Insights</li>
                              </ul>
                         </div>
                         <p style={{ textAlign: 'center', marginTop: '55px', marginBottom: "0px", color: "#FFFFFF" }}>
                              Copyright © 2022 VCCircle.com. Property of Mosaic Media Venture Pvt.Ltd
                         </p>
                    </div>
               </div>
          </div>
     )
}

export default Footer