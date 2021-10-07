import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/layouts/Layout'
import About from '../components/aboutinfo/About';
import Eventmain from '../components/newseventsection/Eventmain';
import Schoolaccreditation from '../components/schoolaccreditation/Schoolaccreditation';
import Trust from '../components/trust/Trust';
import Carouselswr from '../components/carousel/Carouselswr';
import Schoolgallery from '../components/schoolgallery/Schoolgallery'
import LocateUs from '../pages/LocateUs'
// import '../node_modules/react-image-slider/lib/image-slider.css'
// import '../'

export default function Home({data_header,slider_data,about_data,gallery_data}) {
  return (
    <div>
      <Layout data_header={data_header}>
        <Carouselswr slider_data={slider_data}/>
        <About about_data={about_data} />
        <Eventmain />
        <Schoolaccreditation />
        <Trust />
        <Schoolgallery gallery_data={gallery_data} />
        <LocateUs/>
      </Layout>
    </div>
  )
}



export async function getStaticProps(context) {

  let data_header 

  try {
   
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`)
 
    data_header = await response.json()  
  } 
  catch (error) {
    data_header = false 
  } 



  let slider_data

  try {
      const response1 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/slider?status=published&fields=caption,image.data.full_url`)

      slider_data = await response1.json()
  }
  catch (error) {
      slider_data = false
  }


  let about_data

  try {
      const response2 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/tabs?fields=title,heading,body,images.directus_files_id.data.full_url`)

      about_data = await response2.json()
  }
  catch (error) {
      about_data = false
  }


  let gallery_data 

  try {
    const response1 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/gallery?fields=*.*.*`)
 
    gallery_data = await response1.json()  
  } 
  catch (error) {
    gallery_data = false 
  } 

  return {
      props: {data_header, slider_data,about_data,gallery_data },
      revalidate: 2, // will be passed to the page component as props
  }
}