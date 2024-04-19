import React, {useState} from 'react'
import {useLoaderData, useNavigate, useParams} from 'react-router-dom'

const EditJobPage = ({editJobSumit}) => {
    //show job details
    let jobDetails = useLoaderData();
    console.log(jobDetails)

    const navigate = useNavigate();

    const [type, setType] = useState(jobDetails.type)
    const [listing, setListing] = useState(jobDetails.title)
    const [description, setDescription] = useState(jobDetails.description)
    const [salary, setSalary] = useState(jobDetails.salary)
    const [location, setLocation] = useState(jobDetails.location)
    const [companyName, setCompanyName] = useState(jobDetails.company.name)
    const [companyDescription, setCompanyDescription] = useState(jobDetails.company.description)
    const [contactEmail, setContactEmail] = useState(jobDetails.company.contactEmail)
    const [conatactPhone, setContactPhone] = useState(jobDetails.company.conatactPhone)
    
    const submitForm = (e) => {
        e.preventDefault();

        const newJob = {
            id: jobDetails.id,
            type,
            title: listing,
            description,
            salary,
            location,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                conatactPhone
            }
        }

        editJobSumit(newJob)
         return navigate('/jobs');
    }

  return (
    <>
         <section class="bg-indigo-50">
      <div class="container m-auto max-w-2xl py-24">
        <div
          class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 class="text-3xl text-center font-semibold mb-6">Edit Job</h2>

            <div class="mb-4">
              <label for="type" class="block text-gray-700 font-bold mb-2"
                >Job Type</label>
              <select
                id="type"
                name="type"
                class="border rounded w-full py-2 px-3"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2"
                >Job Listing Name</label>
              <input
                type="text"
                id="title"
                name="title"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                value={listing}
                onChange={(e) => setListing(e.target.value)}
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="description"
                class="block text-gray-700 font-bold mb-2"
                >Description</label>
              <textarea
                id="description"
                name="description"
                class="border rounded w-full py-2 px-3"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add any job duties, expectations, requirements, etc"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="type" class="block text-gray-700 font-bold mb-2"
                >Salary</label>
              <select
                id="salary"
                name="salary"
                class="border rounded w-full py-2 px-3"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div class='mb-4'>
              <label class='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                class='border rounded w-full py-2 px-3 mb-2'
                placeholder='Company Location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required           
              />
            </div>

            <h3 class="text-2xl mb-5">Company Info</h3>

            <div class="mb-4">
              <label for="company" class="block text-gray-700 font-bold mb-2"
                >Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                class="border rounded w-full py-2 px-3"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Company Name" />
            </div>

            <div class="mb-4">
              <label
                for="company_description"
                class="block text-gray-700 font-bold mb-2"
                >Company Description</label>
              <textarea
                id="company_description"
                name="company_description"
                class="border rounded w-full py-2 px-3"
                rows="4"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
                placeholder="What does your company do?"
              ></textarea>
            </div>

            <div class="mb-4">
              <label
                for="contact_email"
                class="block text-gray-700 font-bold mb-2"
                >Contact Email</label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                class="border rounded w-full py-2 px-3"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Email address for applicants"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="contact_phone"
                class="block text-gray-700 font-bold mb-2"
                >Contact Phone</label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                class="border rounded w-full py-2 px-3"
                value={conatactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="Optional phone for applicants"
              />
            </div>

            <div>
              <button
                class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit">
                Edit Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default EditJobPage