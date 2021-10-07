import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired, faUser, faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { useToasts } from 'react-toast-notifications'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json());

function Footer({ data_header }) {
    const { addToast } = useToasts()

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

            fetch("https://cms.schoolscoop.co.in/myapp/items/contact_form",
                {
                    method: "POST",
                    body: JSON.stringify({ full_name: name, email, mobile, message }),
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                }).then(response => response.json()).then(json => addToast("form submitted Sucessfully", { appearance: 'success', autoDismiss: true })).catch(err => console.log(err));
        }


        setName("");
        setEmail("");
        setMobile("");
        setMessage("");
    }

    const formValidation = () => {
        const nameErr = {};
        const emailErr = {};
        const mobileErr = {};
        const messageErr = {};
        let isValid = true;

        if (name === '') {
            nameErr.firstNameEmpty = "Name is required";
            isValid = false;
        }
        else if (name.trim().length < 5) {
            nameErr.firstNameShort = "Full name is too short";
            isValid = false;
        }
        if (email === '') {
            emailErr.emailEmpty = "Email is required";
            isValid = false;
        }
        else if (!email.includes("@")) {
            emailErr.emailerror = "You have entered a wrong email";
            isValid = false;
        }
        if (mobile === '') {
            mobileErr.mobileEmpty = "Contact is required";
            isValid = false;
        }
        else if (!pattern.test(mobile)) {
            mobileErr.mobilenumbershort = "Mobile number should be numeric";
            isValid = false;
        }
        else if (mobile.trim().length != 10) {
            mobileErr.mobilenumbershort = "Mobile number should be in ten digit";
            isValid = false;
        }
        if (message === '') {
            messageErr.messageEmpty = "Message is required";
            isValid = false;
        }
        else if (message.trim().length < 100) {
            messageErr.mobilenumbershort = "Message length should be 100 words or more";
            isValid = false;
        }
        setNameErr(nameErr);
        setEmailErr(emailErr);
        setMobileErr(mobileErr);
        setMessageErr(messageErr);
        return isValid;


    }

    const url = "https://cms.schoolscoop.co.in/myapp/items/config?fields=title,tagline,address,phone,email,mobile,logo.*";
    const { data, error } = useSWR(url, fetcher);
    if (error) {
        return <div>Error...</div>
    }
    if (!data) {
        return <div>No Data...</div>
    }

    return (
        <div>
            <div className='footerbg' id="footer">
                <div className='container' >
                    <div className="row">
                        <div className="col-sm-4">
                            <div style={{ paddingTop: '20px' }}>
                                <div style={{ display: 'flex' }}>
                                    <img src="/images/pglogo.png" alt='logo' style={{  height: "53px" }} />
                                    <div style={{ lineHeight: '20px' }}>
                                        <span style={{fontSize:"19px"}}>Rukhmani Devi Public School</span><br />
                                        <span className='place'>Bhopal, Madhya Pradesh</span>
                                    </div>
                                </div>
                                <p>Rukhmani Devi School, established in 1991, is a Co-educational, purely residential,
                                     English medium public school affiliated to the Central Board of Secondary Education 
                                     (CBSE), Delhi, up to 10th and 12th Grades. Pinegrove is a Regional Member of the Round 
                                     Square, is accredited with ISO 9001:2008 (BSI) and is a member of the 
                                     prestigious Indian Public Schools` Conference (IPSC).</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className='contactus'>
                                <div>

                                    <h5><span>|&nbsp;</span><FontAwesomeIcon icon={faNetworkWired} /> Connect with us</h5>
                                    <ul>
                                        <li><a href=''><FontAwesomeIcon icon={faPhone} />&nbsp;{data_header?.data ? data_header?.data[0]?.phone : "9999911111"}</a></li>
                                        <li><a href=''><FontAwesomeIcon icon={faPhone} />&nbsp;{data_header?.data ? data_header?.data[0]?.mobile : "999999999"}</a></li>
                                        <li><a href=''><FontAwesomeIcon icon={faEnvelopeOpenText} />&nbsp;{data_header?.data ? data_header?.data[0]?.email : "maitretech@example.com"}</a></li>
                                        <li><a href=''><FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;{data_header?.data ? data_header?.data[0]?.address : " Demo Address , Demo Address, Madhya Pradesh 111111"}</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className='emailus'>


                                <h5><span>|&nbsp;</span><FontAwesomeIcon icon={faEnvelope} />&nbsp; Connect with us</h5>
                                <div className="form-group" id="contact-bottom">
                                    <div className="mb-2 input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><FontAwesomeIcon icon={faUser} /></div>
                                        </div>

                                        <input name="name" type="text" id="txtname1" value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" className="form-control" />
                                    </div>
                                    {Object.keys(nameErr).map((key) => {
                                        return <div style={{ color: "red", fontWeight: '700', fontSize: '15px' }}>{nameErr[key]}</div>
                                    })}
                                </div>
                                <div className="form-group" id="contact-bottom">
                                    <div className="mb-2 input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></div>
                                        </div>

                                        <input name="email" type="text" id="txtname2" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email@gmail.com" className="form-control" />
                                    </div>
                                    {Object.keys(emailErr).map((key) => {
                                        return <div style={{ color: "red", fontWeight: '700', fontSize: '15px' }}>{emailErr[key]}</div>
                                    })}
                                </div>
                                <div className="form-group" id="contact-bottom">
                                    <div className="mb-2 input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><FontAwesomeIcon icon={faPhone} /></div>
                                        </div>

                                        <input name="mobile" type="text" id="txtname3" value={mobile} onChange={e => setMobile(e.target.value)} placeholder="Contact Number" className="form-control" />
                                    </div>
                                    {Object.keys(mobileErr).map((key) => {
                                        return <div style={{ color: "red", fontWeight: '700', fontSize: '15px' }}>{mobileErr[key]}</div>
                                    })}
                                </div>
                                <div className="form-group" id="contact-bottom">
                                    <div className="mb-2 input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><FontAwesomeIcon icon={faComment} /></div>
                                        </div>

                                        <input name="message" type="text" id="txtname4" value={message} onChange={e => setMessage(e.target.value)} placeholder="Your Message" className="form-control" />
                                    </div>
                                    {Object.keys(messageErr).map((key) => {
                                        return <div style={{ color: "red", fontWeight: '700', fontSize: '15px' }}>{messageErr[key]}</div>
                                    })}
                                </div>
                                <div className="text-center">
                                    <button type="submit" name="submit" onClick={submit} value="send" id="btnsubmit1" className="py-2 btn btn-info btn-block rounded-0" style={{ backgroundColor: '#94d1f5', color: 'black' }}>send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='subfooter' >
                <div className="text-center text-light ">

                Rukhmani Devi School&nbsp;|&nbsp; Design & Maintained with &nbsp;&nbsp;<FontAwesomeIcon style={{ color: 'red' }} icon={faHeart} /> &nbsp;
                    by &nbsp;<a href='http://maitretech.com/' target="_blank"> maitretech.com</a>

                </div>
            </div>
        </div>
    )
}

export default Footer
