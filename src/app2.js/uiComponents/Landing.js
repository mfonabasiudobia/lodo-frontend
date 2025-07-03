import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link, 
//    NavLink, useHistory, useLocation 
} from 'react-router-dom'
//import Swal from "sweetalert2";
import '../css/landing.css'
import { Collapse } from 'react-bootstrap';
//import Rightcontainer from "../Components/Rightcontainer";
import Downloadbutton from "../Components/Downloadbutton";
import Header from "../Components/Header";
const referralCommission = process.env.REACT_APP_REFERRAL_COMMISSION_PERCENTATAGE;

export default function Landing() {
    const beckendLocalApiUrl = process.env.REACT_APP_BACKEND_LOCAL_API;
    const beckendLiveApiUrl = process.env.REACT_APP_BACKEND_LIVE_API;
    const nodeMode = process.env.NODE_ENV;
    var baseUrl ;
    if (nodeMode === "development") {
        baseUrl = beckendLocalApiUrl;
    } else {
        baseUrl = beckendLiveApiUrl
    }
    const [open, setOpen] = useState(false);
    const [userAllData, setUserAllData] = useState();
    const [WebSitesettings, setWebsiteSettings] = useState("");
    const fetchData = async () => {
        const response = await fetch(baseUrl + "settings/data");
        const data = await response.json();
        return setWebsiteSettings(data);
    }

    const role = async () => {
        const access_token = localStorage.getItem("token")
        const headers = {
            Authorization: `Bearer ${access_token}`
        }
        await axios.get(baseUrl + `me`, { headers })
            .then((res) => {
                setUserAllData(res.data)
            })
            .catch(e => {
                if (e.response && e.response.status == 401) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('token');
                    //window.location.href = "/login";
                    //window.location.reload()
                    //history.push("/login")
                }
            })

    }

    useEffect(() => {
        let access_token = localStorage.getItem('token');
        access_token = localStorage.getItem('token');
        if (!access_token) {
            //window.location.reload()
        }
        role();
        fetchData();
    }, [])

    return (
        <>
            <Header user={userAllData} />
            <div className='leftContainer'>
                <div className='main-area' style={{ paddingTop: '60px' }}>

                <div className="collapseCard-container">
                    <div className="container-tds-gst bg-info py-2 text-center">
                      <h2 className="text-white fw-bold">NO TDS NO GST</h2>
                    </div>
                    <div className="mt-3 border border-black rounded-md p-1 d-flex align-items-center justify-content-between rounded">
                       <picture className="d-flex align-items-center justify-content-center">
                                <img height="70px" width="70px" className="p-2" src="/Images/LandingPage_img/youtube.png" alt="" />
                        <div>
                        <p className="fs-5 fw-bold m-0">VIDEO HELP</p>
                        <p className="m-0">How To Win Money With <strong className="fw-semibold">LUDO</strong></p>
                      </div>
                        </picture>
                      
                      <a href="#" className="text-green-600 font-medium px-2">Click Here</a>
                    </div>
                    <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
                      <span className="me-2">⚠️</span>
                      <div>Play At Your Own Risk</div>
                    </div>
                    <div className="alert alert-info d-flex align-items-center" role="alert">
                      <span className="me-2">ℹ️</span>
                      <div>बड़ा अमाउंट Add करने के लिए Support पर दिए गए नंबर पर Contact करें</div>
                    </div>
                    <div className="alert alert-warning d-flex align-items-start" role="alert">
                      <span className="me-2">⚠️</span>
                      <div>
                        किसी भी समस्या के लिए हमारे दिए गए Support Page Connect करें
                        <a href="#" className="text-decoration-underline text-primary">Click Here</a>
                      </div>
                    </div>




                    
                        {/* <div className="collapseCard">
                        <Link to={"/refer"} style={{ textDecoration: 'none' }}>
                            <div className="collapseCard-body" style={{ height: '64px', opacity: 1, transition: 'height 0.3s ease 0s, opacity 0.3s ease 0s' }}>
                                <div className="blink collapseCard-text text-dark"> <span className=" text-danger">  Refer & Earn {referralCommission}% Commission </span></div>
                            </div>
                        </Link>

                        <div className="collapseCard-header" style={{ left: '22px', transition: 'left 0.3s ease 0s' }}>
                            <picture>
                                <img height="10px" width="14px" src="/Images/LandingPage_img/global-rupeeIcon.png" alt="" />
                            </picture>
                            <div className="collapseCard-title ml-1 mt-1">Refer & Earn</div>
                        </div>
                    </div> */}
                    </div>
                    
                {/*<div className="gameCard pt-2 " >
                    <h5 className="d-none pt-2  text-danger d-block text-center">
                    ◉ बैंक सर्वर की वजह से डिपोजिट मै समस्या आ रही है जो अगले 24 से 48 घंटे मै सॉल्व हो जायेगी।
                    </h5>
                </div>
                
                <div className="gameCard pt-2 " >
                    
                    <h5 className="d-none pt-2  text-success d-block text-center">
                    <a className="text-success" href="https://api.whatsapp.com/send?phone=+918290429001&text=Hello">
                        ◉ किसी भी समस्या के लिए 8290429001 पर whatsapp मैसेज और कॉल करें।
                    </a>
                    </h5>
                    
                </div>*/}
                

                    <section className="games-section p-3">
                        {/* <div className="d-flex align-items-center games-section-title">Our Tournaments</div> */}
                        <div className="games-section-headline mt-2 mb-1">

                            <div className="games-window ">
                                
                                <div className="row g-4 p-2">

        {/* Ludo Classic Card */}
        <div className="col-6">
          <Link to="/Homepage/Ludo%20Classics" className="gameCard-container text-decoration-none position-relative d-block rounded-4 overflow-hidden shadow text-center">
            <span className="blink text-danger d-block text-start me-2 mt-2">◉ LIVE</span>

            <picture className="gameCard-image">
              <img src={process.env.PUBLIC_URL + '/Images/LandingPage_img/firstLudo.webp'} className="img-fluid rounded" alt="Ludo Classic" />
            </picture>

            <div className="gameCard-title mt-2 d-block">
              <span className="text-dark fw-bold">MANNUAL ROOM CODE</span>
              <p className="text-muted small">(LUDO CLASSIC)</p>
            </div>

            <div className="goverlay">
              <div className="text text-white">Coming Soon</div>
            </div>
          </Link>
        </div>

        {/* Ludo Popular Card */}
        <div className="col-6">
          <Link to="/Homepage/Ludo%20Popular" className="gameCard-container text-decoration-none position-relative d-block rounded-4 overflow-hidden shadow text-center">
            <span className="blink text-danger d-block text-start me-2 mt-2">◉ LIVE</span>

            <picture className="gameCard-image">
              <img src={process.env.PUBLIC_URL + '/Images/LandingPage_img/secondLudo.webp'} className="img-fluid rounded" alt="Ludo Popular" />
            </picture>

            <div className="gameCard-title mt-2 d-block">
              <span className="text-dark fw-bold">MANNUAL ROOM CODE</span>
              <p className="text-muted small">(LUDO POPULAR)</p>
            </div>

            <div className="goverlay">
              <div className="text text-white">Coming Soon</div>
            </div>
          </Link>
        </div>
        <div className="col-6">
          <Link to="/Homepage/Ludo%201%20Goti" className="gameCard-container text-decoration-none position-relative d-block rounded-4 overflow-hidden shadow text-center">
          <span className="blink text-danger d-block text-start me-2 mt-2">◉ LIVE</span>

          <picture className="gameCard-image">
          <img
           src={process.env.PUBLIC_URL + '/Images/LandingPage_img/thirdLudo.webp'}className="img-fluid rounded" alt="Snake Ladder"
           />
         </picture>

        <div className="gameCard-title mt-2 d-block">
         <span className="text-dark fw-bold">MANNUAL ROOM CODE</span>
         <p className="text-muted small">(SNAKE LADDER)</p>
        </div>

       <div className="goverlay">
        <div className="text text-white">Coming Soon</div>
       </div>
    </Link>
        </div>

      </div>

                                
                                    {/* <Link className="gameCard-container" to={`/Homepage/Ludo%20Classics`} >
                                        <span className="d-none blink text-danger d-block text-right">◉ LIVE</span>
                                        <picture className="gameCard-image">
                                            <img width="100%" src={process.env.PUBLIC_URL + '/Images/LandingPage_img/firstLudo.webp'} alt="" />

                                        </picture>
                                        <div className="gameCard-title">
                                            <span className="d-none blink text-success d-block text-right">◉ LUDO CLASSICS</span>

                                        </div>
                                        <div className="goverlay">
                                            <div className="text">Comming Soon</div>
                                        </div>

                                    </Link>
                               
                                    <Link className="gameCard-container" to={`/Homepage/Ludo%20Popular`}>
                                        <span className="d-none blink text-danger d-block text-right">◉ LIVE</span>
                                        <picture className="gameCard-image">
                                            <img width="100%" src={process.env.PUBLIC_URL + '/Images/LandingPage_img/secondLudo.webp'} alt="" />
                                        </picture>
                                        <div className="gameCard-title">
                                            <span className="d-none blink text-success  d-block text-right">◉ LUDO POPULAR</span>
                                        </div>
                                        <div className="goverlay">
                                            <div className="text">Comming Soon</div>
                                        </div>
                                    </Link> */}
                                    
                                    {/* <Link className="gameCard-container" to={`/Homepage/Ludo%201%20Goti`}>
                                        <span className="d-none blink text-danger d-block text-right">◉ LIVE</span>
                                        <picture className="gameCard-image">
                                            <img width="100%" src={process.env.PUBLIC_URL + '/Images/LandingPage_img/thirdLudo.webp'} alt="" />
                                        </picture>
                                        <div className="gameCard-title">
                                            <span className="d-none blink text-success  d-block text-right">◉SNAKE LADDER</span>
                                        </div>

                                        <div className="goverlay">
                                            <div className="text">Comming Soon</div>
                                        </div>
                                    </Link> */}
                                    
                                    {/* <Link className="gameCard-container" to={`/Homepage/Ludo%20Ulta`} >
                                        <span className="d-none blink text-danger d-block text-right">◉ LIVE</span>
                                        <picture className="gameCard-image">
                                            <img width="100%" src={process.env.PUBLIC_URL + '/Images/LandingPage_img/fourthLudo.webp'} alt="" />

                                        </picture>
                                        <div className="gameCard-title">Ludo Ulta</div>

                                        <div className="goverlay">
                                            <div className="text">Comming Soon</div>
                                        </div>

                                    </Link> */}

                            </div>
                        </div>
                    </section>
                    <section className="footer">
                        <div className="footer-divider" />
                        <a className="px-3 py-4 d-flex align-items-center" href="#!" style={{ textDecoration: 'none' }} onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>

                            <picture className="icon" >
                                <img src={baseUrl + WebSitesettings.Logo} width="56px" height="56px" alt="profile" style={{ width: "56px", height: "56px" }} />
                            </picture>
                            <span style={{ color: 'rgb(149, 149, 149)', fontSize: '1em', fontWeight: 400 }} className={!open ? 'd-block' : 'd-none'}> . Terms, Privacy, Support</span>

                            {open ? <i className="mdi mdi-chevron-up ml-auto" style={{ fontSize: '1.7em', color: 'rgb(103, 103, 103)' }}></i> : <i style={{ fontSize: '1.7em', color: 'rgb(103, 103, 103)' }} className="mdi mdi-chevron-down ml-auto"></i>}

                        </a>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="px-3 overflow-hidden">
                                <div className="row footer-links">
                                    <Link className="col-6" to="/term-condition">Terms &amp; Condition</Link>
                                    <Link className="col-6" to="/PrivacyPolicy">Privacy Policy</Link>
                                    <Link className="col-6" to="/RefundPolicy">Refund/Cancellation Policy</Link>
                                    <Link className="col-6" to="/contact-us">Contact Us</Link>
                                    <Link className="col-6" to="/responsible-gaming">Responsible Gaming</Link>
                                </div>
                            </div>
                        </Collapse>
                        <div className="footer-divider" />
                        <div className="px-3 py-4">
                            <div className="footer-text-bold">About Us</div><br />
                            <div className="footer-text">{(WebSitesettings) ? WebSitesettings.WebsiteName : ''} is a real-money gaming product owned and operated by {(WebSitesettings) ? WebSitesettings.CompanyName : ''} ("{(WebSitesettings) ? WebSitesettings.WebsiteName : ''}" or "We" or "Us" or "Our").</div><br />
                            <div className="footer-text-bold">Our Business &amp; Products</div><br />
                            <div className="footer-text">We are an HTML5 game-publishing company and our mission is to make accessing games
                                fast and easy by removing the friction of app-installs.</div><br />
                            <div className="footer-text">{(WebSitesettings) ? WebSitesettings.WebsiteName : ''} is a skill-based real-money gaming platform accessible only for our users
                                in India. It is accessible on <a target="_blank" rel="noopener noreferrer"
                                    href={(WebSitesettings) ? WebSitesettings.CompanyWebsite : ''}>{(WebSitesettings) ? WebSitesettings.CompanyWebsite : ''}</a>. On {(WebSitesettings) ? WebSitesettings.WebsiteName : ''}, users can compete for real cash
                                in Tournaments and Battles. They can encash their winnings via popular options such as Paytm Wallet, Amazon
                                Pay, Bank Transfer, Mobile Recharges etc.</div><br />
                            <div className="footer-text-bold">Our Games</div><br />
                            <div className="footer-text">{(WebSitesettings) ? WebSitesettings.WebsiteName : ''} has a wide-variety of high-quality, premium HTML5 games. Our games are
                                especially compressed and optimised to work on low-end devices, uncommon browsers, and patchy internet
                                speeds.</div><br />
                            <div className="footer-text">We have games across several popular categories: Arcade, Action, Adventure, Sports
                                &amp; Racing, Strategy, Puzzle &amp; Logic. We also have a strong portfolio of multiplayer games such as
                                Ludo, Chess, 8 Ball Pool, Carrom, Tic Tac Toe, Archery, Quiz, Chinese Checkers and more! Some of our popular
                                titles are: Escape Run, Bubble Wipeout, Tower Twist, Cricket Gunda, Ludo With Friends. If you have any
                                suggestions around new games that we should add or if you are a game developer yourself and want to work
                                with us, don't hesitate to drop in a line at <a href={(WebSitesettings) ? 'mailto:'+WebSitesettings.CompanyEmail : ''}>{(WebSitesettings) ? WebSitesettings.CompanyEmail : ''}</a>!</div>
                        </div>
                    </section>
                    <div className="downloadButton"  >
                        <Downloadbutton />
                    </div>
                </div>
            </div>
            {/* // <div className='rightContainer'>
            //     <Rightcontainer/>
            // </div> */}
        </>
    )
}