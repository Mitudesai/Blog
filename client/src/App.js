import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import BlogDetails from "./components/BlogDetails";
import Register from "./components/auth/Register";


function App() {
  return (
<>
<div class="nk-body" data-menu-collapse="lg">
    <div class="nk-app-root  bg-darker">
    <Navbar/>

    <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/blog/:id" element={<BlogDetails/>}/>
      <Route path="/signup" element={<Register/>}/>

    </Routes>
      </div>
    </div>

</>
  );
}

export default App;
