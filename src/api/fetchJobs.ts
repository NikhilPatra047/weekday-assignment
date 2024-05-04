async function fetchJobs() {
  const headers = new Headers() 
  headers.append('Content-Type', 'application/json')

  const body = JSON.stringify({
    'limit': 10, 
    'offset': 0
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
    console.log(error)
    return error
  }
}

export default fetchJobs