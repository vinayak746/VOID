import React, { useState } from "react";
import BlurCircle from "./BlurCircle";
import { ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DateSelect = ({ dateTime, id }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const onBookHandler = () => {
    if (!selected) return toast("Please select a date first!");
    navigate(`/movies/${id}/${selected}`);
    scrollTo(0, 0);
  };

return (
    <div id="dateSelect" className="pt-36 relative px-6 md:px-16 lg:px-40 xl:px-44 z-10">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 p-8 bg-white/5 border border-white/10 rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-md">
            <BlurCircle top="-100px" left="-100px" />
            <BlurCircle top="100px" right="0px" />

            <div className="w-full">
                <p className="text-lg font-semibold text-white mb-3">Choose Date</p>
                <div className="flex items-center gap-4 text-white text-sm overflow-x-auto scrollbar-hide">
                    <ChevronsLeftIcon className="w-6 h-6 opacity-70 shrink-0" />

                    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4 w-full max-w-3xl">
                        {Object.keys(dateTime).map((date, i) => (
                            <div
                                key={date}
                                className="relative group transition-all duration-300"
                            >
                                {/* Glow effect blobs */}
                                <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-700/20 blur-2xl rounded-full z-0 pointer-events-none animate-pulse-slow"></div>
                                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-600/20 blur-2xl rounded-full z-0 pointer-events-none animate-pulse-slow"></div>

                                {/* Arcane animated threads */}
                                <svg
                                    className="absolute inset-0 z-10 opacity-0 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M0,100 C25,20 75,20 100,100"
                                        stroke="rgba(168,85,247,0.35)"
                                        strokeWidth="0.6"
                                        fill="none"
                                    />
                                    <path
                                        d="M0,0 C30,90 70,90 100,0"
                                        stroke="rgba(244,63,94,0.25)"
                                        strokeWidth="0.6"
                                        fill="none"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="42"
                                        stroke="rgba(255,255,255,0.06)"
                                        strokeWidth="0.4"
                                        fill="none"
                                    />
                                </svg>

                                <button
                                    onClick={() => setSelected(date)}
                                    className={`z-20 relative flex flex-col items-center justify-center h-16 rounded-lg px-2 py-1 transition-all duration-300 text-sm w-16 aspect-square ${
                                        selected === date
                                            ? "bg-primary text-white ring-2 ring-primary shadow-lg scale-105"
                                            : "bg-white/10 text-gray-300 hover:bg-primary/30 hover:text-white"
                                    }`}
                                >
                                    <span className="font-semibold">
                                        {new Date(date).getDate()}
                                    </span>
                                    <span className="text-xs">
                                        {new Date(date).toLocaleDateString("en-IN", {
                                            month: "short",
                                        })}
                                    </span>
                                </button>
                            </div>
                        ))}
                    </div>

                    <ChevronsRightIcon className="w-6 h-6 opacity-70 shrink-0" />
                </div>
            </div>

            {/* Book Now button: stack vertically on mobile, horizontally on md+ */}
            <button
                onClick={onBookHandler}
                className="bg-primary text-white px-8 py-2 mt-4 mb-5 md:mt-0 md:self-end rounded hover:bg-primary/90 transition-all cursor-pointer hover:shadow-[0_0_20px_rgba(248,69,101,0.3)] whitespace-nowrap"
            >
                Book Now
            </button>
        </div>
    </div>
);
};

export default DateSelect;
