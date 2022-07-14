import { gsap } from "gsap";


export default function Main() {
  return (
    <div className="container">
      <div className="hero">a</div>
      <div className="cards">
        <div className="card about" onClick={() => {mainTween()}}>about</div>
        <div className="card projects">projects</div>
        <div className="card contact">contact</div>
      </div>
      <div className="content">content</div>
      
    </div>
  );
}

//gsap.to(".content", {duration: 1, y: -100});




function mainTween(){

  if(typeof window !== 'undefined'){
    const isPc = window.innerWidth > 720;
    const isMobile = window.innerWidth < 720;

    const mainTimeline = gsap.timeline();

    if(isPc){
      mainTimeline.to(".card", { right:"100%", xPercent:-100, force3D:true});
    }else{
      mainTimeline.to(".card", { top:"100%", yPercent:-100, force3D:true});
    }
  }
}