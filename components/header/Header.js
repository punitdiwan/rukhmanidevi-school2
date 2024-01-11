import Link from "next/link";
import useSWR from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Socialicon from "./Socialicon";
import ReactTooltip from "react-tooltip";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Header() {
  function toggleMenu() {
    let nav = document.querySelector(".nav");
    let toggle = document.querySelector(".toggle");
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
    const x = document.getElementById("navigation");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.position = "absolute";
      x.style.background = "#002a5c";
      x.style.zIndex = "100";
      x.style.width = "94%";
    } else {
      x.style.display = "none";
    }

    document.getElementById("navbar").style.float = "left";
  }
 
  const url =`${process.env.NEXT_PUBLIC_BASE_URL}/myapp/items/config?fields=title,tagline,address,phone,email,mobile,logo.*`;
  
  
    const { data, error } = useSWR(url, fetcher);

  if (error) {
    return <div></div>;
  }
  if (!data) {
    return <div></div>;
  }
  return (
    <div>
      <div className="header">
        <div className="px-3 container-fluid">
          <div className="contant">
            <div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-8">
                    <div className="row">
                      <div className="p-0 col-md-3 col-sm-5 col-5 head_meadia">
                        <div className="logocontent d-flex justify-content-center">
                          <Link href="/">
                            <img src="/images/pglogo.png" alt="logo" />
                          </Link>
                        </div>
                      </div>
                      <div className="p-0 col-md-9 col-sm-7 col-7 ">
                        <div className="logocontent">
                          <div
                            className="school_title"
                            style={{ lineHeight: "22px" }}
                          >
                            <span
                              style={{
                                fontFamily: "curveFont",
                              }}
                            >
                              RUKHMANI DEVI PUBLIC SCHOOL
                            </span>
                            <br />
                            <span
                              className="place pl-1"
                              style={{
                                fontFamily: "curveFont",
                              }}
                            >
                              Bhopal, Madhya Pradesh
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="float-right mb-1 col-sm-4">
                    <div className="display_none">
                      <div className="d-flex text-light">
                        <Link href="#video">
                          <p className="text-light">
                            Virtual Tour for Rukhmani Devi School
                          </p>
                        </Link>
                        &ensp;|&ensp;
                        <Link href="#footer" className="text-light   ">
                          Contact
                        </Link>
                      </div>
                    </div>

                    <div className="row icon_head_logo">
                      <ReactTooltip />

                      <div className=" col-lg-2 col-md-2 col-sm-2 col-2">
                        <Link href="https://indiancc.nic.in/" target="_blank">
                          <img
                            src="/images/hlogo1.png"
                            alt="no_img"
                            datatip="NCC INDIA"
                            dataplace="bottom"
                            style={{
                              width: "42px",
                              height: "42px",
                              borderRadius: "50%",
                            }}
                          />
                        </Link>
                      </div>

                      <div className=" col-lg-2 col-md-2 col-sm-2 col-2">
                        <Link href="https://npscindia.com/" target="_blank">
                          <img
                            src="/images/hlogo2.jpeg"
                            alt="no_img"
                            data-tip="NPSC INDIA"
                            data-place="bottom"
                            style={{
                              width: "42px",
                              height: "42px",
                              borderRadius: "50%",
                            }}
                          />
                        </Link>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                        <Link href="https://www.cbse.gov.in/" target="_blank">
                          <img
                            src="/images/hlogo3.jpeg"
                            alt="no_img"
                            datatip=" CBSC"
                            dataplace="bottom"
                            style={{
                              width: "42px",
                              height: "42px",
                              borderRadius: "50%",
                            }}
                          />
                        </Link>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                        <Link
                          href="https://www.facebook.com/rukhmanidevischool/"
                          target="_blank"
                        >
                          <img
                            src="/images/hfb.png"
                            alt="no_img"
                            datatip="FACEBOOK"
                            dataplace="bottom"
                            style={{
                              width: "42px",
                              height: "42px",
                              borderRadius: "50%",
                            }}
                          />
                        </Link>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                        <Link href="#">
                          <img
                            src="/images/hinsta.jpeg"
                            alt="no_img"
                            datatip="INSTAGRAM"
                            dataplace="bottom"
                            style={{
                              width: "42px",
                              height: "42px",
                              borderRadius: "50%",
                            }}
                          />
                        </Link>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                        <Link
                          href="https://www.youtube.com/channel/UCIKlH_ibvWaviOlUTrFeQqg"
                          target="_blank"
                        >
                          <img
                            src="/images/hutub.jpeg"
                            alt="no_img"
                            datatip="YOUTUBE"
                            dataplace="bottom"
                            style={{
                              width: "42px",
                              height: "42px",
                              borderRadius: "50%",
                            }}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="icons">
                <ul>
                  <Socialicon />
                </ul>
              </div>

              <div className="toggle" onClick={toggleMenu}>
                &nbsp;
                <FontAwesomeIcon icon={faBars} />
                <span>&ensp;MENU</span>
              </div>
              <div className="nav" id="navbar">
                <ul id="navigation">
                  <li>
                    <Link href="/">Home</Link>&ensp;|&ensp;
                  </li>

                  <li>
                    <button className="dropdownbtn">
                      About Us <FontAwesomeIcon icon={faCaretDown} />
                      <div className="dropdownmenu">
                        {/* <li>
                          <Link href="/Location">
                            Location
                          </Link>
                        </li> */}
                        <li>
                          <Link href="/Director">Director's desk</Link>
                        </li>
                        <li>
                          <Link href="/Principal">principal's desk</Link>
                        </li>
                        <li>
                          <Link href="/Chairman">Chairman's Desk</Link>
                        </li>
                        <li>
                          <Link href="/FacultysMain">Faculty</Link>
                        </li>
                        {/* <li><Link href='/'>life at pinegrove</Link></li> */}
                        {/* <li><Link href='/'>Faculty dharampur</Link></li> */}
                        {/* <li><Link href='/Faculty'>Faculty</Link></li> */}
                        {/* <li><Link href='/'>group photo</Link></li>
                                                <li><Link href='/'>scales of pay</Link></li>
                                                <li><Link href='/'>enrollment</Link></li>
                                                <li><Link href='/'>the board</Link></li>
                                                <li><Link href='/'>smc</Link></li> */}
                      </div>
                    </button>
                    &ensp;|&ensp;
                  </li>
                  <li>
                    <button className="dropdownbtn">
                      Branches <FontAwesomeIcon icon={faCaretDown} />
                      <div className="dropdownmenu">
                        <li>
                          <Link href="/Branch1">Jharkheda</Link>
                        </li>
                        <li>
                          <Link href="/Branch2">Airport Road </Link>
                        </li>
                        <li>
                          <Link href="/Branch3">Aakriti Ecocity</Link>
                        </li>
                      </div>
                    </button>
                    &ensp;|&ensp;
                  </li>

                  <li>
                    <button className="dropdownbtn">
                      Facilities <FontAwesomeIcon icon={faCaretDown} />
                      <div className="dropdownmenu">
                        {/* <li><Link href='/FacilitiesIntro'>Facilities INTRODUCTION </Link></li> */}
                        <li>
                          <Link href="/AcademicFacilities">
                            Academic Facilities
                          </Link>
                        </li>
                        <li>
                          <Link href="/GamesSports">Games & Sports</Link>
                        </li>
                        <li>
                          <Link href="/Activities">Activities</Link>
                        </li>
                        {/* <li><Link href='/Boarding'>Boarding</Link></li> */}
                        {/* <li><Link href='/'>New Developments</Link></li> */}
                      </div>
                    </button>
                    &ensp;|&ensp;
                  </li>
                  <li>
                    <button className="dropdownbtn">
                      ACADEMICS <FontAwesomeIcon icon={faCaretDown} />
                      <div className="dropdownmenu">
                        <li>
                          <Link href="/AdmissionProcess">
                            Admission Process
                          </Link>
                        </li>
                        {/* <li><Link href='/'>fees</Link></li>
                                                <li><Link href='/'>Clothing</Link></li>
                                                <li><Link href='/'>Withdrawal</Link></li>
                                                <li><Link href='/'>CONTACT FOR ADMISSION</Link></li> */}
                        <li>
                          <Link href="/TransferCertificate">
                            Transfer Certificate
                          </Link>
                        </li>
                      </div>
                    </button>
                    &ensp;|&ensp;
                  </li>

                  <li>
                    <Link href="/Gallery">Gallery &ensp;|&ensp;</Link>
                  </li>

                  {/* <li> */}
                  {/* <button className='dropdownbtn'>Gallery  
                                    <FontAwesomeIcon icon={faCaretDown} />
                                             
                                        </button>&ensp;|&ensp; */}
                  {/* <button className='dropdownbtn'>memories <FontAwesomeIcon icon={faCaretDown} />
                                            <div className='dropdownmenu'>

                                                <li><Link href='/'>Our Founder</Link></li>
                                                <li><Link href='/'>Alumni</Link></li>
                                                <li><Link href='/'>Guest Book</Link></li>
                                                <li><Link href='/'>Grapevine</Link></li>
                                                <li><Link href='/'>Roll of Honour</Link></li>
                                                <li><Link href='/'>Picture Gallery</Link></li>
                                            </div>
                                        </button>&ensp;|&ensp; */}
                  {/* </li> */}

                  <li>
                    {/* <button className='dropdownbtn'>Contact
                                            <FontAwesomeIcon icon={faCaretDown} />
                                            <div className='dropdownmenu'> 
                                                <li><Link href='/FAQIntro'>FAQ INTRODUCTION </Link></li>
                                                <li><Link href='/'>ADMISSION AND FEES</Link></li>
                                                <li><Link href='/'>ACADEMICS</Link></li>
                                                <li><Link href='/'>FACILITIES AND ACTIVITIES</Link></li>
                                                <li><Link href='/'>BOARDING</Link></li>
                                                <li><Link href='/'>DISCIPLINE</Link></li>
                                                <li><Link href='/'>OTHERS </Link></li>
                                            </div>
                                        </button>&ensp;|&ensp; */}
                    {/* <button className='dropdownbtn'>FAQ <FontAwesomeIcon icon={faCaretDown} />
                                            <div className='dropdownmenu'> 
                                                <li><Link href='/FAQIntro'>FAQ INTRODUCTION </Link></li>
                                                <li><Link href='/'>ADMISSION AND FEES</Link></li>
                                                <li><Link href='/'>ACADEMICS</Link></li>
                                                <li><Link href='/'>FACILITIES AND ACTIVITIES</Link></li>
                                                <li><Link href='/'>BOARDING</Link></li>
                                                <li><Link href='/'>DISCIPLINE</Link></li>
                                                <li><Link href='/'>OTHERS </Link></li>
                                            </div>
                                        </button>&ensp;|&ensp; */}
                  </li>
                  <li>
                    <Link href="/Mandatory">Mandatory Disclosure</Link>
                    &ensp;|&ensp;
                  </li>
                  <li>
                    <Link href="/Rules">Rules</Link>
                    &ensp;|&ensp;
                  </li>
                  {/* <li><Link href='#footer'>Contact</Link>&ensp;|&ensp;</li> */}
                  {/* <li><Link href='/'>Calender</Link></li> */}
                  <li>
                    <Link href="/#">Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
