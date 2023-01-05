import React from "react";
import Cardcss from "./card.module.css";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <div className={Cardcss.icon1}>
        <img
          className={Cardcss.img22}
          src="https://www.computerhope.com/jargon/d/database.png"
          alt=""
        />
      </div>
      <div className={Cardcss.card}>
        <div className={Cardcss.icard}>
          <div className={Cardcss.cardcontent}>
            <div className={Cardcss.lists}>
              <NavLink to={"/woe"}>
                <p>
                  <span className={Cardcss.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>Work Order Execution</h6>
                </p>
              </NavLink>
              <NavLink to={"/link1"}>
                <p>
                  <span className={Cardcss.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>link2</h6>
                </p>
              </NavLink>

              <NavLink to={"/link1"}>
                <p>
                  <span className={Cardcss.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>Component Master</h6>
                </p>
              </NavLink>

              <NavLink to={"/compoasmt"}>
                <p>
                  <span className={Cardcss.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>ComponentAssignmentMaster</h6>
                </p>
              </NavLink>
              <NavLink to={"/link1"}>
                <p>
                  <span className={Cardcss.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>link1</h6>
                </p>
              </NavLink>
              <NavLink to={"/link1"}>
                <p>
                  <span className={Cardcss.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>link1</h6>
                </p>
              </NavLink>
              <NavLink to={"/link1"}>
                <p>
                  <span className={Cardcss.iconarrow}>
                    <BsArrowRightCircleFill />
                  </span>
                  <h6>link1</h6>
                </p>
              </NavLink>
            </div>

            <div className={Cardcss.cardimagediv}>
              <img
                className={Cardcss.cardimage}
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
