import React from "react";
import '../scss/LandingPage.scss'


const LandingPage = () => {
  return (
    <div className='landing-page'>
      <hi> gola </hi>
{/*         <svg width='500' height='500'>

    <path stroke='red' 
          
          fill='red' 

          > 
        <animate attributeName='d' dur='5s' repeatCount='indefinite'
           values='
           M476,299Q454,348,426.5,392.5Q399,437,347.5,444Q296,451,246.5,467.5Q197,484,147,463Q97,442,82.5,390Q68,338,55.5,294Q43,250,44.5,201Q46,152,85.5,122.5Q125,93,162.5,61.5Q200,30,248,39Q296,48,340.5,64.5Q385,81,423,114.5Q461,148,479.5,199Q498,250,476,299Z; 

           M453.5,289Q413,328,399.5,374Q386,420,331.5,393.5Q277,367,239,415.5Q201,464,152.5,449Q104,434,129,365Q154,296,141,273Q128,250,108,211Q88,172,137,171Q186,170,198.5,124.5Q211,79,244,104.5Q277,130,310,131.5Q343,133,388.5,147.5Q434,162,464,206Q494,250,453.5,289Z;
            

           M476,299Q454,348,426.5,392.5Q399,437,347.5,444Q296,451,246.5,467.5Q197,484,147,463Q97,442,82.5,390Q68,338,55.5,294Q43,250,44.5,201Q46,152,85.5,122.5Q125,93,162.5,61.5Q200,30,248,39Q296,48,340.5,64.5Q385,81,423,114.5Q461,148,479.5,199Q498,250,476,299Z'
        />
        </path>

  </svg>
  <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="lightgrey"
    d="M50,50 C30,-60 180,50 150,50 C10-20 120,170 10,50 z" />

  <circle r="5" fill="red">
    <animateMotion dur="10s" repeatCount="indefinite"
      path="M50,50 C30,-60 180,50 150,50 C10-20 120,170 10,50 z" />
  </circle>
</svg> */}

<svg className="text" viewBox="0 0 600 400">
  <symbol id="s-text">
    <text textAnchor="middle"
          x="50%"
          y="25%"
          className="text--line"
          >
      Hello
    </text>
    <text textAnchor="middle"
          x="50%"
          y="60%"
          className="text--line2"
          >
      Doggie
    </text>
    
  </symbol>
  
  <g className="g-ants">
    <use href="#s-text"
      className="text-copy"></use>     
    <use href="#s-text"
      className="text-copy"></use>     
    <use href="#s-text"
      className="text-copy"></use>     
    <use href="#s-text"
      className="text-copy"></use>     

  </g>
  
  
</svg>


    </div>
  )
};

export default LandingPage;