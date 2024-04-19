import   { useEffect, useState } from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner'

const JobListings = ({isHome = true, title}) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getJobs = async ()=> {
            const res = await fetch('/api/jobs')
            // const res = await fetch('/api/jobs?_limit=10')
            const data = await res.json();
            setJobs(data)
            setLoading(false)
        }
        getJobs();
    },[])

    const [showAllJobs, setShowAllJobs] = useState(!isHome)
    let recentsJobs = jobs.slice(0,3)
    recentsJobs = showAllJobs ? jobs : jobs.slice(0,3)
    let setJobsCOunt = () => {
        console.log('insdie function')
        console.log()
        setShowAllJobs((a) => !a)
    }
    return (
   
            <section class="bg-blue-50 px-4 py-10">
                <div class="container-xl lg:container m-auto">
                    <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {title}
                    </h2>
                    {loading ? <Spinner loading={loading}/> : 
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                       recentsJobs.map((job)=>(
                           <JobListing key={job.id} job={job} />
                       ))
                    }
                   </div>
                    }
                    
                </div>
            <div className='m-0 p-0'>
                <button className='bg-blue-800 text-white rounded p-2 mt-2' onClick={()=>setJobsCOunt()}>{showAllJobs ? "Show Less Jobs": "Show All Jobs"}</button>
            </div>
            </section>
       
    )
}

// export default JobListings

// import React from 'react'

// const JobListings = () => {
//   return (
//     <div>JobListings</div>
//   )
// }

export default JobListings