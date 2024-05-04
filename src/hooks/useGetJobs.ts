import { useEffect, useState } from "react"
import { JOB_RESULT } from "../types/JobResult"
import fetchJobs from "../api/fetchJobs"

export default function useGetJobs(offset: number){
  const [response, setResponse] = useState<JOB_RESULT[]>([])
  const [hasMore, setHasMore] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  async function getJobs() {
    const result: { jdList: JOB_RESULT[], totalCount: number } = await fetchJobs(offset)
    return result.jdList
  }

  useEffect(() => {
    setLoading(true)
    setError(false)
    setHasMore(false)

    getJobs()
    .then((res) => {
      setLoading(false)
      setError(false)
      setResponse((prevRes: JOB_RESULT[]) => {
        const newResponse = Array.from(new Set([...prevRes, ...res]))
        return newResponse
      })
      setHasMore(res.length > 0)
    })
    .catch((err) => {
      setError(true)
      setLoading(false)
      setHasMore(false)
      console.log(err)
    })
  }, [offset])

  return { response, loading, error, hasMore } 
}