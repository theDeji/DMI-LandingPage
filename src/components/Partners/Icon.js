import React from 'react'

import { Ic, IconItem } from './PartnerElements'

export default function Icon({image, name}) {
    return (
        <Ic style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <IconItem >
                <img src={image} alt='company-img' style={{backgroundColor:'white', height:'60px', borderRadius:'20px', boxShadow:'1px 1px 5px 1px gray'}}/>
            </IconItem>
            <h4 style={{color:'#ff4d4d', opacity:'80%'}}>{name}</h4>
        </Ic>
    )
}
