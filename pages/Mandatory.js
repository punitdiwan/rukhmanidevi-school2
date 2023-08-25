import React from 'react'
import Layout from '../components/layouts/Layout'
import Link from 'next/link'

const Mandatory = ({ data_header }) => {
    return (
        <Layout>
            <div className="container-fluid media_top"  >
                <div className="container">
                    <div className="sticky-top position-fixed bg-light text-dark d-flex" style={{ marginTop: "150px" }} >
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
                            <b>  Mandatory</b>
                        </span>&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className="location_header">
                        <h3>Mandatory</h3>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h2><strong>A: GENERAL INFORMATION:</strong></h2>
                            <div style={{ overflowX: "auto" }}>

                                <table class="table table-bordered1">
                                    <thead>
                                        <tr>
                                            <th>S.NO.</th>
                                            <th>INFORMATION</th>
                                            <th>DETAILS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>NAME OF THE SCHOOL</td>
                                            <td>Rukhmani Devi Public School</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>AFFILIATION NO.(IF APPLICABLE)</td>
                                            <td>1030619</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>SCHOOL CODE (IF APPLICABLE)</td>
                                            <td>50585</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>COMPLETE ADDRESS WITH PIN CODE</td>
                                            <td>
                                                NH-46 Bhopal – Narsinghgarh Road,
                                                Near Jharkheda Tahsil Shyampur
                                                District Sehore (M.P)  Pin No. 466661

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>PRINCIPAL NAME &amp; QUALIFICATION</td>
                                            <td>MRS SAMEENA HASAN ( M.Ed )</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>SCHOOL EMAIL ID</td>
                                            <td>rukhmanidevischool@gmail.com <br />50585@cbseshiksha.in</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>CONTACT DETAILS (LANDLINE/MOBILE)</td>
                                            <td>8878954637, 9993392708</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <h2><strong>B: DOCUMENTS AND INFORMATION:</strong></h2>


                            <div style={{ overflowX: "auto" }}>
                                <table class="table table-bordered1">
                                    <thead>
                                        <tr>
                                            <th>S.NO.</th>
                                            <th>DOCUMENTS/INFORMATION</th>
                                            <th>UPLOAD DOCUMENTS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</td>
                                            <td><a href="assets/pdf/SBT-B1- COPIES-OF-AFFILIATIONUPGRADATION-LETTER-AND-RECENT-EXTENSION-OF-AFFILIATION.pdf" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE</td>
                                            <td><a href="https://rukhmanidevi.maitretech.com/Society Ragistration.pdf" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT</td>
                                            <td><a href="https://rukhmanidevi.maitretech.com/DPI -  NOC Certificate.pdf" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S RENEWAL IF APPLICABLE</td>
                                            <td><a href="assets/pdf/SBT-B4-COPIES-OF-RECOGNITION-CERTIFICATE-UNDERRTE-ACT-2009.pdf" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</td>
                                            <td><a href="assets/pdf/SBT-B5-COPY-OF-VALID-BUILDING-SAFETY-CERTIFICATEAS-PER-THE-NATIONAL-BUILDING-CODE.pdf" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td>
                                            <td><a href="assets/pdf/SBT-B6-COPY-OF-VALID-FIRE-SAFETY-CERTIFICATE-ISSUED-BY-THE-COMPETENT-AUTHORITY.pdf" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATIONOR SELF CERTIFICATION BY SCHOOL</td>
                                            <td><a href="assets/pdf/SBT-B7-COPY-OF-THE-DEO-CERTIFICATE-SUBMITTED-By- THE-SCHOOL-FOR-AFFILIATION.pdf" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</td>
                                            <td><a href="assets/pdf/SBT-B8-COPIES-OF-VALID-WATER-HEALTH-AND-SANITATION-CERTIFICATES.pdf" target="_blank">View</a></td>
                                        </tr>
                                         <tr>
                                            <td>9</td>
                                            <td>SECTION INCREASING DOCUMENTS</td>
                                            <td><a href="section.pdf" target="_blank">View</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <h2><strong>C: RESULT AND ACADEMICS:</strong></h2>


                            <div style={{ overflowX: "auto" }}>
                                <table class="table table-bordered1">
                                    <thead>
                                        <tr>
                                            <th>S.NO.</th>
                                            <th>DOCUMENTS/INFORMATION</th>
                                            <th>UPLOAD DOCUMENTS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>FEE STRUCTURE OF THE SCHOOL</td>
                                            <td><a href="#" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>ANNUAL ACADEMIC CALANDER.</td>
                                            <td><a href="Event.htm" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td>
                                            <td><a href="smc.aspx" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABLILITY</td>
                                            <td></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <h2><strong>RESULT CLASS: X</strong></h2>


                            <div style={{ overflowX: "auto" }}>
                                <table class="table table-bordered1">
                                    <thead>
                                        <tr>
                                            <th>S.NO.</th>
                                            <th>YEAR</th>
                                            <th>NO. OF REGISTERED STUDENTS</th>
                                            <th>NO. OF STUDENTS PASSED</th>
                                            <th>PASS PERCENTAGE</th>
                                            <th>REMARKS </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 1 </td>
                                            <td> 2018 </td>
                                            <td> 66 </td>
                                            <td> 66 </td>
                                            <td> 100 </td>
                                            <td>  </td>
                                        </tr>
                                        <tr><td> 2 </td>
                                            <td> 2019 </td>
                                            <td> 89 </td>
                                            <td> 88 </td>
                                            <td> 99.0 </td>
                                            <td>  </td>
                                        </tr>
                                        <tr>
                                            <td> 3 </td>
                                            <td> 2020 </td>
                                            <td>57  </td>
                                            <td>56 </td>
                                            <td> 99.0 </td>
                                            <td>  </td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <h2><strong>RESULT CLASS: XII</strong></h2>
                            <div style={{ overflowX: "auto" }}>
                                <table class="table table-bordered1">
                                    <thead>
                                        <tr>
                                            <th>S.NO.</th>
                                            <th>YEAR</th>
                                            <th>NO. OF REGISTERED STUDENTS</th>
                                            <th>NO. OF STUDENTS PASSED</th>
                                            <th>PASS PERCENTAGE</th>
                                            <th>REMARKS </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 1 </td>
                                            <td> 2018 </td>
                                            <td> 40 </td>
                                            <td> 36 </td>
                                            <td> 90.0 </td>
                                            <td>  </td>
                                        </tr>
                                        <tr><td> 2 </td>
                                            <td> 2019 </td>
                                            <td> 73 </td>
                                            <td> 72 </td>
                                            <td> 99.0 </td>
                                            <td>  </td>
                                        </tr>
                                        <tr>
                                            <td> 3 </td>
                                            <td> 2020 </td>
                                            <td>70</td>
                                            <td>70</td>
                                            <td> 100 </td>
                                            <td>  </td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <h2><strong>D: STAFF (TEACHING)</strong></h2>
                            <div style={{ overflowX: "auto" }}>
                                <table class="table table-bordered1">
                                    <thead>
                                        <tr>
                                            <th>S.NO.</th>
                                            <th>INFORMATION</th>
                                            <th>DETAILS</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 1 </td>
                                            <td> PRINCIPAL </td>
                                            <td>  </td>

                                        </tr>
                                        <tr>
                                            <td rowspan="3">2</td>
                                            <td>PGT</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td>TGT</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td>PRT</td>
                                            <td> </td>
                                        </tr>

                                        <tr>
                                            <td>3</td>
                                            <td>DETAILS OF SPECIAL EDUCATOR</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>DETAILS OF COUNSELLOR AND WELNESS TEACHER</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>TEACHERS SECTION RATIO</td>
                                            <td>1:10</td>
                                        </tr>
                                        <tr><td> 6 </td>
                                            <td> TOTAL NO. OF TEACHERS </td>
                                            <td> 53 </td>

                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <h2><strong>E: SCHOOL INFRASTRUCTURE:</strong></h2>
                            <div style={{ overflowX: "auto" }}>
                                <table class="table table-bordered1">
                                    <thead>
                                        <tr>
                                            <th>S.NO.</th>
                                            <th>INFORMATION</th>
                                            <th>DETAILS</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 1 </td>
                                            <td> TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR) </td>
                                            <td> 12,145 Sq.mtrs. </td>

                                        </tr>
                                        <tr><td> 2 </td>
                                            <td> NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR) </td>
                                            <td> 18  (20x30) </td>

                                        </tr>
                                        <tr>
                                            <td rowspan="5"> 3 </td>
                                            <td> NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR) </td>
                                            <td> 4 </td>

                                        </tr>
                                        <tr>
                                             
                                            <td>Physics Lab</td>
                                            <td> 1</td>
                                             
                                        </tr>
                                        <tr>
                                            <td>Chemistry Lab</td>
                                            <td> 1</td>
                                        </tr>
                                        <tr>
                                            <td>Biology Lab</td>
                                            <td>1 </td>
                                        </tr>
                                        <tr>
                                            <td>Computer lab</td>
                                            <td>1 </td>
                                        </tr>
                                        <tr>
                                            <td> 4 </td>
                                            <td> INTERNET FACILITY (Y/N) </td>
                                            <td> Yes </td>

                                        </tr>
                                        <tr>
                                            <td> 5 </td>
                                            <td> NO. OF GIRLS TOILETS </td>
                                            <td> 15 </td>

                                        </tr>
                                        <tr>
                                            <td> 6 </td>
                                            <td> NO. OF BOYS TOILETS </td>
                                            <td> 15 </td>

                                        </tr>
                                        <tr>
                                            <td> 7 </td>
                                            <td> LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL </td>
                                            <td><a href="https://www.youtube.com/channel/UCIKlH_ibvWaviOlUTrFeQqg" target="_blank">View</a>  </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout >

    )
}

export default Mandatory


export async function getStaticProps(context) {

    let data_header

    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`)

        data_header = await response.json()
    }
    catch (error) {
        data_header = false
    }

    return {
        props: { data_header },
        revalidate: 2, // will be passed to the page component as props
    }
}