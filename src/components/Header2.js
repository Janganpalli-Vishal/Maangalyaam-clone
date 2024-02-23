import React from 'react'
import Icon1 from '../images/Icon1.png'
import Icon2 from '../images/Icon2.png'
import Icon3 from '../images/Icon3.png'
import Icon4 from '../images/Icon4.png'
import Icon5 from '../images/Icon5.png'
import Icon6 from '../images/Icon6.png'
import caroImage from '../images/Frame 48096523.png'
import caroImage2 from '../images/Frame 48096520.png'


export default function Head2() {
    return (
        <div>
            <div className='features row d-flex justify-content-center mx-0'>
                <div className='col-10 col-sm-7 text-center head2'>
                    <h6 style={{ color: " rgba(255, 176, 0, 1)" }}>Feature Highlights</h6>
                    <h2><b>Unveiling the Heart of Our Platform</b></h2>
                    <p>Unlock the Door to Love: Register Now for a Journey of <br /> Connections and Compatibility.</p>
                </div>
            </div>

            <div>
                <div className='FH row d-flex justify-content-evenly mx-0 mt-5'>
                    <div className='FHD col-lg-4 col-md-3 col-sm-6 col-xs-9 ' style={{ width: "22rem" }}>
                        <img src={Icon1} alt=''></img>
                        <h5>Verified Profiles for Trusted Connections</h5>
                        <p style={{ "font-size": "14px" }}>Experience matchmaking like never before. Our platform employs sophisticated algorithms and detailed criteria to ensure you connect with individuals who share your values, interests, and aspirations. Take the first step towards a meaningful relationship with our precision matchmaking features.</p>
                    </div>
                    <div className='FHD col-lg-4 col-md-3 col-sm-6 col-xs-9' style={{ width: "22rem" }}>
                        <img src={Icon2} alt=''></img>
                        <h5>Precision Matchmaking at Your Fingertips</h5>
                        <p style={{ "font-size": "14px" }}>Your safety is our priority. Every profile on our platform undergoes a rigorous verification process, providing you with the assurance that you are connecting with genuine, like-minded individuals. Build meaningful connections with confidence through our verified profiles.</p>
                    </div>
                    <div className='FHD col-lg-4 col-md-3 col-sm-6 col-xs-9' style={{ width: "22rem" }}>
                        <img src={Icon3} alt=''></img>
                        <h5>Tailored Search, Tailored Results</h5>
                        <p style={{ "font-size": "14px" }}> Customize your search for love with our comprehensive filter options. Whether it's age, location, or interests, our tailored search feature allows you to fine-tune your preferences, ensuring that every match aligns with your unique criteria.</p>
                    </div>
                </div>
                <div className='FH row d-flex justify-content-evenly mx-0 mt-2'>
                    <div className='FHD col-lg-4 col-md-3 col-sm-6 col-xs-9 ' style={{ width: "22rem" }}>
                        <img src={Icon4} alt=''></img>
                        <h5>Success Stories That Inspire</h5>
                        <p style={{ "font-size": "14px" }}>Join the ranks of those who found love on our platform. Explore real-life success stories and testimonials from couples who embarked on their journey with us. Let their stories inspire and reassure you that your perfect match may be just a click away.</p>
                    </div>
                    <div className='FHD col-lg-4 col-md-3 col-sm-6 col-xs-9' style={{ width: "22rem" }}>
                        <img src={Icon5} alt=''></img>
                        <h5>Your Privacy, Your Control</h5>
                        <p style={{ "font-size": "14px" }}>Take charge of your online journey with our robust privacy controls. Manage who sees your profile and choose the level of information you share. Your privacy is paramount, and we give you the tools to navigate your matrimony search on your terms.</p>
                    </div>
                    <div className='FHD col-lg-4 col-md-3 col-sm-6 col-xs-9' style={{ width: "22rem" }}>
                        <img src={Icon6} alt=''></img>
                        <h5>Stay Connected with Seamless Messaging</h5>
                        <p style={{ "font-size": "14px" }}>Communication is key, and we've made it easier than ever. Our intuitive messaging platform lets you connect effortlessly with potential matches. From icebreakers to heartfelt conversations, foster connections with ease and grace.</p>
                    </div>
                </div>
            </div>

            <div className='reviewCont text-center pt-5'>
                <h6 style={{ color: " rgba(255, 176, 0, 1)" }} >394+ Happy Maangalyaam Users</h6>
                <h2><b>Don’t just take our words</b></h2>

                <div className='carousalCont'>
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className='mainCaro'>
                                    <div className='innerCaro d-flex'>
                                        <img src={caroImage} class="me-3" alt="..." />
                                        <div className='caroData'>
                                            <p>⭐⭐⭐⭐⭐</p>
                                            <p>"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."</p>
                                            <p><b>Raghu & Shwetha</b></p>
                                        </div>
                                    </div>
                                    <div className='innerCaro d-flex'>
                                        <img src={caroImage2} class=" img2 me-3" alt="..." />
                                        <div className='caroData'>
                                            <p>⭐⭐⭐⭐⭐</p>
                                            <p>"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."</p>
                                            <p><b>Raghu & Shwetha</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className='mainCaro'>
                                    <div className='innerCaro d-flex'>
                                        <img src={caroImage2} class="img2 me-3" alt="..." />
                                        <div className='caroData'>
                                            <p>⭐⭐⭐⭐⭐</p>
                                            <p>"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."</p>
                                            <p><b>Raghu & Shwetha</b></p>
                                        </div>
                                    </div>
                                    <div className='innerCaro d-flex'>
                                        <img src={caroImage} class="me-3" alt="..." />
                                        <div className='caroData'>
                                            <p>⭐⭐⭐⭐⭐</p>
                                            <p>"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."</p>
                                            <p><b>Raghu & Shwetha</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className='mainCaro'>
                                    <div className='innerCaro d-flex'>
                                        <img src={caroImage} class="me-3" alt="..." />
                                        <div className='caroData'>
                                            <p>⭐⭐⭐⭐⭐</p>
                                            <p>"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."</p>
                                            <p><b>Raghu & Shwetha</b></p>
                                        </div>
                                    </div>
                                    <div className='innerCaro d-flex'>
                                        <img src={caroImage2} class="img2 me-3" alt="..." />
                                        <div className='caroData'>
                                            <p>⭐⭐⭐⭐⭐</p>
                                            <p>"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."</p>
                                            <p><b>Raghu & Shwetha</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='row d-flex justify-content-center mt-4 mx-0'>
                <div className='col-10 col-sm-7 text-center  pb-5'>
                    <h6 style={{ color: " rgba(255, 176, 0, 1)" }}>Join Us Today</h6>
                    <h2><b>Your Journey to Love Starts Here</b></h2>
                    <p><b>Unlock the Door to Love: Register Now for a Journey of Connections and Compatibility.</b></p>
                </div>
                <div className='contactUs'>
                    <div className='d-flex flex-wrap justify-content-center'>
                        <div className='contact-form-select mx-2'>
                            <label for="drop" class="dropbtn"><b>Profile</b></label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected >Select</option>
                                {/* <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option> */}
                            </select>
                        </div>
                        <div className='contact-form-select mx-2'>
                            <label for="drop" class="dropbtn"><b>Gender</b></label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected >Select</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className='d-flex flex-wrap justify-content-center'>
                        <div className='contact-form-input d-flex flex-column mx-2'>
                            <label className='mt-2'><b>First Name</b></label>
                            <input type='text' placeholder='  First Name'></input>
                        </div>
                        <div className='contact-form-input  d-flex flex-column mx-2'>
                            <label class="mt-2"><b>Second Name</b></label>
                            <input type='text' placeholder='  Second Name'></input>
                        </div>
                        <div className='contact-form-input d-flex flex-column'>
                            <label class="mt-2"><b>Phone Number</b></label>
                            <input type='text' placeholder='   Number'></input>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center pt-2'>
                        <button type="button" class="GTB">Get Started</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
