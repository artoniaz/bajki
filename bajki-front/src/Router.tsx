import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFoudPage";
import CreateTaleForm from "./features/tales/createTale/CreateTaleForm";
import NavItemModel from "./models/NavItemModel";

export const navItems: NavItemModel[] = [
  {
    path: "/",
    content: "home",
  },
  {
    path: "/about",
    content: "o nas",
  },
  {
    path: "/createTale",
    content: "stwórz bajkę",
  },
];

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="createTale" element={<CreateTaleForm />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
