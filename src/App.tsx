import { Provider } from "react-redux"
import SearchJobPage from "./pages/SearchJobPage"
import { store } from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <div style={{ maxWidth: '1500px', width: '80%', margin: '0 auto' }}>
        <SearchJobPage />
      </div>
    </Provider>
  )
}

export default App
