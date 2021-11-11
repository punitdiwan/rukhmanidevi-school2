import { Link } from '@material-ui/core';
import React from 'react'
import useSWR from 'swr';
import Layout from '../components/layouts/Layout'

const Location = () => {
    return (
        <Layout>

            <div className="container-fluid media_top "  >
                <div className="container">
                    <div className="sticky-top s1 position-fixed bg-light text-dark d-flex" style={{ marginTop: "150px" }} >
                        &nbsp;&nbsp;
                        <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" style={{ width: "25px", color: "green" }}>
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </Link>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" style={{ width: "20px", color: "green" }}>
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </span>&nbsp;
                        <span>
                            <b>   About Us</b>
                        </span>&nbsp;
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" style={{ width: "20px", color: "green" }}>
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </span>&nbsp;
                        <span>
                            <b>  Location</b>
                        </span>&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className="location_header">
                        <h3>Location</h3>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            Rukhmani Devi School, established in 1991, is a Co-educational, purely residential, English medium public school affiliated to the Central Board of Secondary Education (CBSE), Delhi, up to 10th and 12th Grades. Pinegrove is a Regional Member of the Round Square, is accredited with ISO 9001:2008 (BSI) and is a member of the prestigious Indian Public Schools` Conference (IPSC).Rukhmani Devi School, established in 1991, is a Co-educational, purely residential, English medium public school affiliated to the Central Board of Secondary Education (CBSE), Delhi, up to 10th and 12th Grades. Pinegrove is a Regional Member of the Round Square, is accredited with ISO 9001:2008 (BSI) and is a member of the prestigious Indian Public Schools` Conference (IPSC).
                        </div>

                        <div className="col-sm-6 then-img">
                            <img src="/images/2" style={{ width: "100%", height: "350px" }} />
                            <div className="col-sm-12">
                                {/* <div>
                                    <h4 style={{ color: "#0063a6" }}><b> Main Branch </b></h4>
                                </div>
                                <table class="table table-bordered table-double" style={{ overflowX: "auto", backgroundColor: "#ecf4f9" }}>
                                    <tbody>
                                        <tr>
                                            <td colspan="4" style={{ width: "70%" }}>
                                                In Acres<br />
                                                In sq. mtrs.<br />
                                                Built up area (sq. mtrs)<br />
                                                Area of playground in sq. mtrs
                                            </td>
                                            <td colspan="2">5.81<br />
                                                23470<br />
                                                6314<br />
                                                4207
                                            </td>
                                        </tr>

                                    </tbody>
                                </table> */}
                                <div>
                                    <h5><b>Main Branch</b></h5>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" style={{ width: "16px", color: "#0a7ad1" }}>
                                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                        </svg>&nbsp;&nbsp;
                                        <span> NH-46 BHOPAL- Narsinghgarh Road Near Jharkheda.</span>
                                    </div>
                                    <div className="mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" style={{ width: "18px", color: "#0a7ad1" }}>
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>&nbsp;&nbsp;
                                        <span>8871018886 &nbsp; 8878954637</span>
                                    </div>
                                    {/* <div className="mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: "18px", color: "#0a7ad1" }}>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>&nbsp;&nbsp;
                                        <span>91-1792-275666</span>
                                    </div> */}

                                    {/* <div className="mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: "18px", color: "#0a7ad1" }}>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>&nbsp;&nbsp;
                                        <span>subathu@pinegroveschool.com</span>
                                    </div>
                                    <div className="mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: "18px", color: "#0a7ad1" }}>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>&nbsp;&nbsp;
                                        <span>subathu@pinegroveschool.com</span>
                                    </div> */}

                                </div>

                            </div>

                        </div>
                        <div className="col-sm-6 then-img">
                            <img src="/images/1" style={{ width: "100%", height: "350px" }} />

                            <div className="col-sm-12">
                                {/* <div>
                                    <h4 style={{ color: "#0063a6" }}><b>Airport Road Branch</b></h4>
                                </div>
                                <table class="table table-bordered table-double" style={{ overflowX: "auto", backgroundColor: "#ecf4f9" }}>
                                    <tbody>
                                        <tr>
                                            <td colspan="4" style={{ width: "70%" }}>
                                                In Acres<br />
                                                In sq. mtrs.<br />
                                                Built up area (sq. mtrs)<br />
                                                Area of playground in sq. mtrs
                                            </td>
                                            <td colspan="2">5.81<br />
                                                23470<br />
                                                6314<br />
                                                4207
                                            </td>
                                        </tr>

                                    </tbody>
                                </table> */}


                                <div>
                                    <h5><b>Airport Road Branch</b></h5>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" style={{ width: "16px", color: "#0a7ad1" }}>
                                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                        </svg>&nbsp;&nbsp;
                                        <span> Airport Road Data colony Bhopal postal code: 462030</span>
                                    </div>
                                    <div className="mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" style={{ width: "18px", color: "#0a7ad1" }}>
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>&nbsp;&nbsp;
                                        <span>  9926188840 &nbsp; 8109048886</span>
                                    </div>
                                    {/* <div className="mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: "18px", color: "#0a7ad1" }}>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>&nbsp;&nbsp;
                                        <span>8109048886</span>
                                    </div> */}

                                    {/* <div className="mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: "18px", color: "#0a7ad1" }}>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>&nbsp;&nbsp;
                                        <span>subathu@pinegroveschool.com</span>
                                    </div>
                                    <div className="mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: "18px", color: "#0a7ad1" }}>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>&nbsp;&nbsp;
                                        <span>subathu@pinegroveschool.com</span>
                                    </div> */}

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="container-fluid">
                    <h1 className="py-3 text-center"><b>LOCATE US</b></h1>
                    <div className="row">
                        <div className="col-sm-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14659.47914234759!2d77.357023!3d23.2841807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8f294b174c79335c!2sRukhmani%20Devi%20Public%20School!5e0!3m2!1sen!2sin!4v1633433162299!5m2!1sen!2sin"
                                style={{ width: "100%", height: "300px", border: "5px solid black", borderRadius: "10px" }} allowfullscreen="" loading="lazy"></iframe>
 
                        </div>
                        {/* <div className="col-sm-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58647.10959795074!2d77.3844673!3d23.2632986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1634807333399!5m2!1sen!2sin"
                                style={{ width: "100%", height: "350px", border: "5px solid black", borderRadius: "10px" }} allowfullscreen="" loading="lazy"></iframe>
                        </div> */}
                    </div>
                </div>

            </div>
        </Layout >
    )
}

export default Location
