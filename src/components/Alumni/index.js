import React from 'react'
import SocialCard from '../SocialCard'
import jane from '../../assets/jane.jpg'
import john from '../../assets/john.jpg'
import eve from '../../assets/evelyn.jpg'
import lagbaja from '../../assets/lagbaja.jpg'

import {
    AlumniContainer,
    AlumniContent
} from './AlumniElements'


const Alumni = () => {
    return(
        <AlumniContent>
            <h2>Our Alumni</h2>
            <AlumniContainer>
                <SocialCard image={jane} name="Jane Doe" review="School.me made me the woman I am today. So proud to be an
                alumni." set='09'/>
                <SocialCard image={eve} name="Evelyn Smith" review="I wish I could relive my moments here. I'll wait for the time machine" set='12'/>
                <SocialCard image={john} name="John Doe" review="School.me is not just a school. It's a family, they help you grow." set='14'/>
                <SocialCard image={lagbaja} name="Mr. Lagbaja" review="God bless them for bringing me
                here. Best Decision ever." set='19'/>
            </AlumniContainer>
        </AlumniContent>
    )
}

export default Alumni