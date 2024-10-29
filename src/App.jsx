import {router} from "./routes.jsx";
import {RouterProvider} from "react-router-dom";
import './index.css'
import UserContextProvider from "./store/user-context.jsx";

function App() {

  return (
          <UserContextProvider>
              <RouterProvider router={router}/>
          </UserContextProvider>
  )
}

export default App
