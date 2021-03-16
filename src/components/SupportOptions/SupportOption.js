import React from 'react'
import Proceed from '../ProceedButton'


import {
    ContentBox,
}from './SOElements'

export default function SupportOption({icon, payOption}) {
    return (
      <ContentBox>
          <img src={icon} alt={payOption} />
          <Proceed title={payOption}/>
      </ContentBox>
    )
}
