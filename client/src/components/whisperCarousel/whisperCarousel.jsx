import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import WhisperCard from "../whisperCard/whisperCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function WhisperCarousel(props) {

  const whispers = props.sent ? useSelector(state => state.auth.sent) : useSelector(state => state.auth.inbox)
  const [toggle, setToggle] = useState(true)
  const changeToggle = (newValue) => setToggle(newValue);
  
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        spaceBetween={40}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {whispers && whispers.map((whisper) => {
          return(
            <SwiperSlide>
              <WhisperCard toggle={toggle} changeToggle={changeToggle} sent={props.sent} whisper={whisper} />
            </SwiperSlide>
          )
        })}
        </Swiper>
    </>
  );
}
