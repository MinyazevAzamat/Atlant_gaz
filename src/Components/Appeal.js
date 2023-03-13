import React from "react";
import '../styles/Appeal.css';
import Logo from '../img/Logo.svg';
import up from "../img/up.svg";
import down from "../img/down.svg";

function Appeal () {
    return (
        <div className="appeal">
            <div className="appeal_header">
                <div className="appeal_header_logo">
                    <img src = {Logo}/>
                </div>
                <div className="appeal_header_number">
                    <p>8 800 200-06-00</p>
                    <a href = "/#ask_form_ref">Срочный вопрос</a>
                </div>
            </div>

            <div className="appeal_text"> 
                <h1>Спасибо за обращение</h1>
                <h2>наш специалист свяжется<br/>с вами в ближайшее время</h2>
                <div className="appeal_text_button">
                    <a href="/">
                        <img src = {up} className = "footer_up app_up" width={"240px"}/> 
                        Вернуться на сайт
                        <img src = {down} className = "footer_down app_down" width={"250px"}/>
                    </a>                  
                </div>
            </div>
        </div>
    )
}

export default Appeal;