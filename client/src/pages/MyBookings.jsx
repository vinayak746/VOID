import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loading from '../components/Loading'
import BlurCircle from '../components/BlurCircle'
import timeFormat from '../lib/timeFormat'
import { dateFormat } from '../lib/dateFormat'

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY
  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getMyBookings = async () => {
    setBookings(dummyBookingData)
    setIsLoading(false)
  }

  useEffect(() => {
    getMyBookings()
  }, [])

  return !isLoading ? (
    <div className="relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]">
      <BlurCircle top="100px" left="100px" />
      <BlurCircle bottom="0px" left="600px" />

      {/* Thready background effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
          className="absolute left-10 top-20 w-60 h-60 opacity-10 animate-spin-slow"
        >
          <path
            d="M0,300 C150,100 350,100 500,300"
            stroke="#F84565"
            strokeWidth="0.7"
            fill="none"
          />
        </svg>
        <svg
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
          className="absolute right-0 bottom-0 w-60 h-60 opacity-10 animate-pulse"
        >
          <path
            d="M0,200 C150,400 350,400 500,200"
            stroke="#7c3aed"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>

      <h1 className="text-lg font-semibold mb-6 sm:mt-15 md:mt-6 lg:mt-5 relative z-10">My Bookings</h1>

      {bookings.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between bg-primary/10 backdrop-blur-md border border-white/5 shadow-inner rounded-xl mt-6 p-3 md:p-5 max-w-4xl relative z-10"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <img
              src={item.show.movie.poster_path}
              alt=""
              className="md:max-w-40 aspect-video object-cover rounded"
            />
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-lg font-semibold">{item.show.movie.title}</p>
                <p className="text-gray-400 text-sm">{timeFormat(item.show.movie.runtime)}</p>
              </div>
              <p className="text-gray-400 text-sm mt-2">{dateFormat(item.show.showDateTime)}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between md:items-end text-sm gap-2 mt-4 md:mt-0">
            <div className="flex items-center gap-4">
              <p className="text-2xl font-semibold">{currency}{item.amount}</p>
              {!item.isPaid && (
                <button className="bg-primary px-4 py-1.5 text-sm rounded-full font-medium cursor-pointer hover:bg-primary/90 transition">
                  Pay Now
                </button>
              )}
            </div>
            <div className="space-y-1 text-gray-300">
              <p><span className="text-gray-400">Total Tickets:</span> {item.bookedSeats.length}</p>
              <p><span className="text-gray-400">Seat Number:</span> {item.bookedSeats.join(", ")}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <Loading />
  )
}

export default MyBookings
