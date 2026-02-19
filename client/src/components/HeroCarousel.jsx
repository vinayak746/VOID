
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination"; 

const HeroCarousel = () => {
  const navigate = useNavigate();

  const movies = [
    {
      bg: "/gotg1.webp",
      titleTop: "Guardians",
      titleBottom: "of the Galaxy",
      genre: "Action | Adventure | Sci‑Fi",
      year: "2014",
      time: "2h 1m",
      description:
        "A motley crew of intergalactic misfits band together to stop a fanatical warlord.",
    },
    {
      bg: "/infinitywar.webp",
      titleTop: "Avengers:",
      titleBottom: "Infinity War",
      genre: "Action | Superhero | Thriller",
      year: "2018",
      time: "2h 29m",
      description:
        "The Avengers must unite to stop Thanos before his blitz ends all life.",
    },
    {
      bg: "/gotg3.webp",
      titleTop: "Guardians",
      titleBottom: "of the Galaxy Vol. 3",
      genre: "Adventure | Comedy | Sci‑Fi",
      year: "2023",
      time: "2h 30m",
      description:
        "The Guardians embark on one final mission to protect Rocket and the family they’ve found.",
    },
  ];

  return (
    <Swiper
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      navigation
      effect="fade"
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full h-screen bg-primary relative"
    >
      {/* VOID INTRO SLIDE */}
      <SwiperSlide>
        <div
          className="w-full h-screen bg-cover bg-center relative"
          style={{ backgroundImage: `url("/void-bg.webp")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90 z-0" />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 md:px-6">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-[80px] lg:text-[100px] font-extrabold tracking-wider drop-shadow-[0_0_20px_rgba(248,69,101,0.7)] animate-pulse leading-none">
              VOID
            </h1>
            <p className="text-gray-300 text-base xs:text-lg mt-4 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl tracking-wide font-light italic md:text-xl lg:text-2xl">
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
            {/* Add a preload image with loading="lazy" */}
            <img 
              src={m.bg} 
              alt="" 
              loading="lazy" 
              className="hidden" 
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/60 z-10 flex flex-col justify-center px-4 xs:px-6 sm:px-8 md:px-16 lg:px-36 gap-3 xs:gap-4 text-white">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-[70px] font-bold leading-tight max-w-xs xs:max-w-sm sm:max-w-md md:max-w-3xl">
                {m.titleTop} <br /> {m.titleBottom}
              </h1>
              <div className="flex flex-wrap items-center gap-2 xs:gap-4 text-gray-300 text-xs xs:text-sm">
                <span>{m.genre}</span>
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-3 xs:w-4 h-3 xs:h-4" />
                  {m.year}
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-3 xs:w-4 h-3 xs:h-4" />
                  {m.time}
                </div>
              </div>
              <p className="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-md text-gray-200 leading-relaxed text-xs xs:text-sm sm:text-base">
                {m.description}
              </p>
              <button
                onClick={() => navigate("/movies")}
                className="flex items-center gap-1 xs:gap-2 px-4 xs:px-6 py-2 xs:py-3 text-xs xs:text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer shadow-lg w-fit"
              >
                Explore Movies
                <ArrowRight className="w-4 xs:w-5 h-4 xs:h-5" />
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
