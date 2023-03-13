import React, {useState} from "react";
import '../styles/gazcars.css';
import '../styles/reset.css'
import '../styles/Main.css';
import car1 from '../img/car1.png';
import car2 from '../img/car2.png';
import car3 from '../img/car3.png';
import car4 from '../img/car4.png';
import up from "../img/up.svg";
import down from "../img/down.svg";

function GazCars () {
    const [image, setImage] = useState();
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);

    function carOne () {
        setImage(car1);
        setActive1(true);
        setActive2(false);
        setActive3(false);
        setActive4(false);
    }

    function carTwo () {
        setImage(car2);
        setActive1(false);
        setActive2(true);
        setActive3(false);
        setActive4(false);
    }

    function carThree () {
        setImage(car3);
        setActive1(false);
        setActive2(false);
        setActive3(true);
        setActive4(false);
    }

    function carFour () {
        setImage(car4);
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(true);
    }

    return (
        <div className="gazcars">
            <h1>Выберите свой объём Газовоза</h1>
            <div className="gazcars_buttons">
                <button className = {active1 ? "btn active" : "btn"}  onClick={carOne}>Малый<br/>2000 л.</button>
                <button className = {active2 ? "btn active" : "btn"} onClick={carTwo}>Средний<br/>6000 л.</button>
                <button className = {active3 ? "btn active" : "btn"} onClick={carThree}>Стандартный<br/>10 000 л.</button>
                <button className = {active4 ? "btn active" : "btn"} onClick={carFour}>Оптовый<br/>40 000 л.</button>
            </div>
            <img src={image}/>
        </div>
    )
}

export default GazCars;