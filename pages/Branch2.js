import React from "react";
// import useSWR from 'swr';
import Layout from "../components/layouts/Layout";

const Branch2 = ({ data_header, director_data }) => {
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
                      "Airport Road Branch"}
                  </h3>
                  <p style={{ fontSize: "1.05rem", textAlign: "justify" }}>
                    {
                      // director_data?.data?.length > 0
                      // ? director_data?.data[1]?.description
                      // :
                      `Schools teach us to cooperate with our friends and classmates. The basic value of sharing is taught right from the beginning. We have different classrooms where the teachers teach us different subjects. Equal weightage is given to both studies and co-curricular activities so that we develop into better individuals. Our schools will always try to focus on our overall growth and transform us into healthy adults.`}
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
                        "/images/airport-road.jpeg"
                    }
                    alt="director"
                    style={{ width: "110%", height: "350px" }}
                  />
                  {/* <h2 className="text-center">
                    <b>
                      {" "}
                      {director_data?.data?.length > 0
                        ? director_data?.data[1]?.full_name
                        : "Airport Road principal"}{" "}
                    </b>
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
export default Branch2;
