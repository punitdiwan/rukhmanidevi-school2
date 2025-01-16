import Layout from '../components/layouts/Layout'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import useSWR from 'swr';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const fetcher = (...args) => fetch(...args).then(res => res.json());
const TransferCertificate = () => {
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const [inputvalue, setinputvalue] = useState();
    const [none, sethide] = useState();

    useEffect(() => {
        // axios('https://cms.schoolscoop.co.in/myapp/items/transfer_certificate?fields=*.*.*')
        axios(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/transfer_certificate?fields=*.*.*`)
            .then(response => {

                setAllData(response?.data?.data);
                setFilteredData(response?.data?.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })

        sethide("none")
    }, []);



    const filteredData1 = [
        {
            admission_number: "1234567",
            full_name: "Demo Name",
            transfer_certificate: null
        }
    ]

    const handleSearch = (event) => {
        let value = event?.target?.value?.toUpperCase();
        let result = [];
        let num1 = 100;
        result = allData?.filter((data) => {
            if (isNaN(+value)) {
                return data?.full_name?.toUpperCase().search(value) !== -1;
            }
            else if (!isNaN(+value)) {
                return data?.admission_number?.search(value) !== -1;
            }
        });
        setFilteredData(result);
    }
    return (
        <Layout>
            <div className="container mb-5 media_top "
                style={{ marginTop: "200px" }}
            >
                <div className="mb-2 row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <h2>
                            Transfer Certificate :-
                        </h2>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">

                        <input type="text" placeholder="  Admission No...." onChange={(e) => handleSearch(e)} style={{ border: "2px solid black", borderRadius: "5px", float: "right", height: "30px" }} />
                        <span style={{ fontSize: "18px", float: "right" }}  >Enter You Admission No :-  &ensp; </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12" style={{ textAlign: "center" }}>
                        <table style={{ width: "100%" }} className="table_tc">
                            <tr>
                                <th className="r1">S.No.</th>
                                <th className="r2"> Name</th>
                                <th className="r3">Admission No</th>
                                <th className="r3">Downloads</th>
                            </tr>
                            {filteredData.length > 0 ? (<>
                                {filteredData?.map((ei, i) =>

                                (
                                    <tr key={i}><td>{i + 1}</td>
                                        <td>{ei.full_name}</td>
                                        <td>{ei.admission_number}</td>
                                        <td><a id="download_iframe" href={ei?.transfer_certificate?.data?.full_url} target="_blank">
                                            <PictureAsPdfIcon style={{ color: "red" }} />Download</a></td>

                                    </tr>
                                )
                                )}
                            </>) :

                                // filteredData1?.map((ei, i) =>

                                // (
                                //     <tr key={i}><td>{i + 1}</td>
                                //         <td>{ei.full_name}</td>
                                //         <td>{ei.admission_number}</td>
                                //         <td><a id="download_iframe" href={ei?.transfer_certificate?.data?.full_url} target="_blank">
                                //             <PictureAsPdfIcon style={{ color: "red" }} />Download</a></td>

                                //     </tr>
                                // )
                                // )

                                <td colSpan='4'>
                                    <div id="my_box">
                                        <p>No Data Found!!</p>
                                    </div>
                                </td>
                            }
                        </table>
                        {/* <h6 style={{ display: `${none}` }}>No Data Found!!</h6> */}
                    </div>
                </div>
            </div>
        </Layout>
    )

}
export default TransferCertificate



