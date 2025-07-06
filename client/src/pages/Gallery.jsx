import React, { useState } from "react";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// const Gallery = () => {
//   const [open, setOpen] = useState(false);
//   const [auto, setAuto] = useState(false);

//   return (

//   );
// };

// export default Gallery;

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const imgs = import.meta.glob("/src/assets/gallery/*.{jpg,jpeg,png,svg,webp}", {
  eager: true,
  import: "default",
});
const images = Object.values(imgs);

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="space-y-3 my-3">
        {/* <div className="mask-[url(/stroke.png)] bg-[url(/bg-food.png)] ">
        </div> */}
          <h3 className="text-3xl font-bold text-center">Gallery</h3>
        <p className="text-xl text-center">
          Click for fullscreen slideshow view.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 mx-auto">
        {images.map((img, i) => (
          <img
            src={img}
            key={i}
            className="h-150 w-full object-cover"
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <Lightbox
        slides={images.map((img) => ({ src: img }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </>
  );
}
