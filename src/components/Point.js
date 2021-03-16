import React from 'react'
import { AiFillBulb } from 'react-icons/ai'


export default function Point({title}) {
    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'start', alignItems:'center',}}>
            <AiFillBulb size={20} color='white'/>
            <h4 style={{marginLeft:'10px'}}>{title}</h4>
        </div>
    )
}
