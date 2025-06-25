import React from "react";
import Layout from "../components/layouts/Layout";
import Link from "next/link";
import DocumentsSection from "../components/docInfo/docInfo";
import Result_Academic from "../components/docInfo/result_academic";

const generalInfo = [
  { no: 1, label: "NAME OF THE SCHOOL", value: "Rukhmani Devi Public School" },
  { no: 2, label: "AFFILIATION NO.(IF APPLICABLE)", value: "1030619" },
  { no: 3, label: "SCHOOL CODE (IF APPLICABLE)", value: "50585" },
  {
    no: 4,
    label: "COMPLETE ADDRESS WITH PIN CODE",
    value:
      "NH-46 Bhopal – Narsinghgarh Road, Near Jharkheda Tahsil Shyampur District Sehore (M.P)  Pin No. 466661",
  },
  {
    no: 5,
    label: "PRINCIPAL NAME & QUALIFICATION",
    value: "Mrs. Suman Yadav (M.Sc,B.Ed)",
  },
  {
    no: 6,
    label: "SCHOOL EMAIL ID",
    value: "rukhmanidevischool@gmail.com, 50585@cbseshiksha.in",
  },
  {
    no: 7,
    label: "CONTACT DETAILS (LANDLINE/MOBILE)",
    value: "8878954637, 9993392708",
  },
];
const resultX = [
  { year: "2022", registered: 66, passed: 66, percentage: 100, remarks: "" },
  { year: "2023", registered: 89, passed: 88, percentage: 99.0, remarks: "" },
  { year: "2024", registered: 57, passed: 56, percentage: 99.0, remarks: "" },
  {
    year: "2025-26",
    registered: 41,
    passed: 31,
    percentage: 75.6,
    remarks: "",
  },
];

const resultClassXII = [
  { year: "2022", registered: 40, passed: 36, percentage: 90.0, remarks: "" },
  { year: "2023", registered: 73, passed: 72, percentage: 99.0, remarks: "" },
  { year: "2024", registered: 70, passed: 70, percentage: 100, remarks: "" },
  {
    year: "2025-26",
    registered: 76,
    passed: 65,
    percentage: 85.52,
    remarks: "",
  },
];

const staffTeaching = [
  { sno: "1", info: "PRINCIPAL", details: "Mrs. Suman Yadav" },
  { sno: "2", info: "PGT", details: "10" },
  { sno: "2", info: "TGT", details: "15" },
  { sno: "2", info: "PRT", details: "10" },
  { sno: "3", info: "DETAILS OF SPECIAL EDUCATOR", details: "1" },
  { sno: "4", info: "DETAILS OF COUNSELLOR AND WELNESS TEACHER", details: "1" },
  { sno: "5", info: "TEACHERS SECTION RATIO", details: "1" },
  { sno: "6", info: "TOTAL NO. OF TEACHERS", details: "35" },
];

