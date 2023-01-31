import React from "react";
// import useSWR from 'swr';
import Layout from "../components/layouts/Layout";

const Branch3 = ({ data_header, director_data }) => {
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
                      // ? director_data?.data[1]?.message
                      // :
                      "Aakriti Ecocity "
                    }
                  </h3>
                  <p style={{ fontSize: "1.05rem", textAlign: "justify" }}>
                    {
                      // director_data?.data?.length > 0
                      //   ? director_data?.data[1]?.description
                      // :
                      `All great men have been taught to read and write at their schools. It is our school that endows us with the right values at an early age. We teach a set of strong moral values that serve us later in our lives. School life is the period that makes up most of your childhood memories. We learn to laugh, cry, share, and support by co-habiting with our classmates. Schools are the framework that builds our moral characters and serves as a pathway that we must follow to achieve our dreams.`
                    }
                  </p>
                </div>
              </div>

              <div className="directorimg" sm="4">
                <div className="thennow">
                  <img
                    src={
                      // director_data?.data?.length > 0
                      //   ? director_data?.data[1]?.photo?.data?.full_url
                      // :
                      "/images/akriti.jpeg"
                    }
                    alt="director"
                    style={{ width: "110%", height: "350px" }}
                  />
                  {/* <h2 className="text-center">
                                        <b> {director_data?.data?.length > 0 ? director_data?.data[1]?.full_name : "Branch 3 principal"} </b>
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
export default Branch3;
