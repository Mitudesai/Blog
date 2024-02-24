import React from 'react'
import { Link } from 'react-router-dom'
import { DiDotnet } from "react-icons/di";
import img from "../images/user.png"

const Blog = () => {
  return (
    <>
         <div className="col-md-6 col-xl-4">
    <Link to={`/blog/12`}>
      <div className="card border-0 shadow-tiny rounded-4">
        <div className="card-body p-4">
          <div className="d-block">
            <img className="rounded-4 w-100" src="https://nextjs.org/static/blog/next-13-4/twitter-card.png" alt="" />
          </div>
          <div
            className="badge px-3 py-2 mt-4 mb-3 text-bg-primary-soft fw-normal rounded-pill"
          >
          Development
          </div>
          <h3>
            <div className="link-dark line-clamp-2">
            Nextjs The Ultimte Framework
            </div>
          </h3>
          <div className="d-flex pt-4">
            <div className="media media-lg media-middle media-lg rounded-pill">
              <img src={img} alt="" />
            </div>
            <div className="media-info ms-3">
              <h6 className="mb-1">blog</h6>
              <ul className="list list-row gx-1">
                <li>
                  <div className="sub-text">create date</div>
                </li>
                <li>
                  <em className="icon mx-0 ni ">
                  <DiDotnet />

                  </em>
                </li>
                <li>
                  <div className="sub-text"> Avg Read :20
                        min</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
    </>
  )
}

export default Blog