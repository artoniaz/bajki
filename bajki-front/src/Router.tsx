import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { NavItemsModel } from "./models/NavItemModel";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFoudPage";
import CreateTalePage from "./pages/CreateTalePage";
import Login from "./pages/Login";
import Register from "./pages/Register";



export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="createTale" element={<CreateTalePage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
