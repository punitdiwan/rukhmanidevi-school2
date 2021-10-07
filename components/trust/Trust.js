import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'
import { faBookReader } from '@fortawesome/free-solid-svg-icons'

function Trust() {
    return (
        <div id="video">
            <div className="container-fluid trust"  >
                <div className="py-3">
                    <div className="row">
                        <div className="col-sm-6">
                            <video style={{ width: "100%", height: "400px" }} controls  poster="/images/26">
                                <source src="/videos/movie.mp4" type="video/mp4" />

                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col-sm-6">
                            <h2>WHY TRUST US</h2>
                            <div style={{ display: 'flex', alignItems: 'center', margin: 'auto auto' }}>
                                <FontAwesomeIcon icon={faUserGraduate} style={{ color: '#94d1f5', fontSize: '5.3rem', paddingLeft: '20px', marginBottom: '20px' }} />
                                <br />
                                <h4> High standards in value education</h4>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', margin: 'auto auto' }}>
                                <FontAwesomeIcon icon={faUserShield} style={{ color: '#94d1f5', fontSize: '5.3rem', paddingLeft: '20px', marginBottom: '20px' }} />
                                <br />
                                <h4 style={{ marginLeft: '5px' }}> Safety and Discipline</h4>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', margin: 'auto auto' }}>
                                <FontAwesomeIcon icon={faBookReader} style={{ color: '#94d1f5', fontSize: '5.3rem', paddingLeft: '20px', marginBottom: '20px' }} />
                                <br />
                                <h4> Highest standards of academic and sporting excellence</h4>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            {/* <div className='trust'>
                <div className='trustgrid' style={{ margin: 'auto 0px !important' }}>
                    <div className='videogrid'>
                        <div className='locate'>
                            <div className='mapdiv'>
                                
                                <video style={{ width: "100%", height: "400px" }} controls>
                                    <source src="/videos/movie.mp4" type="video/mp4" />

                                    Your browser does not support the video tag.
                                </video>


                            </div>
                        </div>
                    </div>
                    <div className='trusttextgrid' md='6'><br /><br />

                        <h2>WHY TRUST US</h2>
                        <div style={{ display: 'flex', alignItems: 'center', margin: 'auto auto' }}>
                            <FontAwesomeIcon icon={faUserGraduate} style={{ color: '#94d1f5', fontSize: '5.3rem', paddingLeft: '20px', marginBottom: '20px' }} />
                            <br />
                            <h4> High standards in value education</h4>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: 'auto auto' }}>
                            <FontAwesomeIcon icon={faUserShield} style={{ color: '#94d1f5', fontSize: '5.3rem', paddingLeft: '20px', marginBottom: '20px' }} />
                            <br />
                            <h4 style={{ marginLeft: '5px' }}> Safety and Discipline</h4>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: 'auto auto' }}>
                            <FontAwesomeIcon icon={faBookReader} style={{ color: '#94d1f5', fontSize: '5.3rem', paddingLeft: '20px', marginBottom: '20px' }} />
                            <br />
                            <h4> Highest standards of academic and sporting excellence</h4>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Trust
