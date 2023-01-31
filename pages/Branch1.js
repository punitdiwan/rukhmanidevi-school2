import React from "react";
// import useSWR from 'swr';
import Layout from "../components/layouts/Layout";

const Branch1 = ({ data_header, director_data }) => {
  return (
    <Layout>
      <div className="about directer_media">
        <div className="container">
          <div className="info">
            <div className="director">
              <div className="directorinfo" sm="8">
                <div className="">
                  <h3>
                    {
                    // director_data?.data?.length > 0
                    //   ? director_data?.data[1]?.message
                    //   : 
                      "Main Branch"}
                  </h3>
                  <p style={{ fontSize: "1.05rem", textAlign: "justify" }}>
                    {
                      // director_data?.data?.length > 0
                      // ? director_data?.data[1]?.description
                      //   :
                        `School is the place where we learn to read and write. It is the most crucial place for a student, and it helps us to learn new things. The teachers are always helpful and teach us important things in life. We must always be regular to school as missing classes can lead to problems during exams.`}
                  </p>
                </div>
              </div>

              <div className="directorimg" sm="4">
                <div className="thennow">
                  <img
                    src={
                      // director_data?.data?.length > 0
                      //   ? director_data?.data[1]?.photo?.data?.full_url
                      //   : 
                        "/images/Rukhmani-devi-school-jharkheda.jpg"
                    }
                    alt="director"
                    style={{ width: "110%", height: "350px" }}
                  />
                  {/* <h2 className="text-center">
                                        <b> {director_data?.data?.length > 0 ? director_data?.data[1]?.full_name : "Main branch principal"} </b>
                                    </h2> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Branch1;

// export async function getStaticProps(context) {
//     let data_header

//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`)

//         data_header = await response.json()
//     }
//     catch (error) {
//         data_header = false
//     }

//     // /////////////////////////////

//     let director_data
//     try {
//         const response1 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/faculty?status=published&fields=*.*`)
//         director_data = await response1.json()
//     }
//     catch (error) {
//         director_data = false
//     }

//     return {
//         props: { data_header, director_data },
//         revalidate: 1, // will be passed to the page component as props
//     }
// }
