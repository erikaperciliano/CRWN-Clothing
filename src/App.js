import { Route, Routes } from "react-router";
import Home from "./routes/home/home.component";

const Shop = () => {
  return(
    <h1>Shop</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} >
        <Route path="shop" element={<Shop />}/>
      </Route>
    </Routes>
  );
};

export default App;
