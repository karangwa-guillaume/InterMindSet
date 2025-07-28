import { BrowserRouter, useLocation } from "react-router-dom"
import RouteElements from "./routes/routes"
import TopBar from "./components/TopBar"
import Navbar from "./components/Navbar"

const AppLayout = () => {
  const location = useLocation()
  const hideHeader = location.pathname ==="/admin/dashboard"

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
     {/* Only show TopBar and Navbar when not on admin dashboard */}
      {!hideHeader && (
        <div className="fixed top-0 left-0 w-full z-50">
          <TopBar />
          <Navbar />
        </div>
      )}

      {/* Page content */}
      <main className={hideHeader ? "flex-grow" : "flex-grow pt-[120px]"}>
        <RouteElements />
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
