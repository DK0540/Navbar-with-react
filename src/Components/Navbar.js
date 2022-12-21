import React, { useState } from "react";
import { BiHelpCircle, BsInstagram } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosContact } from "react-icons/io";
import "./navbar.css";

const Navbar = () => {
  const [showMediaIcon, setShowMediaIcon] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>R</span>ight
            <span>S</span>tage
            <span>C</span>ostumization
          </h2>
        </div>
        <div
          className={showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"}
        >
          <ul>
            <li>
              <a href="#">WorkOrderExecution</a>
            </li>
            <li>
              <a href="#">Varification</a>
            </li>
            <li>
              <a href="#">RSC WorkFlowIndex</a>
            </li>
            <li>
              <a href="#">SetLocation</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/watch?v=eBKcGAhkZUI&t=8s"
                target="_thapa"
              >
                <IoIosContact className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=eBKcGAhkZUI&t=8s"
                target="_thapa"
              >
                <BiHelpCircle className="youtube" />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcon(!showMediaIcon)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

//same above
// import React, { useState } from "react";
// import { BsYoutube, BsInstagram } from "react-icons/bs";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoIosContact } from "react-icons/io";
// import "./navbar.css";

// const Navbar = () => {
//   const [showMediaIcon, setShowMediaIcon] = useState(false);
//   return (
//     <>
//       <nav className="main-nav">
//         <div className="logo">
//           <h2>
//             <span>R</span>ight
//             <span>S</span>tage
//             <span>C</span>ostumization
//           </h2>
//         </div>
//         <div
//           className={showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"}
//         >
//           <ul>
//             <li>
//               <a href="#">WorkOrderExecution</a>
//             </li>
//             <li>
//               <a href="#">Varification</a>
//             </li>
//             <li>
//               <a href="#">RSC WorkFlowIndex</a>
//             </li>
//             <li>
//               <a href="#">SetLocation</a>
//             </li>
//           </ul>
//         </div>
//         <div className="social-media">
//           <ul className="social-media-desktop">
//             <li>
//               <a
//                 href="https://www.youtube.com/watch?v=eBKcGAhkZUI&t=8s"
//                 target="_thapa"
//               >
//                 <IoIosContact className="facebook" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.youtube.com/watch?v=eBKcGAhkZUI&t=8s"
//                 target="_thapa"
//               >
//                 <BsYoutube className="youtube" />
//               </a>
//             </li>
//           </ul>
//           <div className="hamburger-menu">
//             <a href="#" onClick={() => setShowMediaIcon(!showMediaIcon)}>
//               <GiHamburgerMenu />
//             </a>
//           </div>
//         </div>
//       </nav>
//       <section className="hero-section">
//         <p>Welcome to</p>
//         <h1>Vishwa page</h1>
//       </section>
//     </>
//   );
// };

// export default Navbar;
