import React, { useState, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import { Link } from "react-router-dom";
import axios from "axios";
import cards from "@/cards";
import "@/styles/QuestionSet.css";

type Props = {};

const QuestionSet = (props: Props) => {

  // const routeChange = (title: string) => {
  //   const redirectUrl = title
  //     .toLowerCase()
  //     .replace(/[^\w\s]+/g, "")
  //     .replace(/\s+/g, "-");
  //   console.log(redirectUrl)
  //   redirect(`/${redirectUrl}`);
  // };

  return (
    <div>
      <div className="survey-card-container">
        {cards.map((card) => {
          return (
            <div
              //   onClick={() => routeChange(card.title)}
              key={Math.random()}
              className="card-container"
            >
              <div
                style={{ backgroundColor: card.color, color: card.fontColor }}
                className="card-type"
              >
                {card.title}
              </div>
              <div className="card-img">
                <img className="card-image" src={card.img}></img>
              </div>
              <h2 className="card-description">What you will need</h2>
              <div className="card-text">{card.description}</div>
              <Link to={card.title}>
                <div
                  style={{
                    backgroundColor: "white",
                    color: "black",
                  }}
                  // onClick={() => routeChange(card.title)}
                  className="card-status"
                >
                  {/* {!isLoading ? checkSurvey(card.title) : "Start"} */}
                  Start
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionSet;
