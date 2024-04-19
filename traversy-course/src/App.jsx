import React from 'react'
import MainLayout from './pages/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import JobPage , { jobLoader } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'

const App = () => {
  
  const addJob = async newJob => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'content-Type': 'applicaiton/json',
      },
      body: JSON.stringify(newJob)
    });
    return
  }

  const deletJob = async jobId => {
    const res = await fetch(`/api/jobs/${jobId}`,{
      method: "DELETE"
    })
    return; 
  }

  const editJob = async newJob => {
    const res = await fetch(`/api/jobs/${newJob.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'applicaiton/json'
      },
      body: JSON.stringify(newJob)
    });
    return
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSumit={addJob}/>} />
        <Route path='/edit-job/:jobId' element={<EditJobPage editJobSumit={editJob}/>} loader={jobLoader} />
        <Route path='/jobs/:jobId' element={<JobPage deleteJob={deletJob}/>} loader={jobLoader} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;

}

export default App
