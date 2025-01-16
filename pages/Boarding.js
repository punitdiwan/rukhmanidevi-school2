import React from 'react'
// import { Link } from '@material-ui/core';
import Layout from '../components/layouts/Layout'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import Link from 'next/link'

const Boarding = () => {



    const slides = [
        { title: "/images/3.jpg", name: 'Demo Name', position: 'Position', details: "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Pinegrove in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education" },
        { title: "/images/19.jpg", name: 'Demo Name', position: 'Position', details: "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Pinegrove in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education" },
    ];
    const slides1 = [
        { title: "/images/3.jpg", name: 'Demo Name', position: 'Position', details: "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Pinegrove in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education" },
        { title: "/images/19.jpg", name: 'Demo Name', position: 'Position', details: "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Pinegrove in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education" },
        { title: "/images/3.jpg", name: 'Demo Name', position: 'Position', details: "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Pinegrove in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education" },
        { title: "/images/19.jpg", name: 'Demo Name', position: 'Position', details: "Mrs. Samiksha is an honours graduate in English from Delhi University and an alumna of the Lawrence School, Sanawar. She has successfully completed a diploma course in School Administration from Delhi. She joined Pinegrove in 1993 and has worked in various posts during her tenure. She is a founder member of the faculty at Subathu and has been the Administrator (Head Administration) since its inception. The school has progressed leaps and bounds under her able leadership, guidance and control. She is a gentle but yet, a firm disciplinarian who has coupled this approach with affection and understanding, which successfully goes a long way with the present trends of modern education" },

    ];

    return (
        <Layout>
            <div className="container-fluid Boarding1"  >
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
                            <b>   Facilities</b>
                        </span>&nbsp;
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" style={{ width: "20px", color: "green" }}>
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </span>&nbsp;
                        <span>
                            <b>  Boarding</b>
                        </span>&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className="location_header">
                        <h3>Boarding</h3>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h4 style={{ color: "#0063a6" }}><b> Hostels/Boarding Houses:</b></h4>
                            <p style={{ color: "#5b5b5b", fontSize: "17px" }}>The hostels have dormitories and attached washrooms with hot and cold
                                running water. Separate hostels are provided for boys and girls. Each dormitory is under the personal care and supervision
                                of a Matron or warden who looks into every small need of the child including clothing, health, hygiene, cleanliness,
                                laundry etc. The children sleep on bunk-beds and each child has an independent cupboard unit. The school provides the
                                beds but the parents are required to supply the bedding including mattresses. The washrooms have separate levels for
                                baths and toilets to maintain the highest standards of hygiene and sanitation. Filtered drinking water is provided in
                                the hostel block. The Matron's quarters and a common room for recreation are attached to the dormitories.</p>
                            <br />

                            <div className="row">
                                {slides1.map((item, i) => {
                                    return (
                                        <div className="col-sm-3 then-img1">
                                            <img src={item.title} alt="Avatar" style={{ width: "100%", height: "250px" }} />
                                        </div>
                                    )
                                })}
                            </div>

                            <h4 style={{ color: "#0063a6" }}><b> Boarding Facilities</b></h4>
                            <p style={{ color: "#5b5b5b", fontSize: "17px" }}>
                                Courses of study as laid down by the National Council of Educational Research and Training (NCERT) and the syllabi framed by the Central Board of Secondary Education (CBSE), of the Government of India, Delhi are strictly adhered to and followed. The children are prepared to sit for the All India Secondary and Senior Secondary School Examinations, conducted by the CBSE, Delhi.

                                The syllabus provides for and examines a student in English, Hindi, Mathematics, Science (with Practicals), and Social Science. SUPW (Hobbies and Work Experience), Music, Art Education and Physical Education are compulsory. From Class III to Class VIII a third language is also taught.</p>
                        </div>
                    </div>
                    <div className="row">
                        {slides.map((item, i) => {
                            return (
                                <div className="col-sm-6 then-img">
                                    <img src={item.title} alt="Avatar" style={{ width: "100%", height: "400px" }} />
                                </div>


                            )
                        })}
                        <p style={{ color: "#5b5b5b", fontSize: "17px" }}>

                            The syllabus provides for and examines a student in English, Hindi, Mathematics, Science (with Practicals), and Social Science. SUPW (Hobbies and Work Experience), Music, Art Education and Physical Education are compulsory. From Class III to Class VIII a third language is also taught.</p>

                        <div className="col-sm-12">
                            <h4 style={{ color: "#0063a6" }}><b> Dining:</b></h4>
                            <div className="row">
                                {slides.map((item, i) => {
                                    return (
                                        <div className="col-sm-6 then-img">
                                            <img src={item.title} alt="Avatar" style={{ width: "100%", height: "350px" }} />
                                        </div>


                                    )
                                })}
                                <p style={{ color: "#5b5b5b", fontSize: "17px" }}>The classrooms are very modern, large and airy with proper lighting and provide the most conducive atmosphere for learning.

                                    To achieve the highest levels of academic excellence the school maintains a
                                    class-section average strength of just 25 pupils in junior classes and 30
                                    pupils in senior classes.</p>
                                <div>
                                    <p style={{ color: "#5b5b5b", fontSize: "17px" }}>The classrooms are very modern, large and airy with proper lighting and provide the most conducive atmosphere for learning.

                                        To achieve the highest levels of academic excellence the school maintains a
                                        class-section average strength of just 25 pupils in junior classes and 30
                                        pupils in senior classes.</p>

                                    <h4 style={{ color: "#0063a6" }}><b>Tuck-shop:</b></h4>
                                    <div className="row">
                                        {slides.map((item, i) => {
                                            return (
                                                <div className="col-sm-6 then-img">
                                                    <img src={item.title} alt="Avatar" style={{ width: "100%", height: "400px" }} />
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <h4 style={{ color: "#0063a6" }}><b>Clothing:</b></h4>
                                    <p style={{ color: "#5b5b5b", fontSize: "17px" }}>The classrooms are very modern, large and airy with proper lighting and provide the most conducive atmosphere for learning.

                                        All secondary classes in Pinegrove are interactive classrooms with SMART BOARDS, networked computers and DLP Projectors. Many classrooms have Visualizers as well. The computers are networked on LAN and there is a huge repository of educational software, in various subjects and practically for every chapter in the course of study, available on the school servers. The classrooms are fitted with the latest and best equipment available so that the children get the best teaching aids to assist in making the teaching learning process most effective, through computer-aided-teaching (CAT).

                                        The children and teachers alike take keen interest in the beautification and adornment of their classrooms.

                                        To achieve the highest levels of academic excellence the school maintains a class-section average strength of just 25 pupils in junior classes and 30 pupils in senior classes.
                                    </p>
                                    <h4 style={{ color: "#0063a6" }}><b>Toiletries:</b></h4>
                                    <p style={{ color: "#5b5b5b", fontSize: "17px" }}>The classrooms are very modern, large and airy with proper lighting and provide the most conducive atmosphere for learning.


                                        To achieve the highest levels of academic excellence the school maintains a class-section average strength of just 25 pupils in junior classes and 30 pupils in senior classes.
                                    </p>

                                    <h4 style={{ color: "#0063a6" }}><b>Discipline:</b></h4>
                                    <p style={{ color: "#5b5b5b", fontSize: "17px" }}>The classrooms are very modern, large and airy with proper lighting and provide the most conducive atmosphere for learning.


                                        To achieve the highest levels of academic excellence the school maintains a class-section average strength of just 25 pupils in junior classes and 30 pupils in senior classes.
                                    </p>


                                    <h4 style={{ color: "#0063a6" }}><b>Birthday Parties:</b></h4>
                                    <div className="row">
                                        {slides.map((item, i) => {
                                            return (
                                                <div className="col-sm-6 then-img">
                                                    <img src={item.title} alt="Avatar" style={{ width: "100%", height: "350px" }} />
                                                </div>
                                            )
                                        })}
                                        <div className="col-sm-6">
                                            <p style={{ color: "#5b5b5b", fontSize: "17px" }}>The classrooms are very modern, large and airy with proper lighting and provide the most conducive atmosphere for learning.


                                                To achieve the highest levels of academic excellence the school maintains a class-section average strength of just 25 pupils in junior classes and 30 pupils in senior classes.
                                            </p>
                                        </div>
                                        <div className="col-sm-6">
                                            <p style={{ color: "#5b5b5b", fontSize: "17px" }}>The classrooms are very modern, large and airy with proper lighting and provide the most conducive atmosphere for learning.


                                                To achieve the highest levels of academic excellence the school maintains a class-section average strength of just 25 pupils in junior classes and 30 pupils in senior classes.
                                            </p>
                                        </div>
                                    </div>
                                    <h4 style={{ color: "#0063a6" }}><b>Visiting Weekends:</b></h4>
                                    <p style={{ color: "#5b5b5b", fontSize: "17px" }}>The classrooms are very modern, large and airy with proper lighting and provide the most conducive atmosphere for learning.


                                        To achieve the highest levels of academic excellence the school maintains a class-section average strength of just 25 pupils in junior classes and 30 pupils in senior classes.
                                    </p>
                                    <h4 style={{ color: "#0063a6" }}><b>School Telephone:</b></h4>
                                    <p style={{ color: "#5b5b5b", fontSize: "17px" }}>The classrooms are very modern, large and airy with proper lighting and provide the most conducive atmosphere for learning.


                                        To achieve the highest levels of academic excellence the school maintains a class-section average strength of just 25 pupils in junior classes and 30 pupils in senior classes.
                                    </p>
                                    <h4 style={{ color: "#0063a6" }}><b> Insurance:  </b></h4>
                                    <p style={{ color: "#5b5b5b", fontSize: "17px" }}>The classrooms are very modern, large and airy with proper lighting and provide the most conducive atmosphere for learning.


                                        To achieve the highest levels of academic excellence the school maintains a class-section average strength of just 25 pupils in junior classes and 30 pupils in senior classes.
                                    </p>
                                    {/* <div>
                                        <h4 style={{ color: "#0063a6" }}><b>Library:</b></h4>
                                        <p style={{ color: "#5b5b5b", fontSize: "17px" }}>The classrooms are very modern, large and airy with proper lighting and provide the most conducive atmosphere for learning.

                                            All secondary classes in Pinegrove are interactive classrooms with SMART BOARDS, networked computers and DLP Projectors. Many classrooms have Visualizers as well. The computers are networked on LAN and there is a huge repository of educational software, in various subjects and practically for every chapter in the course of study, available on the school servers. The classrooms are fitted with the latest and best equipment available so that the children get the best teaching aids to assist in making the teaching learning process most effective, through computer-aided-teaching (CAT).

                                            The children and teachers alike take keen interest in the beautification and adornment of their classrooms.

                                            To achieve the highest levels of academic excellence the school maintains a class-section average strength of just 25 pupils in junior classes and 30 pupils in senior classes.</p>

                                        <div className="row">
                                            {slides1.map((item, i) => {
                                                return (
                                                    <div className="col-sm-3 then-img1">
                                                        <img src={item.title} alt="Avatar" style={{ width: "100%", height: "200px" }} />
                                                    </div>

                                                )
                                            })}
                                        </div>
                                        <div> <h4 style={{ color: "#0063a6" }}><b>Laboratories:</b></h4></div>
                                        <div className="row">
                                            {slides.map((item, i) => {
                                                return (
                                                    <div className="col-sm-6 then-img1">
                                                        <img src={item.title} alt="Avatar" style={{ width: "100%", height: "350px" }} />
                                                    </div>
                                                )
                                            })}
                                            <p style={{ color: "#5b5b5b", fontSize: "17px" }}>Modern and well-equipped science laboratories are available in both schools.The Labs have the requisite essential equipment for conducting practicals for the integrated science course at the secondary school stage, and for the Physics, Chemistry and Biology practicals at the Senior Secondary Stage, as per the requirement of the new curricula and scheme of studies, laid down by the CBSE.
                                                The students themselves have preserved a large variety of specimens in the laboratories and take keen interest in making science projects.</p>

                                            <h4 style={{ color: "#0063a6" }}><b>Evaluation System:</b></h4>
                                            <p style={{ color: "#5b5b5b", fontSize: "17px" }}>Over the last few years there has been a countrywide debate amongst pedagogues, parents, teachers and members of various educational boards regarding a change in the evaluation system in schools, which by and large has been received with great enthusiasm. Keeping in view the evaluation systems of developed countries and the opinion of the public at large, the CBSE has introduced the CCE (Continuous and Comprehensive Evaluation) and introduced CGPA and Grading System in schools.</p>

                                            <h4 style={{ color: "#0063a6" }}><b>Tests and Examinations:</b></h4>
                                            <p style={{ color: "#5b5b5b", fontSize: "17px" }}>Over the last few years there has been a countrywide debate amongst pedagogues, parents, teachers and members of various educational boards regarding a change in the evaluation system in schools, which by and large has been received with great enthusiasm. Keeping in view the evaluation systems of developed countries and the opinion of the public at large, the CBSE has introduced the CCE (Continuous and Comprehensive Evaluation) and introduced CGPA and Grading System in schools.</p>


                                            <h4 style={{ color: "#0063a6" }}><b>Stars:</b></h4>
                                            <div className="row">
                                                {slides.map((item, i) => {
                                                    return (
                                                        <div className="col-sm-6 then-img1">
                                                            <img src={item.title} alt="Avatar" style={{ width: "100%", height: "350px" }} />
                                                        </div>
                                                    )
                                                })}


                                                <p style={{ color: "#5b5b5b", fontSize: "17px" }}>Over the last few years there has been a countrywide debate amongst pedagogues, parents, teachers and members of various educational boards regarding a change in the evaluation system in schools, which by and large has been received with great enthusiasm. Keeping in view the evaluation systems of developed countries and the opinion of the public at large, the CBSE has introduced the CCE (Continuous and Comprehensive Evaluation) and introduced CGPA and Grading System in schools.</p>


                                                <h4 style={{ color: "#0063a6" }}><b>Diamond Star:</b></h4>
                                                <p style={{ color: "#5b5b5b", fontSize: "17px" }}>Over the last few years there has been a countrywide debate amongst pedagogues, parents, teachers and members of various educational boards regarding a change in the evaluation system in schools, which by and large has been received with great enthusiasm. Keeping in view the evaluation systems of developed countries and the opinion of the public at large, the CBSE has introduced the CCE (Continuous and Comprehensive Evaluation) and introduced CGPA and Grading System in schools.</p>



                                                <h4 style={{ color: "#0063a6" }}><b>Parent-Teacher Meetings:</b></h4>
                                                <p style={{ color: "#5b5b5b", fontSize: "17px" }}>Over the last few years there has been a countrywide debate amongst pedagogues, parents, teachers and members of various educational boards regarding a change in the evaluation system in schools, which by and large has been received with great enthusiasm. Keeping in view the evaluation systems of developed countries and the opinion of the public at large, the CBSE has introduced the CCE (Continuous and Comprehensive Evaluation) and introduced CGPA and Grading System in schools.</p>




                                                <h4 style={{ color: "#0063a6" }}><b>Tuitions:</b></h4>
                                                <p style={{ color: "#5b5b5b", fontSize: "17px" }}>Over the last few years there has been a countrywide debate amongst pedagogues, parents, teachers and members of various educational boards regarding a change in the evaluation system in schools, which by and large has been received with great enthusiasm. Keeping in view the evaluation systems of developed countries and the opinion of the public at large, the CBSE has introduced the CCE (Continuous and Comprehensive Evaluation) and introduced CGPA and Grading System in schools.</p>

                                            </div>
                                            <div>

                                            </div>

                                        </div>
                                    </div> */}
                                </div>
                            </div>

                        </div>
                    </div>



                </div >
            </div >

        </Layout >
    )
}

export default Boarding
