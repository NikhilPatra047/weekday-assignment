import { JOB_RESULT } from "./JobResult";

export interface API_DATA {
  hasMore: boolean, 
  loading: boolean, 
  error: boolean, 
  pageNumber: number,
  response: JOB_RESULT[]
}