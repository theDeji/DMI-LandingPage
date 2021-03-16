import React from 'react'
import { BsBoxArrowRight } from 'react-icons/bs'


export default function Proceed({title}) {
    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'start', alignItems:'center'}}>
            <h4 style={{marginRight:'10px', color:'white'}}>{title}</h4>
            <BsBoxArrowRight size={30} color='white'/>
        </div>
    )
}
