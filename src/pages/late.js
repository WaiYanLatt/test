import HtetYan from "../assets/img/htetyanoctober18.png";
import SaiSai from "../assets/img/saisaialbum.png";
import Layphyu from "../assets/img/laphyudiary.png";
import JCZ from "../assets/img/jczalbum.png";
import Hlawn from "../assets/img/hlawnpaing.png";
import Jme from "../assets/img/jmebawa.png";
import Ahmoon from "../assets/img/minpay.png";
import AD3000 from "../assets/img/AD3000.png";
import RGYI from "../assets/img/Gabarthar.png";
import ZAW from "../assets/img/MoeHtel.png";
import Tensec from "../assets/img/10sec.png";
import BOB from "../assets/img/bob.png";
import FLOKE from "../assets/img/floke.png";
import AMAE from "../assets/img/amaeeain.png";
import LUAR from "../assets/img/Luargita.png";
import { useEffect } from "react";
import { Link,} from "react-router-dom";

const Late = (props) => {

  useEffect(() => {
    let SRC = document.querySelector("#srcp");
    let SUG = document.querySelector(".sug");
    let CLO = document.querySelector(".close");

    SRC.addEventListener("click", () => {
      SUG.classList.remove("hidden");
    });

    CLO.addEventListener("click", () => {
      SUG.classList.add("hidden");
    });
  }, []);


  return (
    <div>
      <section className="container-fluid bgwhite py-5 position-relative">
        <div className="row mt-5 pt-5">
          <h1 className="text-center text-orange">
            SEARCH FROM <span className="text-black">23,456</span> MYANMAR SONGS
          </h1>
          <div className="col d-flex justify-content-center mt-2 z-10">
            <div className="p-lg-5 p-md-3 p-0 w-w mt-lg-3 border-0 bg-white rounded-3">
              <div className="">
                <div className="input-group border rounded-start-2 border-dark rounded-end-2">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle rounded-start-2  text-black border-0 bg-white"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Lyrics
                  </button>
                  <ul className="dropdown-menu rounded-3">
                    <li>
                      <a className="dropdown-item" href="#">
                        Songs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Artist
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Album
                      </a>
                    </li>
                  </ul>
                  <input
                    id="srcp"
                    type="text"
                    className="form-control border-0"
                    aria-label="Text input with dropdown button"
                    placeholder="Search......"
                  />
                  <button className="btn btn-outline-secondary rounded-end-2 px-lg-5 text-black border border-start-4 border-end-0 border-bottom-0 border-top-0 border-dark bg-white">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <div className=" position-absolute bg-glass sug hidden topsp w-c rounded-0 border-0">
              <div className="p-lg-3 p-1 bg-glass">
                <div className="list-group border-0 rounded-0">
                  <a
                    href="#"
                    className="list-group-item bg-transparent d-flex justify-content-between align-items-center pt-3 pb-0 list-group-item-action border-0"
                  >
                    <p className="">ဝင်သက်ထွက်သက်များ</p>
                    <p className="">ကျော်ဟိန်း</p>
                  </a>
                  <a
                    href="#"
                    className="list-group-item bg-transparent d-flex justify-content-between align-items-center pt-3 pb-0 list-group-item-action border-0"
                  >
                    <p className="">ဝင်သက်ထွက်သက်များ</p>
                    <p className="">နွဲ့ယဥ်ဝင်း</p>
                  </a>
                  <a
                    href="#"
                    className="list-group-item bg-transparent d-flex justify-content-between align-items-center pt-3 pb-0 list-group-item-action border-0"
                  >
                    <p className="">ဝင်သက်ထွက်သက်များ</p>
                    <p className="">ကျော်ဟိန်း၊မျိုးကျော့မြိုင်၊ဇေယျာသော်</p>
                  </a>
                </div>
                <div className="text-end">
                  <button className="close btn bg-black rounded-0 text-white px-5 my-3">
                    Cancel
                    <i className="fa-solid fa-xmark ms-3"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row mt-lg-5 mt-3 d-flex justify-content-center">
            <div className="col-lg-2 col-6 col-md-3">
              <div className="card shadow border-0">
                <div className="card-body text-center">
                  <i className="fa-solid fa-music fs-3"></i>
                  <h1 className="fw-bold text-orange">23,456</h1>
                  <p className="fw-medium">Songs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <div className="card shadow border-0">
                <div className="card-body text-center">
                  <i className="fa-solid fa-user fs-3"></i>
                  <h1 className="fw-bold text-orange">3,456</h1>
                  <p className="fw-medium">Artists</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6 col-md-3 mt-3 mt-md-0 mt-lg-0">
              <div className="card shadow border-0">
                <div className="card-body text-center">
                  <i className="fa-solid fa-compact-disc fs-3"></i>
                  <h1 className="fw-bold text-orange">1,548</h1>
                  <p className="fw-medium">Albums</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-5">
        <div className="row justify-content-between">
          <div className="col-lg-8">
            <div id="carouselExampleCaptions" className="carousel slide bggbblue p-3 d-no">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex  justify-content-evenly align-items-center pt-5">
                    <div>
                      <button className="btn btn-dark px-5 bg-white text-black rounded-pill border-0">
                        NEW ALBUM
                      </button>
                      <h4 className="mt-3 text-white">EXPLORE <br /> FULL ALBUM <br /> BY HTET YAN</h4>
                      <h1 className="text-white text-decoration-underline">OCTOBER 18</h1>
                    </div>
                    <img src={HtetYan} className="d-block w-25" alt="..." />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-evenly align-items-center pt-5">
                    <div>
                      <button className="btn btn-dark px-5 bg-white text-black rounded-pill border-0">
                        NEW ALBUM
                      </button>
                      <h4 className="mt-3 text-white">EXPLORE <br /> FULL ALBUM <br /> BY SAI SAI KHANG HLAING</h4>
                      <h1 className="text-white text-decoration-underline">SAI SIA IS SAI SAI</h1>
                    </div>
                    <img src={SaiSai} className="d-block w-25" alt="..." />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-evenly align-items-center">
                    <div>
                      <button className="btn btn-dark px-5 bg-white text-black rounded-pill border-0">
                        NEW ALBUM
                      </button>
                      <h4 className="mt-3 text-white">EXPLORE <br /> FULL ALBUM <br /> BY LAY PHYU</h4>
                      <h1 className="text-white text-decoration-underline">DIARY</h1>
                    </div>
                    <img src={Layphyu} className="d-block w-25 mt-3" alt="..." />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-evenly align-items-center pt-5">
                    <div>
                      <button className="btn btn-dark px-5 bg-white text-black rounded-pill border-0">
                        NEW ALBUM
                      </button>
                      <h4 className="mt-3 text-white">EXPLORE <br /> FULL ALBUM <br /> BY JCZ</h4>
                      <h1 className="text-white text-decoration-underline">143</h1>
                    </div>
                    <img src={JCZ} className="d-block w-25" alt="..." />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-evenly align-items-center pt-3">
                    <div>
                      <button className="btn btn-dark px-5 bg-white text-black rounded-pill border-0">
                        NEW ALBUM
                      </button>
                      <h4 className="mt-3 text-white">EXPLORE <br /> FULL ALBUM <br /> BY HLWAN PAING</h4>
                      <h1 className="text-white text-decoration-underline">GITA SAR SO</h1>
                    </div>
                    <img src={Hlawn} className="d-block w-25" alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <div className="card rounded-0 mt-3 border-2 border-orange">
              <div className="card-body">
                <p className="text-center text-orange fs-3">Ads</p>
              </div>
            </div>
            <div className="card rounded-0 mt-3 border-0 p-3">
              <h5 className="fw-light">Lastest Lyric Entries</h5>
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 col-md-6 mt-3">
                  <div className="d-flex align-items-center">
                    <img src={Jme} className="w-album" />
                    <div className="ms-3">
                      <h6>Bawa Nate Ban</h6>
                      <p className="fw-light">JME</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-3">
                  <div className="d-flex align-items-center">
                    <img src={Ahmoon} className="w-album" />
                    <div className="ms-3">
                      <h6>Min Pay Thaw A Chit</h6>
                      <p className="fw-light">Ah Moon</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-3">
                  <div className="d-flex align-items-center">
                    <img src={AD3000} className="w-album" />
                    <div className="ms-3">
                      <h6>AD3000</h6>
                      <p className="fw-light">Big Bag</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-3">
                  <div className="d-flex align-items-center">
                    <img src={RGYI} className="w-album" />
                    <div className="ms-3">
                      <h6>Gabar Thar</h6>
                      <p className="fw-light">R-Zarni</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-3">
                  <div className="d-flex align-items-center">
                    <img src={ZAW} className="w-album" />
                    <div className="ms-3">
                      <h6>Moe Htel</h6>
                      <p className="fw-light">Zaw Win Htut</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-3">
                  <div className="d-flex align-items-center">
                    <img src={Tensec} className="w-album" />
                    <div className="ms-3">
                      <h6>10 Second</h6>
                      <p className="fw-light">Various Artist</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-3">
                  <div className="d-flex align-items-center">
                    <img src={BOB} className="w-album" />
                    <div className="ms-3">
                      <h6>BOB</h6>
                      <p className="fw-light">Lay Phyu</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-3">
                  <div className="d-flex align-items-center">
                    <img src={FLOKE} className="w-album" />
                    <div className="ms-3">
                      <h6>Mental Masturbation</h6>
                      <p className="fw-light">Floke Rose</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-3">
                  <div className="d-flex align-items-center">
                    <img src={AMAE} className="w-album" />
                    <div className="ms-3">
                      <h6>Amae Eain</h6>
                      <p className="fw-light">Htoo Eain Thin</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-3">
                  <div className="d-flex align-items-center">
                    <img src={LUAR} className="w-album" />
                    <div className="ms-3">
                      <h6>Lu Ah Gita</h6>
                      <p className="fw-light">idiots</p>
                    </div>
                  </div>
                </div>
                <Link to='#' className="mt-4 fw-light text-center">
                  more
                </Link>
              </div>
            </div>
            <div className="card rounded-0 mt-2 border-2 border-orange">
              <div className="card-body">
                <p className="text-center text-orange fs-3">Ads</p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-4 col-6">
                <div className="rounded-0 mt-3 p-5 border-0 bg-orange">
                  <h3 className="text-center text-white py-3">SOLO ALBUMS</h3>
                </div>
              </div>
              <div className="col-lg-4 col-6">
                <div className="rounded-0 mt-3 p-5 border-0 bg-orange">
                  <h3 className="text-center text-white py-3">GROUP ALBUMS</h3>
                </div>
              </div>
              <div className="col-lg-4 col-6">
                <div className="rounded-0 mt-3 p-5 border-0 bg-orange">
                  <h3 className="text-center text-white py-3">VA ALBUMS</h3>
                </div>
              </div>
              <div className="col-lg-4 col-6">
                <div className="rounded-0 mt-3 p-3 border-0 bg-orange">
                  <h3 className="text-white text-wrap py-5 text-center">SEARCH BY COMPOSER</h3>
                </div>
              </div>
              <div className="col-lg-4 col-6">
                <div className="rounded-0 mt-3 p-5 border-0 bg-orange">
                  <h3 className="text-center text-white py-3">SEARCH BY LABEL</h3>
                </div>
              </div>
              <div className="col-lg-4 col-6">
                <div className="rounded-0 mt-3 p-5 border-0 bg-orange">
                  <h3 className="text-center text-white py-3">SEARCH BY BAND</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-orange px-3 py-3 rounded-3 mt-3 mt-lg-0">
              <div className="card-body">
                <h4 className="fw-normal">AMPHouse TOP 100</h4>
                <h6 className="fw-light">August 2023</h6>
                <div className="mt-3 d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number d-flex justify-content-center align-items-center me-5">1</div>
                    <p className="fw-normal me-3">Min mha min pel</p>
                  </div>
                  <p className="fw-light me-5">Lay Phyu</p>
                </div><hr className="text-white mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number d-flex justify-content-center align-items-center me-5">2</div>
                    <p className="fw-normal me-3">Judson htate ka</p>
                  </div>
                  <p className="fw-light me-2">Htoo Eain Thin</p>
                </div><hr className="text-white mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number d-flex justify-content-center align-items-center me-5">3</div>
                    <p className="fw-normal me-3">Lu</p>
                  </div>
                  <p className="fw-light me-3">Zaw Win Htut</p>
                </div><hr className="text-white mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number d-flex justify-content-center align-items-center me-5">4</div>
                    <p className="fw-normal me-3">AD3000</p>
                  </div>
                  <p className="fw-light me-5 pe-2">Big Bag</p>
                </div><hr className="text-white mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number d-flex justify-content-center align-items-center me-5">5</div>
                    <p className="fw-normal me-3">Eel Thel</p>
                  </div>
                  <p className="fw-light me-3 pe-2">Tin Zar Maw</p>
                </div><hr className="text-white mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number d-flex justify-content-center align-items-center me-5">6</div>
                    <p className="fw-normal me-3">Mel Mel Gyi</p>
                  </div>
                  <p className="fw-light me-4 pe-2">Cherry Thin</p>
                </div><hr className="text-white mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number d-flex justify-content-center align-items-center me-5">7</div>
                    <p className="fw-normal me-3">Myat Nhar</p>
                  </div>
                  <p className="fw-light me-5 pe-4">I M P </p>
                </div><hr className="text-white mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number d-flex justify-content-center align-items-center me-5">8</div>
                    <p className="fw-normal me-3">Thel Moe</p>
                  </div>
                  <p className="fw-light me-3">Eternal Gosh</p>
                </div><hr className="text-white mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number d-flex justify-content-center align-items-center me-5">9</div>
                    <p className="fw-normal me-3">Nway Eain Mat</p>
                  </div>
                  <p className="fw-light me-5 pe-2">Lin Lin</p>
                </div><hr className="text-white mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number d-flex justify-content-center align-items-center me-5">10</div>
                    <p className="fw-normal me-3">Bawa Nate Ban</p>
                  </div>
                  <p className="fw-light me-5 pe-4">J-me</p>
                </div><hr className="text-white mt-0" />
                <div className="text-center">
                  <Link to='#' className="mt-4 fw-light text-white">
                    more
                  </Link>
                </div>
              </div>
            </div>
            <div className="card mt-3 rounded-0 mt-3 border-2 border-orange">
              <div className="card-body">
                <p className="text-center text-orange fs-3">Ads</p>
              </div>
            </div>
            <div className="bg-light1 px-3 py-3 rounded-3 mt-3">
              <div className="card-body">
                <h4 className="fw-normal">Artist of the Month</h4>
                <div className="mt-3 d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number1 d-flex justify-content-center align-items-center me-5">1</div>
                    <p className="fw-light me-5">Lay Phyu</p>
                  </div>
                </div><hr className="text-black mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number1 d-flex justify-content-center align-items-center me-5">2</div>
                    <p className="fw-light me-2">Htoo Eain Thin</p>
                  </div>
                </div><hr className="text-black mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number1 d-flex justify-content-center align-items-center me-5">3</div>
                    <p className="fw-light me-3">Zaw Win Htut</p>
                  </div>
                </div><hr className="text-black mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number1 d-flex justify-content-center align-items-center me-5">4</div>
                    <p className="fw-light me-5 pe-2">Big Bag</p>
                  </div>
                </div><hr className="text-black mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number1 d-flex justify-content-center align-items-center me-5">5</div>
                    <p className="fw-light me-3 pe-2">Tin Zar Maw</p>
                  </div>
                </div><hr className="text-black mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number1 d-flex justify-content-center align-items-center me-5">6</div>
                    <p className="fw-light me-4 pe-2">Cherry Thin</p>
                  </div>
                </div><hr className="text-black mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number1 d-flex justify-content-center align-items-center me-5">7</div>
                    <p className="fw-light me-5 pe-4">I M P </p>
                  </div>
                </div><hr className="text-black mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number1 d-flex justify-content-center align-items-center me-5">8</div>
                    <p className="fw-light me-3">Eternal Gosh</p>
                  </div>
                </div><hr className="text-black mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number1 d-flex justify-content-center align-items-center me-5">9</div>
                    <p className="fw-light me-5 pe-2">Lin Lin</p>
                  </div>
                </div><hr className="text-black mt-0" />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="number1 d-flex justify-content-center align-items-center me-5">10</div>
                    <p className="fw-light me-5 pe-4">J-me</p>
                  </div>
                </div><hr className="text-black mt-0" />
                <div className="text-center">
                  <Link to='#' className="mt-4 fw-light">
                    more
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-black p-3 rounded-3 mt-3">
              <div className="card-body">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Artist" />
                </div>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Album" />
                </div>
                <div className="text-center">
                  <button className="btn btn-dark bg-orange px-5 rounded-pill text-center">
                     Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Late;