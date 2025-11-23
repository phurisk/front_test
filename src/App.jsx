import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';

function App() {
  useEffect(() => {
    // Initialize footer height emulator
    const updateFooterHeight = () => {
      const footer = document.querySelector('.main-footer');
      const emulator = document.querySelector('.height-emulator');
      if (footer && emulator) {
        emulator.style.height = `${footer.offsetHeight}px`;
      }
    };

    // Run on mount and resize
    updateFooterHeight();
    window.addEventListener('resize', updateFooterHeight);

    // Observe footer resize
    const resizeObserver = new ResizeObserver(updateFooterHeight);
    const footer = document.querySelector('.main-footer');
    if (footer) resizeObserver.observe(footer);

    // Initialize template scripts if available
    if (window.initRenstate) {
      // Small delay to ensure DOM is fully ready
      setTimeout(() => {
        window.initRenstate();
        updateFooterHeight();
      }, 100);
    }

    return () => {
      window.removeEventListener('resize', updateFooterHeight);
      if (footer) resizeObserver.unobserve(footer);
    };
  }, []);

  return (
    <>
      {/* loader */}
      <div className="loader-wrap">
        <div className="loader-inner">
          <svg>
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur"></feGaussianBlur>
                <feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 -2" result="gooey"></feColorMatrix>
                <feComposite in="SourceGraphic" in2="gooey" operator="atop"></feComposite>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      {/* loader end */}

      <div id="main">
        <Header />
        <div className="wrapper">
          <Home />
          <Footer />
          <div className="height-emulator"></div>
        </div>
      </div>

      {/* wish-list-wrap */}
      <div className="wish-list-wrap">
        <div className="wish-list-close clwl_btn"><i className="fa-regular fa-xmark"></i></div>
        <div className="wish-list_header">
          <div className="wish-list-title">Your Wishlist <span>3</span></div>
        </div>
        <div className="wish-list-container">
          {/* wish-list-item */}
          <div className="wish-list-item fl-wrap">
            <div className="wish-list-img"><a href="listing-single.html"><img src="images/all/thumbnails/1.jpg" alt="" /></a></div>
            <div className="wish-list-descr">
              <h4><a href="listing-single.html">Urban House</a></h4>
              <div className="geodir-category-location fl-wrap"><a href="#"> 40 Journal Square , NJ, USA</a></div>
              <div className="wish-list-price"> $ 320,000</div>
              <div className="clear-wishlist tolt" data-microtip-position="left" data-tooltip="Remove Item"><i className="fa-regular fa-trash-can"></i></div>
            </div>
          </div>
          {/* wish-list-item end */}
          {/* wish-list-item */}
          <div className="wish-list-item fl-wrap">
            <div className="wish-list-img"><a href="listing-single.html"><img src="images/all/thumbnails/2.jpg" alt="" /></a></div>
            <div className="wish-list-descr">
              <h4><a href="listing-single.html">Luxury Family Home</a></h4>
              <div className="geodir-category-location fl-wrap"><a href="#"> 34-42 Montgomery St , NY, USA</a></div>
              <div className="wish-list-price"> $ 1500 - per month</div>
              <div className="clear-wishlist tolt" data-microtip-position="left" data-tooltip="Remove Item"><i className="fa-regular fa-trash-can"></i></div>
            </div>
          </div>
          {/* wish-list-item end */}
          {/* wish-list-item */}
          <div className="wish-list-item fl-wrap">
            <div className="wish-list-img"><a href="listing-single.html"><img src="images/all/thumbnails/3.jpg" alt="" /></a></div>
            <div className="wish-list-descr">
              <h4><a href="listing-single.html">Modern Apartment</a></h4>
              <div className="geodir-category-location fl-wrap"><a href="#"> 75 Prince St, NY, USA</a></div>
              <div className="wish-list-price"> $ 1,600,000</div>
              <div className="clear-wishlist tolt" data-microtip-position="left" data-tooltip="Remove Item"><i className="fa-regular fa-trash-can"></i></div>
            </div>
          </div>
          {/* wish-list-item end */}
        </div>
        <div className="wish-list-footer">
          <button className="commentssubmit commentssubmit_fw"> Clear Wishlist</button>
        </div>
      </div>
      <div className="body-overlay fs-wrapper wishlist-wrap-overlay clwl_btn"></div>
      <div className="mob-nav-overlay fs-wrapper"></div>
      {/* wish-list-wrap end */}

      {/* register form */}
      <div className="main-register-container">
        <div className="main-register_box">
          <div className="main-register-holder">
            <div className="main-register-wrap ">
              <div className="main-register_bg">
                <div className="mr_title">
                  <h4>Welcome to Rentstate</h4>
                  <h5>Premium Real Estate Agency</h5>
                </div>
                <div className="main-register_contacts-wrap">
                  <h4>Have a questions?</h4>
                  <a href="contacts.html"> Get in Touch</a>
                  <div className="svg-corner svg-corner_white" style={{ bottom: 0, left: '-39px' }}></div>
                  <div className="svg-corner svg-corner_white" style={{ bottom: 0, right: '-39px', transform: 'rotate(90deg)' }}></div>
                </div>
                <div className="main-register_bg-dec"></div>
              </div>
              <div className="main-register tabs-act fl-wrap">
                <ul className="tabs-menu">
                  <li className="current"><a href="#tab-1"><i className="fa-regular fa-sign-in-alt"></i> Login</a></li>
                  <li><a href="#tab-2"> <i className="fa-regular fa-user-plus"></i> Register</a></li>
                </ul>
                <div className="close-modal close-reg-form"><i className="fa-regular fa-xmark"></i></div>
                {/* tabs */}
                <div id="tabs-container">
                  <div className="tab">
                    {/* tab */}
                    <div id="tab-1" className="tab-content first-tab">
                      <div className="custom-form">
                        <form method="post" name="registerform">
                          {/* listsearch-input-item */}
                          <div className="cs-intputwrap">
                            <i className="fa-light fa-user"></i>
                            <input type="text" placeholder="Username or Email Address" defaultValue="" />
                          </div>
                          {/* listsearch-input-item */}
                          <div className="cs-intputwrap pass-input-wrap">
                            <i className="fa-light fa-lock"></i>
                            <input type="password" className="pass-input" placeholder="Current Password" defaultValue="" />
                            <div className="view-pass"></div>
                          </div>
                          {/* listsearch-input-item */}
                          <div className="filter-tags">
                            <input id="check-a" type="checkbox" name="check" defaultChecked />
                            <label htmlFor="check-a">Remember me</label>
                          </div>
                          <div className="lost_password">
                            <a href="#">Lost Your Password?</a>
                          </div>
                          <div className="clearfix"></div>
                          <button type="submit" className="commentssubmit"> Log In </button>
                        </form>
                      </div>
                    </div>
                    {/* tab end */}
                    {/* tab */}
                    <div className="tab">
                      <div id="tab-2" className="tab-content">
                        <div className="custom-form">
                          <form method="post" name="registerform" className="main-register-form" id="main-register-form2">
                            {/* listsearch-input-item */}
                            <div className="cs-intputwrap">
                              <i className="fa-light fa-user"></i>
                              <input type="text" placeholder="Full Name" defaultValue="" />
                            </div>
                            {/* listsearch-input-item */}
                            <div className="cs-intputwrap">
                              <i className="fa-light fa-envelope"></i>
                              <input type="text" placeholder="Email Address" defaultValue="" />
                            </div>
                            {/* listsearch-input-item */}
                            <div className="cs-intputwrap pass-input-wrap">
                              <i className="fa-light fa-lock"></i>
                              <input type="password" className="pass-input" placeholder="Password" defaultValue="" />
                              <div className="view-pass"></div>
                            </div>
                            {/* listsearch-input-item */}
                            <button type="submit" className="commentssubmit">Register</button>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* tab end */}
                  </div>
                  {/* tabs end */}
                  <div className="log-separator fl-wrap"><span>or</span></div>
                  <div className="soc-log fl-wrap">
                    <p>For faster login or register use your social account.</p>
                    <a href="#" className="facebook-log"><i className="fa-brands fa-facebook-f"></i>Connect with Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="body-overlay fs-wrapper close-reg-form"></div>
      </div>
      {/* register form end */}
    </>
  );
}

export default App;
