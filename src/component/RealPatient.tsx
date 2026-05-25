"use client";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testiswipeerdata } from "../constant/alldata";
import { IMAGES } from "../constant/theme";

function RealPatient() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <div className="container">
        <div className="row content-wrapper style-2">
          <div className="col-xl-6">
            <div className="content-media">
              <div className="dz-media">
                <Image src={IMAGES.about2png} alt="" />
              </div>
              <div
                className="circle-wrapper"
                data-bottom-top="transform: translateY(50px)"
                data-top-bottom="transform: translateY(-50px)"
              >
                <span className="circle1">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="circle2">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-10 align-self-center m-b30">
            <div
              className="section-head style-1 m-b30 wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="0.7s"
            >
              <h2 className="title text-white m-b0">
                De vrais patients, de vraies histoires.
              </h2>
            </div>
            <div
              className="swiper-btn-center-lr wow fadeInUp"
              data-wow-delay="0.4s"
              data-wow-duration="0.7s"
            >
              <Swiper
                className="swiper testimonial-swiper1"
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{
                  delay: 3000,
                }}
                navigation={{
                  nextEl: ".swiper1-button-next",
                  prevEl: ".swiper1-button-prev",
                }}
                modules={[Navigation, Autoplay]}
              >
                {testiswipeerdata.map((data, i) => (
                  <SwiperSlide key={i}>
                    <div className="testimonial-1 shadow-md">
                      <div className="dz-media">
                        <div className="media-inner">
                          <Image src={data.image} alt="/" />
                        </div>
                        <div className="testimonial-info">
                          <h5 className="testimonial-name">{data.name}</h5>
                          <span className="testimonial-position">Patient</span>
                        </div>
                      </div>
                      <div className="testimonial-detail">
                        <div className="testimonial-text">
                          <h3 className="title">{data.title}</h3>
                          <p>{data.comment}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper1-button-prev btn-prev" role="button">
                <Image src={IMAGES.arrowleft} alt="" />
              </div>
              <div className="swiper1-button-next btn-next" role="button">
                <Image src={IMAGES.arrowright} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/o8OgzQdA70c?si=Kgb2auDFo3tH4oRZ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Modal>
    </>
  );
}
export default RealPatient;
