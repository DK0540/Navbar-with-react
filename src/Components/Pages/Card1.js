import React from "react";
import "./card.css";
import { TbArrowBigRightLines } from "react-icons/tb";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { GiBarbedArrow } from "react-icons/gi";
import { ImArrowRight } from "react-icons/im";

const Card1 = () => {
  return (
    <div>
      <div className="icon1">
        <img
          className="img22"
          src="https://image.shutterstock.com/image-photo/image-260nw-693989875.jpg"
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
                <BsArrowRightCircleFill />
              </span>
              link1
            </p>

            <p>
              <span className="iconarrow">
                <GiBarbedArrow />
              </span>
              link1
            </p>

            <p>
              <span className="iconarrow">
                <ImArrowRight />
              </span>
              link1
            </p>
            <div className="card-image-div">
              <img
                className="card-image"
                src="https://cocosolution.com/cms/uploads/1657204741-o_1fj38p0rk1m0oc6fjbpfda4k1a.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
