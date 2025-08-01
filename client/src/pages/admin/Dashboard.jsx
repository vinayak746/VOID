import {
  ChartLineIcon,
  CircleDollarSignIcon,
  PlayCircleIcon,
  StarIcon,
  UsersIcon,
} from "lucide-react";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { dummyDashboardData } from "../../assets/assets";
import Loading from "../../components/Loading";
import Title from "../../components/admin/Title";
import BlurCircle from "../../components/BlurCircle";
import { dateFormat } from "../../lib/dateFormat";

const PAGE_SIZE = 6; // Number of shows to load per scroll

const Dashboard = () => {
  const currency = import.meta.env.VITE_CURRENCY || "USD";
  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0,
  });
  const [loading, setLoading] = useState(true);
  const [visibleShows, setVisibleShows] = useState([]);
  const [page, setPage] = useState(1);
  const observer = useRef();

  const dashboardCards = [
    {
      title: "Total Bookings",
      value: dashboardData.totalBookings || "0",
      icon: ChartLineIcon,
    },
    {
      title: "Total Revenue",
      value: dashboardData.totalRevenue || "0",
      icon: CircleDollarSignIcon,
    },
    {
      title: "Active Shows",
      value: dashboardData.activeShows.length || "0",
      icon: PlayCircleIcon,
    },
    {
      title: "Total Users",
      value: dashboardData.totalUser || "0",
      icon: UsersIcon,
    },
  ];

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
    setLoading(false);
  };

  useEffect(() => {
    fetchDashboardData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!loading) {
      const start = 0;
      const end = page * PAGE_SIZE;
      setVisibleShows(dashboardData.activeShows.slice(start, end));
    }
  }, [dashboardData.activeShows, page, loading]);

  const lastShowRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new window.IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          visibleShows.length < dashboardData.activeShows.length
        ) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, visibleShows.length, dashboardData.activeShows.length]
  );

  return !loading ? (
    <>
      <Title text1="Admin" text2="Dashboard" />
      <div className="relative flex flex-wrap gap-4 mt-6">
        <BlurCircle top="-100px" left="0" />
        <div className="flex flex-wrap gap-4 w-full ">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 bg-primary/10 border border-primary/20 rounded-md max-w-50 w-full"
            >
              <div>
                <h1 className="text-sm">{card.title}</h1>
                <p className="text-xl font-medium mt-1">{card.value}</p>
              </div>
              <card.icon className="w-6 h-6" />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-10 text-lg font-medium">Active Shows</p>
      <div className="relative flex flex-wrap gap-6 mt-4 max-w-5xl">
        <BlurCircle top="-100px" left="-10%" />
        {visibleShows.map((show, idx) => {
          const isLast = idx === visibleShows.length - 1;
          return (
            <div
              key={show._id}
              ref={isLast ? lastShowRef : null}
              className="w-55 rounded-lg overflow-hidden h-full pb-3 bg-primary/20 hover:-translate-y-1 transition duration-300"
            >
              <img
                src={show.movie.poster_path}
                alt=""
                className="h-60 w-full object-cover"
              />
              <p className="font-medium p-2 truncate">{show.movie.title}</p>
              <div className="flex items-center justify-between px-2">
                <p className="text-lg font-medium">
                  {currency}
                  {show.showPrice}
                </p>
                <p className="flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1">
                  <StarIcon className="w-4 h-4 text-primary fill-primary" />
                  {show.movie.vote_average.toFixed(1)}
                </p>
              </div>
              <p className="px-2 pt-2 text-sm text-gray-500">
                {dateFormat(show.showDateTime)}
              </p>
            </div>
          );
        })}
        {visibleShows.length < dashboardData.activeShows.length && (
          <div className="w-full flex justify-center py-4">
            <Loading />
          </div>
        )}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Dashboard;
