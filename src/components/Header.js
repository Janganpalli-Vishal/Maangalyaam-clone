import React from 'react'
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import img7 from '../images/img7.png';
import img8 from '../images/img8.png';
import img9 from '../images/img9.png';
import img10 from '../images/img10.png';
import img11 from '../images/img11.png';
import img12 from '../images/img12.png';
import lg from '../images/minilg.png'
import pi from '../images/profileIcon.png'
import MI1 from '../images/MI1.png'
import MI2 from '../images/MI2.png'
import MI3 from '../images/MI3.png'
import MI4 from '../images/MI4.png'

export default function Header() {
    return (
        <div className='head '>
            <div className='backgroundImages' style={{ overflow: "hidden" }}>

                <div className='d-flex justify-content-center'>
                    <img src={img1} className='img-fluid' alt='' ></img>
                    <img src={img2} className='img-fluid' alt=''></img>
                    <img src={img3} className='img-fluid' alt=''></img>
                </div>
                <div className='d-flex justify-content-center'>
                    <img src={img4} className='img-fluid' alt=''></img>
                    <img src={img5} className='img-fluid' alt=''></img>
                    <img src={img6} className='img-fluid' alt=''></img>
                    <img src={img7} className='img-fluid' alt=''></img>
                </div>
                <div className='d-flex justify-content-center'>
                    <img src={img8} className='img-fluid' alt=''></img>
                    <img src={img9} className='img-fluid' alt=''></img>
                    <img src={img10} className='img-fluid' alt=''></img>
                    <img src={img11} className='img-fluid' alt=''></img>
                    <img src={img12} className='img-fluid' alt=''></img>
                </div>
            </div>

            <div className="Main">
                <div className='content mt-5'>
                    <h1 style={{ color: " rgba(255, 176, 0, 1)" }}><b>Maangalyam: Where Love Finds its Forever</b></h1>
                    <h4>Discover Endless Possibilities in Your Matrimony Journey</h4>
                    <button type="button" class="start mt-2"><b>Start Your Journey</b></button>
                </div>

                <div className='df d-flex justify-content-center mt-5'>
                    <div className='form'>
                        <h5 className='text-center pt-5'>Main Heading</h5>
                        <div className=' fi1 '>
                            <div class="dropdown">
                                <label for="drop" class="dropbtn">Looking for</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected >Male or Female</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                </select>
                            </div>
                            <div class="dropdown">
                                <label for="drop" class="dropbtn">Age</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected >Select Age</option>
                                    <option value="1">18-25</option>
                                    <option value="2">25-30</option>
                                    <option value="3">30-35</option>
                                </select>
                            </div>
                        </div>
                        <div className='fi2'>
                            <div class="dropdown">
                                <label for="drop" class="dropbtn">Religion</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected >Select Religion</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="dropdown">
                                <label for="drop" class="dropbtn">Mother Tounge</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected >Choose Mother Tounge</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center pt-4'>
                            <button type="button" class="cta">Search(CTA)</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='CR row d-flex justify-content-center mx-0'>
                <div className='content mt-5 col-sm-9 col-md-9 col-lg-8' id='profile_info'>
                    <h2 style={{ color: " rgba(255, 176, 0, 1)" }}><b>Discover Your Perfect Match with Our Powerful Features</b></h2>
                    <h6 >Unlock a world of possibilities with our cutting-edge features designed to make
                        your journey to finding love seamless and enjoyable. From advanced search options to privacy controls, explore
                        the tools that set us apart and maximize your chances of meeting your ideal life partner.</h6>
                </div>
            </div>

            <div className='miniNav'>
                <div className='d-flex'>
                    <img src={lg} className='pe-4' alt=''></img>
                    <input type='text' placeholder='  Type to search'></input>
                </div>
                <div className='ml'>
                    <img src={pi} alt=''></img>
                </div>
            </div>

            <div className='advanced d-flex justify-content-center mt-4 row mx-0'>

                <div className='miniForm col-lg-5 col-md-8 col-sm-8'>
                    <h2 className='adv'>Advanced Search</h2>
                    <div className='basic'>Basic Details</div>
                    <div class="advForm">
                        <div>
                            <select class="form-select" aria-label="Default select example">
                                <option selected >18-22</option>
                                <option value="1">22-28</option>
                                <option value="2">28-35</option>
                            </select>
                        </div>
                        <div>
                            <label for="drop" class="dropbtn pt-2">Height</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected >4'7 - 5'2</option>
                                <option value="1">5'2 - 5'7</option>
                                <option value="2">5'7 - 6'0</option>
                            </select>
                        </div>
                    </div>
                    <div className='basic pt-2'>Caste & Religion Details</div>
                    <div className='advForm'>
                        <div>
                            <label for="drop" class="dropbtn pt-2">Religion</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected >Select</option>
                            </select>
                        </div>
                        <div>
                            <label for="drop" class="dropbtn pt-2">Caste</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected >Select</option>
                            </select>
                        </div>
                        <div>
                            <label for="drop" class="dropbtn pt-2">Sub-Caste</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected >Select</option>
                            </select>
                        </div>
                        <div className='vmb'>
                            <button type="button" class="vm">Viewmore</button>
                        </div>

                    </div>
                </div>

                <div className='miniProfiles col-lg-7 col-md-8 col-sm-8 mx-0'>
                    <h5 className='text-start'>Based on your preference</h5>
                    <div className='MF d-flex'>
                        <div className='MP d-flex' >
                            <img src={MI1} alt=''></img>
                            <div className='data'>
                                <h6> Sravani Reddy Konda</h6>
                                <p> 26 yrs | 5ft 6inch</p>
                                <p>phn - 912177</p>
                                <p>Mail - sravani@gmail.com</p>
                                <p>Caste</p>
                                <p>Occupation</p>
                            </div>
                        </div>
                        <div className='MP d-flex'>
                            <img src={MI2} alt=''></img>
                            <div className='data'>
                                <h6> Sravani Reddy Konda</h6>
                                <p> 26 yrs | 5ft 6inch</p>
                                <p>phn - 912177</p>
                                <p>Mail - sravani@gmail.com</p>
                                <p>Caste</p>
                                <p>Occupation</p>
                            </div>
                        </div>
                    </div>
                    <div className='MF d-flex '>
                        <div className='MP d-flex' >
                            <img src={MI3} alt=''></img>
                            <div className='data'>
                                <h6> Sravani Reddy Konda</h6>
                                <p> 26 yrs | 5ft 6inch</p>
                                <p>phn - 912177</p>
                                <p>Mail - sravani@gmail.com</p>
                                <p>Caste</p>
                                <p>Occupation</p>
                            </div>
                        </div>
                        <div className='MP d-flex'>
                            <img src={MI4} alt=''></img>
                            <div className='data'>
                                <h6> Sravani Reddy Konda</h6>
                                <p> 26 yrs | 5ft 6inch</p>
                                <p>phn - 912177</p>
                                <p>Mail - sravani@gmail.com</p>
                                <p>Caste</p>
                                <p>Occupation</p>
                            </div>
                        </div>
                    </div>
                    <div className='MF d-flex '>
                        <div className='MP d-flex' >
                            <img src={MI1} alt=''></img>
                            <div className='data'>
                                <h6> Sravani Reddy Konda</h6>
                                <p> 26 yrs | 5ft 6inch</p>
                                <p>phn - 912177</p>
                                <p>Mail - sravani@gmail.com</p>
                                <p>Caste</p>
                                <p>Occupation</p>
                            </div>
                        </div>
                        <div className='MP d-flex'>
                            <img src={MI2} alt=''></img>
                            <div className='data'>
                                <h6> Sravani Reddy Konda</h6>
                                <p> 26 yrs | 5ft 6inch</p>
                                <p>phn - 912177</p>
                                <p>Mail - sravani@gmail.com</p>
                                <p>Caste</p>
                                <p>Occupation</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}
