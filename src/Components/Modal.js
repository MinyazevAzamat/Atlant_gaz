import React from "react";
import '../styles/Modal.css';
import '../styles/Main.css';
import up from "../img/up.svg";
import down from "../img/down.svg";

function Modal({active, setActive}) {
    return (
        <div className={active ? "modal active" : "modal"}>
            <div className="modal_content">
                <div className="modal_block">
                    <div className="cross" onClick={() => setActive(false)}> </div>
                    <h1>Доставим газ<br/>за 4 часа</h1>
                    <input className="name name_modal" type="text" placeholder="ИМЯ"/>
                    <input className="tel tel_modal" type="tel" placeholder="ТЕЛЕФОН"/>
                    <div className="footer_order_button modal_button">
                        <a href = "/appeal">
                            <img src = {up} className = "footer_up" width={"250px"}/>
                            Заказать доставку газа
                            <img src = {down} className = "footer_down" width={"260px"}/>
                        </a>
                    </div>
                </div>
                <span>
                    Нажимая на кнопку, вы даёте согласие на обработку персональных<br/>
                    данных и соглашаетесь с условиями политики<br/>
                    конфиденциальности
                </span>
            </div>
        </div>
    )
}

export default Modal;