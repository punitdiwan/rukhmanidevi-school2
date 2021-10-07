import Link from 'next/link'
import useSWR from 'swr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Socialicon from './Socialicon';
import ReactTooltip from 'react-tooltip';
const fetcher = (...args) => fetch(...args).then(res => res.json());
function Header() {


    function toggleMenu() {
        let nav = document.querySelector('.nav');
        let toggle = document.querySelector('.toggle');
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
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

    const url = "https://cms.schoolscoop.co.in/myapp/items/config?fields=title,tagline,address,phone,email,mobile,logo.*";
    const { data, error } = useSWR(url, fetcher);
    if (error) {
        return <div></div>
    }
    if (!data) {
        return <div></div>
    }
    return (
        <div>

            <div className='header' >
                <div className='px-3 container-fluid'>
                    <div className='contant'>
                        <div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="row">
                                            <div className="p-0 col-md-3 col-sm-5 col-5 head_meadia">
                                                <div className='logocontent d-flex justify-content-center' >
                                                    <Link href="/"> 
                                                    <a> 
                                                        <img src="/images/pglogo.png" alt='logo'/>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="p-0 col-md-9 col-sm-7 col-7 ">
                                                <div className='logocontent' >
                                                    <div className="school_title" style={{ lineHeight: '20px' }}>
                                                        <span>Rukhmani Devi   Public School </span><br />
                                                        <span className='place'>Bhopal, Madhya Pradesh</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right mb-1 col-sm-4">
                                        <div className="d-flex text-light">
                                            <Link href="#video">
                                                <a>
                                                    <p className="text-light">Virtual Tour for Rukhmani Devi School</p>
                                                </a>
                                            </Link>
                                            &ensp;|&ensp; <Link href='#footer'><a className="text-light">Contact</a></Link>
                                        </div>

                                        <div className="row icon_head_logo">
                                            <ReactTooltip />

                                            <div className=" col-lg-2 col-md-2 col-sm-2 col-2">
                                                <Link href="https://indiancc.nic.in/">
                                                    <a target="_blank">
                                                        <img src="/images/hlogo1.png" alt="no_img" data-tip="NCC INDIA" data-place="bottom" style={{ width: "42px", height: "42px", borderRadius: "50%" }} />
                                                    </a>
                                                </Link>
                                            </div>

                                            <div className=" col-lg-2 col-md-2 col-sm-2 col-2">
                                                <Link href="https://npscindia.com/">
                                                    <a target="_blank">
                                                        <img src="/images/hlogo2.jpeg" alt="no_img" data-tip="NPSC INDIA" data-place="bottom" style={{ width: "42px", height: "42px", borderRadius: "50%" }} />
                                                    </a>
                                                </Link>

                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-2">

                                                <Link href="https://www.cbse.gov.in/">
                                                    <a target="_blank">
                                                        <img src="/images/hlogo3.jpeg" alt="no_img" data-tip=" CBSC" data-place="bottom" style={{ width: "42px", height: "42px", borderRadius: "50%" }} />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                                <Link href="https://www.facebook.com/rukhmanidevischool/">
                                                    <a target="_blank">
                                                        <img src="/images/hfb.png" alt="no_img" data-tip="FACEBOOK" data-place="bottom" style={{ width: "42px", height: "42px", borderRadius: "50%" }} />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                                <Link href="#">
                                                    <a>
                                                        <img src="/images/hinsta.jpeg" alt="no_img" data-tip="INSTAGRAM" data-place="bottom" style={{ width: "42px", height: "42px", borderRadius: "50%" }} />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                                <Link href="https://www.youtube.com/channel/UCIKlH_ibvWaviOlUTrFeQqg">
                                                    <a target="_blank">
                                                        <img src="/images/hutub.jpeg" alt="no_img" data-tip="YOUTUBE" data-place="bottom" style={{ width: "42px", height: "42px", borderRadius: "50%" }} />
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className='icons'>
                                <ul>
                                    <Socialicon />
                                </ul>
                            </div>


                            <div className="toggle" onClick={toggleMenu} >&nbsp;<FontAwesomeIcon icon={faBars} /><span>&ensp;MENU</span></div>
                            <div className='nav' id='navbar'  >


                                <ul id='navigation'>
                                    <li><Link href='/'>Home</Link>&ensp;|&ensp;</li>

                                    <li>
                                        <button className='dropdownbtn'>About Us <FontAwesomeIcon icon={faCaretDown} />
                                            <div className='dropdownmenu'>
                                                <li><Link href='/Location'><a>Location</a></Link></li>
                                                {/* <li><Link href='/#'><a>About</a></Link></li> */}
                                                <li><Link href='/Director'><a>Director's desk</a></Link></li>
                                                <li><Link href='/Principal'><a>principal's desk</a></Link></li>
                                                <li><Link href='/Chairman'><a>Chairman's Desk</a></Link></li>
                                                <li><Link href='/FacultysMain'><a>Faculty</a></Link></li>
                                                {/* <li><Link href='/'><a>life at pinegrove</a></Link></li> */}
                                                {/* <li><Link href='/'><a>Faculty dharampur</a></Link></li> */}
                                                {/* <li><Link href='/Faculty'><a>Faculty</a></Link></li> */}
                                                {/* <li><Link href='/'><a>group photo</a></Link></li>
                                                <li><Link href='/'><a>scales of pay</a></Link></li>
                                                <li><Link href='/'><a>enrollment</a></Link></li>
                                                <li><Link href='/'><a>the board</a></Link></li>
                                                <li><Link href='/'><a>smc</a></Link></li> */}

                                            </div>
                                        </button>&ensp;|&ensp;
                                    </li>

                                    <li>
                                        <button className='dropdownbtn'>Facilities <FontAwesomeIcon icon={faCaretDown} />
                                            <div className='dropdownmenu'>
                                                <li><Link href='/FacilitiesIntro'><a>Facilities INTRODUCTION </a></Link></li>
                                                <li><Link href='/AcademicFacilities'><a>Academic Facilities</a></Link></li>
                                                <li><Link href='/GamesSports'><a>Games & Sports</a></Link></li>
                                                <li><Link href='/Activities'><a>Activities</a></Link></li>
                                                <li><Link href='/Boarding'><a>Boarding</a></Link></li>
                                                {/* <li><Link href='/'><a>New Developments</a></Link></li> */}
                                            </div>
                                        </button>&ensp;|&ensp;
                                    </li>
                                    <li>
                                        <button className='dropdownbtn'>ACADEMICS <FontAwesomeIcon icon={faCaretDown} />
                                            <div className='dropdownmenu'>

                                                <li><Link href='/AdmissionProcess'><a>Admission Process</a></Link></li>
                                                {/* <li><Link href='/'><a>fees</a></Link></li>
                                                <li><Link href='/'><a>Clothing</a></Link></li>
                                                <li><Link href='/'><a>Withdrawal</a></Link></li>
                                                <li><Link href='/'><a>CONTACT FOR ADMISSION</a></Link></li> */}
                                                <li><Link href='/TransferCertificate'><a>Transfer Certificate</a></Link></li>
                                            </div>
                                        </button>&ensp;|&ensp;
                                    </li>

                                    <li><Link href='/Gallery'><a>Gallery &ensp;|&ensp;</a></Link></li>

                                    {/* <li> */}
                                    {/* <button className='dropdownbtn'>Gallery  
                                    <FontAwesomeIcon icon={faCaretDown} />
                                             
                                        </button>&ensp;|&ensp; */}
                                    {/* <button className='dropdownbtn'>memories <FontAwesomeIcon icon={faCaretDown} />
                                            <div className='dropdownmenu'>

                                                <li><Link href='/'><a>Our Founder</a></Link></li>
                                                <li><Link href='/'><a>Alumni</a></Link></li>
                                                <li><Link href='/'><a>Guest Book</a></Link></li>
                                                <li><Link href='/'><a>Grapevine</a></Link></li>
                                                <li><Link href='/'><a>Roll of Honour</a></Link></li>
                                                <li><Link href='/'><a>Picture Gallery</a></Link></li>
                                            </div>
                                        </button>&ensp;|&ensp; */}
                                    {/* </li> */}

                                    <li>
                                        {/* <button className='dropdownbtn'>Contact
                                            <FontAwesomeIcon icon={faCaretDown} />
                                            <div className='dropdownmenu'> 
                                                <li><Link href='/FAQIntro'><a>FAQ INTRODUCTION </a></Link></li>
                                                <li><Link href='/'><a>ADMISSION AND FEES</a></Link></li>
                                                <li><Link href='/'><a>ACADEMICS</a></Link></li>
                                                <li><Link href='/'><a>FACILITIES AND ACTIVITIES</a></Link></li>
                                                <li><Link href='/'><a>BOARDING</a></Link></li>
                                                <li><Link href='/'><a>DISCIPLINE</a></Link></li>
                                                <li><Link href='/'><a>OTHERS </a></Link></li>
                                            </div>
                                        </button>&ensp;|&ensp; */}
                                        {/* <button className='dropdownbtn'>FAQ <FontAwesomeIcon icon={faCaretDown} />
                                            <div className='dropdownmenu'> 
                                                <li><Link href='/FAQIntro'><a>FAQ INTRODUCTION </a></Link></li>
                                                <li><Link href='/'><a>ADMISSION AND FEES</a></Link></li>
                                                <li><Link href='/'><a>ACADEMICS</a></Link></li>
                                                <li><Link href='/'><a>FACILITIES AND ACTIVITIES</a></Link></li>
                                                <li><Link href='/'><a>BOARDING</a></Link></li>
                                                <li><Link href='/'><a>DISCIPLINE</a></Link></li>
                                                <li><Link href='/'><a>OTHERS </a></Link></li>
                                            </div>
                                        </button>&ensp;|&ensp; */}
                                    </li>
                                    <li><Link href='/Mandatory'><a>Mandatory Disclosure</a></Link>&ensp;|&ensp;</li>
                                    <li><Link href='/Rules'><a>Rules</a></Link>&ensp;|&ensp;</li>
                                    {/* <li><Link href='#footer'><a>Contact</a></Link>&ensp;|&ensp;</li> */}
                                    {/* <li><Link href='/'><a>Calender</a></Link></li> */}
                                    <li><Link href='/#'><a>Login</a></Link></li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Header

