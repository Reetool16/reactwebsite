import React from 'react'

export default function Advertisment(props) {
    return (
        <div className='big_container'>
            <div className='advertiser'>
                <h5 style={{ textAlign: 'center' }}>Advertisment</h5>
                <div className='big_container'>
                    <img src={props.img} alt="" width={props.width} />
                </div>

            </div>
        </div>
    )
}
