import React, { useState, useEffect } from "react";
// import { Link } from "@material-ui/core";
import Layout from "../components/layouts/Layout";
import Link from 'next/link'

const FacultysMain = ({ Teacher_data }) => {
  const [Teacher, setTeacher] = useState("");

  const slides = [
    {
      title: "/images/a1.jpg",
      name: "Demo Name",
      position: "Position",
      details:
        "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Pinegrove in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education",
    },
    {
      title: "/images/a2.jpg  ",
      name: "Demo Name",
      position: "Position",
      details:
        "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Pinegrove in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education",
    },
    {
      title: " /images/a3.jpg ",
      name: "Demo Name",
      position: "Position",
      details:
        "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Pinegrove in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education",
    },
    {
      title: "/images/a4.jpg  ",
      name: "Demo Name",
      position: "Position",
      details:
        "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Pinegrove in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education",
    },
    {
      title: " /images/a5.jpg ",
      name: "Demo Name",
      position: "Position",
      details:
        "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Pinegrove in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education",
    },
    {
      title: "/images/a6.jpg  ",
      name: "Demo Name",
      position: "Position",
      details:
        "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Pinegrove in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education",
    },
  ];

  useEffect(() => {
    let allsetdata = Teacher_data?.data?.filter(
      (data, i) => data.position == "teacher"
    );

    setTeacher(allsetdata);
  }, []);

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
                class="h-5 w-5"
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
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{ width: "20px", color: "green" }}
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            &nbsp;
            <span>
              <b> About Us</b>
            </span>
            &nbsp;
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{ width: "20px", color: "green" }}
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            &nbsp;
            <span>
              <b> Faculty</b>
            </span>
            &nbsp;&nbsp;&nbsp;
          </div>
          <div className="location_header">
            <h3>Faculty</h3>
          </div>
          <div className="row">
            {Teacher?.length > 0
              ? Teacher.map((item, i) => {
                return (
                  <div className="col-sm-4">
                    <div class="flip-card1">
                      <div class="flip-card-inner1">
                        <div class="flip-card-front1">
                          <img
                            src={item?.photo?.data?.full_url}
                            alt="Avatar"
                            style={{
                              width: "155px",
                              height: "190px",
                              borderRadius: "50%",
                            }}
                          />

                          <h4
                            style={{ marginTop: "18px", color: "#004eb5 " }}
                          >
                            {item.full_name}
                          </h4>
                          <h6 style={{ marginTop: "10px" }}>
                            {item.teacher_position}
                          </h6>
                          <div className="d-flex justify-content-center text-light">
                            <span
                              style={{
                                backgroundColor: "#3f5a74",
                                height: "30px",
                                width: "30px",
                                borderRadius: "4px",
                              }}
                            >
                              <b style={{ fontSize: "20px" }}> +</b>
                            </span>
                          </div>
                        </div>
                        <div class="flip-card-back1">
                          <h4
                            style={{ marginTop: "30px", color: "#004eb5 " }}
                          >
                            {item.full_name}
                          </h4>
                          <p style={{ fontSize: "13px", padding: "20px" }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
              : slides.map((item, i) => {
                return (
                  <div className="col-sm-4">
                    <div class="flip-card1">
                      <div class="flip-card-inner1">
                        <div class="flip-card-front1">
                          <img
                            src={item.title}
                            alt="Avatar"
                            style={{
                              width: "155px",
                              height: "190px",
                              borderRadius: "50%",
                            }}
                          />

                          <h4
                            style={{ marginTop: "18px", color: "#004eb5 " }}
                          >
                            {item.name}
                          </h4>
                          <h6 style={{ marginTop: "10px" }}>
                            {item.position}
                          </h6>
                          <div className="d-flex justify-content-center text-light">
                            <span
                              style={{
                                backgroundColor: "#3f5a74",
                                height: "30px",
                                width: "30px",
                                borderRadius: "4px",
                              }}
                            >
                              <b style={{ fontSize: "20px" }}> +</b>
                            </span>
                          </div>
                        </div>
                        <div class="flip-card-back1">
                          <h4
                            style={{ marginTop: "30px", color: "#004eb5 " }}
                          >
                            {item.name}
                          </h4>
                          <p style={{ fontSize: "13px", padding: "20px" }}>
                            {item.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FacultysMain;

// export async function getStaticProps(context) {
//     let data_header

//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`)

//         data_header = await response.json()
//     }
//     catch (error) {
//         data_header = false
//     }

// /////////////////////////////////
//     let Teacher_data
//     try {
//         const response1 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/faculty?status=published&fields=*.*`)

//         Teacher_data = await response1.json()
//     }
//     catch (error) {
//         Teacher_data = false
//     }

//     return {
//         props: { data_header, Teacher_data },
//         revalidate: 1,
//     }
// }

// will be passed to the page component as props
