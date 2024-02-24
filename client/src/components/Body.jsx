import React,{useState} from 'react'
import { CiSearch } from "react-icons/ci";
import Blog from './Blog';
const Body = () => {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery)
  return (
    <div>
      <main className="nk-pages">
      <section className="section section-bottom-0 has-shape has-mask">
        <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x"></div>
        <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-50 translate-middle-x"></div>
        <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh"></div>
        <div className="container">
          <div className="section-head">
            <div className="row justify-content-center text-center">
              <div className="col-lg-9 col-xl-7 col-xxl-6">
                <h6 className="overline-title text-primary">Blog</h6>
                <h1 className="title">Connecting You to the Tech Universe</h1>
                <label
                  id="blog-search"
                  className="d-flex align-items-center border rounded-3 py-2 px-4 mt-5 mt-lg-7 bg-white"
                >
                  <em className="icon me-3 fs-3 ni"><CiSearch />
</em>
                  <input
                    type="text"
                    name="blog-search"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="form-control form-control-lg form-control-plaintext"
                    placeholder="Search for articles"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="row g-gs">
           
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
            </div>
          </div>
          {/* <div className="section-actions text-center">
            <ul className="btn-list btn-list-inline g-gs">
              {
                currentPage > 1 &&
                <li>
                <div onClick={previousPage} className="btn btn-primary btn-soft btn-lg">
                  <em className="icon ni ni-arrow-long-left"></em>
                  <span>Previous</span>
                </div>
              </li>
              }
              {
                currentPage < totalPages &&
                <li>
                <div onClick={nextPage} className="btn btn-primary btn-lg">
                  <span >Next</span>
                  <em className="icon ni ni-arrow-long-right"></em>
                </div>
              </li>}
            </ul>
          </div> */}
        </div>
      </section>
    </main>
    </div>
  )
}

export default Body