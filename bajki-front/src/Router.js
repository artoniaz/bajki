import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CreateTalePage from "./pages/CreateTalePage";
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
