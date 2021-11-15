import React from 'react'

export const LocateUs = () => {
    return (
        <div className="container-fluid">
            <h1 className="text-center py-3"><b>LOCATE US</b></h1>
            <div className="row">
                <div className="col-sm-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14659.47914234759!2d77.357023!3d23.2841807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8f294b174c79335c!2sRukhmani%20Devi%20Public%20School!5e0!3m2!1sen!2sin!4v1633433162299!5m2!1sen!2sin"
                        style={{ width: "100%", height: "300px", border: "5px solid black", borderRadius: "10px" }} allowfullscreen="" loading="lazy"></iframe>


                </div>
                <div className="col-sm-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14650.29471672161!2d77.1965026!3d23.367455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7469a793226393fd!2sRukhmani%20Devi%20Public%20School%20%2CCBSE!5e0!3m2!1sen!2sin!4v1636954222488!5m2!1sen!2sin"
                        style={{ width: "100%", height: "300px", border: "5px solid black", borderRadius: "10px" }} allowfullscreen="" loading="lazy"></iframe>

                </div>
            </div>
        </div>
    )
}



export default LocateUs;
