import React from "react";
import "./card.css";
import { TbArrowBigRightLines } from "react-icons/tb";

const Card = () => {
  return (
    <div>
      <div className="icon1">
        <img
          className="img22"
          src="https://www.computerhope.com/jargon/d/database.png"
          alt=""
        />
      </div>
      <div className="card">
        <div className="icard">
          <div className="card-content">
            <p>
              <span className="iconarrow">
                <TbArrowBigRightLines />
              </span>
              link1
            </p>
            <p>
              <span className="iconarrow">
                <TbArrowBigRightLines />
              </span>
              link1
            </p>

            <p>
              <span className="iconarrow">
                <TbArrowBigRightLines />
              </span>
              link1
            </p>

            <p>
              <span className="iconarrow">
                <TbArrowBigRightLines />
              </span>
              link1
            </p>
            <div className="card-image-div">
              <img
                className="card-image"
                src="https://mehrinvest.com/storage/elementor/thumbs/Mehrinvest_17_web-p98q560mbdedicl626amtddbws7cla2vqqcty3hkeg.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
