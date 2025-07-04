import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const HeroCarousel = () => {
  const navigate = useNavigate();

  const movies = [
    {
      bg: "/gotg1.png",
      title: "Guardians of the Galaxy",
      genre: "Action | Adventure | Sci‑Fi",
      year: "2014",
      time: "2h 1m",
      description:
        "A motley crew of intergalactic misfits band together to stop a fanatical warlord.",
    },
    {
      bg: "/infinitywar.png",
      title: "Avengers: Infinity War",
      genre: "Action | Superhero | Thriller",
      year: "2018",
      time: "2h 29m",
      description:
        "The Avengers must unite to stop Thanos before his blitz ends all life.",
    },
    {
      bg: "/gotg3.png",
      title: "Guardians of the Galaxy Vol. 3",
      genre: "Adventure | Comedy | Sci‑Fi",
      year: "2023",
      time: "2h 30m",
      description:
        "The Guardians embark on one final mission to protect Rocket and the family they’ve found.",
    },
  ];

  return (
    <Swiper
      effect="fade"
      navigation
      loop
      modules={[EffectFade, Navigation]}
      className="w-full h-screen"
    >
      {/* VOID INTRO SLIDE */}
     <SwiperSlide>
  <div
    className="w-full h-screen bg-cover bg-center relative"
    style={{ backgroundImage: `url("/void-bg.png")` }}
  >
    {/* Better overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90 z-0" />

    {/* VOID content */}
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6">
      <h1 className="text-[80px] md:text-[100px] font-extrabold tracking-wider drop-shadow-[0_0_20px_rgba(248,69,101,0.7)] animate-pulse leading-none">
        VOID
      </h1>
      <p className="text-gray-300 text-lg mt-4 max-w-xl tracking-wide font-light italic">
        Not all screens let you leave.
      </p>
    </div>
  </div>
</SwiperSlide>


      {/* MOVIE SLIDES */}
      {movies.map((m, i) => (
        <SwiperSlide key={i}>
          <div
            className="w-full h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url("${m.bg}")` }}
          >
            <div className="absolute inset-0 bg-black/60 z-10 flex flex-col justify-center px-6 md:px-16 lg:px-36 gap-4 text-white">
              <h1 className="text-5xl md:text-[70px] font-bold leading-tight max-w-3xl">
                {m.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-300 text-sm">
                <span>{m.genre}</span>
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  {m.year}
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  {m.time}
                </div>
              </div>
              <p className="max-w-md text-gray-200 leading-relaxed">
                {m.description}
              </p>
              <button
                onClick={() => navigate("/movies")}
                className="flex items-center gap-2 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer shadow-lg w-fit"
              >
                Explore Movies
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
