
import './sectionApresentacao.css';

import BackgroundApresentacao from '../images/backgroundApresentacao.js'

import styled from 'styled-components';
import { useState, useEffect } from "react";




function DivDpsFumaca() {
  
  const [widthDiv, setWidth] = useState('10vw');
  const [heightDiv, setHeight] = useState('10vh');
  const [leftDiv, setLeft] = useState('45vw')

  const [valDiv, setVal] = useState(10)
  const [percentY, setPercentY] = useState(0)

  useEffect(() => {
    
    setTimeout(() => {

      setVal((valDiv) => {console.log("val div ->" + valDiv);return valDiv + 1})
      setPercentY((percentY) => {console.log("perc"+percentY);return window.scrollY/window.innerHeight})

      setWidth((widthDiv) => {console.log("width -> "+widthDiv);return percentY*100 + "vw"});
      setHeight((HeightDiv) => {console.log("height -> " +HeightDiv);return percentY*100 + "vh"});
      setLeft((leftDiv) => {console.log("left-> " + leftDiv);return (100-percentY*100)/2 + "vw"});

    }, 2);

  });
  
  const DpsFumacaStyled = styled.div`
  
  /* 
  precisa aumentar o width e o left para o efeito de fumaça */
  .div-depoisFumaca {
    display: block;
    position: absolute;
    bottom: 0;
    z-index: 3;

    width: ${widthDiv};
    height: ${heightDiv};
    left: ${leftDiv};

    clip-path: url(#triangle-mask);
    -webkit-clip-path: url(#triangle-mask);
    background-color: red;
  }
  
  .div-depoisFumaca .div-titulo-apresentacao{
    border: 1px solid white;
    position: fixed;
    width: 80vw;
    left: 0;
    top: 0;
  } `;

  
  // document.addEventListener("touchmove", ScrollStart, false);
  // document.addEventListener("scroll", Scroll, false);

//   function ScrollStart() {
//     console.log("comecou scroll")
//     Scroll()
// }

// function Scroll() {
//   const scrollY = window.scrollY;
//   const percentY = window.scrollY/window.innerHeight
//   console.log(percentY)

//   var count = 10;

//   if(percentY<6){
//     count =+ percentY*100;

//     if(count < 10)
//     count =10

//     setWidth((widthDiv) => {return 2*count + "vw"});
//     setHeight((heightDiv) => {return 2*count + "vw"});
//     setLeft((leftDiv) => {return (100-2*count)/2 + "vw" })
//   }
// }

  // window.onscroll = function onScroll() {
  //   const scrollY = window.scrollY;
  //   const percentY = window.scrollY/window.innerHeight
  //   console.log(percentY)

  //   var count = 10;

  //   if(percentY<6){
  //     count =+ percentY*100;

  //     if(count < 10)
  //     count =10

  //     setWidth((widthDiv) => {return 2*count + "vw"});
  //     setHeight((heightDiv) => {return 2*count + "vw"});
  //     setLeft((leftDiv) => {return (100-2*count)/2 + "vw" })
  //   }

  // }

  // window.addEventListener('scroll', () => {

  //   var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)  
  //   console.log(scrollPercentage)

  //   var count = 10;

  //   if(scrollPercentage<6){
  //     count =+ scrollPercentage*100;

  //     if(count < 10)
  //     count =10

  //     setWidth((widthDiv) => {return 2*count + "vw"});
  //     setHeight((heightDiv) => {return 2*count + "vw"});
  //     setLeft((leftDiv) => {return (100-2*count)/2 + "vw" })
  //   }
    
  // })


return(
  <DpsFumacaStyled>
    <div className='div-depoisFumaca'>
      <svg class="clip-svg">
        <defs>
          <clipPath id="triangle-mask" clipPathUnits="objectBoundingBox" transform="scale(1 1)">
          <path d="M0.856547 0.871042C0.966714 0.930344 1.00341 0.947867 1.01038 1.00006L0.0149677 1.0029C-0.00260161 0.928675 0.0256572 0.897441 0.107521 0.850303C0.199562 0.807235 0.227373 0.778519 0.21263 0.714969C0.182142 0.618222 0.174675 0.567967 0.273853 0.524953C0.343113 0.504654 0.38363 0.494044 0.370606 0.435984C0.341549 0.350068 0.341822 0.308741 0.37972 0.25045C0.394299 0.216132 0.427766 0.195466 0.463479 0.144549C0.499191 0.0936322 0.441231 0.0335004 0.502248 0.00531197C0.48289 0.0219258 0.481539 0.0266368 0.492112 0.0441464C0.535198 0.0806187 0.555528 0.101445 0.539119 0.14376C0.518224 0.196825 0.520993 0.220493 0.55966 0.248573L0.561009 0.249505C0.66979 0.324691 0.731196 0.367132 0.679955 0.467218C0.643162 0.517917 0.643712 0.53838 0.686659 0.559047C0.77522 0.597614 0.816901 0.623492 0.818167 0.708651C0.800781 0.799985 0.798713 0.828877 0.856547 0.871042Z" fill="#D9D9D9"/>
          </clipPath>
        </defs>
      </svg>  

      <div className='div-titulo-apresentacao' >
      <p>123456789 123456789 123456789 123456789* 56789 123456789 123456789 123456789* 56789 123456789 123456789 123456789* 56789 123456789 123456789 123456789*/</p>
      <p>FERREIRA2</p>
      </div>
    </div>
  </DpsFumacaStyled>

)
}

function sectionApresentacao() {

  

  return (
    <div className="section-apresentacao">
      
          <div className='div-antesFumaca' >
            <div className='titulo'>
              <p>MATHEUS</p>
              <p>FERREIRA</p>
            </div>
            <div className='subTitulo'>
              <p>Full-stack developer &</p>
              <p>UI/UX designer</p>
            </div>
            
            <div id="trigger" style={{position: "absolute", top: '50vh'}} />
            <DivDpsFumaca></DivDpsFumaca>
            <div className='div-background-apresentacao'>
            <BackgroundApresentacao></BackgroundApresentacao>
            </div>
            
          </div>

      
      <div style={{backgroundColor: 'grey', height: '300vh'}}><h1>Teste</h1>
        

     
      </div>
        
        
    </div>
  );
}

export default sectionApresentacao;
