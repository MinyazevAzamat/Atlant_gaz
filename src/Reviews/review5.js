import React from "react";
import '../styles/review.css';
import woman from "../img/woman.png";


function Review5() {
  return (
      <div className="review">
        <div className="review_content">
            <div className="review_left">
                <img src= {woman}/>
            </div>
            <div className="review_right">
                <h1>Инна Т.</h1>
                <h2>Уфа</h2>
                <p>
                    Я хотела купить газ, но боялась, что это сложно.
                    Спасибо  компании за 
                    то что они все закрыли  этот вопрос под ключ.
                </p>
            </div>     
        </div>
      </div>
  )
}

export default Review5;