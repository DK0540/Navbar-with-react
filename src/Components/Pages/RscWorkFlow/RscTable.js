import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ImUpload3 } from "react-icons/im";
import "./rsctable.css";
import SaveAlert from "../CardComponents/SaveAlert";
import FileAlert from "../CardComponents/FileAlert";
import SelectFile from "../CardComponents/SelectFile";

const CardTable = ({ signin, setSignin }) => {
  const [greenpopup, setGreenPopUp] = useState(false);
  const [info, setInfo] = useState(false);
  const [select, setSelect] = useState(false);

  const handleGreenPopUp = (e) => {
    e.preventDefault();
    setGreenPopUp(!greenpopup);
  };

  const handleSignin = (e) => {
    e.preventDefault();
    setSignin(!signin);
  };

  const handleInfo = (e) => {
    e.preventDefault();
    setInfo(!info);
  };

  return (
    <div>
      <div>
        <table className="rsc-content">
          <thead>
            <tr>
              <th>List No</th>
              <th className="head2">Component Type</th>
              <th className="head2">Component Control No</th>
              <th className="head4">Revision</th>
              <th className="head2">CM Franchise key</th>
              <th className="head3">CM status</th>
              <th>three</th>
              <th className="head2">Content file</th>
              <th className="head2">Alternate refference No</th>
              <th className="head2">CM CNN Change Order No</th>
              <th className="head2">Rsc Change Order No</th>
              <th className="head2">Created By</th>
              <th className="head3">Created On</th>
              <th className="head3">Created On</th>
              <th className="head3">Created by</th>
              <th className="head3">Optional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dynamic Label</td>
              <td>HD19122022</td>
              <td>A</td>
              <td>Dropdown</td>
              <td>Created</td>
              <td>
                <ImUpload3 />
              </td>
              <td>2odin</td>
              <td>input</td>
              <td>SelectDr</td>
              <td>C-1008761</td>
              <td>Vish</td>
              <td>Dec19,2022</td>
              <td>abcd</td>
              <td>Dec19,2022</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>hoihd</td>
              <td>2odin</td>
              <td>1</td>
              <td>2</td>
              <td>
                <ImUpload3 />
              </td>
              <td>2odin</td>
              <td>1</td>
              <td>2</td>
              <td>hoihd</td>
              <td>2odin</td>
              <td>2odin</td>
              <td>abcd</td>
              <td>Dec19,2022</td>
              <td>data</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="table-btns">
          <button onClick={handleSignin} className="rsc-table-btn2">
            APPROVE
          </button>
          <button onClick={handleGreenPopUp} className="rsc-table-btn3">
            REJECT
          </button>
        </div>

        <div>
          {greenpopup ? (
            <SaveAlert greenpopup={greenpopup} setGreenPopUp={setGreenPopUp} />
          ) : null}

          {info ? (
            <FileAlert
              info={info}
              setInfo={setInfo}
              select={select}
              setSelect={setSelect}
            />
          ) : null}

          {select ? <SelectFile select={select} setSelect={setSelect} /> : null}
        </div>
      </div>
    </div>
  );
};

export default CardTable;

// <SaveAlert />
