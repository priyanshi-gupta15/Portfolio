import Header from "./component/Header"
import Footer from "./component/Footer"
import Home from "./component/Home"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./component/About"
import Resume from "./component/Resume"
import Project from "./component/Project"

const AppLayout = () => (
  
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

    {/* Main content takes available space */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>

);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/resume", element: <Resume /> },
      {path:"/projects", element:<Project/>}
    ],
  },
]);





export default function App() {
  return <RouterProvider router={appRouter} />;
}
