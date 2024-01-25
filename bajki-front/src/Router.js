import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import CreateTalePage from "./features/tales/createTale/CreateTalePage";
import NotFound from "./pages/NotFoudPage";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="createTale" element={<CreateTalePage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
