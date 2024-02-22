import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFoudPage";
import Login from "./pages/Login";
import TalesFeed from "./features/tales/getTales/TalesFeed";
import CreateTaleForm from "./features/tales/createTale/CreateTaleForm";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />}>
        <Route index element={<CreateTaleForm />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
      <Route path="myTales" element={<TalesFeed />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
