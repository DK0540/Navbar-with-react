import React from "react";
import Card3css from "./card.module.css";
// import { TbArrowBigRightLines } from "react-icons/tb";
import { BsArrowRightCircleFill } from "react-icons/bs";
// import { GiBarbedArrow } from "react-icons/gi";
// import { ImArrowRight } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Card1 = () => {
  return (
    <div>
      <div className={Card3css.icon1}>
        <img
          className={Card3css.img22}
          src="https://image.shutterstock.com/image-photo/image-260nw-693989875.jpg"
          alt=""
        />
      </div>
      <div className={Card3css.card}>
        <div className={Card3css.icard}>
          <div className={Card3css.cardcontent}>
            <div className={Card3css.lists}>
              <NavLink to={"/huticket"}>
                <p>
                  <span className={Card3css.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>link1 test</h6>
                </p>
              </NavLink>
              <NavLink to={"/userrptg"}>
                <p>
                  <span className={Card3css.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>User Reporting</h6>
                </p>
              </NavLink>

              <NavLink to={"/dworder"}>
                <p>
                  <span className={Card3css.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>DisplayTo/WorkOrder</h6>
                </p>
              </NavLink>

              <NavLink to={"/task2"}>
                <p>
                  <span className={Card3css.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>CreatTransformationOrder</h6>
                </p>
              </NavLink>
              <NavLink to={"/home2"}>
                <p>
                  <span className={Card3css.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>Home2</h6>
                </p>
              </NavLink>
              <NavLink to={"/link1"}>
                <p>
                  <span className={Card3css.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>link1</h6>
                </p>
              </NavLink>
            </div>
            <div className={Card3css.iconarrow}>
              <img
                className={Card3css.card1image}
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
