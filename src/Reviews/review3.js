import React from "react";
import '../styles/review.css';
import woman from "../img/woman.png";


function Review3() {
  return (
      <div className="review">
        <div className="review_content">
            <div className="review_left">
                <img src= {woman}/>
            </div>
            <div className="review_right">
                <h1>Анна П.</h1>
                <h2>Москва</h2>
                <p>
                    Я  всегда боюсь газа , а особенно боюсь что он может взорваться, как же мне помог Андрей водитель-экспедитор.
                    Спасибо  компании за то что они все закрыли  этот вопрос под ключ.
                </p>
            </div>     
        </div>
      </div>
  )
}

export default Review3;