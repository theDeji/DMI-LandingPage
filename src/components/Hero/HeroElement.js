import styled from 'styled-components';
import bg from '../../assets/bg2.jpg'

export const Layer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${bg});
    background-position: center;
    background-size: cover;
    border-radius: 0 0 300px 0;
    height: 500px;

    @media screen and (max-width: 540px) {
        border-radius: 0 0 0 0;
        height: 400px;
    }
`;

export const Btn = styled.div`
    width: 120px;
    padding: 10px;
    height: 40px;
    background-color:#ff4d4d;
    border-radius: 10px;
    margin-top: 20px;
    color:white;
    text-align:center;
    transition: all .5s ease;

    
    &:hover{
        transform: translateY(10px);
        background-color:white;
        color: black;
        cursor: pointer;
    }
`

export const Content = styled.div`
  position: absolute;
  top:200px;
  left: 150px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1{
    color:white;
    margin-bottom: 8px;
    font-size: 60px;
  }

  h2{
    font-size: 20px;
  }

  @media screen and (max-width: 540px) {
    top:150px;
    right:150px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        color:white;
        margin-bottom: 8px;
        font-size: 30px;
      }
    
      h2{
        font-size: 15px;
      }
    }

`

export const Tagline = styled.div`
  margin-left:100px;

  @media screen and (max-width: 540px) {
    margin-left:0;
    width: 300px;
    margin-top:20px;
  }

`

export const Book = styled.div`
.book {
  --color: #fff;
  --duration: 3s;
  width: 32px;
  height: 12px;
  position: relative;
  margin: 32px 0 0 0;
  //Demo
  zoom: 1.5;
  .inner {
      width: 32px;
      height: 12px;
      position: relative;
      transform-origin: 2px 2px;
      transform: rotateZ(-90deg);
      animation: book var(--duration) ease infinite;
      .left,
      .right {
          width: 60px;
          height: 4px;
          top: 0;
          border-radius: 2px;
          background: var(--color);
          position: absolute;
          &:before {
              content: '';
              width: 48px;
              height: 4px;
              border-radius: 2px;
              background: inherit;
              position: absolute;
              top: -10px;
              left: 6px;
          }
      }
      .left {
          right: 28px;
          transform-origin: 58px 2px;
          transform: rotateZ(90deg);
          animation: left var(--duration) ease infinite;
      }
      .right {
          left: 28px;
          transform-origin: 2px 2px;
          transform: rotateZ(-90deg);
          animation: right var(--duration) ease infinite;
      }
      .middle {
          width: 32px;
          height: 12px;
          border: 4px solid var(--color);
          border-top: 0;
          border-radius: 0 0 9px 9px;
          transform: translateY(2px);
      }
  }
  ul {
      margin: 0;
      padding: 0;
      list-style: none;
      position: absolute;
      left: 50%;
      top: 0;
      li {
          height: 4px;
          border-radius: 2px;
          transform-origin: 100% 2px;
          width: 48px;
          right: 0;
          top: -10px;
          position: absolute;
          background: var(--color);
          transform: rotateZ(0deg) translateX(-18px);
          animation-duration: var(--duration);
          animation-timing-function: ease;
          animation-iteration-count: infinite;
          $i: 0;
          @while $i < 19 {
              &:nth-child(#{$i}) {
                  animation-name: page-#{$i};
              }
              $i: $i + 1;
          }
      }
  }
}

$i: 0;
@while $i < 19 {
  $delay: $i * 1.86;
  $delay-after: $i * 1.74;
  @keyframes page-#{$i} {
      #{4 + $delay}% {
          transform: rotateZ(0deg) translateX(-18px);
      }
      #{13 + $delay-after}%,
      #{54 + $delay}% {
          transform: rotateZ(180deg) translateX(-18px);
      }
      #{63 + $delay-after}% {
          transform: rotateZ(0deg) translateX(-18px);
      }
  }
  $i: $i + 1;
}

@keyframes left {
  4% {
      transform: rotateZ(90deg);
  }
  10%,
  40% {
      transform: rotateZ(0deg);
  }
  46%,
  54% {
      transform: rotateZ(90deg);
  }
  60%,
  90% {
      transform: rotateZ(0deg);
  }
  96% {
      transform: rotateZ(90deg);
  }
}

@keyframes right {
  4% {
      transform: rotateZ(-90deg);
  }
  10%,
  40% {
      transform: rotateZ(0deg);
  }
  46%,
  54% {
      transform: rotateZ(-90deg);
  }
  60%,
  90% {
      transform: rotateZ(0deg);
  }
  96% {
      transform: rotateZ(-90deg);
  }
}

@keyframes book {
  4% {
      transform: rotateZ(-90deg);
  }
  10%,
  40% {
      transform: rotateZ(0deg);
      transform-origin: 2px 2px;
  }
  40.01%,
  59.99% {
      transform-origin: 30px 2px;
  }
  46%,
  54% {
      transform: rotateZ(90deg);
  }
  60%,
  90% {
      transform: rotateZ(0deg);
      transform-origin: 2px 2px;
  }
  96% {
      transform: rotateZ(-90deg);
  }
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: inherit;
  &:before,
  &:after {
      box-sizing: inherit;
  }
}

// Center & dribbble
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #275EFE;
  .dribbble {
      position: fixed;
      display: block;
      right: 24px;
      bottom: 24px;
      img {
          display: block;
          width: 76px;
      }
  }
}
`
