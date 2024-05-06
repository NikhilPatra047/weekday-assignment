import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { JOB_RESULT } from "../types/JobResult"
import fetchJobs from "../api/fetchJobs"
import { AppDispatch } from "../redux/store"
import { failure, initialisation, success } from "../redux/slices/AddApiDataSlice"

export default function useGetJobs(offset: number){
  const dispatch = useDispatch<AppDispatch>()
  
  async function getJobs() {
    const result: { jdList: JOB_RESULT[], totalCount: number } = await fetchJobs(offset)
    return result.jdList
  }

  useEffect(() => {
    dispatch(initialisation())
    getJobs()
    .then((res) => {
      dispatch(success({ response: res, hasMore: res.length > 0 }))
    })
    .catch((err) => {
      dispatch(failure())
      console.log(err)
    })
  }, [offset])
}