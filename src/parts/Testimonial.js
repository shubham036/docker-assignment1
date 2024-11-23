/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-boolean-value */
// eslint-disable-next-line react/no-array-index-key
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Autoplay,
// } from "swiper/modules";

// import 'swiper/swiper-bundle.css';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export default function Testimonial({ data }) {
  return (
    <section>
      <Fade>
        <h1>Testimonials</h1>
      </Fade>
      <Fade>
        <p>What they said about us.</p>
      </Fade>
      {/* eslint-disable-next-line react/jsx-max-props-per-line */}
      <Swiper>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <div>
                {/* <img
                /> */}
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.company}</p>
                </div>
              </div>
              <p>{item.testimoni}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
