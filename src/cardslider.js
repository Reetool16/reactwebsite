import React from 'react'
import { MdChevronRight } from 'react-icons/md';

function CardSlider(props) {
    const slides = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className='big_container'>
            <div className='d-flex justify_spc_btwn align_cntr'>
                <div>
                    <h2>Limited Partner</h2>
                </div>
                <div>
                    <p>View More</p>
                </div>
            </div>
            <div id='main_slider_container'>

                <div id='slider'>
                    {slides.map((slide, index) => {
                        return (
                            <div className='slider-card'>
                                hello
                            </div>
                        )
                    })}
                </div>
                <MdChevronRight size={40} className='slider_icon right' />



            </div>
        </div>
    )
}

export default CardSlider