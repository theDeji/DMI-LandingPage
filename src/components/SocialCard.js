import React from 'react'

export default function SocialCard({image, name, set, review}) {
    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'30px 0'}}>
            <div>
                <img src={image} alt='profile-img' style={{width:'120px', height:'120px', borderRadius:'100px'}}/>
            </div>
            <div style={{width:'200px', height:'130px', borderRadius:'50px 50px 5px 5px', backgroundColor:'#ff944d', padding:'30px', marginTop:'10px', boxShadow:'1px 1px 10px 1px gray'}}>
                <h4 style={{textAlign:'center',fontStyle:'italic',lineHeight:'18px', fontSize:'12px', fontWeight:'lighter',  color:'white'}}>{review}</h4>
                <h4 style={{ fontWeight:'lighter', fontSize:'13px', marginTop:'10px', textAlign:'right',  color:'white'}}>...{name}, '{set}</h4> 
            </div>
        </div>
    )
}
