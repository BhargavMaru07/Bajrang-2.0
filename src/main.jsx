import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./Context/AuthContextModified.jsx";
import { ProductProvider } from "./Context/ProductContext";
import { FilterContextProvider } from "./Context/FilterContext";
import { CartContextProvider } from "./Context/CartContext.jsx";
import { BlogProvider } from "./Context/BlogContext.jsx";
import { AddressProvider } from "./Context/AddressContext.jsx";
import { WishListContextProvider } from "./Context/WishListContext.jsx";
import { AdminProvider } from "./Context/AdminContext.jsx";
// import { UserProvider } from "./Context/UserContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <UserProvider> */}
    <BlogProvider>
      <AuthProvider>
        <AdminProvider>
          <AddressProvider>
            <ProductProvider>
              <FilterContextProvider>
                <CartContextProvider>
                  <WishListContextProvider>
                    <App />
                  </WishListContextProvider>
                </CartContextProvider>
              </FilterContextProvider>
            </ProductProvider>
          </AddressProvider>
        </AdminProvider>
      </AuthProvider>
    </BlogProvider>
    {/* </UserProvider> */}
  </StrictMode>
);
