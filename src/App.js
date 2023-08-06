import { Link, Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Lyrics from "./pages/Lyrics";
import Contribute from "./pages/Contribute";
import Navbar from "./assets/Componnets/Navbar";
import Request from "./pages/Request";
import News from "./pages/News";
import Late from "./pages/late";
import Footer from "./assets/Componnets/Footer";
import Artist from "./assets/Componnets/Artist";
import Album from "./assets/Componnets/Album";
import A from "./assets/Componnets/A";
import B from "./assets/Componnets/B";
import C from "./assets/Componnets/C";
import D from "./assets/Componnets/D";
import E from "./assets/Componnets/E";
import F from "./assets/Componnets/F";
import G from "./assets/Componnets/G";
import H from "./assets/Componnets/H";
import I from "./assets/Componnets/I";

const App = (props) => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="late" element={<Late />} />
        <Route path="explore" element={<Explore />}>
          <Route index element={<Artist />} />
          <Route path="artist" element={<Artist />} >
            <Route index element={<A/>} />
            <Route path="a" element={<A/>} />
            <Route path="b" element={<B/>} />
            <Route path="c" element={<C/>} />
            <Route path="d" element={<D/>} />
            <Route path="e" element={<E/>} />
            <Route path="f" element={<F/>} />
            <Route path="g" element={<G/>} />
            <Route path="h" element={<H/>} />
            <Route path="i" element={<I/>} />
          </Route>
          <Route path="album" element={<Album />} />
        </Route>
        <Route path="lyrics" element={<Lyrics />} />
        <Route path="contribute" element={<Contribute />} />
        <Route path="request" element={<Request />} />
        <Route path="news" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
