import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Script from "next/script";
import Schedule from "../../components/schedule";
import "react-date-range/dist/styles.css";
import Skeleton from "@mui/material/Skeleton";
import { useRouter } from "next/router";
import "react-date-range/dist/theme/default.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import renderHTML from "react-render-html";
import { DateRange } from "react-date-range";
import NumberFormat from "react-number-format";
import AppointmentModal from "../../components/appointmentModal";
import WatchItems from "../../components/watchItems";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  RiArrowRightSFill,
  RiPlayCircleLine,
  RiPlayCircleFill,
  RiPlayFill,
} from "react-icons/ri";
import PropTypes from "prop-types";
var dateFormat = require("dateformat");

SwiperCore.use([Autoplay, Navigation]);

const tourURL = "https://royalcoster.com/wordpress/wp-json/wp/v2/tours";

let localSticky = 1,
  tourPackageData;

export default function TourDetail() {
  const [cost, setCost] = useState(23);
  const [perPage, setPerPage] = useState(3);
  const [tourData, setTourData] = useState();
  const [mounted, setMounted] = useState(false);
  const [preDate, setPreDate] = useState(new Date());
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [windowWidth, setWindowWidth] = useState();
  const [loading, setLoading] = useState(true);
  const [tourPackage, setTourPackage] = useState([]);
  const [sticky, setSticky] = useState(localSticky);
  const [playBtnShow, setPlayBtnShow] = useState(true);
  const videoRef = useRef();
  const router = useRouter();
  const [bookDate, setBookDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (router.query.slug) {
      fetch(tourURL + "?slug=" + router.query.slug, {
        method: "get",
      })
        .then((res) => res.json())
        .then((data) => {
          setTourData(data[0]);
        });
    }
  }, [router.query]);

  const getTourData = () => {
    localSticky = sticky;
    setLoading(true);
    fetch(
      tourURL +
        "?order=asc&orderby=id" +
        "&per_page=" +
        perPage +
        "&page=" +
        sticky,
      {
        method: "get",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setShowLoadMore(data.length >= 3);
        setLoading(false);
        if (data.length) {
          tourPackageData = [...tourPackage, ...data];
          setTourPackage(tourPackageData);
        }
      });
  };

  useEffect(() => {
    if (sticky) {
      if (mounted) {
        getTourData();
      } else {
        if (tourPackageData) {
          setTourPackage(tourPackageData);
          setLoading(false);
        } else {
          getTourData();
        }
        setMounted(true);
      }
    }
  }, [sticky]);

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://fareharbor.com/embeds/script/calendar/royalcosterdiamondbv/items/189728/?fallback=simple&full-items=yes&flow=283062";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="tour-detail_page">
      <Head>
        <title>Tour Detail | Royal Coster</title>
      </Head>
      <Header />
      {/* Start hero section */}
      {tourData ? (
        <div className="hero-section">
          <div className="bg-panel">
            {windowWidth && windowWidth >= 576 ? (
              <img src={tourData.acf.landing.image.url} alt="bg-image" />
            ) : (
              <img src={tourData.acf.landing.image_mobile.url} alt="bg-image" />
            )}
          </div>
          <div className="r-container">
            <div className="col-lg-5 col-md-7 col-sm-8">
              <p className="text-capitalize mb-3">
                {renderHTML(tourData.acf.landing.subtitle)}
              </p>
              <h1 className="title text-white text-capitalize mb-5">
                {renderHTML(tourData.acf.landing.title)}
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <Skeleton variant="rect" animation="wave" width="100%" height={500} />
      )}

      {/* Start guide section */}
      {tourData ? (
        <div className="guide-section py-5">
          <div className="row r-container py-5">
            <div className="col-md-4 col-12 p-0 pe-md-5 pe-5 py-sm-5">
              <h3 className="title text-capitalize">
                {renderHTML(tourData.acf.form.title)}
              </h3>
            </div>
            <div className="col-md-8 col-12 p-0 ps-md-5 ps-0 pt-sm-5 pt-4 pb-sm-5">
              <p className="guide-text m-0">
                {renderHTML(tourData.acf.form.content)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="guide-section py-5">
          <div className="row r-container py-5">
            <div className="col-md-4 col-12 p-0 pe-md-5 pe-5 py-sm-5">
              <Skeleton
                variant="text"
                animation="wave"
                width="100%"
                height={50}
              />
            </div>
            <div className="col-md-8 col-12 p-0 ps-md-5 ps-0 pt-sm-5 pt-4 pb-sm-5">
              <Skeleton
                variant="text"
                animation="wave"
                width="100%"
                height={30}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width="100%"
                height={30}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width="100%"
                height={30}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width="100%"
                height={30}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width="100%"
                height={30}
              />
            </div>
          </div>
        </div>
      )}
      {/* End guide section */}

      {/* Start banner section */}
      <div className="banner-section mb-5">
        {tourData ? (
          <div className="cover-image-panel r-container round">
            <div className="banner-panel">
              {tourData.acf.media.video && (
                <video
                  loop="loop"
                  muted
                  defaultmuted="defaultmuted"
                  playsInline
                  onContextMenu={() => false}
                  preload="auto"
                  className="bg_video"
                  ref={videoRef}
                  controls={playBtnShow ? false : true}
                >
                  <source
                    src={tourData.acf.media.video.file.url}
                    type="video/mp4"
                  />
                </video>
              )}
              {playBtnShow && (
                <button
                  className="btn btn-play d-flex"
                  onClick={() => {
                    if (videoRef.current.paused) {
                      setPlayBtnShow(false);
                      videoRef.current.play();
                      videoRef.current.controls = true;
                    }
                  }}
                >
                  <RiPlayCircleFill />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="cover-image-panel r-container round">
            <Skeleton
              variant="rect"
              animation="wave"
              width="100%"
              height={350}
            />
          </div>
        )}
        {tourData ? (
          <div className="r-container slider-panel mt-4">
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              loop={true}
              className="mySwiper"
              breakpoints={{
                1024: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 3,
                },
                590: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 1,
                },
                1: {
                  slidesPerView: 1,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              {tourData.acf.media.gallery.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="image-panel hover-scale round">
                      <img src={item.sizes.medium} alt="banner-imaeg" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : (
          <div className="r-container slider-panel row mt-4">
            <div className="col-lg-4 col-md-6 px-3 mb-5">
              <div className="image-panel hover-scale round mb-4">
                <Skeleton
                  variant="rect"
                  animation="wave"
                  width="100%"
                  height={200}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 px-3 mb-5 d-md-block d-none">
              <div className="image-panel hover-scale round mb-4">
                <Skeleton
                  variant="rect"
                  animation="wave"
                  width="100%"
                  height={200}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 px-3 mb-5 d-lg-block d-none">
              <div className="image-panel hover-scale round mb-4">
                <Skeleton
                  variant="rect"
                  animation="wave"
                  width="100%"
                  height={200}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* End banner section */}

      {/* Start overview section */}
      <div className="overview-section r-container row pt-5">
        <div className="col-md-6 pe-lg-5">
          <div className="overview-panel pe-lg-5 mb-5">
            <h3 className="title blue-text">Overview</h3>
            {tourData ? (
              <p className="description dark-text">
                {renderHTML(tourData.acf.overview.content)}
              </p>
            ) : (
              <>
                <Skeleton
                  variant="text"
                  animation="wave"
                  width="100%"
                  height={30}
                />
                <Skeleton
                  className="mt-3"
                  variant="text"
                  animation="wave"
                  width="100%"
                  height={30}
                />
                <Skeleton
                  className="mt-3"
                  variant="text"
                  animation="wave"
                  width="100%"
                  height={30}
                />
                <Skeleton
                  className="mt-3"
                  variant="text"
                  animation="wave"
                  width="100%"
                  height={30}
                />
              </>
            )}
          </div>
          <div className="highlight-panel pe-lg-5">
            <h3 className="title text-uppercase mb-4">Highlights</h3>
            {tourData ? (
              <ul className="description">
                {tourData.acf.highlights.highlights.map((item, index) => (
                  <li className="mb-4" key={index}>
                    {renderHTML(item.highlight)}
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <Skeleton
                  className="mt-3"
                  variant="text"
                  animation="wave"
                  width="100%"
                  height={30}
                />
                <Skeleton
                  className="mt-3"
                  variant="text"
                  animation="wave"
                  width="100%"
                  height={30}
                />
                <Skeleton
                  className="mt-3"
                  variant="text"
                  animation="wave"
                  width="100%"
                  height={30}
                />
                <Skeleton
                  className="mt-3"
                  variant="text"
                  animation="wave"
                  width="100%"
                  height={30}
                />
                <Skeleton
                  className="mt-3"
                  variant="text"
                  animation="wave"
                  width="100%"
                  height={30}
                />
              </>
            )}
          </div>
        </div>
        <div className="col-md-6 book-date-panel mt-md-0 mt-5">
          <div className="book-date round p-4">
            <div className="title-panel d-flex justify-content-between align-items-center flex-lg-row flex-md-column flex-sm-row flex-column">
              <h3 className="title blue-text">Book Online</h3>
              <div className="status px-4 py-2">Real-time availability</div>
            </div>
            {/* <Script src="https://fareharbor.com/embeds/script/calendar/royalcosterdiamondbv/?fallback=simple" /> */}

            {/* <DateRange
              editableDateInputs={true}
              onChange={item => setBookDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={bookDate}
            /> */}
          </div>
          <button className="btn btn-available mt-4">
            Click a date to browse availability
          </button>
        </div>
      </div>
      {/* End overview section */}
      <div id="embed_form">

      </div>
      {/* Start address section */}
      <div className="booking-section r-container my-5 pb-5">
        <div className="ticket-panel round d-flex align-items-center justify-content-between py-2 ps-md-5 ps-4 pe-2 flex-md-row flex-column">
          <p className="mb-md-0 mb-4 text-center">
            Duration approx. 20 - 60 minutes | €12,50 per person
          </p>
          <button className="btn btn-ticket blue-btn px-5 py-2 text-uppercase round-form">
            Get your Tickets
          </button>
        </div>
        <div className="booking-panel round row mt-5">
          <div className="col-md-6">
            <div className="booking-list-panel py-4 px-md-5 px-4 round">
              <div className="title-panel d-flex justify-content-between align-items-center flex-lg-row flex-md-column flex-sm-row flex-column mb-5">
                <h3 className="title text-capitalize">Opening hours</h3>

              </div>
              <ul className="booking-list mb-0">
                <li className="mb-4">Monday: 9:00 AM – 5:00 PM</li>
                <li className="mb-4">Tuesday: 9:00 AM – 5:00 PM</li>
                <li className="mb-4">Wednesday: 9:00 AM – 5:00 PM</li>
                <li className="mb-4">Thursday: 9:00 AM – 5:00 PM</li>
                <li className="mb-4">Friday: 9:00 AM – 5:00 PM</li>
                <li className="mb-4">Saturday: 9:00 AM – 5:00 PM</li>
                <li>Sunday: 9:00 AM – 5:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mt-md-0 mt-5">
            <div className="direction-panel round py-4 px-md-5 px-4 d-flex flex-column">
              <div className="title-panel d-flex justify-content-between align-items-center flex-lg-row flex-md-column flex-sm-row flex-column mb-5">
                <h3 className="title text-capitalize">Direction</h3>
                <div className="status py-2 px-4">GET DIRECTION</div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5967266461016!2d4.880994015994667!3d52.35959905585618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609ef0246f37f%3A0x3cc8701575536c70!2sRoyal%20Coster%20Diamonds!5e0!3m2!1sen!2sru!4v1632814327214!5m2!1sen!2sru"
                width="100%"
                className="p-0 round flex-fill google-map"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* End address section */}

      {/* Start more tour section */}
      <div className="more-tour-section mb-md-5">
        <div className="title-panel py-5">
          <h3 className="title my-md-5 text-center blue-text text-capitalize">
            Our Coster
            <br />
            <span>packages</span>
          </h3>
        </div>
        <div className="tours-panel">
          <div className="r-container">
            <div className="row">
              {tourPackage.length > 0 &&
                tourPackage.map((tour, index) => {
                  return (
                    <div
                      className="col-lg-4 col-md-6 tour-item px-3 mb-5"
                      key={index}
                    >
                      <div className="image-panel hover-scale round mb-4">
                        <img
                          src={
                            window.innerWidth > 575
                              ? tour.acf.landing.image.url
                              : tour.acf.landing.image_mobile.url
                          }
                          className="tour-image"
                          alt="tour-image"
                        />
                      </div>
                      <h3 className="title mb-4 blue-text">
                        {renderHTML(tour.title.rendered)}
                      </h3>
                      <p className="description mb-5">
                        {renderHTML(tour.acf.overview.content)}
                      </p>
                      <Link
                        passHref={true}
                        href={{
                          pathname: "/visit/[slug]",
                          query: {
                            slug: tour.slug,
                          },
                        }}
                      >
                        <a className="more-detail text-uppercase mb-5 d-flex">
                          More Details <RiArrowRightSFill className="ms-2" />
                        </a>
                      </Link>
                    </div>
                  );
                })}
              {loading && (
                <>
                  <div className="col-lg-4 col-md-6 px-3 mb-5">
                    <div className="image-panel hover-scale round mb-4">
                      <Skeleton
                        variant="rect"
                        animation="wave"
                        width="100%"
                        height={200}
                      />
                    </div>
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width="100%"
                      height={50}
                    />
                    <Skeleton
                      className="mt-3"
                      variant="text"
                      animation="wave"
                      width="100%"
                      height={30}
                    />
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width="100%"
                      height={30}
                    />
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width="100%"
                      height={30}
                    />
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width={100}
                      height={30}
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 px-3 mb-5 d-md-block d-none">
                    <div className="image-panel hover-scale round mb-4">
                      <Skeleton
                        variant="rect"
                        animation="wave"
                        width="100%"
                        height={200}
                      />
                    </div>
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width="100%"
                      height={50}
                    />
                    <Skeleton
                      className="mt-3"
                      variant="text"
                      animation="wave"
                      width="100%"
                      height={30}
                    />
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width="100%"
                      height={30}
                    />
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width="100%"
                      height={30}
                    />
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width={100}
                      height={30}
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 px-3 mb-5 d-lg-block d-none">
                    <div className="image-panel hover-scale round mb-4">
                      <Skeleton
                        variant="rect"
                        animation="wave"
                        width="100%"
                        height={200}
                      />
                    </div>
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width="100%"
                      height={50}
                    />
                    <Skeleton
                      className="mt-3"
                      variant="text"
                      animation="wave"
                      width="100%"
                      height={30}
                    />
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width="100%"
                      height={30}
                    />
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width="100%"
                      height={30}
                    />
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width={100}
                      height={30}
                    />
                  </div>
                </>
              )}
            </div>
            {!loading && showLoadMore && (
              <div className="text-center">
                <button
                  className="btn btn-more text-uppercase blue-btn round-form px-5 py-3"
                  onClick={() => {
                    setSticky(sticky + 1);
                  }}
                >
                  Show More Packages
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* End more tour section */}

      {/* Start Schedule section */}
      <Schedule />
      {/* End Schedule section */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}

      <AppointmentModal />
    </div>
  );
}
