import Home from "./pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./pages/navigation/navigation";
import Authentication from "./pages/authentication/authentication";
import Shop from "./pages/shop/shop";
import CheckOut from "./pages/check-out/check-out";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="check-out" element={<CheckOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
