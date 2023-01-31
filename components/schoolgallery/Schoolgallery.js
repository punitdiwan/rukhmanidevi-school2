import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div style={{ marginRight: "5px" }}>
    <img
      src="/images/a1.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/images/c2.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/images/c3.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/images/c4.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/images/c5.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/images/c6.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/images/c7.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/images/c8.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/images/c9.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
  <div style={{ marginRight: "5px" }}>
    <img
      src="/images/c10.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      style={{ height: "12.5rem", width: "100%" }}
    />
  </div>,
];

const slides = [
  { title: "/images/7.jpg ", description: "View Gallery" },
  { title: "/images/8.jpg   ", description: "View Gallery" },
  { title: " /images/9.jpg  ", description: "View Gallery" },
  { title: "/images/11.jpg   ", description: "View Gallery" },
  { title: " /images/12.jpg  ", description: "View Gallery" },
  { title: "/images/14.jpg   ", description: "View Gallery" },
];
const Schoolgallery = ({ gallery_data }) => {
  const options = {
    responsiveClass: true,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <div className="py-4 schoolgallery ">
      <h3 className="text-center">
        <b> Rukhmani Devi School Gallery </b>
      </h3>
      <AliceCarousel
        mouseTracking
        items={
          gallery_data?.data?.length > 0
            ? gallery_data?.data.map((item, i) => {
                return (
                  <div style={{ marginRight: "5px" }}>
                    <img
                      src={item?.photo?.data?.full_url}
                      className="yours-custom-class"
                      style={{ height: "12.5rem", width: "100%" }}
                    />
                  </div>
                );
              })
            : slides.map((item, i) => {
                return (
                  <div style={{ marginRight: "5px" }}>
                    <img
                      src={item?.title}
                      className="yours-custom-class"
                      style={{ height: "12.5rem", width: "100%" }}
                    />
                  </div>
                );
              })
        }
        {...options}
      />

      <div className="mt-3 text-center ">
        <Link href="/Gallery">
          <button
            style={{
              color: " #212529",
              backgroundColor: "#94d1f5",
              borderColor: "#94d1f5",
              borderRadius: "5px",
            }}
            className="p-1"
          >
            <FontAwesomeIcon icon={faFolder} />
            &nbsp;View More
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Schoolgallery;