const schoolInfra = [
  {
    sno: "1",
    info: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)",
    details: "8305 Sq.mtrs.",
  },
  {
    sno: "2",
    info: "NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)",
    details: "24 & Size 47 Sq.mtrs.",
  },
  {
    sno: "3",
    info: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR) ",
    details: "6 & Size 409 Sq.mtrs.",
  },
  { sno: "3", info: "Physics Lab", details: "1 & Size 58 Sq.mtrs" },
  { sno: "3", info: "Chemistry Lab", details: "1 & Size 58 Sq.mtrs" },
  { sno: "3", info: "Biology Lab", details: "1  & Size 58 Sq.mtrs" },
  { sno: "3", info: "Computer lab", details: "1 & Size 58 Sq.mtrs " },
  { sno: "4", info: "INTERNET FACILITY (Y/N)", details: "Yes" },
  { sno: "5", info: "NO. OF GIRLS TOILETS", details: "10" },
  { sno: "6", info: "NO. OF BOYS TOILETS", details: "10" },
  {
    sno: "7",
    info: "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL",
    details: (
      <a
        href="https://youtu.be/zGL-VfkycNI?si=XZJYEYM2B1tFI-Jk"
        target="_blank"
      >
        View
      </a>
    ),
  },
];
const Mandatory = ({ data_header }) => {
  return (
    <Layout>
      <div className="container-fluid media_top">
        <div className="container">
          <div
            className="sticky-top position-fixed bg-light text-dark d-flex"
            style={{ marginTop: "150px" }}
          >
            &nbsp;&nbsp;
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{ width: "25px", color: "green" }}
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{ width: "20px", color: "green" }}
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            &nbsp;
            <span>
              <b>Mandatory</b>
            </span>
            &nbsp;&nbsp;&nbsp;
          </div>

          <div className="location_header">
            <h3>Mandatory</h3>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <h2>
                <strong>A: GENERAL INFORMATION:</strong>
              </h2>
              <div style={{ overflowX: "auto" }}>
                <table className="table table-bordered1">
                  <thead>
                    <tr>
                      <th>S.NO.</th>
                      <th>INFORMATION</th>
                      <th>DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {generalInfo.map((info) => (
                      <tr key={info.no}>
                        <td>{info.no}</td>
                        <td>{info.label}</td>
                        <td>{info.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Dynamic content from CMS */}
            <DocumentsSection />
            <Result_Academic />
            {/* RESULT CLASS X */}
            <div className="col-sm-12">
              <h2>
                <strong>RESULT CLASS: X</strong>
              </h2>
              <div style={{ overflowX: "auto" }}>
                <table className="table table-bordered1">
                  <thead>
                    <tr>
                      <th>S.NO.</th>
                      <th>YEAR</th>
                      <th>NO. OF REGISTERED STUDENTS</th>
                      <th>NO. OF STUDENTS PASSED</th>
                      <th>PASS PERCENTAGE</th>
                      <th>REMARKS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultX.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.year}</td>
                        <td>{item.registered}</td>
                        <td>{item.passed}</td>
                        <td>{item.percentage}</td>
                        <td>{item.remarks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* RESULT CLASS XII */}
            <div className="col-sm-12">
              <h2>
                <strong>RESULT CLASS: XII</strong>
              </h2>
              <div style={{ overflowX: "auto" }}>
                <table className="table table-bordered1">
                  <thead>
                    <tr>
                      <th>S.NO.</th>
                      <th>YEAR</th>
                      <th>NO. OF REGISTERED STUDENTS</th>
                      <th>NO. OF STUDENTS PASSED</th>
                      <th>PASS PERCENTAGE</th>
                      <th>REMARKS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultClassXII.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.year}</td>
                        <td>{item.registered}</td>
                        <td>{item.passed}</td>
                        <td>{item.percentage}</td>
                        <td>{item.remarks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* STAFF TEACHING */}
            <div className="col-sm-12">
              <h2>
                <strong>D: STAFF (TEACHING)</strong>
              </h2>
              <div style={{ overflowX: "auto" }}>
                <table className="table table-bordered1">
                  <thead>
                    <tr>
                      <th>S.NO.</th>
                      <th>INFORMATION</th>
                      <th>DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staffTeaching.map((item, index) => (
                      <tr key={index}>
                        <td>{item.sno}</td>
                        <td>{item.info}</td>
                        <td>{item.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SCHOOL INFRASTRUCTURE */}
            <div className="col-sm-12">
              <h2>
                <strong>E: SCHOOL INFRASTRUCTURE:</strong>
              </h2>
              <div style={{ overflowX: "auto" }}>
                <table className="table table-bordered1">
                  <thead>
                    <tr>
                      <th>S.NO.</th>
                      <th>INFORMATION</th>
                      <th>DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schoolInfra.map((item, index) => (
                      <tr key={index}>
                        <td>{item.sno}</td>
                        <td>{item.info}</td>
                        <td>{item.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Mandatory;

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
