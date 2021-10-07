import React from 'react'
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());
function Schoolaccreditation() {
    const url = "https://cms.schoolscoop.co.in/myapp/items/acridation?fields=*.*.* ";
    const { data, error } = useSWR(url, fetcher);
    if (error) {
        return <div>Error...</div>
    }
    if (!data) {
        return <div>No Data...</div>
    }
    return (
        <div>
            <div className='container'>
                <div className='accreditation'>
                    <h3>School Accreditation</h3>
                    <div className='accicon'>
                         
                        {data.data[0].acredation.map((item, i) => {
                            if (item.length > 1) {
                                return <div key={i}>No data...</div>
                            }
                            else {
                                return <a href=''> 
                                    <img src={item.directus_files_id.data.full_url} alt='ncc' />

                                </a>
                            }
                        })}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schoolaccreditation
