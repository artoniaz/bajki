import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFoudPage";
import CreateTalePage from "./pages/CreateTalePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TalesFeed from "./features/tales/getTales/TalesFeed";



export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="createTale" element={<CreateTalePage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="myTales" element={<TalesFeed />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
