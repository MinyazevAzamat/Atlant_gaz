import React from "react";
import '../styles/Main.css';
import '../styles/reset.css';
import '../styles/media.css';
import Frame from "../img/Frame.svg";
import Logo from "../img/Logo.svg";
import track from "../img/track.png";
import arrow from "../img/icons/arrow.svg";
import cloudy from "../img/icons/cloudy.svg";
import moon from "../img/icons/moon.svg";
import snowflake from "../img/icons/snowflake.svg";
import sun from "../img/icons/sun.svg";
import up from "../img/up.svg";
import down from "../img/down.svg";
import gazcar from "../img/gazcar.svg";
import vector1 from "../img/icons/Vector 1.svg";
import vector2 from "../img/icons/Vector 2.svg";
import vector3 from "../img/icons/Vector 3.svg";
import f50m from "../img/icons/50m.png";
import baloon from "../img/icons/baloon.png";
import calc from "../img/icons/calc.png";
import card from "../img/icons/card.png";
import oil from "../img/icons/oil.png";
import sert from "../img/icons/sert.png";
import timer from "../img/icons/timer.png";
import icon_track from "../img/icons/track.png";
import value from "../img/icons/value.png";
import transp from "../img/transp.png";
import arrow_up from "../img/icons/arrow_up.svg";
import arrow_down from "../img/icons/arrow_down.svg";
import master from "../img/master.png";
import bashneft from "../img/bashneft.png";
import gazprom from "../img/gazprom.png";
import lukoil from "../img/lukoil.png";
import rosneft from "../img/rosneft.png";
import tatneft from "../img/tatneft.png";
import transneft from "../img/transneft.png";
// import map from "../img/map.png";
import Modal from "./Modal.js";
import GazCars from './GazCars.js';
import { useState } from "react";
import Slider from "./Slider.js";
import Iframe from 'react-iframe';

