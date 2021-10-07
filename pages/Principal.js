import React from 'react'
import useSWR from 'swr';
import Layout from '../components/layouts/Layout'
 
 const Principal=({ data_header, principal_data })=> { 

     
    return (
        <Layout> 
            <div className='about principal_media'>
                <div className='container'>
                    <div className='info'>
                        <div className='director'>
                            <div className='directorinfo' sm='8'>
                                <div className=''>
                                    <h3> 
                                          {principal_data?.data?.length > 0 ? principal_data?.data[0]?.message : "Principal Message"}
                                    </h3>
                                    <p style={{ fontSize: '1.05rem', textAlign: 'justify' }}>
                                    {principal_data?.data?.length > 0 ? principal_data?.data[0]?.description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae libero risus. Donec interdum sapien 
                                                id hendrerit sodales. Sed mollis, quam vel laoreet aliquam, nisi est sodales ex, sit amet convallis diam
                                                orci sit amet urna. Maecenas ac quam malesuada, sagittis leo id, dignissim urna. Aliquam dapibus mi a
                                                c ex tempor aliquam. Praesent facilisis, sapien non pretium sagittis, leo leo tincidunt metus, at bibendum 
                                                nisl orci quis orci. Nullam vel tortor eu libero sagittis vestibulum eu at augue. Suspendisse commodo, nisl 
                                                nec blandit rutrum, purus neque tempus sapien, pulvinar pharetra ipsum arcu in justo. Nullam fringilla sem 
                                                arcu, vitae tempor urna auctor et. Proin euismod et leo convallis interdum.`}
                                    </p>
                                </div>
                            </div>

                            <div className='directorimg' sm='4'>
                                <div className='thennow'>
                                    <img src={principal_data?.data?.length > 0 ? principal_data?.data[0]?.photo?.data?.full_url : "/images/a1.jpg"}
                                        alt='director' style={{ width: "110%", height: "350px" }} />
                                     <h2 className="text-center">
                                        <b> {principal_data?.data?.length > 0 ? principal_data?.data[0]?.full_name : "Demo Name"} </b>
                                    </h2>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div>
        </Layout>
    )
}

export default Principal



export async function getStaticProps(context) {
    let data_header

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`)

        data_header = await response.json()
    }
    catch (error) {
        data_header = false
    }

    // ///////////////////////////// 

    let principal_data
    try {
        const response1 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/faculty?status=published&fields=*.*`)
        principal_data = await response1.json()
    }
    catch (error) {
        principal_data = false
    }

    return {
        props: { data_header, principal_data },
        revalidate: 1, // will be passed to the page component as props
    }
}

