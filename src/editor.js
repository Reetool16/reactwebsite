import React from 'react'

export default function Editor(props) {
    return (
        <section className="editors_sections_banner">
            <div className='big_container'>
                <div className='d-flex justify_spc_btwn ed_poprap'>
                    <div className='ed_pop res_ed_pop'>
                        <h2>{props.head}</h2>

                        <div className='ed_pop_img'>
                            <div className='manfact_crd_img'>
                                <img src={props.img} alt="" />
                                <span style={props.st}>{props.pre}</span>
                            </div>
                        </div>

                        <div>
                            <h5 className='ed_pop_head'>
                                {props.name}
                            </h5>
                            <p className='ed_pop_txt'>
                                {props.txt}
                            </p>
                            <span className='ed_pop_span'>{props.date} </span>
                            <span className='ed_pop_span'>{props.customer}</span>
                        </div>
                    </div>

                    {/* secondary */}
                    <div className='ed_pop ed_pop_sec2 res_ed_pop'>
                        <div className='d-flex ed_pop_line justify_spc_btwn res_ed_pop_line'>
                            <div>
                                <div className='manfact_crd_img'>
                                    <img src={props.reliance} alt="" />
                                    <span>PREMIUM</span>
                                </div>
                            </div>
                            <div className='ed_pop_sec2txt'>
                                <h5>{props.edpop1}</h5>
                                <p>{props.edpop1txt}</p>
                                <span>{props.date} </span>
                                <span>{props.customer}</span>
                            </div>
                        </div>

                        <div className='d-flex ed_pop_line2 justify_spc_btwn res_ed_pop_line'>
                            <div>
                                <div className='manfact_crd_img'>
                                    <img src={props.tmt} alt="" />
                                    <span>PREMIUM</span>
                                </div>

                            </div>
                            <div className='ed_pop_sec2txt'>
                                <h5>{props.edpop2}</h5>
                                <p>{props.edpop2txt}</p>
                                <span>{props.date} </span>
                                <span>{props.customer}</span>
                            </div>
                        </div>

                        <div className='d-flex ed_pop_line3 justify_spc_btwn res_ed_pop_line'>
                            <div>
                                <img src={props.daily} alt="" />
                            </div>
                            <div className='ed_pop_sec2txt'>
                                <h5>{props.edpop3}</h5>
                                <p>{props.edpop3txt}</p>
                                <span>{props.date} </span>
                                <span>{props.customer}</span>
                            </div>
                        </div>
                    </div>


                    {/* sudhri */}

                    <div className='ed_pop res_edi_pop'>
                        <div className='ed_pop_ad'>
                            <h5 className='ad_head'>{props.ad}</h5>
                            <div className='ad_img res_ad_img'>
                                <img src={props.sudhir} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={props.style} />
            </div>
        </section>
    )
}
