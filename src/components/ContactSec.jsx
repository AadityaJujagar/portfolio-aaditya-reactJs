import React from "react";
import Line4 from "../images/SVGs/Line4.svg";
import LinkedIn from "../images/SVGs/Linkedin.svg";
import Gmail from "../images/SVGs/Gmail.svg";

function ContactSec() {
  return (
    <div className="conSecParent">
      <section className="contactSec">
        <div className="contactHeader">
          <p>
            <span>#</span>
            contacts
          </p>
          <img src={Line4} alt="" />
        </div>
        <div className="conMain">
          <p className="contactDesc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            expedita itaque fugiat pariatur unde numquam maiores at praesentium
            exercitationem laboriosam!
          </p>
          <div className="conItems">
            <p className="msgMe">Message me here</p>
            <div className="linkedIn">
              <a href="/">
                <img src={LinkedIn} alt="" />
                <p>/AadityaJujagar</p>
              </a>
            </div>
            <div className="gmail">
              <a href="/">
                <img src={Gmail} alt="" />
                <p>aadityajujagar22@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSec;
