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
                      `
                      The Rukhmani Devi Public School is located at , Aakriti Ecocity, Salaiya, Bhopal, Madhya Pradesh 462026 in a spacious building. The institution is imparting education to the students on the lines of Public Schools. The emphasis is on providing the child with an environment conducive to his growth where he finds his own talents & develops them to reach the pinnacle of success. We propose to offer the curriculum as prescribed by CBSE (Central Board of Secondary Education) New Delhi.`
                    }
                  </p>
                  <p>Our innovative methodology of education facilities natural learning process rather than factory style education. Rukhmani Devi Public School implements child centred pedagoly besides aiming to raise its bar in all speheres. In fact, it dovetails the traditional and successful teaching practices with modern trends to inspire a generation that seeks variations. A good school education must help to spot the talent early on and guide the student to make full use of it. Rukhmani Devi Public School has bench marked itself as an institution par excellence which is fully geared to nurture students and enable them to meet the specific needs of the future. The increasingly dynamic world has forced traditional pedagogy to adapt the latest technologies in teachings. We are quite sensitive to this, for we believe that only those who are ready to change will be able to survive and succeed. However, we must ensure that while we keep pace with the changes, our cultural roots are not forgotten. We at Rukhmani Devi Public School recognise the crucial importance of quality education in the early years as one third of life's chances come from the environment and experiences of first six years of the life.The innovative approach and matchless infrastructure of Rukhmani Devi Public School, helps the students reach their fullest academic, physical and spiritual potential. The school empowers them to face challenges of the future with confidence and enthusiasm. We look forward to an active partnership with caring parents in our endeavour of shaping the unique personality of the child.</p>
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
