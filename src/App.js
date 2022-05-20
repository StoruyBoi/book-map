import "./App.css";

import Banner from "./Components/Banner";
import AboutUs from "./Components/AboutUs";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Bookshare from "./Components/Bookshare";
import UPSE from "./Components/UPSE";
import School from "./Components/School";
import NavBlogin from "./Components/NavBlogin";
import Compititve from "./Components/Compititve";
import HigherSchol from "./Components/HigherSchol";
import College from "./Components/College";
import Nav from "./Components/Nav";
import BookshareItems from "./Components/BookshareItems";
import Errors from "./Components/Errors";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import { UserAuthContextProvider } from "./Components/userContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import AddArticle from "./Components/AddArticle";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import LikeArticle from "./Components/LikeArticle";
import DeleteArticle from "./Components/DeleteArticle";
import Comment from "./Components/Comment";
import Events from "./Components/Events";
import Popup from "./Components/Popup";
import Homepage from "./Components/Homepage";
import Mainpofo from "./Components/Mainpofo";
import ArticlesHome from "./Components/ArticlesHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserAuthContextProvider>
          <Nav />

          <Routes>
            <Route path="/Banner" element={<Banner />} />
            <Route path="/ArticlesHome" element={<ArticlesHome/>} />
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/Popup" element={<Popup />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/AddArticle" element={<AddArticle />} />
            <Route path="/Articles" element={<Articles />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/LikeArticle" element={<LikeArticle />} />
            <Route path="/DeleteArticle" element={<DeleteArticle />} />
            <Route path="/Comment" element={<Comment />} />
            <Route path="/" element={<Home />} />

            <Route path="/AboutUs" element={<AboutUs />} />

            <Route path="/Login" element={<Login />} />

            <Route path="/Bookshare" element={<Bookshare />}>
              <Route
                path="/Bookshare/BookshareItems"
                element={<BookshareItems />}
              />
              <Route
                path="/Bookshare/BookshareItems/College"
                element={<College />}
              />
              <Route
                path="/Bookshare/BookshareItems/School"
                element={<School />}
              />
              <Route path="/Bookshare/BookshareItems/UPSE" element={<UPSE />} />
              <Route
                path="/Bookshare/BookshareItems/Compititve"
                element={<Compititve />}
              />
              <Route
                path="/Bookshare/BookshareItems/HigherSchol"
                element={<HigherSchol />}
              />
            </Route>
            <Route element={<ProtectedRoute />}></Route>

            <Route path="*" element={<Errors />} />

            <Route path="/Register" element={<Register />} />

            <Route path="/Profile" element={<Profile />} />
            <Route path="/Mainpofo" element={<Mainpofo />} />
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
