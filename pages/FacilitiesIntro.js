import React from 'react'
import { Link } from '@material-ui/core';
import Layout from '../components/layouts/Layout'

const FacilitiesIntro = () => { 
    
    return (
        <Layout>
            <div className="container-fluid media_top" >
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
                            <b>  Facilities</b>
                        </span>&nbsp;
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" style={{ width: "20px", color: "green" }}>
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </span>&nbsp;
                        <span>
                            <b>  Facilities Introduction</b>
                        </span>&nbsp;&nbsp;&nbsp;
                    </div>

                    <div className="row">
                        <div className="col-md-9">
                            <div className="location_header">
                                <h3>Facilities</h3>
                            </div>

                            <div>
                                <p className="mt-4" style={{ fontSize: "17px" }}><b>Facilities provided in a boarding school are far greater than the academic facilities of classrooms, library, laboratories and computer-room found in a conventional school.</b></p>
                                <p style={{ color: "#5b5b5b", fontSize: "17px" }}>A famous adage advocates as follows: "The future of a country is made or unmade in its classrooms"... One cannot undermine the importance of classroom teaching vis-a-vis other activities but they definitely have a very important role to play. Our primary objective is to impart high-quality academic tutoring so that the pupils may perform well in academics and the secondary and tertiary aims are to involve the children in various games and other co-curricular activities.</p>
                                <p style={{ color: "#5b5b5b", fontSize: "17px" }}>In a residential school, activities find an equal, if not more important, place in curriculum development. All requisite infrastructures are available in Pinegrove School, to provide the children with the facilities needed for quality education.</p>
                            </div>
                            <div>
                                <h4 style={{ color: "#0063a6" }}><b> Organization for Activities:</b></h4>
                                <p style={{ color: "#5b5b5b", fontSize: "17px" }}>All the students, both boys and girls, are divided into four Houses, Chinar (Yellow) , Deodar(Green), Oak (Red) and Teak (Violet). Each house is looked after by a House Master/Mistress who in turn is assisted by the student prefects. All the teachers are also allocated a House.

                                    The prefect system is an essential part of a residential school for delegating responsibility to children so that they learn to exercise initiative.

                                    The Houses have been named keeping in view the need for making the children love nature and become environmentally conscious.</p>
                            </div>


                        </div>
                        <div className="col-md-3">
                            <div className="then-imgx4">
                                <img src="/images/18.jpg" alt="no_img" />
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default FacilitiesIntro
