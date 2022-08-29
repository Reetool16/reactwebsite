import React, { useState } from 'react'
// import Advertisment from './advertisment'
import { FaBars } from 'react-icons/fa'
import { GrFormClose } from 'react-icons/gr'
export default function Navbar() {
    const [hambur, setHambur] = useState(false)
    // const [nav, setNav] = useState()
    // const navbarref = useRef(null)
    function show() {
        setHambur(!hambur)
        if (hambur === false) {
            document.body.style.overflow = 'hidden'
        }
        else if (hambur === true) {
            document.body.style.overflowY = 'scroll'
        }

    }
    return (<>
        <div className="navbar_shadow">
            <div className='big_container nav_res_big_container'>
                <div className='navbar_ '>
                    <div className='d-flex justify_spc_btwn'>

                        <div className='navbar_logo'>
                            <div className='respons'>
                                <a href="/#" className="ham_icon" onClick={show}>
                                    <FaBars />
                                </a>
                                <img src="./img/VCC-logo.svg" alt="" className='respon_navbar_logo' />
                            </div>
                            <a href="/" className='nav_link_list respon_nav_link_sub'><img src="./img/crown.png" alt="" /> Subscribe</a>
                        </div>


                        <div className="respon_header_non">
                            <ul className='d-flex justify_spc_btwn nav_list '>
                                <li ><a href="/" className='nav_link_list'><img src="./img/magnifying-glass.png" alt="" /> Search</a></li>

                                <li ><a href="/" className='nav_link_list'><img src="./img/crown.png" alt="" /> Subscribe</a> </li>

                                <li><a href="/" className='nav_link_list' style={{ paddingRight: "0px" }}><img src="./img/admin.svg" alt="" /> Sign in</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* responsive nav  */}

                    <div className={hambur ? "responsive_nav_list" : "responsive_navbar"} >
                        <div className="txt_cntr">
                            <span>
                                <img src="./img/VCC-logo.svg" alt="" className='respon_navbar_logo' />
                            </span>
                            <span className='flt_rgt'>
                                <a href="/#" className="ham_icon" onClick={show}>
                                    <GrFormClose />
                                </a>
                            </span>
                        </div>
                        <ul className=' justify_spc_btwn nav_list '>
                            <li className='down_nav_ down_hover_nav' ><a href="/" className='nav_link_list'>Home</a></li>

                            <li className='down_nav_' ><a href="/" className='nav_link_list'>Sign In</a> </li>

                            <li className='down_nav_'><a href="/" className='nav_link_list active_nav_list'><img src="./img/crown.png" alt="" /> Subscribe</a></li>

                            <li className='down_nav_' ><a href="/" className='down_nav_list'>Private Equity</a></li>

                            <li className='down_nav_' ><a href="/" className='down_nav_list'>Venture Capital</a></li>

                            <li className='down_nav_' ><a href="/" className='down_nav_list'>M&A</a></li>

                            <li className='down_nav_'><a href="/" className='down_nav_list'>Industry <img src="./img/arrow_dropdown.svg" alt="" /></a> </li>

                            <li className='down_nav_'><a href="/" className='down_nav_list'>Stressed Assests</a> </li>

                            <li className='down_nav_'><a href="/" className='down_nav_list'>Limited Partner</a></li>

                            <li className='down_nav_'><a href="/" className='down_nav_list'> Founder</a></li>

                            <li className='down_nav_' ><a href="/" className='down_nav_list'>About Us</a></li>

                            <li className='down_nav_' ><a href="/" className='down_nav_list'>Tag Listing</a></li>

                            <li className='down_nav_' ><a href="/" className='down_nav_list'>Advertise With Us</a></li>

                            <li className='down_nav_' ><a href="/" className='down_nav_list'>Contact us</a></li>

                            <li className='down_nav_' ><a href="/" className='down_nav_list'>VCC Mobile App</a></li>
                        </ul>
                    </div>

                    <div className='d-flex justify_spc_btwn responsive_navbar align_item'>
                        <ul className='d-flex justify_spc_btwn nav_list '>
                            <li className='down_nav_' style={{ paddingLeft: "0px" }}> <a href="/" className='down_nav_list' style={{ paddingLeft: "0px" }} >Private Equity</a> </li>

                            <li className='down_nav_' ><a href="/" className='down_nav_list'>Venture Capital</a></li>

                            <li className='down_nav_' ><a href="/" className='down_nav_list'>M&A</a></li>

                            <li className='down_nav_'><a href="/" className='down_nav_list'>Industry <img src="./img/arrow_dropdown.svg" alt="" /></a> </li>

                            <li className='down_nav_'><a href="/" className='down_nav_list'>Private Equity</a> </li>

                            <li className='down_nav_'><a href="/" className='down_nav_list'>Limited Partner</a></li>

                            <li className='down_nav_'><a href="/" className='down_nav_list'> Founder</a></li>
                        </ul>
                        <div>
                            <h4>
                                <a href="/" className='down_nav_list ' style={{ paddingRight: "0px" }} >Customize <img src="./img/arrow_dropdown.svg" alt="" /></a>

                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}
