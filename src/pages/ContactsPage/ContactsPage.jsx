import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

import ContactSec from "../../components/ContactSec/ContactSec";
import GitHub from "../../images/SVGs/Github.svg";
import StrokeLine from "../../images/SVGs/LineStroke.svg";
import LinkedIn from "../../images/SVGs/Linkedin.svg";
import Gmail from "../../images/SVGs/Gmail.svg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./contactspage.css";

function ContactsPage() {
  // automated form sending setup
  // Email.Js library configurations
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i8ydb6h",
        "template_fob759e",
        form.current,
        "NOiUCpzhALHoHaKN2"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email Sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Unknown Error");
          e.target.reset();
        }
      );
  };

  return (
    <div className="conPageParent">
      {/* stroke images */}
      <div className="strokeSec">
        <img src={StrokeLine} alt="" />
        <a
          className="GitHubAnchor"
          target="_"
          href="https://github.com/AadityaJujagar/"
        >
          <img src={GitHub} alt="" />
        </a>
        <a
          className="LinkedInAnchor"
          target="_"
          href="https://linkedin.com/in/aadityajujagar/"
        >
          <img src={LinkedIn} alt="" />
        </a>
      </div>

      {/* navbar */}
      <Navbar />

      <section className="conPage">
        <div className="conPageHeader">
          <p>
            <span>/</span>
            contacts
          </p>
          <div className="otherCon">
            <img src={GitHub} alt="" />
            <a target="_" href="https://github.com/AadityaJujagar/">
              github.com/AadityaJujagar
            </a>
          </div>
        </div>

        {/* contacts-section */}
        <div className="conSecImpo">
          <ContactSec />
        </div>

        {/* other medias */}
        <div className="otherMedias">
          <p>
            <span>#</span>
            all-media
          </p>
          <div className="otherMeds">
            <div className="otherMed">
              <a href="https://linkedin.com/in/aadityajujagar/">
                <img src={LinkedIn} alt="" />
                <p>LinkedIn</p>
              </a>
            </div>
            <div className="otherMed">
              <a href="mailto:aadityajujagar@gmail.com">
                <img src={Gmail} alt="" />
                <p>Gmail</p>
              </a>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div className="formHeader">
          <p>
            <span>{"<"}</span>MessageMe<span>{"/>"}</span>
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="nameAndEmail">
            <input
              className="Name"
              type="text"
              placeholder="<Name/>"
              name="from_name"
              required
            />
            <input
              className="email"
              type="email"
              placeholder="<Email/>"
              name="from_email"
              required
            />
          </div>
          <input
            className="title"
            type="text"
            placeholder="<Title/>"
            name="from_title"
            required
          />
          <textarea
            className="textMsg"
            rows="5"
            placeholder="Enter your message here..."
            cols="30"
            name="message"
            required
          />
          <button>
            <p>
              <span>{"< "}</span>
              SendMessage
              <span>{" />"}</span>
            </p>
          </button>
        </form>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default ContactsPage;
