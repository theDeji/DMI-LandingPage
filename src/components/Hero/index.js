import React from 'react'

import {
    Book,
    Btn,
    Content,
    Tagline,
    Layer
} from './HeroElement'


const Hero = () => {
    return(
        <Layer>
            <Content>
                <Book>
                    <div class="book">
                        <div class="inner">
                            <div class="left"></div>
                            <div class="middle"></div>
                            <div class="right"></div>
                        </div>
                        <ul>
                        </ul>
                    </div>
                </Book>
                <Tagline>
                    <h1>Educate Your Kids</h1>
                    <h2>The future depends on it.</h2>
                    <Btn>Learn More</Btn>
                </Tagline>
            </Content>
        </Layer>
    )
}

export default Hero