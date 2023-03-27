import { useEffect } from "react";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import Services from "./pages/Services";

const welcomePage = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <Products /> },
      { path: '/bio', element: <AboutUs /> },
      { path: '/services', element: <Services /> },
    ]
  }
])


function App() {

  const showCart = useSelector(state => state.showCart);
  const showCheckout = useSelector(state => state.showCheckout);


  useEffect(() => {
    if (showCart || showCheckout) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'auto'
    }
  }, [showCart, showCheckout])

  return (
    <>
      <RouterProvider router={welcomePage} />
      {showCart && <Cart />}
      {showCheckout && <Checkout />}
    </>
  )
}

export default App;
