import React, { useState } from "react";

export default function Input() {
  const [put, setPut] = useState("");

  function Submit() {
    console.log(put);
    setPut("");
  }

  return (
    <div className="big_container">
      <div className="input_BBox">
        <div className="d-flex justify_spc_ard align_item input_flex_rap input_gap">
          <div className="input_enve">
            <img src="./img/envelope.png" alt="" className="in_eve_img" />
          </div>
          <div className="input_txt">
            <p>Get industry update with our daily newsletter </p>
            <h5>Subscribe Now !</h5>
          </div>

          <div className="input_field">
            <input
              type="text"
              name="txt"
              placeholder="Email address"
              value={put}
              onChange={(e) => setPut(e.target.value)}
            />
          </div>

          <div className="input_btn">
            <button onClick={Submit}>SING UP</button>
          </div>
        </div>
      </div>
    </div>
  );
}
