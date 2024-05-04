import { useCallback, useRef, useState } from "react"
import { JOB_RESULT } from "../types/JobResult"
import JobCard from "../components/cards/JobCard"
import useGetJobs from "../hooks/useGetJobs"

export default function SearchJobPage() {
  const [pageNumber, setPageNumber] = useState<number>(0)
  const { response, loading, error, hasMore } = useGetJobs(pageNumber)

  const observer = useRef<IntersectionObserver>()
  const lastJobCard = useCallback((node: HTMLDivElement) => {
    if (loading) return
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber((prevPageNumber: number)=> {
          const limit: number = Number(import.meta.env.VITE_LIMIT)
          return limit + prevPageNumber
        })
        console.log('visible')
      }
    })
    if (observer.current) observer.current?.disconnect()
    if (node) observer.current?.observe(node)
  }, [loading, hasMore])

  return (
    <section className='cardSection'>
      {response.map((resp: JOB_RESULT, index: number) => {
        if (response.length === index + 1) {
          return <div key={`${resp.jdUid}`} ref={lastJobCard}>
            <JobCard jobTitle="" jobDescription={resp.jobDetailsFromCompany? resp.jobDetailsFromCompany: ''} expRequired={resp.minExp? resp.minExp: null} logo={resp.logoUrl? resp.logoUrl: ''} companyName={resp.companyName? resp.companyName: ''} jobRole={resp.jobRole? resp.jobRole: ''} location={resp.location? resp.location: ''} />
          </div>
        }
        return (
          <JobCard key={`${resp.jdUid}`} jobTitle="" jobDescription={resp.jobDetailsFromCompany? resp.jobDetailsFromCompany: ''} expRequired={resp.minExp? resp.minExp: null} logo={resp.logoUrl? resp.logoUrl: ''} companyName={resp.companyName? resp.companyName: ''} jobRole={resp.jobRole? resp.jobRole: ''} location={resp.location? resp.location: ''} />
        )
      })}
      <div>{ loading && '...Loading' }</div>
      <div>{ error && `${error}` }</div>
    </section>
  )
}