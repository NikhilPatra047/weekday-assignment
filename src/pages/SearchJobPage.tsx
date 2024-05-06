import { JOB_RESULT } from "../types/JobResult"
import JobCard from "../components/cards/JobCard"
import { roles, experience, location, minBasePay, LOCATION, PAY, EXPERIENCE } from "../../data/index.ts"
import { MultiFilter, MultiFilterGrouped, SingleFilter, TextFilter } from "../components/filters/index.ts"
import { useFilterJobs, useGetJobs, useInfiniteScrolling } from "../hooks/index.ts"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store.js"

export default function SearchJobPage() {
  const state = useSelector((state: RootState) => state.filter)
  const { loading, error, pageNumber } = useSelector((state: RootState) => state.apiData)

  const { response } = useGetJobs(pageNumber)
  const { lastJobCard } = useInfiniteScrolling()
  const { filteredResponse } = useFilterJobs(response)

  return (
    <section>
      <div className='filters'>
          <MultiFilterGrouped menu={roles} label={'Roles'} />
          <MultiFilter type={LOCATION} menu={location} label={'Location'} />
          <SingleFilter type={EXPERIENCE} menu={experience} label={'Experience'} />
          <SingleFilter type={PAY} menu={minBasePay} label={'Min Base Pay'} />
          <TextFilter label={'Search by company'} />
      </div>
      <div className='cardSection'>
        {
          (state.location.length !== 0 || state.experience !== null || state.minBasePay !== null || state.search !== '' || state.roles.length !== 0)
          ? (filteredResponse.map((resp: JOB_RESULT) => {
            return (
              <JobCard key={`${resp.jdUid}`} link={resp.jdLink? resp.jdLink: ''} jobTitle="" jobDescription={resp.jobDetailsFromCompany? resp.jobDetailsFromCompany: ''} expRequired={resp.minExp? resp.minExp: null} logo={resp.logoUrl? resp.logoUrl: ''} companyName={resp.companyName? resp.companyName: ''} jobRole={resp.jobRole? resp.jobRole: ''} location={resp.location? resp.location: ''} maxPay={resp.maxJdSalary? resp.maxJdSalary: null} minPay={resp.minJdSalary? resp.minJdSalary: null} />
            )
          }))
          : (response.map((resp: JOB_RESULT, index: number) => {
            if (response.length === index + 1) {
              return <div key={`${resp.jdUid}`} ref={lastJobCard}>
                <JobCard jobTitle="" link={resp.jdLink? resp.jdLink: ''} jobDescription={resp.jobDetailsFromCompany? resp.jobDetailsFromCompany: ''} expRequired={resp.minExp? resp.minExp: null} logo={resp.logoUrl? resp.logoUrl: ''} companyName={resp.companyName? resp.companyName: ''} jobRole={resp.jobRole? resp.jobRole: ''} location={resp.location? resp.location: ''} maxPay={resp.maxJdSalary? resp.maxJdSalary: null} minPay={resp.minJdSalary? resp.minJdSalary: null} />
              </div>
            }
            return (
              <JobCard key={`${resp.jdUid}`} link={resp.jdLink? resp.jdLink: ''} jobTitle="" jobDescription={resp.jobDetailsFromCompany? resp.jobDetailsFromCompany: ''} expRequired={resp.minExp? resp.minExp: null} logo={resp.logoUrl? resp.logoUrl: ''} companyName={resp.companyName? resp.companyName: ''} jobRole={resp.jobRole? resp.jobRole: ''} location={resp.location? resp.location: ''} maxPay={resp.maxJdSalary? resp.maxJdSalary: null} minPay={resp.minJdSalary? resp.minJdSalary: null} />
            )
          }))
        }
      </div>
      { 
        filteredResponse.length === 0 && (state.location.length !== 0 || state.experience !== null || state.minBasePay !== null || state.search !== '' || state.roles.length !== 0)
        && <p style={{ marginTop: '2rem', fontSize: '1.5rem', color: 'black', width: 'fit-content', margin: '0 auto',  }}>No job matched your search.</p>
      }
      <div>{ loading && '...Loading' }</div>
      <div>{ error && `${error}` }</div>
    </section>
  )
}
