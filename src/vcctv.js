import React from 'react'


function Vcctv() {

    return (
        <div className='big_container vcctv_bg'>
            <div className='d-flex justify_spc_btwn align_cntr'>
                <div>
                    <h2 className='vcc_tv_hed'>
                        VCC TV
                    </h2>
                </div>
                <div>
                    <p className='vcc_tv_hed'>
                        View More <img src="./img/Iconright.svg" alt="" />
                    </p>
                </div>
            </div>

            <div className='d-flex justify_spc_btwn vcctvs_direction '>
                <div className='vcctv_tv'>
                    <iframe src="https://www.youtube.com/embed/jRWR0Ob6mLI" title="10 second intro music" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="vcctv_txt">
                    <h5>
                        HEALTHCARE
                    </h5>
                    <h2>
                        How can we harness data for healthcare and safegaurd ourselves from cyber threats?
                    </h2>
                    <p>
                        The global healthcare data is expected to grow at a CAGR of 36% by 2025. To make healthcare more equitable, affordable and accessible, there is a need to find ways to unite and generate actionable insights from data. How collaborations and strategic partnerships can harness the data to tackle the issues faced by the sector?
                    </p>
                    <span>30 September </span>
                    <span>Madhurima Nandy</span>
                </div>
            </div>

        </div>
    )
}

export default Vcctv