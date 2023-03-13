import React from "react";
import '../styles/review.css';
import woman from "../img/woman.png";


function Review4() {
  return (
      <div className="review">
        <div className="review_content">
            <div className="review_left">
                <img src= {woman}/>
            </div>
            <div className="review_right">
                <h1>Полина А.</h1>
                <h2>Казань</h2>
                <p>
                    Я хотела заполнить своё газовое хранилище, но я совсем не понимала, как это делать.
                    Огромное спасибо работникам Атлант Газа за то, что помгли мне в этом деле.
                </p>
            </div>     
        </div>
      </div>
  )
}

export default Review4;