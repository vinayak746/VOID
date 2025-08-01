import React, { useEffect, useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import Loading from "../../components/Loading";
import Title from "../../components/admin/Title";
import { dateFormat } from "../../lib/dateFormat";

const PAGE_SIZE = 1; // Number of shows per "page"

const ListShows = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Simulate fetching paginated data
  const getShowsPage = async (pageNum) => {
    setLoading(true);
    try {
      // Simulate paginated data from dummyShowsData
      const start = (pageNum - 1) * PAGE_SIZE;
      const end = start + PAGE_SIZE;
      const pageData = dummyShowsData.slice(start, end).map((movie, i) => ({
        movie,
        showDateTime: "2025-07-25T02:00:00Z",
        showPrice: 59,
        occupiedSeats: {
          A1: "user_1",
          B1: "user_2",
          C1: "user_3",
        },
      }));
      setShows((prev) => [...prev, ...pageData]);
      setHasMore(end < dummyShowsData.length);
    } catch (error) {
      console.error("Error fetching shows:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getShowsPage(page);
    // eslint-disable-next-line
  }, [page]);

  // Lazy load more shows when "Load More" is clicked
  const handleLoadMore = () => {
    if (hasMore && !loading) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <Title text1="List" text2="Shows" />
      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              <th className="p-2 font-medium pl-5">Movie Name</th>
              <th className="p-2 font-medium">Show Time</th>
              <th className="p-2 font-medium">Total Bookings</th>
              <th className="p-2 font-medium">Earnings</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {shows.map((show, index) => (
              <tr
                key={index}
                className="border-b border-primary/10 bg-primary/5 even:bg-primary/10"
              >
                <td className="p-2 min-w-45 pl-5">{show.movie.title}</td>
                <td className="p-2">{dateFormat(show.showDateTime)}</td>
                <td className="p-2">
                  {Object.keys(show.occupiedSeats).length}
                </td>
                <td className="p-2">
                  {currency}{" "}
                  {show.showPrice * Object.keys(show.occupiedSeats).length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && <Loading />}
        {!loading && hasMore && (
          <button
            className="mt-4 px-4 py-2 bg-primary text-white rounded"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default ListShows;
