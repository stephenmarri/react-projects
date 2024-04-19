import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  
  return (
    <>
      <Hero props={{title: "Become a React Dev", subtitle:" Find the React job that fits your skills and needs"}}/>
      <HomeCards />
      <JobListings title={"Recent Jobs"}/>
      <ViewAllJobs />
    </>
  )
}

export default HomePage