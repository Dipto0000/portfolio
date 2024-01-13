import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
import ProjectLayout from "./pages/ProjectLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route index element={<Home></Home>}></Route>
      <Route path="projects" element={<ProjectLayout></ProjectLayout>}>
        <Route path = "academic" ></Route>
      </Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
