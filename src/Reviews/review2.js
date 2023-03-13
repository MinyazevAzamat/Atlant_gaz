import React from "react";
import '../styles/review.css';
import woman from "../img/woman.png";


function Review2() {
  return (
      <div className="review">
        <div className="review_content">
            <div className="review_left">
                <img src= {woman}/>
            </div>
            <div className="review_right">
                <h1>Мария Н.</h1>
                <h2>Сочи</h2>
                <p>
                    Спасибо  компании за то что они все закрыли  этот вопрос под ключ.
                    Я  всегда боюсь газа , а особенно боюсь что он может взорваться, как же мне помог Андрей водитель-экспедитор 
                    показал что бояться тут нечего и самое главное моего присутствие даже не понадобится.
                </p>
            </div>     
        </div>
      </div>
  )
}

export default Review2;