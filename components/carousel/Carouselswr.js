import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel}  from "react-responsive-carousel";

const Carouselswr = ({ slider_data }) => {
  const slides = [
    { title: "/images/slider-new.jpeg", description: "Lorem1 ipsum" },
    { title: "/images/a8.jpg", description: "Lorem2 ipsum" },
    { title: "/images/a1.jpg", description: "Lorem3 ipsum" },
  ];

  return (
    <div className="slider_media">
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
        {slider_data?.data?.map((item, index) => {
          return (
            <div className="carousel-inner" role="listbox">
              <div className="carousel items1" key={index} role="listbox">
                <img
                  src={item?.image?.data?.full_url}
                  height={600}
                  width={1500}
                  alt="sorry_no_img"
                />
              </div>
            </div>
          );
        }) ||
          slides.map((slide, index) => {
            return (
              <div className="carousel-inner" role="listbox">
                <div className="carousel items1" key={index} role="listbox">
                  <img
                    src={slide.title}
                    height={500}
                    width={1500}
                    alt="sorry_no_img"
                  />
                </div>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Carouselswr;

// export async function getStaticProps(context) {
//   let slider_data;
//   try {
//     const response1 = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/slider?status=published&fields=caption,image.data.full_url`
//     );
//     slider_data = await response1.json();
//   } catch (error) {
//     slider_data = false;
//   }
//   return {
//     props: { slider_data },
//     revalidate: 2, // will be passed to the page component as props
//   };
// }
