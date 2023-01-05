// import React from "react";
// import lastfile from "./Last.module.css";
// import { BiBarcodeReader } from "react-icons/bi";

// const Last = () => {
//   return (
//     <>
//       <div className={lastfile.coantainersa}>
//         <div>
//           <a
//             href="https://usecheck.com/"
//             className={lastfile.btnshinesa}
//             target="_blank"
//           >
//             Display TO / Work Order
//           </a>
//         </div>

//         <form>
//           <div className={lastfile.qrmain}>
//             <div className={lastfile.qrcode}>
//               <BiBarcodeReader size={20} className={lastfile.qrcode1} />
//               <h1>SCAN HU/PICK NUMBER</h1>
//             </div>
//             <input type="text" placeholder="1T000100657" />
//           </div>

//           <div className={lastfile.samaininputs}>
//             <div>
//               <label style={{ color: "black" }}>HU Number</label>
//               <br />
//               <input type="hello" />
//             </div>
//             <div>
//               <label style={{ color: "black" }}>Pick Order</label>
//               <br />
//               <input type="hello" />
//             </div>
//             <div>
//               <label style={{ color: "black" }}>Transform Order Number #</label>
//               <br />
//               <input type="hello" />
//             </div>
//             <div>
//               <label style={{ color: "black" }}>Transform Order Status</label>
//               <br />
//               <input type="hello" />
//             </div>
//             <div>
//               <label style={{ color: "black" }}>Sales Order #</label>
//               <br />
//               <input type="hello" />
//             </div>
//           </div>

//           <div className={lastfile.samaininputs2}>
//             <div>
//               <label style={{ color: "black" }}>Enter Delivery</label>
//               <br />
//               <input type="hello" />
//             </div>
//             <div>
//               <label style={{ color: "black" }}>Ship To Country</label>
//               <br />
//               <input type="hello" />
//             </div>
//             <div>
//               <label style={{ color: "black" }}>Transformation Site</label>
//               <br />
//               <input type="hello" />
//             </div>
//           </div>

//           <div className={lastfile.TotalNumbersa}>
//             <h6 className={lastfile.totalNumbar}> Total Number of Item (0)</h6>
//           </div>

//           <div className={lastfile.saemtybox}>
//             <div className={lastfile.satobar}>
//               <input type="checkbox" />
//             </div>
//             <div className={lastfile.saboxcontent}>
//               <p>No data</p>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Last;

import React, { useState } from "react";
import SaStyle from "./LastStyle.module.css";
import { BiBarcodeReader } from "react-icons/bi";
import Hualert from "./Hualert";
import Second from "./Second";
import Work from "./Work";

const Last = () => {
  const [hualert, setHualert] = useState(false);

  const handleHuAlert = (e) => {
    e.preventDefault();
    setHualert(!hualert);
  };
  return (
    <>
      <div className={SaStyle.containersa}>
        <div>
          <a
            href="https://usecheck.com/"
            className={SaStyle.btnshinesa}
            target="_blank"
          >
            Display TO / Work Order
          </a>
        </div>

        <form>
          <div className={SaStyle.qrmain}>
            <div onClick={handleHuAlert} className={SaStyle.qrcode}>
              <BiBarcodeReader size={20} className={SaStyle.qrcode1} />
              <h1>SCAN HU/PICK NUMBER</h1>
            </div>
            <input type="text" placeholder="1T000100657" />
          </div>

          <div className={SaStyle.samaininputs}>
            <div>
              <label>Hu number</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label>Pick Order</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label>Transform Order Number#</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label>Transform Order Status</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label>Sales Order #</label>
              <br />
              <input type="hello" />
            </div>
          </div>

          <div className={SaStyle.samaininputs2}>
            <div>
              <label>Enterd Delivery</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label>Ship to Country</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label>Transformation site</label>
              <br />
              <input type="hello" />
            </div>
          </div>

          <div className={SaStyle.saemtybox}>
            <div className={SaStyle.satobar}>
              <input type="checkbox" />
            </div>
            <div className={SaStyle.saboxcontent}>
              <h1>Table data</h1>
            </div>
          </div>
        </form>
        {hualert ? <Hualert /> : null}
      </div>
    </>
  );
};

export default Last;

// import React from "react";
// import "./Last.css";
// import { BiBarcodeReader } from "react-icons/bi";
// const Last = () => {
//   return (
//     <>
//       <div className="coantainer_sa">
//         <div>
//           <a
//             href="https://usecheck.com/"
//             className="btn-shine_sa"
//             target="_blank"
//           >
//             Display TO / Work Order
//           </a>
//         </div>

//         <div className="sa-main">
//           <div>
//             <h1 className="sa_text">hello</h1>
//           </div>

//           <div>
//             <h1>hi</h1>
//           </div>
//         </div>

//         <div>
//           <div className="second-sa">
//             <label htmlFor="" className="green-sa">
//               <BiBarcodeReader /> SCAN HU/PICK NUMBER
//             </label>
//             <input type="text" className="sec-sa" />
//           </div>
//           <div>
//             <div className="third-sa">
//               <div>
//                 <label className="pkk-sa" htmlFor="">
//                   <b>HU NUMBER</b>
//                 </label>{" "}
//                 <br />
//                 <input type="text" className="okk-sa" />
//               </div>
//               <div>
//                 <label className="pkk-sa" htmlFor="">
//                   <b>PICK ORDER</b>
//                 </label>{" "}
//                 <br />
//                 <input type="text" className="okk-sa" />
//               </div>
//               <div>
//                 <label className="pkk-sa" htmlFor="">
//                   <b>Transform Order Number#</b>{" "}
//                 </label>{" "}
//                 <br />
//                 <input type="text" className="okk-sa" />
//               </div>
//               <div>
//                 <label className="pkk-sa" htmlFor="">
//                   <b> Transform Order Status </b>{" "}
//                 </label>{" "}
//                 <br />
//                 <input type="text" className="okk-sa" />
//               </div>
//               <div>
//                 <label className="pkk-sa" htmlFor="">
//                   <b>Sales Order# </b>{" "}
//                 </label>{" "}
//                 <br />
//                 <input type="text" className="okk-sa" />
//               </div>
//             </div>

//             <div>
//               <div className="four-sa">
//                 <div>
//                   <label className="pkk-sa" htmlFor="">
//                     <b>Enter Delivery</b>{" "}
//                   </label>{" "}
//                   <br />
//                   <input type="text" className="opp-sa" />
//                 </div>
//                 <div>
//                   <label className="pkk-sa" htmlFor="">
//                     <b>Ship To Country </b>{" "}
//                   </label>{" "}
//                   <br />
//                   <input type="text" className="opp-sa" />
//                 </div>
//                 <div>
//                   <label className="pkk-sa" htmlFor="">
//                     {" "}
//                     <b> Transformation Site </b>{" "}
//                   </label>{" "}
//                   <br />
//                   <input type="text" className="opp-sa" />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="five-sa">
//                 <b>Total No Of Items(0)</b>
//               </div>

//               <div className="six-sa">
//                 <table>
//                   <thead>
//                     <tr>
//                       <th className="th-sa">
//                         <input
//                           type="checkbox"
//                           style={{ marginLeft: "-1350px" }}
//                         />{" "}
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <div className="move-sa">
//                       <b>No Data</b>
//                     </div>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Last;
