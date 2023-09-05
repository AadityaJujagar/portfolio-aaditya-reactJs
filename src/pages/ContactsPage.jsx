import React from "react";
import ContactSec from "../components/ContactSec";
import GitHub from "../images/SVGs/Github.svg";
import LinkedIn from "../images/SVGs/Linkedin.svg";
import Gmail from "../images/SVGs/Gmail.svg";
import "./pages.css";

function ContactsPage() {
  return (
    <div className="conPageParent">
      <section className="conPage">
        <div className="conPageHeader">
          <p>
            <span>/</span>
            contacts
          </p>

          <div className="otherCon">
            <img src={GitHub} alt="" />
            <p>github.com/AadityaJujagar</p>
          </div>
        </div>

        {/* contacts-section */}
        <ContactSec />

        {/* other medias */}
        <div className="otherMedias">
          <p>
            <span>#</span>
            all-media
          </p>
          <div className="otherMeds">
            <div className="otherMed">
              <img src={LinkedIn} alt="" />
              <p>LinkedIn</p>
            </div>
            <div className="otherMed">
              <img src={Gmail} alt="" />
              <p>Gmail</p>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div className="formHeader">
          <p>
            <span>{"<"}</span>MessageMe<span>{"/>"}</span>
          </p>
        </div>
        <form action="submit">
          <div className="nameAndEmail">
            <input
              className="Name"
              type="text"
              placeholder="<Name/>"
              name="name"
              required
            />
            <input
              className="email"
              type="email"
              placeholder="<Email/>"
              name="email"
              required
            />
          </div>
          <input
            className="title"
            type="text"
            placeholder="<Title/>"
            name="title"
            required
          />
          <textarea
            className="textMsg"
            rows="5"
            placeholder="Enter your message here..."
            cols="30"
            name="text"
            required
          />
          <button>Send</button>
        </form>
      </section>
    </div>
  );
}

export default ContactsPage;
