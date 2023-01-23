import { SRLWrapper } from "simple-react-lightbox";
import Layout from '../components/layouts/Layout'
 

const Gallery = ({ data_header ,gallery_data}) => {
  

  const slides = [
    { title: "/images/a1.jpg", description: 'View Gallery' },
    { title: "/images/is8.jpg  ", description: 'View Gallery' },
    { title: " /images/is9.jpg ", description: 'View Gallery' },
    { title: "/images/is11.jpg  ", description: 'View Gallery' },
    { title: " /images/is12.jpg ", description: 'View Gallery' },
    { title: "/images/is14.jpg  ", description: 'View Gallery' },

  ];



  return (
    <>
    <Layout>
      <SRLWrapper>

        <div className="container-fluid media_top"  >
          <div className="mb-3 row">
          {gallery_data?.data?.length>0?
               gallery_data?.data.map((item, i) => { 
                return (
                  <div key={i} className="col-lg-3 col-md-4 col-sm-6 ">
                    <img
                      src={item?.photo?.data?.full_url}
                      className="mt-3 imght "
                      alt="no_img"
                      style={{width:"100%",height:"250px"}}
                    />
                  </div>
                );
              })
            :
              slides.map((item, i) => {
                return (
                  <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                    <img
                      src={item?.title}
                      className="mt-3 imght "
                      alt="no_img"
                      style={{width:"100%",height:"250px"}}  
                    />
                  </div>
                );
              })
            }
          </div>
        </div>
      </SRLWrapper>
    </Layout>
    </>
  );
};

export default Gallery



 
export async function getStaticProps(context) { 
  let data_header 

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`)
 
    data_header = await response.json()  
  } 
  catch (error) {
    data_header = false 
  } 

  /////////

  let gallery_data 

  try {
    const response1 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/gallery?fields=*.*.*`)
 
    gallery_data = await response1.json()  
  } 
  catch (error) {
    gallery_data = false 
  } 


  return {
    props: { data_header,gallery_data },
    revalidate: 1, // will be passed to the page component as props
  }
}
