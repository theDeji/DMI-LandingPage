import React from 'react'
import { FaToolbox } from 'react-icons/fa'


import SupportOption from '../SupportOptions/SupportOption'
import paypal from '../../assets/paypal.png'
import btc from '../../assets/btc.png'
import cash from '../../assets/cash.png'


import {
    SupportContainer, 
    SupportContent,
    Option,
    PartnerBtn
}from './SupportElements'


export default function Support() {
    return (
        <SupportContent>
            <SupportContainer>
                <h2>How would you like to be part of our Partners or Support us ?</h2>
                <Option>
                    <SupportOption icon={paypal} payOption="PayPal Payment"/>
                    <SupportOption icon={btc} payOption="Bitcoin Payment"/>
                    {/* <h2 style={{backgroundColor:'white', color:'#b33693', padding:'15px', borderRadius:'100%'}}>Or</h2> */}
                    <SupportOption icon={cash} payOption="Pay with Cash."/>
                </Option>
                <PartnerBtn>
                    <FaToolbox size={24} color="white"/>
                    <h4>Become our Partner</h4>
                </PartnerBtn>
            </SupportContainer>
        </SupportContent>
    )
}
