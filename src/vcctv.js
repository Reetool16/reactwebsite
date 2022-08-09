import React from 'react'
import moment from 'moment'
function Vcctv(props) {

    return (
        <div className='big_container vcctv_bg' key={props.item.stories_list[0].feid}>
            <div className='d-flex justify_spc_btwn align_cntr'>
                <div>
                    <h2 className='vcc_tv_hed'>
                        {props.item.section_name}
                    </h2>
                </div>
                <div>
                    <p className='vcc_tv_hed vcc_head_res'>
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
                        {/* {props.item.stories_list} */}
                        {props.item.stories_list[0].industry_details[0].name}
                    </h5>
                    <h2>
                        {props.item.stories_list[0].title}
                    </h2>
                    <p>
                        {props.item.stories_list[0].summary}
                    </p>
                    <span>{moment(props.publish).format("Do MMM YYYY ")}</span>
                    <span>{props.item.stories_list[0].author_details[0].name}</span>
                </div>
            </div>

        </div>
    )
}

export default Vcctv