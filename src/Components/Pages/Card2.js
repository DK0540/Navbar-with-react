import React from "react";
import Card2css from "./card.module.css";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Card2 = () => {
  return (
    <div>
      <div className={Card2css.icon1}>
        <img
          className="img22"
          src="https://thumbs.dreamstime.com/b/group-people-planning-concept-business-plan-office-56275448.jpg"
          alt=""
        />
      </div>
      <div className={Card2css.card}>
        <div className={Card2css.icard}>
          <div className={Card2css.cardcontent}>
            <div className={Card2css.lists}>
              <NavLink to={"/link1"}>
                <p>
                  <span className={Card2css.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>link1</h6>
                </p>
              </NavLink>
              <NavLink to={"/link1"}>
                <p>
                  <span className={Card2css.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>link1</h6>
                </p>
              </NavLink>

              <NavLink to={"/link1"}>
                <p>
                  <span className={Card2css.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>link1</h6>
                </p>
              </NavLink>

              <NavLink to={"/link1"}>
                <p>
                  <span className={Card2css.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>link1</h6>
                </p>
              </NavLink>
              <NavLink to={"/link1"}>
                <p>
                  <span className={Card2css.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>link1</h6>
                </p>
              </NavLink>
              <NavLink to={"/link1"}>
                <p>
                  <span className={Card2css.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>link1</h6>
                </p>
              </NavLink>
              <NavLink to={"/link1"}>
                <p>
                  <span className={Card2css.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>link1</h6>
                </p>
              </NavLink>
            </div>
            <div className={Card2css.cardimagediv}>
              <img
                className={Card2css.cardimage}
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
