async function fetchJobs(offset: number) {
  const headers = new Headers() 
  headers.append('Content-Type', 'application/json')

  const body = JSON.stringify({
    'limit': 9, 
    'offset': offset
  })

  const requestOptions = {
    method: 'POST', 
    headers, 
    body,
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_JOB_URL}`, requestOptions)
    const jobResponse = response.json()
    return jobResponse
  } catch(error) {
    return error
  }
}

export default fetchJobs