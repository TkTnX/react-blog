import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import FullPost from "./pages/FullPost/FullPost";
import AddPost from "./pages/AddPost/AddPost";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAuthMe, isAuthSelector } from "./redux/slices/auth";

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(isAuthSelector)
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchAuthMe())
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<FullPost />} />
        <Route path="/posts/:id/edit" element={<AddPost />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/auth/registration" element={<Registration />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
