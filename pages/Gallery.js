"use client";
import Layout from "../components/layouts/Layout";
import { useState, useMemo } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Gallery = ({ data_header, gallery_data }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  // Transform gallery data into slide format
  const images = useMemo(() => {
    return gallery_data?.data?.map((item) => ({
      src: item?.photo?.data?.full_url?.replace("http://", "https://"),
    })) || [];
  }, [gallery_data]);

  const fallbackSlides = [
    { src: "/images/a1.jpg" },
    { src: "/images/column-4.jpg" },
    { src: "/images/column-1.jpg" },
    { src: "/images/column-2.jpg" },
    { src: "/images/column-3.jpg" },
    { src: "/images/column-5.jpg" },
  ];

  const displayImages = images.length > 0 ? images : fallbackSlides;

  return (
    <Layout>
      <div className="container-fluid media_top">
        <div className="row mb-3">
          {displayImages.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6">
              <img
                src={item.src}
                className="mt-3 imght"
                alt={`gallery-${i}`}
                style={{ width: "100%", height: "250px", cursor: "pointer" }}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              />
            </div>
          ))}
        </div>

        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={displayImages}
            index={index}
            on={{ view: ({ index }) => setIndex(index) }}
            plugins={[Thumbnails]}
          />
        )}
      </div>
    </Layout>
  );
};

export default Gallery;

export async function getStaticProps() {
  let data_header = null;
  let gallery_data = null;

  try {
    const resHeader = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`
    );
    data_header = await resHeader.json();
  } catch (err) {
    console.error("Header fetch error:", err);
  }

  try {
    const resGallery = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/gallery?fields=*.*.*`
    );
    gallery_data = await resGallery.json();
  } catch (err) {
    console.error("Gallery fetch error:", err);
  }

  return {
    props: {
      data_header,
      gallery_data,
    },
    revalidate: 60,
  };
}
