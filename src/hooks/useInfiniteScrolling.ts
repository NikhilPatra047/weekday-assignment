import { useCallback, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { incrementPageNumber } from "../redux/slices/AddApiDataSlice"

export default function useInfiniteScrolling() {
  const dispatch = useDispatch<AppDispatch>()
  const { loading, hasMore, pageNumber } = useSelector((state: RootState) => state.apiData)

  const observer = useRef<IntersectionObserver>()

  const lastJobCard = useCallback((node: HTMLDivElement) => {
    if (loading) return
    observer.current = new IntersectionObserver(entries => {
      // only if the API contains more data, then only the API will be called upon scrolling the bottom-most card
      // Increments the offset value to fetch the next set of data from the API 
      if (entries[0].isIntersecting && hasMore) {
        const limit: number = Number(import.meta.env.VITE_LIMIT)
        const offset = pageNumber + limit
        dispatch(incrementPageNumber({ pageNumber: offset }))
      }
    })
    if (observer.current) observer.current?.disconnect()
    if (node) observer.current?.observe(node)
  }, [loading, hasMore])

  return { lastJobCard }
}