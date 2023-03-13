import React, {useState} from "react";
import '../styles/slider.css';
import Slide1 from '../Reviews/review1.js';
import Slide2 from '../Reviews/review2.js';
import Slide3 from '../Reviews/review3.js';
import Slide4 from '../Reviews/review4.js';
import Slide5 from '../Reviews/review5.js';
import vector1 from "../img/icons/Vector 1.svg";
import vector2 from "../img/icons/Vector 2.svg";
import vector3 from "../img/icons/Vector 3.svg";

const img = [
    <Slide1 key={Slide1}/>,
    <Slide2 key={Slide2}/>,
    <Slide3 key={Slide3}/>,
    <Slide4 key={Slide4}/>,
    <Slide5 key={Slide5}/>
]

function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const prevIndex = activeIndex ? activeIndex - 1 : img.length - 1
    const nextIndex = activeIndex ? activeIndex - 1 : img.length + 1

    function next_click () {
        if (activeIndex < img.length - 1)
        {
            setActiveIndex(activeIndex + 1)
        } else
        setActiveIndex(0)
    }

    function prev_click () {
        if (activeIndex > 0)
        {
            setActiveIndex(activeIndex - 1)
        } else
        setActiveIndex(img.length - 1)
    }

    return (
        <div className="slider">
            <div className="slider-img slider-img-prev" key={prevIndex}>
                {img[prevIndex]}
            </div>
            <div className="block1"> </div>
            <div className="block2"> </div>
            <div className="slider-img" key={activeIndex}>
                <button onClick={prev_click}>  
                    <img className="left1 left" src={vector1}/>
                    <img className="left2 left" src={vector2}/>
                    <img className="left3 left" src={vector3}/>
                </button>
                {img[activeIndex]}
                <button  onClick={next_click}>
                    <img className = "right1 right"src={vector1}/>
                    <img className="right2 right" src={vector2}/>
                    <img className="right3 right" src={vector3}/>
                </button>
            </div>
            <div className="slider-img slider-img-next" key={nextIndex}> 
                {img[nextIndex]}
            </div>
        </div>
    )
}

export default Slider;