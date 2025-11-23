import React from 'react';

const Home = () => {
    return (
        <div className="content">
            {/* section */}
            <div className="section hero-section home-hero-section">
                <div className="hero-section-wrap">
                    <div className="hero-section-wrap-item">
                        <div className="container">
                            <div className="hero-section-container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="hero-slider-wrapper">
                                            <div className="hero-slider">
                                                <div className="swiper-container">
                                                    <div className="swiper-wrapper">
                                                        {/* swiper-slide */}
                                                        <div className="swiper-slide">
                                                            <div className="hero-carousel_item" data-imbg="images/bg/12.jpg">
                                                                <div className="hero-section-title hs_align-title">
                                                                    <div className="hero-section-title_sub">Welcome to the Renstate Agency</div>
                                                                    <h2>Find The House of Your Dream Using <br /> Our RealEstate Platform</h2>
                                                                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet fermentum sem.</h5>
                                                                    <a href="#sec1" className="commentssubmit csb_color custom-scroll-link" style={{ marginTop: '40px' }}>Start Explore</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* swiper-slide end */}
                                                        {/* swiper-slide */}
                                                        <div className="swiper-slide">
                                                            <div className="hero-carousel_item" data-imbg="images/bg/12.jpg">
                                                                <div className="hero-section-title hs_align-title">
                                                                    <div className="hero-section-title_sub">View Our Hot Offer</div>
                                                                    <h2><a href="listing-single.html">House in Financial District</a></h2>
                                                                    <div className="geodir-category-location">
                                                                        <a href="#4" className="map-item single-map-item"><i className="fas fa-map-marker-alt"></i> 70 Bright St, Jersey City, NJ USA</a>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvina</p>
                                                                    <a href="listing-single.html" className="commentssubmit csb_color" style={{ marginTop: '40px' }}>View Details</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* swiper-slide end */}
                                                        {/* swiper-slide */}
                                                        <div className="swiper-slide">
                                                            <div className="hero-carousel_item" data-imbg="images/bg/12.jpg">
                                                                <div className="hero-section-title hs_align-title">
                                                                    <div className="hero-section-title_sub">Few Words About Our Agency</div>
                                                                    <h2>We are International <br /> RealEstate Agency</h2>
                                                                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet fermentum sem.</h5>
                                                                    <a href="about.html" className="commentssubmit csb_color custom-scroll-link" style={{ marginTop: '40px' }}>Read more about us</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* swiper-slide end */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* hero-carousel-wrapper */}
                                    </div>
                                    <div className="col-lg-4 mob-hid">
                                        {/* list-searh-input-wrap */}
                                        <div className="list-searh-input-wrap box_list-searh-input-wrap lws_column hero_home_search lsiw_dec">
                                            <div className="list-searh-input-wrap-title_wrap">
                                                <div className="list-searh-input-wrap-title"><i className="far fa-sliders-h"></i><span>Use Quick Search</span></div>
                                                <div className="list-searh-input-radio_wrap">
                                                    <div className="header-search-radio">
                                                        <input className="hidden radio-label" type="radio" name="accept-offers2" id="sale-button2" defaultChecked />
                                                        <label className="button-label" htmlFor="sale-button2">Sale</label>
                                                        <input className="hidden radio-label" type="radio" name="accept-offers2" id="rent-button2" />
                                                        <label className="button-label" htmlFor="rent-button2">Rent</label>
                                                        <input className="hidden radio-label" type="radio" name="accept-offers2" id="comm-button2" />
                                                        <label className="button-label" htmlFor="comm-button2">Commercial</label>
                                                    </div>
                                                    <div className="reset-form reset-btn tolt" data-microtip-position="bottom" data-tooltip="Reset Filters"><i className="fa-solid fa-arrows-rotate"></i></div>
                                                </div>
                                            </div>
                                            <div className="custom-form">
                                                <div className="row">
                                                    {/* listsearch-input-item */}
                                                    <div className="col-lg-12">
                                                        <div className="cs-intputwrap">
                                                            <i className="fa-light fa-location-dot"></i>
                                                            <input type="text" placeholder="Address , Street , State..." defaultValue="" />
                                                        </div>
                                                    </div>
                                                    {/* listsearch-input-item */}
                                                    <div className="col-lg-12">
                                                        <div className="cs-intputwrap">
                                                            <i className="fa-light fa-layer-group"></i>
                                                            <select data-placeholder="Categories" className="chosen-select on-radius no-search-select">
                                                                <option>All Categories</option>
                                                                <option>House</option>
                                                                <option>Apartment</option>
                                                                <option>Hotel</option>
                                                                <option>Villa</option>
                                                                <option>Office</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    {/* listsearch-input-item */}
                                                    <div className="col-lg-12">
                                                        <div className="cs-intputwrap">
                                                            <div className="price-range-wrap">
                                                                <label>Price Range</label>
                                                                <div className="price-rage-item">
                                                                    <input type="text" className="price-range-double irs-hidden-input" data-min="100" data-max="100000" name="price-range1" data-step="1" defaultValue="1" data-prefix="$" tabIndex="-1" readOnly />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* listsearch-input-item */}
                                                </div>
                                                <button onClick={() => window.location.href = 'listing.html'} className="commentssubmit commentssubmit_fw">Search</button>
                                            </div>
                                        </div>
                                        {/* list-searh-input-wrap end */}
                                        <div className="hero-notifer">Need more search options? <a href="listing.html">Advanced Search</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-hero-controls">
                                <div className="hs-scroll-down-wrap">
                                    <div className="scroll-down-item">
                                        <div className="mousey">
                                            <div className="scroller"></div>
                                        </div>
                                        <span>Scroll Down To Discover</span>
                                    </div>
                                    <div className="svg-corner svg-corner_white" style={{ bottom: 0, right: '-39px', transform: 'rotate(90deg)' }}></div>
                                    <div className="svg-corner svg-corner_white" style={{ bottom: 0, left: '-39px' }}></div>
                                </div>
                                <div className="hs-slider-controls">
                                    <div className="hs-button-prev hs-slider-button"><i className="fa-solid fa-chevron-left"></i></div>
                                    <div className="hs-button-next hs-slider-button"><i className="fa-solid fa-chevron-right"></i></div>
                                </div>
                                <div className="sc-controls shc_controls2 shc_controls3 slideshow-container-pag-init"></div>
                            </div>
                        </div>
                        <div className="bg-wrap bg-hero bg-parallax-wrap-gradien fs-wrapper">
                            <div className="hero-blur-container fs-wrapper">
                                <div className="hero-blur-container_item fs-wrapper">
                                    <div className="bg" data-bg="images/bg/8.jpg" style={{ backgroundImage: 'url("images/bg/8.jpg")' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* section-end */}

            {/* container */}
            <div className="container">
                {/* breadcrumbs-list */}
                <div className="breadcrumbs-list bl_flat">
                    <a href="#">Home</a> <span>Home Slider</span>
                    <div className="breadcrumbs-list_dec"><i className="fa-thin fa-arrow-up"></i></div>
                </div>
                {/* breadcrumbs-list end */}

                {/* main-content */}
                <div className="main-content ms_vir_height" id="sec1">
                    {/* boxed-container */}
                    <div className="boxed-container">
                        <div className="listing-grid_heroheader">
                            <h3>Browse Hot Properties</h3>
                            <div className="gallery-filters">
                                <a href="#" className="gallery-filter gallery-filter-active" data-filter="*"> All Properties</a>
                                <a href="#" className="gallery-filter " data-filter=".cat-sale">Sale</a>
                                <a href="#" className="gallery-filter" data-filter=".cat-rent">Rent</a>
                                <a href="#" className="gallery-filter" data-filter=".cat-comercial">Comercial</a>
                            </div>
                        </div>
                        {/* listing-grid */}
                        <div className="listing-grid gisp">
                            {/* listing-grid-item 1 */}
                            <div className="listing-grid-item">
                                <div className="listing-item cat-comercial cat-sale">
                                    <div className="geodir-category-listing">
                                        <div className="geodir-category-img">
                                            <a href="listing-single.html" className="geodir-category-img_item">
                                                <div className="bg" data-bg="images/all/1.jpg" style={{ backgroundImage: 'url("images/all/1.jpg")' }}></div>
                                                <div className="overlay"></div>
                                            </a>
                                            <div className="geodir-category-location">
                                                <a href="#4" className="map-item tolt single-map-item" data-newlatitude="40.72956781" data-newlongitude="-73.99726866" data-microtip-position="top" data-tooltip="On the map"><i className="fas fa-map-marker-alt"></i> 40 Journal Square , NJ, USA</a>
                                            </div>
                                            <ul className="list-single-opt_header_cat">
                                                <li><a href="#" className="cat-opt">Sale</a></li>
                                                <li><a href="#" className="cat-opt">House</a></li>
                                            </ul>
                                            <a href="#" className="geodir_save-btn tolt" data-microtip-position="left" data-tooltip="Save"><span><i className="fal fa-heart"></i></span></a>
                                            <div className="geodir-category-listing_media-list">
                                                <span><i className="fas fa-camera"></i> 13</span>
                                            </div>
                                        </div>
                                        <div className="geodir-category-content">
                                            <h3><a href="listing-single.html">Gorgeous House For Sale</a></h3>
                                            <div className="geodir-category-content_price">$ 500,000</div>
                                            <p> Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a consectetur nulla.</p>
                                            <div className="geodir-category-content-details">
                                                <ul>
                                                    <li><i className="fa-light fa-bed"></i><span>2</span></li>
                                                    <li><i className="fa-light fa-bath"></i><span>2</span></li>
                                                    <li><i className="fa-light fa-chart-area"></i><span>150 ft2</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="geodir-category-footer">
                                            <a href="agent-single.html" className="gcf-company"><img src="images/avatar/2.jpg" alt="" /><span>By Niko Furingee </span></a>
                                            <a href="listing-single.html" className="gid_link"><span>View Details</span> <i className="fa-solid fa-caret-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* listing-grid-item 2 */}
                            <div className="listing-grid-item cat-sale cat-rent">
                                <div className="listing-item">
                                    <div className="geodir-category-listing">
                                        <div className="geodir-category-img">
                                            <a href="listing-single.html" className="geodir-category-img_item">
                                                <div className="bg" data-bg="images/all/8.jpg" style={{ backgroundImage: 'url("images/all/8.jpg")' }}></div>
                                                <div className="overlay"></div>
                                            </a>
                                            <div className="geodir-category-location">
                                                <a href="#4" className="map-item tolt single-map-item" data-newlatitude="40.88496706" data-newlongitude="-73.88191222" data-microtip-position="top" data-tooltip="On the map"><i className="fas fa-map-marker-alt"></i> 70 Bright St, Jersey City, NJ USA</a>
                                            </div>
                                            <ul className="list-single-opt_header_cat">
                                                <li><a href="#" className="cat-opt">Rent</a></li>
                                                <li><a href="#" className="cat-opt">Apartment</a></li>
                                            </ul>
                                            <a href="#" className="geodir_save-btn tolt" data-microtip-position="left" data-tooltip="Save"><span><i className="fal fa-heart"></i></span></a>
                                            <div className="geodir-category-listing_media-list">
                                                <span><i className="fas fa-camera"></i> 5</span>
                                            </div>
                                        </div>
                                        <div className="geodir-category-content">
                                            <h3><a href="listing-single.html">Kayak Point House</a></h3>
                                            <div className="geodir-category-content_price">$ 1500 / per month</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.</p>
                                            <div className="geodir-category-content-details">
                                                <ul>
                                                    <li><i className="fa-light fa-bed"></i><span>1</span></li>
                                                    <li><i className="fa-light fa-bath"></i><span>1</span></li>
                                                    <li><i className="fa-light fa-chart-area"></i><span>70 ft2</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="geodir-category-footer">
                                            <a href="agent-single.html" className="gcf-company"><img src="images/avatar/5.jpg" alt="" /><span>By Andy Sposty</span></a>
                                            <a href="listing-single.html" className="gid_link"><span>View Details</span> <i className="fa-solid fa-caret-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* listing-grid-item 3 */}
                            <div className="listing-grid-item cat-sale">
                                <div className="listing-item">
                                    <div className="geodir-category-listing">
                                        <div className="geodir-category-img">
                                            <a href="listing-single.html" className="geodir-category-img_item">
                                                <div className="bg" data-bg="images/all/4.jpg" style={{ backgroundImage: 'url("images/all/4.jpg")' }}></div>
                                                <div className="overlay"></div>
                                            </a>
                                            <div className="geodir-category-location">
                                                <a href="#4" className="map-item tolt single-map-item" data-newlatitude="40.94982541" data-newlongitude="-73.84357452" data-microtip-position="top" data-tooltip="On the map"><i className="fas fa-map-marker-alt"></i> W 85th St, New York, USA </a>
                                            </div>
                                            <ul className="list-single-opt_header_cat">
                                                <li><a href="#" className="cat-opt">Sale</a></li>
                                                <li><a href="#" className="cat-opt">Apartment</a></li>
                                            </ul>
                                            <a href="#" className="geodir_save-btn tolt" data-microtip-position="left" data-tooltip="Save"><span><i className="fal fa-heart"></i></span></a>
                                            <div className="geodir-category-listing_media-list">
                                                <span><i className="fas fa-camera"></i> 7</span>
                                            </div>
                                        </div>
                                        <div className="geodir-category-content">
                                            <h3><a href="listing-single.html">Luxury Family Home</a></h3>
                                            <div className="geodir-category-content_price">$ 450,000</div>
                                            <p> Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a consectetur nulla.</p>
                                            <div className="geodir-category-content-details">
                                                <ul>
                                                    <li><i className="fa-light fa-bed"></i><span>2</span></li>
                                                    <li><i className="fa-light fa-bath"></i><span>1</span></li>
                                                    <li><i className="fa-light fa-chart-area"></i><span>150 ft2</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="geodir-category-footer">
                                            <a href="agent-single.html" className="gcf-company"><img src="images/avatar/6.jpg" alt="" /><span>By Anna Lips</span></a>
                                            <a href="listing-single.html" className="gid_link"><span>View Details</span> <i className="fa-solid fa-caret-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* listing-grid-item 4 */}
                            <div className="listing-grid-item cat-rent">
                                <div className="listing-item">
                                    <div className="geodir-category-listing">
                                        <div className="geodir-category-img">
                                            <a href="listing-single.html" className="geodir-category-img_item">
                                                <div className="bg" data-bg="images/all/11.jpg" style={{ backgroundImage: 'url("images/all/11.jpg")' }}></div>
                                                <div className="overlay"></div>
                                            </a>
                                            <div className="geodir-category-location">
                                                <a href="#4" className="map-item tolt single-map-item" data-newlatitude="40.72228267" data-newlongitude="-73.99246214" data-microtip-position="top" data-tooltip="On the map"><i className="fas fa-map-marker-alt"></i> 75 Prince St, NY, USA</a>
                                            </div>
                                            <ul className="list-single-opt_header_cat">
                                                <li><a href="#" className="cat-opt">Rent</a></li>
                                                <li><a href="#" className="cat-opt">House</a></li>
                                            </ul>
                                            <a href="#" className="geodir_save-btn tolt" data-microtip-position="left" data-tooltip="Save"><span><i className="fal fa-heart"></i></span></a>
                                            <div className="geodir-category-listing_media-list">
                                                <span><i className="fas fa-camera"></i> 11</span>
                                            </div>
                                        </div>
                                        <div className="geodir-category-content">
                                            <h3><a href="listing-single.html">Urban House for Rent</a></h3>
                                            <div className="geodir-category-content_price">$ 130,000</div>
                                            <p> Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a consectetur nulla.</p>
                                            <div className="geodir-category-content-details">
                                                <ul>
                                                    <li><i className="fa-light fa-bed"></i><span>2</span></li>
                                                    <li><i className="fa-light fa-bath"></i><span>1</span></li>
                                                    <li><i className="fa-light fa-chart-area"></i><span>110 ft2</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="geodir-category-footer">
                                            <a href="agent-single.html" className="gcf-company"><img src="images/avatar/3.jpg" alt="" /><span>By Viki Morintagee </span></a>
                                            <a href="listing-single.html" className="gid_link"><span>View Details</span> <i className="fa-solid fa-caret-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* listing-grid-item 5 */}
                            <div className="listing-grid-item cat-rent cat-comercial">
                                <div className="listing-item">
                                    <div className="geodir-category-listing">
                                        <div className="geodir-category-img">
                                            <a href="listing-single.html" className="geodir-category-img_item">
                                                <div className="bg" data-bg="images/all/9.jpg" style={{ backgroundImage: 'url("images/all/9.jpg")' }}></div>
                                                <div className="overlay"></div>
                                            </a>
                                            <div className="geodir-category-location">
                                                <a href="#4" className="map-item tolt single-map-item" data-newlatitude="40.88496706" data-newlongitude="-73.88191222" data-microtip-position="top" data-tooltip="On the map"><i className="fas fa-map-marker-alt"></i> 34-42 Montgomery St , NY, USA</a>
                                            </div>
                                            <ul className="list-single-opt_header_cat">
                                                <li><a href="#" className="cat-opt">Rent</a></li>
                                                <li><a href="#" className="cat-opt">Residential</a></li>
                                            </ul>
                                            <a href="#" className="geodir_save-btn tolt" data-microtip-position="left" data-tooltip="Save"><span><i className="fal fa-heart"></i></span></a>
                                            <div className="geodir-category-listing_media-list">
                                                <span><i className="fas fa-camera"></i> 8</span>
                                            </div>
                                        </div>
                                        <div className="geodir-category-content">
                                            <h3><a href="listing-single.html">Family House for Rent</a></h3>
                                            <div className="geodir-category-content_price">$ 1500 / per month</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.</p>
                                            <div className="geodir-category-content-details">
                                                <ul>
                                                    <li><i className="fa-light fa-bed"></i><span>2</span></li>
                                                    <li><i className="fa-light fa-bath"></i><span>2</span></li>
                                                    <li><i className="fa-light fa-chart-area"></i><span>95 ft2</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="geodir-category-footer">
                                            <a href="agent-single.html" className="gcf-company"><img src="images/avatar/4.jpg" alt="" /><span>By Liza Archer</span></a>
                                            <a href="listing-single.html" className="gid_link"><span>View Details</span> <i className="fa-solid fa-caret-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* listing-grid-item 6 */}
                            <div className="listing-grid-item cat-sale cat-comercial">
                                <div className="listing-item">
                                    <div className="geodir-category-listing">
                                        <div className="geodir-category-img">
                                            <a href="listing-single.html" className="geodir-category-img_item">
                                                <div className="bg" data-bg="images/all/16.jpg" style={{ backgroundImage: 'url("images/all/16.jpg")' }}></div>
                                                <div className="overlay"></div>
                                            </a>
                                            <div className="geodir-category-location">
                                                <a href="#4" className="map-item tolt single-map-item" data-newlatitude="40.76221766" data-newlongitude="-73.96511769" data-microtip-position="top" data-tooltip="On the map"><i className="fas fa-map-marker-alt"></i> 75 Prince St, NY, USA </a>
                                            </div>
                                            <ul className="list-single-opt_header_cat">
                                                <li><a href="#" className="cat-opt">Sale</a></li>
                                                <li><a href="#" className="cat-opt">Comercial</a></li>
                                            </ul>
                                            <a href="#" className="geodir_save-btn tolt" data-microtip-position="left" data-tooltip="Save"><span><i className="fal fa-heart"></i></span></a>
                                            <div className="geodir-category-listing_media-list">
                                                <span><i className="fas fa-camera"></i> 5</span>
                                            </div>
                                        </div>
                                        <div className="geodir-category-content">
                                            <h3><a href="listing-single.html">Contemporary Apartment</a></h3>
                                            <div className="geodir-category-content_price">$ 850,000</div>
                                            <p> Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a consectetur nulla.</p>
                                            <div className="geodir-category-content-details">
                                                <ul>
                                                    <li><i className="fa-light fa-bed"></i><span>4</span></li>
                                                    <li><i className="fa-light fa-bath"></i><span>2</span></li>
                                                    <li><i className="fa-light fa-chart-area"></i><span>450 ft2</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="geodir-category-footer">
                                            <a href="agent-single.html" className="gcf-company"><img src="images/avatar/1.jpg" alt="" /><span>By Judi Colinns</span></a>
                                            <a href="listing-single.html" className="gid_link"><span>View Details</span> <i className="fa-solid fa-caret-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* listing-grid-item end */}
                        </div>
                        {/* listing-grid end */}
                        <a href="listing.html" className="commentssubmit csb-no-align">View All Properties <i className="fa-solid fa-caret-right"></i></a>
                    </div>
                    {/* boxed-container end */}
                </div>
                {/* main-content end */}
            </div>
            {/* container end */}

            {/* City Carousel and other sections... I'll omit them for brevity in this turn but I should include them for 100% */}
            {/* I'll add the rest of the sections in the next tool call or just add them now if I can fit them. */}
            {/* I'll try to fit the City Carousel */}

            <div className="dark-bg half-carousel-container">
                <div className="city-carousel-wrap">
                    <div className="half-carousel-title-wrap">
                        <div className="half-carousel-title">
                            <h2>Explore Best Cities</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="listing.html" className="commentssubmit" style={{ marginTop: '20px' }}>View All Cities<i className="fa-solid fa-caret-right"></i></a>
                        </div>
                        <div className="abs_bg"><img src="images/map/map.png" alt="" /></div>
                        <div className="city-carousel_controls">
                            <div className="csc-button csc-button-prev"><i className="fas fa-chevron-left"></i></div>
                            <div className="csc-button csc-button-next"><i className="fas fa-chevron-right"></i></div>
                        </div>
                    </div>
                    <div className="city-carousel">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {/* swiper-slide */}
                                <div className="swiper-slide">
                                    <div className="city-carousel-item">
                                        <div className="bg-wrap fs-wrapper">
                                            <div className="bg" data-bg="images/bg/long/1.jpg" style={{ backgroundImage: 'url("images/bg/long/1.jpg")' }}></div>
                                            <div className="overlay"></div>
                                        </div>
                                        <div className="city-carousel-content">
                                            <div className="hc-counter">26 Properties</div>
                                            <h3><a href="listing.html">Explore NewYork</a></h3>
                                            <p>Constant care and attention to the patients makes good record</p>
                                        </div>
                                    </div>
                                </div>
                                {/* swiper-slide */}
                                <div className="swiper-slide">
                                    <div className="city-carousel-item">
                                        <div className="bg-wrap fs-wrapper">
                                            <div className="bg" data-bg="images/bg/long/2.jpg" style={{ backgroundImage: 'url("images/bg/long/2.jpg")' }}></div>
                                            <div className="overlay"></div>
                                        </div>
                                        <div className="city-carousel-content">
                                            <div className="hc-counter">15 Properties</div>
                                            <h3><a href="listing.html">Awesome Rome</a></h3>
                                            <p>Constant care and attention to the patients makes good record</p>
                                        </div>
                                    </div>
                                </div>
                                {/* swiper-slide */}
                                <div className="swiper-slide">
                                    <div className="city-carousel-item">
                                        <div className="bg-wrap fs-wrapper">
                                            <div className="bg" data-bg="images/bg/long/4.jpg" style={{ backgroundImage: 'url("images/bg/long/4.jpg")' }}></div>
                                            <div className="overlay"></div>
                                        </div>
                                        <div className="city-carousel-content">
                                            <div className="hc-counter">78 Properties</div>
                                            <h3><a href="listing.html">Elite Houses in Dubai</a></h3>
                                            <p>Constant care and attention to the patients makes good record</p>
                                        </div>
                                    </div>
                                </div>
                                {/* swiper-slide */}
                                <div className="swiper-slide">
                                    <div className="city-carousel-item">
                                        <div className="bg-wrap fs-wrapper">
                                            <div className="bg" data-bg="images/bg/long/3.jpg" style={{ backgroundImage: 'url("images/bg/long/3.jpg")' }}></div>
                                            <div className="overlay"></div>
                                        </div>
                                        <div className="city-carousel-content">
                                            <div className="hc-counter">32 Properties</div>
                                            <h3><a href="listing.html">Find Dream in Paris</a></h3>
                                            <p>Constant care and attention to the patients makes good record</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc-controls city-pag-init"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="main-content ms_vir_height" >
                <div className="container">
                    <div className="boxed-container">
                        <div className="boxed-content">
                            <div className="about-wrap boxed-content-item">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="about-title ab-hero">
                                            <h2>Why Choose Our Properties </h2>
                                            <h4>Check video presentation to find out more about us .</h4>
                                        </div>
                                        <div className="services-opions">
                                            <ul>
                                                <li>
                                                    <i className="fal fa-headset"></i>
                                                    <h4>24 Hours Support </h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </li>
                                                <li>
                                                    <i className="fal fa-users-cog"></i>
                                                    <h4>User Admin Panel</h4>
                                                    <p>Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Curabitur convallis fringilla diam sed aliquam. </p>
                                                </li>
                                                <li>
                                                    <i className="fal fa-phone-laptop"></i>
                                                    <h4>Mobile Friendly</h4>
                                                    <p>Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="about-img">
                                            <img src="images/all/15.jpg" className="respimg" alt="" />
                                            <div className="about-img-hotifer">
                                                <p>Your website is fully responsive so visitors can view your content from their choice of device.</p>
                                                <h4>Mark Antony</h4>
                                                <h5>Renstate CEO</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* clients-carousel-wrap */}
                        <div className="clients-carousel-wrap">
                            <div className="clients-carousel-title">Our Trusted Partners </div>
                            <div className="clients-carousel">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <a href="#" className="client-item"><img src="images/clients/1.png" alt="" /></a>
                                        </div>
                                        <div className="swiper-slide">
                                            <a href="#" className="client-item"><img src="images/clients/1.png" alt="" /></a>
                                        </div>
                                        <div className="swiper-slide">
                                            <a href="#" className="client-item"><img src="images/clients/1.png" alt="" /></a>
                                        </div>
                                        <div className="swiper-slide">
                                            <a href="#" className="client-item"><img src="images/clients/1.png" alt="" /></a>
                                        </div>
                                        <div className="swiper-slide">
                                            <a href="#" className="client-item"><img src="images/clients/1.png" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="cc-button cc-button-next"><i className="fal fa-angle-right"></i></div>
                                <div className="cc-button cc-button-prev"><i className="fal fa-angle-left"></i></div>
                            </div>
                        </div>
                        {/* clients-carousel-wrap end */}
                    </div>
                </div>

                {/* Parallax Section */}
                <div className="parallax-section-wrap">
                    <div className="bg-wrap fs-wrapper" data-scrollax-parent="true">
                        <div className="bg" data-bg="images/bg/3.jpg" data-scrollax="properties: { translateY: '20%' }" style={{ backgroundImage: 'url("images/bg/3.jpg")' }}></div>
                        <div className="overlay"></div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="parallax-section-content">
                                    <h3>How Our Platform Works</h3>
                                    <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonu mmy nibh euismod tincidunt ut laoreet dolore magna aliquam erat</p>
                                    <a href="add-listing.html" className="commentssubmit csb_color" style={{ marginTop: '20px' }}>Add Your Propperty</a>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="process-wrap">
                                    <ul>
                                        <li>
                                            <div className="process-item">
                                                <span className="process-count">01 . </span>
                                                <div className="process-item-icon"><i className="fa-light fa-house-building"></i></div>
                                                <h4> Find Interesting Place</h4>
                                                <p>Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis eros sollicitudin turpis.</p>
                                            </div>
                                            <span className="pr-dec"></span>
                                        </li>
                                        <li>
                                            <div className="process-item">
                                                <span className="process-count">02 .</span>
                                                <div className="process-item-icon"><i className="fa-light fa-mailbox"></i></div>
                                                <h4> Contact a Few Owners</h4>
                                                <p>Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin feugiat pharetra consectetur.</p>
                                            </div>
                                            <span className="pr-dec"></span>
                                        </li>
                                        <li>
                                            <div className="process-item">
                                                <span className="process-count">03 .</span>
                                                <div className="process-item-icon"><i className="fa-light fa-layer-plus"></i></div>
                                                <h4> Make a Listing</h4>
                                                <p>Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla, id vestibulum metus nullam viverra porta.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="content-section">
                    <div className="container">
                        <div className="section-title">
                            <h4>What said about us</h4>
                            <h2>Testimonials and Clients</h2>
                        </div>
                    </div>
                    <div className="testimonilas-carousel-wrap">
                        <div className="testimonilas-carousel">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testi-item">
                                            <div className="testimonilas-text">
                                                <div className="testi-header">
                                                    <div className="testi-avatar"><img src="images/avatar/3.jpg" alt="" /></div>
                                                    <h3>Centa Simpson</h3>
                                                </div>
                                                <div className="testimonilas-text-item">
                                                    <div className="testimonilas-text-item-wrap">
                                                        <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonu mmy nibh euismod tincidunt ut . "</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="testi-footer">
                                                <a href="#" className="testi-link" target="_blank">Via X-Twitter</a>
                                                <span className="testi-number">01.</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Add more testimonials if needed */}
                                </div>
                            </div>
                            <div className="tc-button tc-button-next"><i className="fas fa-caret-right"></i></div>
                            <div className="tc-button tc-button-prev"><i className="fas fa-caret-left"></i></div>
                        </div>
                        <div className="fwc-controls_wrap">
                            <div className="solid-pagination_btns tcs-pagination_init"></div>
                        </div>
                    </div>
                </div>

                {/* API Section */}
                <div className="container">
                    <div className="api-wrap">
                        <div className="api-container">
                            <div className="api-img">
                                <img src="images/api.png" alt="" className="respimg" />
                            </div>
                            <div className="api-text">
                                <h3>Our App Available Now</h3>
                                <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonu mmy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                                <div className="api-text-links">
                                    <a href="#"><span> On Apple Store</span><i className="fa-brands fa-apple"></i></a>
                                    <a href="#"><span> On Google PLay</span><i className="fa-brands fa-google-play"></i></a>
                                </div>
                            </div>
                            <div className="api-wrap-bg" data-run="2">
                                <div className="api-wrap-bg-container">
                                    <span className="api-bg-pin"></span><span className="api-bg-pin api-bg-pin-vis"></span>
                                    <div className="abs_bg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="to_top-btn-wrap">
                        <div className="to-top to-top_btn"><span>Back to top</span> <i className="fa-solid fa-arrow-up"></i></div>
                        <div className="svg-corner svg-corner_white" style={{ top: 0, left: '-40px', transform: 'rotate(-90deg)' }}></div>
                        <div className="svg-corner svg-corner_white" style={{ top: 0, right: '-40px', transform: 'rotate(-180deg)' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
