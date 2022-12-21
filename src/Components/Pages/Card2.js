import React from "react";
import "./card.css";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Card2 = () => {
  return (
    <div>
      <div className="icon1">
        <img
          className="img22"
          src="https://thumbs.dreamstime.com/b/group-people-planning-concept-business-plan-office-56275448.jpg"
          alt=""
        />
      </div>
      <div className="card">
        <div className="icard">
          <div className="card-content">
            <p>
              <span className="iconarrow">
                <BsArrowRightCircleFill />
              </span>
              link1
            </p>
            <p>
              <span className="iconarrow">
                <BsArrowRightCircleFill />
              </span>
              link1
            </p>

            <p>
              <span className="iconarrow">
                <BsArrowRightCircleFill />
              </span>
              link1
            </p>

            <p>
              <span className="iconarrow">
                <BsArrowRightCircleFill />
              </span>
              link1
            </p>
            <div className="card-image-div">
              <img
                className="card-image"
                src="https://digitaltrix.com.br/wp-content/uploads/2018/05/marketing-digital-1000x600.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
