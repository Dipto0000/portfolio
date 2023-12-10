import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Layout></Layout>}>
      <Route index element={<Home></Home>}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
