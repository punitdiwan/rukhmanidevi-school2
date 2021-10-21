import React from 'react'

export const LocateUs = () => {
    return (
        <div className="container-fluid">
            <h1 className="text-center py-3"><b>LOCATE US</b></h1>
            <div className="row">
                <div className="col-sm-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14659.47914234759!2d77.357023!3d23.2841807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8f294b174c79335c!2sRukhmani%20Devi%20Public%20School!5e0!3m2!1sen!2sin!4v1633433162299!5m2!1sen!2sin"
                        style={{ width: "100%", height: "350px", border: "5px solid black", borderRadius: "10px" }} allowfullscreen="" loading="lazy"></iframe>


                </div>
                <div className="col-sm-6">
                       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58647.10959795074!2d77.3844673!3d23.2632986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1634807333399!5m2!1sen!2sin"
                        style={{ width: "100%", height: "350px", border: "5px solid black", borderRadius: "10px" }} allowfullscreen="" loading="lazy"></iframe>

                </div>
            </div>
        </div>
    )
}



export default LocateUs;