function Main () {
    const [modalActive, setModalActive] = useState(false); 

    return (
        <div className="main">
            <div className="header">
                <div className="header_content"> 

                    <div className="header_content_left"> 
                        <div className="header_content_left_logo"> 
                            <img src = {Logo}/>
                            <p>Расправь плечи<br/>в теплом доме</p>
                        </div>

                        <div className="header_content_left_icons"> 
                            <div className="header_content_left_icons_day"> 
                                <div className="icons">
                                    <img src={moon} />
                                    <img src={arrow} />
                                    <img src={sun} />
                                </div>
                                <span>В любое время дня и ночи</span>
                            </div>

                            <div className="header_content_left_icons_weather"> 
                                <div className="icons">
                                    <img src={cloudy} />
                                    <img src={arrow} />
                                    <img src={snowflake} />
                                </div>
                                <span>Вне зависимости от погодных условий</span>
                            </div>
                        </div>

                        <div className="header_content_left_diliver"> 
                            <h1>Доставим газ<br/>за 4 часа</h1>
                            <h2>в любую точку  Москвы<br/>и Московской области</h2>
                            <img src= {Frame} className = "dash_arrow"/>
                            <div className="header_content_left_diliver_button">
                                <a onClick={() => setModalActive(true)}>
                                    <img src = {up} className = "up_img"/>
                                    Заказать доставку газа<br/>в газгольдер
                                    <img src = {down} className = "down" />
                                </a>
                            </div>
                            <span>Доставка газа всегда по актуальным ценам</span>
                        </div>

                        <div className="header_content_left_track"> 
                            <img src={track}/>
                        </div>
                    </div>

                    <div className="header_content_right"> 
                        <p>+7 926 330-68-34</p>
                        <a href = "#ask_form_ref">Срочный вопрос</a>
                    </div>
                </div>
            </div>

            <div className="order">
                <div className="order_content">
                    <div className="order_top">
                        <p>Стоимость газа в ваш газгольдер сегодня</p>
                    </div>

                    <div className="order_bottom">
                        <div className="order_left"> 
                            <h1>Пропан</h1>
                            <h2>от 25 рублей за литр</h2>
                            <span>
                                Физически испарение<br/> 
                                происходит до -40 градусов, что<br/> 
                                позволяет использовать его в<br/> 
                                наших с вами погодных<br/> 
                                условиях <br/>          
                            </span>
                            <a onClick={() => setModalActive(true)}>Заказать</a>
                        </div>

                        <div className="order_center">
                            <h3>Идеальное соотношение</h3>
                            <div className="order_center_gaz">
                                <div className="order_center_gaz_propan">
                                    <p>80%</p> 
                                    <span>пропана</span>
                                </div>
                                <div className="order_center_gaz_butan">
                                    <p>20%</p> 
                                    <span>бутана</span>
                                </div>
                            </div>
                            <img src={gazcar}/>
                        </div>

                        <div className="order_right">
                            <h1>Бутан</h1>
                            <h2>от 16 рублей за литр</h2>
                            <span> 
                                Испарение Бутана происходит<br/>
                                только до 0 градусов и годится<br/>
                                для использования в тёплое<br/>
                                время года<br/>                                         
                            </span>
                            <a onClick={() => setModalActive(true)}>Заказать</a>
                        </div>

                        <div className="order_arrows">
                            <img src={vector1}/>
                            <img src={vector2}/>
                            <img src={vector3}/>
                        </div>
                    </div>    
                </div>
            </div>

            <div className="pros">
                <div className="pros_content">
                    <div className="pros_top">
                        <h1>Преимущества работы с нашей компанией</h1>
                    </div>
                    <div className="pros_bottom">
                        <div className="pros_block">
                            <img src={value} width={"89px"} height={"48px"}/> 
                            <h2>Экономия<br/>на хранилище </h2>
                            <p>за счёт собственных цистерн<br/>на нашей базе</p>
                        </div>

                        <div className="pros_block3">
                            <img src={icon_track} width={"97px"} height={"44px"}/> 
                            <h2>Экономия<br/>на транспорте</h2>
                            <p>более 10 собственный газовозов</p>
                        </div>

                        <div className="pros_block">
                            <img src={calc} width={"40px"} height={"51px"}/> 
                            <h2>Поставки напрямую<br/>от производителей</h2>
                            <p>нет наценки на стоимость газа как у<br/>перекупщиков и небольших частных<br/>компаний</p>
                        </div>

                        <div className="pros_block">
                            <img src={baloon} width={"46px"} height={"73px"}/> 
                            <h2>Любые объёмы поставки<br/>качественного газа</h2>
                            <p>вы получаете объем от 1 тонны до 20<br/>тонн, с сертификатом качества газа</p>
                        </div>

                        <div className="pros_block2">
                            <img src={card} width={"74px"} height={"43px"}/> 
                            <h2>Оплата удобным<br/>для вас способом</h2>
                            <p>все газовозы оснащены терминалами для<br/>оплаты вашего заказа</p>
                        </div>

                        <div className="pros_block">
                            <img src={oil} width={"31px"} height={"47px"}/> 
                            <h2>Чистый газ<br/>без примесей</h2>
                            <p>нет наценки на стоимость газа как у<br/>перекупщиков и небольших частных<br/>компаний</p>
                        </div>

                        <div className="pros_block">
                            <img src={f50m} width={"79px"} height={"46px"}/> 
                            <h2>Длина заправочных<br/>рукавов — 50 метров</h2>
                            <p>не требуется подъезд автомобиля<br/>вплотную к резервуару</p>
                        </div>

                        <div className="pros_block2">
                            <img src={timer} width={"47px"} height={"68px"}/> 
                            <h2>Доставка сжиженного газа<br/>в формате 24/7</h2>
                            <p>привезем газ в удобное для вас время<br/>или же  по графику</p>
                        </div>

                        <div className="pros_block">
                            <img src={sert} width={"52px"} height={"49px"}/> 
                            <h2>Аттестованный<br/>персонал</h2>
                            <p>квалифицированные сотрудники<br/>проведут полную консультацию и дадут<br/>рекомендации, если такие нужны будут</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="autopark">
                <div className="autopark_content">
                    <div className="autopark_img">
                        <img src={transp} width = {"449px"} height = {"203px"}/>
                    </div>
                    <div className="autopark_text">
                        <p>
                            Благодаря нашему<br/>
                            собственному автопарку мы<br/>
                            можем давать гарантию, что<br/>
                            доставим <span>за 4 часа</span>
                        </p>
                        <h1>Это сильное конкурентное преимущество, которым мы дорожим</h1>
                    </div>
                </div>
            </div>
            <GazCars/>
            <div className="gazcar_btn">
                <div className="footer_order_button gazcar_button">
                    <a onClick={() => setModalActive(true)}>
                        <img src = {up} className = "gaz_up" width={"200px"}/>
                        Заказать газ
                        <img src = {down} className = "gaz_down" width={"200px"}/>
                    </a>
                </div>
            </div>
            <div className="slider_h1">
                <h1>Отзывы наших клиентов</h1>
            </div>
            <Slider/>
            <div className="answers">
                <div className="answers_content">
                    <h1>Ответы на часто задаваемые вопросы</h1>
                    <ul className="answers_list">
                        <li className ="punkt">
                            <input id = "toggle" type="checkbox" />
                            <label class="answer " for = "toggle">
                                <img className ="down" src={arrow_down}/>
                                <img className = "up" src={arrow_up}/>
                                <p>Есть ли у вас инженеры в компании?</p>
                                <span>В нашей компании есть все необходимые специалисты</span>
                            </label>
                        </li>
                        <li className ="punkt">
                            <input id = "toggle2" type="checkbox" />
                            <label class="answer " for = "toggle2">
                                <img className ="down" src={arrow_down}/>
                                <img className = "up" src={arrow_up}/>
                                <p>Делаете ли вы отчистку газгольдера?</p>
                                <span>Да, мы всегда поддерживаем чистоту нашего оборудования</span>
                            </label>
                        </li>
                        <li className ="punkt">
                            <input id = "toggle3" type="checkbox" />
                            <label class="answer " for = "toggle3">
                                <img className ="down" src={arrow_down}/>
                                <img className = "up" src={arrow_up}/>
                                <p>А вы не испортите газон у меня и соседей?</p>
                                <span>За счёт длинны в 50 м. делаем заправку не заезжая и не портим газон, а так же не мешаем соседям</span>
                            </label>
                        </li>
                        <li className ="punkt">
                            <input id = "toggle4" type="checkbox" />
                            <label class="answer " for = "toggle4">
                                <img className ="down" src={arrow_down}/>
                                <img className = "up" src={arrow_up}/>
                                <p>Вы предоставляете документы для субсидий?</p>
                                <span>Мы предоставляем все необходимые документы нашим клиентам</span>
                            </label>
                        </li>
                        <li className ="punkt">
                            <input id = "toggle5" type="checkbox" />
                            <label class="answer " for = "toggle5">
                                <img className ="down" src={arrow_down}/>
                                <img className = "up" src={arrow_up}/>
                                <p>Смогу ли я заказать во время праздников?</p>
                                <span>Мы работаем в любое время дня и ночи</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="ask_form" id="ask_form_ref">
                <div className="ask_form_content">
                    <div className="ask_form_left">
                        <h1>
                            Не нашли ответа на свой<br/>
                            вопрос задайте их нашему<br/>
                            специалисту 
                        </h1>
                        <input className="name" type="text" placeholder="ИМЯ"/>
                        <input className="tel" type="tel" placeholder="ТЕЛЕФОН"/>
                        <textarea placeholder="ВАШ ВОПРОС"/>
                        <a className="sender" href = "/appeal">Задать вопрос</a>
                    </div>
                    <div className="ask_form_right">
                        <div className="master_name">
                            <h2>Роман Ш.</h2>
                            <span>Старший менеджер</span>
                        </div>
                        <img src={master}/>
                    </div>
                </div>
            </div>

            <div className="neft_images">
                <div className="neft_img">
                    <a href="https://www.rosneft.ru/">
                        <img src={rosneft}/>
                    </a>
                </div>
                <div className="neft_img">
                    <a href="https://www.bashneft.ru/">
                        <img src={bashneft}/>
                    </a>
                </div>
                <div className="neft_img">
                    <a href="https://www.transneft.ru/">
                        <img src={transneft}/>
                    </a>
                </div>
                <div className="neft_img">
                    <a href="https://www.gazprom.ru/">
                        <img src={gazprom}/>
                    </a>
                </div>
                <div className="neft_img">
                    <a href="https://ru.lukoil-shop.com/">
                        <img src={lukoil}/>
                    </a>
                </div>
                <div className="neft_img">
                    <a href="https://www.tatneft.ru/">
                        <img src={tatneft}/>
                    </a>
                </div>          
            </div>

            <div className="footer_order">
                <p>
                    Закажи прямо сейчас и получи<br/>
                    бесплатную установку телеметрии
                </p>
                <div className="footer_order_button">
                    <a onClick={() => setModalActive(true)}>
                        <img src = {up} className = "footer_up" width={"190px"}/>
                        Заказать газ
                        <img src = {down} className = "footer_down" width={"200px"}/>
                    </a>
                </div>
            </div>

            <div className="footer_map">
                <div className="footer_map_content">
                    <div className="footer_map_left">
                        <h1>Посетите наш<br/>уютный офис</h1>
                        <p>где мы сможем вас полностью<br/>проконсультировать по всем вопросам</p>
                        <h2>Офис</h2>
                        <span>Видное , Белокаменное шоссе, 20</span>
                        <h2>Телефон:</h2>
                        <span>+7 926 330-68-34</span>
                    </div>
                    <div className="footer_map_right">
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2257.13410796821!2d37.77037821538153!3d55.54745031527925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab0113b926911%3A0x38d9302dbc9b7c87!2z0JHQtdC70L7QutCw0LzQtdC90L3QvtC1INGILiwgMjAsINCS0LjQtNC90L7QtSwg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC7LiwgMTQyNzAz!5e0!3m2!1sru!2sru!4v1677604900613!5m2!1sru!2sru"
                         width="407" height="349" style="border:0;" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                    </div>
                </div>

                <div className="basemant">
                    <a href="/politic">Политика конфиденциальности</a>
                    <a href="/politic">Согласие на обработку персональных данных</a>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default Main;