import React from 'react';

const Header = () => {
    return (
        <>
            <div className="scroll-progress" aria-hidden="true"></div>
            <header className="main-header">
                <div className="container">
                    <div className="header-inner">
                        <a href="index.html" className="logo-holder scroll-sticky">
                            <img src="/images/logo.png" alt="Thai Industrial Property" />
                        </a>
                    {/* navigation */}
                        <div className="main-menu nav-holder">
                            <nav>
                                <ul className="no-list-style">
                                    <li>
                                        <a href="#" className="act-link">Home <i className="fa-solid fa-caret-down"></i></a>
                                        {/* second level */}
                                        <ul>
                                            <li><a href="index.html">Slider</a></li>
                                            <li><a href="index2.html">Video</a></li>
                                            <li><a href="index3.html">Slideshow</a></li>
                                            <li><a href="index4.html">Parallax Image</a></li>
                                            <li><a href="dashboard.html">User Dasboard</a></li>
                                        </ul>
                                        {/* second level end */}
                                    </li>
                                    <li>
                                        <a href="#">Listings <i className="fa-solid fa-caret-down"></i></a>
                                        {/* second level */}
                                        <ul>
                                            <li><a href="listing.html">Style 1</a></li>
                                            <li><a href="listing2.html">Style 2</a></li>
                                            <li><a href="listing3.html">Style 3</a></li>
                                            <li><a href="listing4.html">Style 4</a></li>
                                            <li>
                                                <a href="#">Single <i className="fa-solid fa-caret-right"></i></a>
                                                {/* third level */}
                                                <ul>
                                                    <li><a href="listing-single.html">Style 1</a></li>
                                                    <li><a href="listing-single2.html">Style 2</a></li>
                                                    <li><a href="listing-single3.html">Style 3</a></li>
                                                </ul>
                                                {/* third level end */}
                                            </li>
                                        </ul>
                                        {/* second level end */}
                                    </li>
                                    <li>
                                        <a href="blog.html">News</a>
                                    </li>
                                    <li>
                                        <a href="#">Pages <i className="fa-solid fa-caret-down"></i></a>
                                        {/* second level */}
                                        <ul>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="contacts.html">Contacts</a></li>
                                            <li><a href="agent-single.html">Agent single</a></li>
                                            <li><a href="help.html">How it Works</a></li>
                                            <li><a href="pricing.html">Pricing</a></li>
                                            <li><a href="blog-single.html">Blog Single</a></li>
                                            <li><a href="add-listing.html">Add Listing</a></li>
                                        </ul>
                                        {/* second level end */}
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* navigation end */}
                        {/* nav-button-wrap */}
                        <div className="nav-button-wrap">
                            <div className="nav-button">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                        {/* nav-button-wrap end */}
                        <div className="header-search-btn tolt" data-microtip-position="bottom" data-tooltip="Search">
                            <i className="fa-regular fa-magnifying-glass"></i>
                        </div>
                        <a href="add-listing.html" className="header-btn"><span>Add Your Propperty</span></a>
                        <div className="wish_btn swl_btn tolt" data-microtip-position="bottom" data-tooltip="Wishlist">
                            <div className="wish_btn-item"><i className="fa-thin fa-heart"></i><span className="wish_count">3</span></div>
                        </div>
                        <div className="show-reg-form modal-open"><i className="fa-thin fa-user"></i><span>Sign In</span></div>
                    {/* header-search-wrap */}
                        <div className="header-search-wrap novis_search">
                            <div className="header-search">
                                <div className="header-search-nav">
                                    <div className="header-search-nav_container">
                                        <div className="header-search-radio">
                                            <input className="hidden radio-label" type="radio" name="accept-offers" id="sale-button" defaultChecked />
                                            <label className="button-label" htmlFor="sale-button">Sale</label>
                                            <input className="hidden radio-label" type="radio" name="accept-offers" id="rent-button" />
                                            <label className="button-label" htmlFor="rent-button">Rent</label>
                                            <input className="hidden radio-label" type="radio" name="accept-offers" id="comm-button" />
                                            <label className="button-label" htmlFor="comm-button">Commercial</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-search-container">
                                    <div className="custom-form">
                                        {/* listsearch-input-item */}
                                        <div className="cs-intputwrap">
                                            <i className="fa-light fa-house"></i>
                                            <input type="text" placeholder="Keywords..." defaultValue="" />
                                        </div>
                                        {/* listsearch-input-item */}
                                        <div className="cs-intputwrap">
                                            <i className="fa-light fa-location-dot"></i>
                                            <input type="text" placeholder="Location..." defaultValue="" />
                                        </div>
                                        {/* listsearch-input-item */}
                                        <div className="cs-intputwrap">
                                            <div className="price-range-wrap ">
                                                <label>Price Range</label>
                                                <div className="price-rage-item">
                                                    <input type="text" className="price-range-double irs-hidden-input" data-min="100" data-max="100000" name="price-range1" data-step="1" defaultValue="1" data-prefix="$" tabIndex="-1" readOnly />
                                                </div>
                                            </div>
                                        </div>
                                        {/* listsearch-input-item */}
                                        <button onClick={() => window.location.href = 'listing.html'} className="commentssubmit commentssubmit_fw">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* header-search-wrap end */}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
