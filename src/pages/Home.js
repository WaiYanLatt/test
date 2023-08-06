import Yellow from "../assets/img/yellowman.png";
import Orange from "../assets/img/orangeman.png";
import Phone from "../assets/img/phone.png";
import { useEffect } from "react";

const Home = (props) => {
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
      <section className="container-fluid bgor py-5 position-relative">
        <div className="row">
          <h1 className="text-center text-white  mt-5 pt-5">
            SEARCH FROM <span className="text-black">23,456</span> MYANMAR SONGS
          </h1>
          <div className="col d-flex justify-content-center mt-2 z-10">
            <div className="p-lg-5 p-md-3 p-0 w-w mt-lg-3 border-0 bg-glass rounded-3">
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
            <div className="col-lg-2 col-md-3 col-6">
              <div className="card">
                <div className="card-body text-center">
                  <i className="fa-solid fa-music fs-3"></i>
                  <h1 className="fw-bold text-orange">23,456</h1>
                  <p className="fw-medium">Songs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <div className="card">
                <div className="card-body text-center">
                  <i class="fa-solid fa-user fs-3"></i>
                  <h1 className="fw-bold text-orange">3,456</h1>
                  <p className="fw-medium">Artists</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6 mt-3 mt-md-0 mt-lg-0">
              <div className="card">
                <div className="card-body text-center">
                  <i class="fa-solid fa-compact-disc fs-3"></i>
                  <h1 className="fw-bold text-orange">1,548</h1>
                  <p className="fw-medium">Albums</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid  bgblue py-5">
        <div className="container ">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6">
              <h1 className="text-white fs-8 fw-semibold">
                SEARCH WITH ANY KEYWORDS TO FING THE SONGS ON YOUR MIND
              </h1>
              <button className="btn btn-dark rounded-pill fw-semibold px-5 mt-3">
                SEARCH
              </button>
            </div>
            <div className="col-lg-5 col-md-5">
              <img src={Yellow} className="w-70 img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid  bgye py-5">
        <div className="container ">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6">
              <img src={Orange} className="w-80" />
            </div>
            <div className="col-lg-6 mt-3 mt-lg-0 col-md-6">
              <h1 className="fs-8 fw-semibold">
                SEARCH WITH ANY KEYWORDS TO FING THE SONGS ON YOUR MIND
              </h1>
              <button className="btn btn-dark rounded-pill fw-semibold px-5 mt-3">
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid  bgge py-5">
        <div className="container ">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6">
              <h1 className="fs-8 fw-bold">SIGN UP NOW</h1>
              <p className="fw-normal fs-lg-3 fs-5">
                Save your favourite singers and composers.
                <br />
                Create your own personal playlist to access your favourite songs
                anytime.
              </p>
              <button className="btn btn-dark rounded-pill fw-semibold px-5 mt-3">
                SIGN UP
              </button>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 col-md-6">
              <img src={Phone} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 bggrblue pt-5 text-center">
            <button className="btn btn-dark fw-bold mt-5 px-5 py-3 rounded-pill">
              REQUEST SONGS
            </button>
          </div>
          <div className="col-lg-6 col-md-6 bggrpink pt-5 text-center">
            <button className="btn btn-dark fw-bold mt-5 px-5 py-3 rounded-pill">
              CONTRIBUTE
            </button>
            <p className="fw-semibold">TO OUR LIBRARY</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
