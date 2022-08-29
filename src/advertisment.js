import React from 'react'

export default function Advertisment(props) {
    return (
        <div className='big_container'>
            <div className='advertiser' style={props.st}>
                <h5 style={{ textAlign: 'center' }} className={props.adtismnt_head}>Advertisment</h5>
                <div className='adverstisment_size'>
                    <img src={props.img} alt="" width={props.width} />
                </div>

            </div>
        </div>
    )
}
