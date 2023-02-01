import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNetworkWired,
  faUser,
  faComment,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useToasts } from "react-toast-notifications";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import useSWR from "swr";
import {
  FaPhoneAlt,
  FaHome,
  FaRegImage,
  FaFutbol,
  FaClipboardList,
} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { TbCertificate } from "react-icons/tb";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Footer({ data_header }) {
  function onChange(value) {
    console.log("Captcha value:", value);
    setDisable(true);
  }

  const [disable, setDisable] = useState(false);

  const { addToast } = useToasts();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [mobileErr, setMobileErr] = useState({});
  const [messageErr, setMessageErr] = useState({});

  var pattern = new RegExp(/^[0-9\b]+$/);

  const submit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/contact_form`,
        {
          method: "POST",
          body: JSON.stringify({ full_name: name, email, mobile, message }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      )
        .then((response) => {
          response.json();
          if (response.status === 200) {
            setName("");
            setEmail("");
            setMobile("");
            setMessage("");
          }
        })
        .then((json) =>
          addToast("form submitted Sucessfully", {
            appearance: "success",
            autoDismiss: true,
          })
        )
        .catch((err) => console.log(err));
    }
  };

  const formValidation = () => {
    const nameErr = {};
    const emailErr = {};
    const mobileErr = {};
    const messageErr = {};
    let isValid = true;

    if (name === "") {
      nameErr.firstNameEmpty = "Name is required";
      isValid = false;
    } else if (name.trim().length < 5) {
      nameErr.firstNameShort = "Full name is too short";
      isValid = false;
    }
    if (email === "") {
      emailErr.emailEmpty = "Email is required";
      isValid = false;
    } else if (!email.includes("@")) {
      emailErr.emailerror = "You have entered a wrong email";
      isValid = false;
    }
    if (mobile === "") {
      mobileErr.mobileEmpty = "Contact is required";
      isValid = false;
    } else if (!pattern.test(mobile)) {
      mobileErr.mobilenumbershort = "Mobile number should be numeric";
      isValid = false;
    } else if (mobile.trim().length != 10) {
      mobileErr.mobilenumbershort = "Mobile number should be of ten digit";
      isValid = false;
    }
    if (message === "") {
      messageErr.messageEmpty = "Message is required";
      isValid = false;
    } else if (message.trim().length < 5) {
      messageErr.mobilenumbershort = "Message length should be 5 words or more";
      isValid = false;
    }
    setNameErr(nameErr);
    setEmailErr(emailErr);
    setMobileErr(mobileErr);
    setMessageErr(messageErr);
    return isValid;
  };

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`;
  const { data, error } = useSWR(url, fetcher);
  if (error) {
    return <div>Error...</div>;
  }
  if (!data) {
    return <div>No Data...</div>;
  }

  return (
    <div>
      <div className="footerbg" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div style={{ paddingTop: "40px" }}>
                <div style={{ display: "flex" }}>
                  <img
                    src="/images/pglogo.png"
                    alt="logo"
                    style={{ height: "53px" }}
                  />
                  <div style={{ lineHeight: "20px" }}>
                    <span style={{ fontSize: "19px", fontFamily: "curveFont" }}>
                      Rukhmani Devi Public School
                    </span>
                    <br />
                    <span
                      style={{ fontSize: "13px", fontFamily: "curveFont" }}
                      className="place"
                    >
                      Bhopal, Madhya Pradesh
                    </span>
                  </div>
                </div>
                <p style={{ lineHeight: "2rem" }}>
                  Rukhmani Devi School, established in 2007, is a
                  Co-educational, Day Boarding English medium public school
                  affiliated to the Central Board of Secondary Education (CBSE),
                  Delhi, up to 10th and 12th Grades. Rukhmani Devi Public School
                  is a Regional Member of the Round Square, is accredited with
                  ISO 9001:2008 (BSI) and is a member of the prestigious Indian
                  Public Schools` Conference (IPSC).
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="contactus">
                <div id="new-contact">
                  <h5>
                    <span>|&nbsp;</span>
                    <FontAwesomeIcon icon={faNetworkWired} />
                    &nbsp;Quick Links
                  </h5>
                  <ul>
                    <li>
                      <Link href="/">
                        <h6 className="new-p">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FaHome />
                          &nbsp; Home
                        </h6>
                      </Link>
                    </li>
                    <li>
                      <Link href="/Gallery">
                        <h6>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FaRegImage />
                          &nbsp; Gallery
                        </h6>
                      </Link>
                    </li>
                    <li>
                      <Link href="/Activities">
                        <h6>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <FaClipboardList /> &nbsp;Activities
                        </h6>
                      </Link>
                    </li>
                    <li>
                      <Link href="/AcademicFacilities">
                        <h6>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <HiAcademicCap /> &nbsp;Academic Facilities
                        </h6>
                      </Link>
                    </li>
                    <li>
                      <Link href="/GamesSports">
                        <h6>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <FaFutbol />
                          &nbsp; Games & Sports
                        </h6>
                      </Link>
                    </li>
                    <li>
                      <Link href="/AdmissionProcess">
                        <h6>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <HiAcademicCap />
                          &nbsp; Academic Process
                        </h6>
                      </Link>
                    </li>
                    <li>
                      <Link href="/TransferCertificate">
                        <h6>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <TbCertificate />
                          &nbsp; Transfer Certificate
                        </h6>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="emailus">
                <h5>
                  <span>|&nbsp;</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ width: "25px", color: "white" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                  &nbsp; Connect with us
                </h5>
                <div className="" id="contact-bottom">
                  <div className="mb-2 input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                    </div>

                    <input
                      name="name"
                      type="text"
                      id="txtname1"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      className="form-control"
                    />
                  </div>
                  {Object.keys(nameErr).map((key) => {
                    return (
                      <div
                        style={{
                          color: "red",
                          fontWeight: "700",
                          fontSize: "15px",
                        }}
                      >
                        {nameErr[key]}
                      </div>
                    );
                  })}
                </div>
                <div className="" id="contact-bottom">
                  <div className="mb-2 input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                    </div>

                    <input
                      name="email"
                      type="text"
                      id="txtname2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email@gmail.com"
                      className="form-control"
                    />
                  </div>
                  {Object.keys(emailErr).map((key) => {
                    return (
                      <div
                        style={{
                          color: "red",
                          fontWeight: "700",
                          fontSize: "15px",
                        }}
                      >
                        {emailErr[key]}
                      </div>
                    );
                  })}
                </div>
                <div className="" id="contact-bottom">
                  <div className="mb-2 input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <FaPhoneAlt />
                      </div>
                    </div>

                    <input
                      name="mobile"
                      type="text"
                      id="txtname3"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Contact Number"
                      className="form-control"
                    />
                  </div>
                  {Object.keys(mobileErr).map((key) => {
                    return (
                      <div
                        style={{
                          color: "red",
                          fontWeight: "700",
                          fontSize: "15px",
                        }}
                      >
                        {mobileErr[key]}
                      </div>
                    );
                  })}
                </div>
                <div className="" id="contact-bottom">
                  <div className="mb-2 input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <FontAwesomeIcon icon={faComment} />
                      </div>
                    </div>

                    <input
                      name="message"
                      type="text"
                      id="txtname4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your Message"
                      className="form-control"
                    />
                  </div>
                  {Object.keys(messageErr).map((key) => {
                    return (
                      <div
                        style={{
                          color: "red",
                          fontWeight: "700",
                          fontSize: "15px",
                        }}
                      >
                        {messageErr[key]}
                      </div>
                    );
                  })}
                </div>
                <ReCAPTCHA
                  sitekey="6LdpIEIkAAAAAF4ZBhCAM8jpg8kQf6gbCXsIwrGV"
                  // 6LdpIEIkAAAAAF4ZBhCAM8jpg8kQf6gbCXsIwrGV 
                  onChange={onChange}
                  className="form-group"
                />
                {/* <br /> */}
                <div className="text-center">
                  <button
                    type="submit"
                    name="submit"
                    onClick={submit}
                    disabled={!disable}
                    value="send"
                    id="btnsubmit1"
                    className="py-2 btn btn-info btn-block rounded-0"
                    style={{ backgroundColor: "#94d1f5", color: "black" }}
                  >
                    send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="text-center text-light ">
          Rukhmani Devi School&nbsp;|&nbsp; Design & Maintained with
          &nbsp;&nbsp;
          <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} /> &nbsp; by
          &nbsp;
          <a href="http://maitretech.com/" target="_blank">
            maitretech.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

export async function getStaticProps(context) {
  let data_header;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`
    );

    data_header = await response.json();
  } catch (error) {
    data_header = false;
  }

  return {
    props: { data_header },
    revalidate: 2,
  };
}
// will be passed to the page component as props
