import React from "react";
import Line4 from "../../images/SVGs/Line4.svg";
import LinkedIn from "../../images/SVGs/Linkedin.svg";
import Gmail from "../../images/SVGs/Gmail.svg";
import Phone from "../../images/SVGs/vector.svg";
import "./contactsec.css";

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
            Thank You for Stopping By!
            <br />
            <br />
            Please feel free to reach out for any inquiries, collaborations, or
            even a casual chat. I believe in the power of connection and
            collaboration, and I'd be excited to hear from you. Your feedback
            and ideas are invaluable to me, and I'm here to make your web
            development dreams come true.
            <br />
            Once again, thank you for visiting, and I hope you enjoy your time
            here. Let's connect and create amazing web experiences together!
          </p>
          <div className="conItems">
            <p className="msgMe">Message me here</p>
            <div className="linkedIn">
              <a href="https://linkedin.com/in/aadityajujagar/">
                <img src={LinkedIn} alt="" />
                <p className="hrefText">In/AadityaJujagar</p>
              </a>
            </div>
            <div className="Gmail">
              <a href="mailto:aadityajujagar@gmail.com">
                <img src={Gmail} alt="" />
                <p className="hrefText">aadityajujagar22@gmail.com</p>
              </a>
            </div>
            <div className="Phone">
              <a href="tel:+919130656629">
                <img src={Phone} alt="" />
                <p className="hrefText">+919130656629</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSec;
