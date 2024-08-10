import { useState } from 'react'
import '../App.css'

function Card({ img, title, author, date, totalMinutes, totalViews }) {
    return (
        <>
            <div className="col-md-6 col-lg-4 mt-5 card-wrapper">
                <div className="post-card trending-card" style={{ width: "18rem" }}>
                    <div className="card border-0 shadow-sm position-relative">
                        <a href={img} className="card-img-top" previewlistener="true">
                            <img width="895" height="347" src={img} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt={img} decoding="async" srcset={img} sizes="(max-width: 895px) 100vw, 895px" />
                        </a>
                        <div className="card-body   " id="card-details">
                            <p className="card-title text-decoration-none text-dark fs-5 fw-semibold" previewlistener="true">{title}</p>
                            <p className="card-author mt-2 mb-0"><span id="by">By</span>&nbsp;{author}</p>
                            <div id="card-footer" className="mt-2 d-flex flex-row flex-nowrap justify-content-between">
                                <p className="mb-0 card-text">{date}</p>
                                <p className="mb-0 card-text">{totalMinutes} Min Read </p>
                            </div>
                        </div>
                        <div className="position-absolute" id="views-section">
                            <div className="card-views d-flex px-2 py-1 align-items-center bg-white rounded-pill">
                                <img loading="lazy" src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/icons/eye.svg" height="auto" width="auto" alt="eye-icon" />&nbsp;
                                <p className="m-0">{totalViews}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
