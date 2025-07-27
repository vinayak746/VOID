import { ChartLineIcon, CircleDollarSignIcon, PlayCircleIcon, UsersIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import {  dummyDashboardData } from '../../assets/assets';
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';
import BlurCircle from '../../components/BlurCircle';

const Dashboard = () => {
  const currency = import.meta.env.VITE_CURRENCY || 'USD';
  const [dashboardData, setDashboardData] = useState({
    
    totalBookings: 0,
    totalRevenue: 0,
    activeShows:[],
    totalUser:0,
  });
  const [loading, setLoading] = useState(true);
  const dashboardCards = [
    {title:'Total Bookings', value:dashboardData.totalBookings || "0", icon: ChartLineIcon},
    {title:'Total Revenue', value:dashboardData.totalRevenue || "0", icon: CircleDollarSignIcon},
    {title:'Active Shows', value:dashboardData.activeShows.length || "0", icon: PlayCircleIcon},
    {title:'Total Users', value:dashboardData.totalUser || "0", icon: UsersIcon},
  ]
  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
    setLoading(false);
  }
  useEffect(()=>{
    fetchDashboardData();
  })
  return !loading ? (
    <>
      <Title text1='Admin' text2='Dashboard' />
      <div className='relative flex flex-wrap gap-4 mt-6'>
        <BlurCircle top='-100px' left='0' />
        <div className=''>

        </div>
      </div>
    </>
  ) :<Loading />
}

export default Dashboard