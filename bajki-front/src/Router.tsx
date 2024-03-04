import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFoudPage";
import Login from "./pages/Login";
import TalesFeed from "./features/tales/getTales/TalesFeed";
import CreateTaleForm from "./features/tales/createTale/CreateTaleForm";
import Register from "./pages/Register";
import MyProfile from "./pages/MyProfile";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />}>
        <Route index element={<CreateTaleForm />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="myTales" element={<TalesFeed />} />
      <Route path="myProfile" element={<MyProfile />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
