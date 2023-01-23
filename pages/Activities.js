import React from 'react'
import Layout from '../components/layouts/Layout'
import { Link } from '@material-ui/core';

function Activities() {
    return (
        <Layout>
            <div className="container media_top"> 

                <div className="ml-4 sticky-top position-fixed bg-light text-dark d-flex" style={{ marginTop: "150px" }} >
                    &nbsp;&nbsp;
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" class = "h-5 w-5" viewBox="0 0 20 20" fill="currentColor" style={{ width: "25px", color: "green" }}>
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
                        <b> Activities</b>
                    </span>&nbsp;&nbsp;&nbsp;
                </div>
            </div>
            <div className='activity'>
                <div className='container'>
                    <div className='activitycontent'>
                        <h3>Activities</h3>
                        <h4>Co-curricular & Extra-curricular Activities</h4>
                        <p><b style={{ color: 'black' }}>Co-curricular activities</b> like Music (Indian, Vocal and Instrumental),Photography, Art, Craft, Painting, Macrame, Stitching, Knitting, Embroidery, Gardening, Mass PT, Gymnastics, Band (Brass and Pipe) and Karate are offered in the school curriculum.</p>
                        <p>Extra-curricular activities like Dance, Drama, Debates, Declamations, Quiz, Recitations, Parade, Camps and Excursions are also incorporated in the calendar and are conducted under the supervision of teachers.</p>


                        <div className='row'>
                            <div className='col-sm-3'>
                                <img className='activityimg' src="/images/11" />
                            </div>
                            <div className='col-sm-3'>
                                <img className='activityimg' src="/images/12" />
                            </div>
                            <div className='col-sm-3'>
                                <img className='activityimg' src="/images/6" />
                            </div>
                            <div className='col-sm-3'>
                                <img className='activityimg' src="/images/7" />
                            </div>
                        </div>
                        <p>All children are encouraged to pursue some Socially Useful Productive Work (SUPW) apart from their usual academic and other physical activities. These activities are conducted during hobby sessions, which are an integral part of the school curriculum. These activities provide ample opportunity to the children for developing their artistic ability, technical skills and aesthetic sense.</p>
                        <p>The activities also improve the co-ordination of the body and mind and are very important for building a sound physique, an upright and correct posture and for smart deportment, turn out and discipline.</p>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/9" />
                            </div>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/8" />
                            </div>
                        </div>
                        <h4>Inter-House and Inter-School Activities:</h4>
                        <p>Inter-House competitions are regularly held in various co-curricular and extra-curricular activities. These competitions give the children ample opportunity to display their skills and are conducted through activities such as House Shows (cultural programmes), Poem Recitations, Story Telling, Debates, Declamations, Quiz, Rangoli, Dancing, Group Singing, Mass PT, Orchestra etc.</p>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <img className='activityimg' src="/images/2" />
                            </div>
                            <div className='col-sm-3'>
                                <img className='activityimg' src="/images/3" />
                            </div>
                            <div className='col-sm-3'>
                                <img className='activityimg' src="/images/4" />
                            </div>
                            <div className='col-sm-3'>
                                <img className='activityimg' src="/images/5" />
                            </div>
                        </div>

                        <p>Pupils are regularly sent to participate in Inter-School competitions as well.
                            Both the schools have an auditorium each where the children get an opportunity to go onto the stage and perform in various activities so that they may effectively learn the art of public speaking and get rid of stage-fear.</p>

                        <div className='row'>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/6" />
                            </div>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/9" />
                            </div>
                        </div>
                        <h4>Camps and excursions:</h4>
                        <p>Outdoor camps, treks and tours are organized every year to give the children an opportunity to see the interiors of Himachal Pradesh and Uttaranchal and to get some educational and recreational exposure.</p>
                        <p>These outdoor and adventure activities are important as they offer the children experiences to face the hardships and challenges of life and would also inculcate in them a spirit of adventure and love for wildlife and nature.</p>
                        <p>Camps also provide a splendid opportunity for the teachers to get to know their children better and to understand the other facets of their personality difficult to observe in the classroom.</p>
                        <p>Likewise, children also learn to communicate with each other and their teachers on a more informal level.</p>

                        <div className='row'>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/6" />
                            </div>
                            <div className='col-sm-6'>
                                <img className='activityimg' src="/images/9" />
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Activities
