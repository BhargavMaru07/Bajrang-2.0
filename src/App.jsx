import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./GlobalStyles";
//rrd
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
//helper
import { theme } from "./helper/theme";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ProductOverview from "./pages/ProductOverview";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import SearchProduct from "./pages/SearchProduct";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import Gallery from "./pages/Gallery";
import Logout from "./Auth/Logout";
import Help from "./pages/Help";
import SingleBlog from "./pages/singleBlog";
import Address from "./pages/Address";
import Chat from "./Chat/Chat";

//Component
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BlogForm from "./components/BlogForm";
//Auth
import PrivateRoute from "./Private/PrivateRoute";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Reset from "./Auth/Reset";
import WishList from "./pages/WishList";
import MyOrders from "./pages/MyOrders";
import AdminLayout from "./Layouts/AdminLayout";
import AdminUsers from "./pages/AdminUsers";
import AdminProducts from "./pages/AdminProducts";
import AdminSettngs from "./pages/AdminSettngs";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Main>
          <GlobalStyle />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/resetpassword" element={<Reset />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/help" element={<Help />} />
            <Route exact path="/search" element={<SearchProduct />} />
            <Route exact path="/blog/add-new" element={<BlogForm />} />
            <Route exact path="/blog/:id" element={<SingleBlog />} />
            <Route exact path="/address" element={<Address />} />
            <Route exact path="/wishlist" element={<WishList />} />
            <Route exact path="/myorder" element={<MyOrders />} />

            {/* Admin Routes  */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="general" element={<AdminSettngs />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="products" element={<AdminProducts />} />
            </Route>

            <Route
              exact
              path="/singleproduct/:id"
              element={<ProductOverview />}
            />
            <Route exact path="/contact" element={<Contact />} />
            <Route
              exact
              path="/profile/"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route exact path="*" element={<Error />} />
          </Routes>
          <Chat />
          <Footer />
        </Main>
      </ThemeProvider>
    </>
  );
};

export default App;
