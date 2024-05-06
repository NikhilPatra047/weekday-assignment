import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useLayoutEffect, useState } from "react";
import { JOB_RESULT } from "../types/JobResult";

export default function useFilterJobs(response: JOB_RESULT[]) {
  const [filteredResponse, setFilteredResponse] = useState<JOB_RESULT[]>([])
  const { location, experience, minBasePay, search, roles } = useSelector((state: RootState) => state.filter)

  const filterLocation = () => {
    const newResponse = response.filter((resp: JOB_RESULT) => {
      if (resp.location) {
        return location.includes(resp.location.toLowerCase())
      }
    })
    setFilteredResponse((prevResponse: JOB_RESULT[]) => {
      const uniqueResponses = Array.from(new Set([...prevResponse, ...newResponse]))
      return [...uniqueResponses]
    })
  }

  const filterRoles = () => {
    const newResponse = response.filter((resp: JOB_RESULT) => {
      if (resp.jobRole) {
        return roles.includes(resp.jobRole)
      }
    })
    setFilteredResponse((prevResponse: JOB_RESULT[]) => {
      const uniqueResponses = Array.from(new Set([...prevResponse, ...newResponse]))
      return [...uniqueResponses]
    })
  }

  const filterExperience = () => {
    const newResponse = response.filter((resp: JOB_RESULT) => {
      if (resp.minExp) {
        return Number(experience) === resp.minExp 
      } 
    })
    setFilteredResponse((prevResponse: JOB_RESULT[]) => {
      const uniqueResponses = Array.from(new Set([...prevResponse, ...newResponse]))
      return [...uniqueResponses]
    })
  }

  const filterPay = () => {
    const newResponse = response.filter((resp: JOB_RESULT) => {
      const minPay = Number(minBasePay?.split("K")[0])
      if (resp.minJdSalary) {
        return minPay <= resp.minJdSalary
      } else if (resp.maxJdSalary) {
        return minPay < resp.maxJdSalary
      }
    })
    setFilteredResponse((prevResponse: JOB_RESULT[]) => {
      const uniqueResponses = Array.from(new Set([...prevResponse, ...newResponse]))
      return [...uniqueResponses]
    })
  }

  const filterCompanies = () => {
    const newResponse = response.filter((resp: JOB_RESULT) => {
      if (resp.companyName) {
        return resp.companyName.toLowerCase().includes(search)
      }
    })
    setFilteredResponse((prevResponse: JOB_RESULT[]) => {
      const uniqueResponses = Array.from(new Set([...prevResponse, ...newResponse]))
      return [...uniqueResponses]
    })
  }

  useLayoutEffect(() => {
    setFilteredResponse([])
    if (location.length !== 0) {
      filterLocation()
    }
    if (roles.length !== 0) {
      filterRoles()
    }
    if (experience !== null || experience !== '') {
      filterExperience()
    }
    if (minBasePay !== null || minBasePay !== '') {
      filterPay()
    }
    if (search.length !== 0) {
      filterCompanies()
    }
  }, [location, experience, minBasePay, search, roles])

  return { filteredResponse }
}