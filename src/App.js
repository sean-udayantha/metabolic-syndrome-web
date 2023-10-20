// import logo from './logo.svg';
import logo from "./assets/healthonomy-logo-1-1.svg";
import frame31 from "./assets/frame-31.svg";
import vector1 from "./assets/vector-1.svg";
import mask6 from "./assets/mask-6.png";
import mask7 from "./assets/mask-7.png";
import mask8 from "./assets/mask-8.png";
import './App.css';
import './globals.css';
import './styleguide.css';



function App() {
  return (
   <>
   <div class="wrapper fixWidth">
      <header class="header fixWidth">
        <img class="healthonomy-logo" src={logo} alt=""/>
        <div class="nav-items">
          <div class="div">
            <div class="text-wrapper">Home</div>
            <div class="frame-2"></div>
          </div>
          <div class="div">
            <div class="text-wrapper-2">Contact Us</div>
            <div class="frame-2"></div> 
          </div>
        </div>
      </header>
      <div class="hero-section fixWidth">
        <div class="container">
          <div class="overlap">
            <img class="img" src={frame31} alt=""/>
            <img class="vector" src={vector1} alt="" />
            <div class="wrapper-wrapper">
              <div class="div-2">
                <div class="div-3">
                  <div class="div-4">
                    <div class="text-wrapper-3">Welcome !</div>
                    <p class="bringing-the-power">
                      <span class="span">Bringing the life of </span>
                      <span class="text-wrapper-4">AI</span>
                      <span class="span"> to healthcare</span>
                    </p>
                  </div>
                  <p class="p">
                  Personalized Mobile Patient Guidance System for Early Detection and Management of Metabolic Syndromes.
                  </p>
                  <button class="button"><div class="text-wrapper-5">Get in Touch</div></button>
                </div>
                <div class="image">
                  <div class="overlap-group">
                    <div class="group">
                      <div class="overlap-group-2">
                        <div class="vector-2"></div>
                        <div class="div-5">
                          <div class="card">
                            <div class="mask-wrapper">
                              <img class="mask" src={mask6} alt="" />
                              </div>
                            <p class="optimizing-accuracy">
                              <span class="text-wrapper-6">Report Scanning & Recommendation<br /></span>
                              <span class="text-wrapper-7">in Patient Intake and Admissions</span>
                            </p>
                          </div>
                          <div class="card-2">
                            <div class="mask-wrapper"><img class="mask" src={mask7} alt=""/></div>
                            <p class="div-6">
                              <span class="text-wrapper-6">Tracking & Monitoring</span>
                              <span class="text-wrapper-8"> <br /></span>
                              <span class="text-wrapper-7">with Patients</span>
                            </p>
                          </div>
                          <div class="card-2">
                            <div class="mask-wrapper"><img class="mask" src={mask8} alt=""/></div>
                            <p class="div-6">
                              <span class="text-wrapper-6">Personalized  Health Profiles</span>
                              <span class="text-wrapper-8"> <br /></span>
                              <span class="text-wrapper-9">Process</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img class="wepik-export" src="https://res.cloudinary.com/de9zkpp0w/image/upload/v1697617425/my%20files/wepik-export-20230622111840imxy-2_tudpkf.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="the-speed-you-need">
        <div class="div-7">
          <div class="title">
            <p class="the-speed-you-need-2">
              <span class="text-wrapper-10">The </span>
              <span class="text-wrapper-11">Speed</span>
              <span class="text-wrapper-12"> You Need</span>
            </p>
            <p class="using-AI-to">
              <span class="span">Using</span>
              <span class="text-wrapper-12">&nbsp;</span>
              <span class="text-wrapper-13">AI</span>
              <span class="span"> to</span>
            </p>
          </div>
          <div class="cards">
            <div class="inital-check">
              <img class="mask-2" src="img/mask-18.png" />
              <div class="div-8">
                <div class="div-wrapper"><div class="text-wrapper-14">Reduce human errors</div></div>
                <p class="text-wrapper-15">80% of claim denials are due to errors in intake process</p>
              </div>
            </div>
            <div class="div-9">
              <img class="mask-2" src="img/mask-19.png" />
              <div class="div-10">
                <div class="div-wrapper-2"><div class="text-wrapper-16">Increase efficiency,</div></div>
                <div class="div-wrapper">
                  <p class="text-wrapper-17">Reduces intake process from 1/2 day to 1/2 hour</p>
                </div>
              </div>
            </div>
            <div class="div-9">
              <img class="mask-2" src="img/mask-20.png" />
              <div class="div-11">
                <div class="text-wrapper-18">Streamline the payment process</div>
                <div class="div-wrapper"><p class="text-wrapper-17">Eliminates need for triple-check meetings</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="services-section">
        <div class="div-12">
          <div class="container-wrapper">
            <div class="container-2">
              <div class="frame-3"><div class="text-wrapper-19">Admissions</div></div>
              <div class="container-3">
                <div class="cards-2">
                  <p class="text-wrapper-20">Automate and standardize patient intake</p>
                  <img class="robo" src="img/robo.png" />
                </div>
                <div class="cards-2">
                  <div class="text-wrapper-21">Increase patient <br />in-flow</div>
                  <img class="increase-flow" src="img/increase-flow-1.png" />
                </div>
                <div class="cards-2">
                  <div class="text-wrapper-21">Reduce non-value adding tasks</div>
                  <img class="time-reduce" src="img/time-reduce.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="services-section-2">
        <div class="overlap-group-wrapper">
          <div class="overlap-group-3">
            <img class="layer" src="img/layer-3.png" />
            <img class="vector-3" src="img/vector-1-3.png" />
            <div class="container-4">
              <div class="text-wrapper-19">Billing</div>
              <div class="container-5">
                <div class="billing-card">
                  <div class="iconly-light-outline-wrapper">
                    <img class="iconly-light-outline" src="img/iconly-light-outline-tick-square-3.svg" />
                  </div>
                  <div class="div-8">
                    <div class="div-wrapper">
                      <p class="text-wrapper-22">Quickly display patient care regiment timeline</p>
                    </div>
                  </div>
                </div>
                <div class="billing-card-2">
                  <div class="iconly-light-outline-wrapper">
                    <img class="iconly-light-outline" src="img/iconly-light-outline-tick-square-4.svg" />
                  </div>
                  <div class="div-8">
                    <div class="div-wrapper-2"><div class="text-wrapper-23">Ensure Billing code Accuracy</div></div>
                  </div>
                </div>
                <div class="billing-card-2">
                  <div class="iconly-light-outline-wrapper">
                    <img class="iconly-light-outline" src="img/iconly-light-outline-tick-square-5.svg" />
                  </div>
                  <div class="div-13">
                    <p class="text-wrapper-24">Streamline billing timeline While eliminating triple-check procedure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="services-section-3">
        <div class="overlap-group-wrapper-2">
          <div class="overlap-group-4">
            <img class="group-2" src="img/group-12.png" />
            <div class="container-6">
              <div class="text-wrapper-19">Dashboard</div>
              <div class="container-7">
                <div class="element">
                  <img class="mac" src="img/mac-1.png" />
                  <div class="text"><div class="text-wrapper-25">Main Page</div></div>
                </div>
                <div class="element">
                  <img class="mac" src="img/mac-1-1.png" />
                  <div class="text"><div class="text-wrapper-25">Risk Factor</div></div>
                </div>
                <div class="element">
                  <img class="mac" src="img/mac-1-2.png" />
                  <div class="text"><div class="text-wrapper-25">Patient Personal Data</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="testimonials">
        <div class="overlap-group-wrapper-3">
          <div class="overlap-group-5">
            <div class="container-8">
              <div class="title-2">
                <div class="text-wrapper-19">Testimonials</div>
                <div class="text-wrapper-26">What they are saying..</div>
              </div>
              <div class="container-9">
                <div class="div-14">
                  <div class="avatar"></div>
                  <div class="div-15">
                    <div class="text-wrapper-27">Western Homes</div>
                    <p class="text-wrapper-28">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempo
                    </p>
                  </div>
                </div>
                <div class="div-14">
                  <div class="avatar-2"></div>
                  <div class="div-15">
                    <div class="text-wrapper-27">Ohio Masonic Communities</div>
                    <p class="text-wrapper-28">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempo
                    </p>
                  </div>
                </div>
                <div class="div-14">
                  <div class="avatar-3"></div>
                  <div class="div-15">
                    <div class="text-wrapper-27">Maple Knoll</div>
                    <p class="text-wrapper-28">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img class="vector-4" src="img/vector-2.svg" />
          </div>
        </div>
      </div>
      <div class="about">
        <div class="overlap-2">
          <img class="group-3" src="img/group-12-1.png" />
          <div class="frame-4">
            <div class="about-us-wrapper">
              <p class="about-us">
                <span class="text-wrapper-29">About<br /></span> <span class="text-wrapper-30">Us</span>
              </p>
            </div>
            <div class="div-16">
              <p class="unveiling-our-vision">
                <span class="text-wrapper-31">Unveiling Our </span>
                <span class="text-wrapper-32">Vision and Expertise</span>
              </p>
              <p class="at-healthonomy-we">
                <span class="text-wrapper-33">At Healthonomy, we are driven by a </span>
                <span class="text-wrapper-34">clear vision</span>
                <span class="text-wrapper-33"
                  >: to revolutionize the healthcare industry through cutting-edge technology and innovative solutions.
                  With our deep expertise in AI and healthcare, we aim to transform</span
                >
                <span class="text-wrapper-4">&nbsp;</span>
                <span class="text-wrapper-34"
                  >patient care, streamline processes, and empower healthcare providers</span
                >
                <span class="text-wrapper-33">
                  with efficient tools. Our team of dedicated professionals is committed to pushing the boundaries of
                  what is possible, constantly striving for excellence. By leveraging the power of AI, we unlock new
                  possibilities for</span
                >
                <span class="text-wrapper-34">
                  accurate diagnoses, personalized treatments, and improved patient outcomes</span
                >
                <span class="text-wrapper-33">. </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="about-2">
        <div class="div-12">
          <img class="vector-5" src="img/vector.svg" />
          <div class="image-2">
            <div class="overlap-group-6">
              <img class="banner-vector" src="img/banner-vector-1.svg" />
              <img class="portrait-hansome" src="img/portrait-hansome-young-male-doctor-man-1.png" />
            </div>
          </div>
          <div class="div-17">
            <p class="about-us-2">
              <span class="text-wrapper-29">About<br /></span> <span class="text-wrapper-30">Us</span>
            </p>
            <p class="text-wrapper-35">
              Lorem ipsum dolor sit amet consectetur. Odio nunc fringilla ut adipiscing. Eu tristique neque amet sed
              purus amet. Eu mauris tortor elementum leo scelerisque non in malesuada. Tellus turpis sed sapien ut.
              Aliquam non ultricies tempor diam eget eleifend. Sagittis ac massa mi proin augue sit dolor tincidunt. Eu
              feugiat suspendisse.
            </p>
          </div>
        </div>
      </div>
      <div class="container-10">
        <div class="overlap-3">
          <img class="group-4" src="img/group-6.png" />
          <div class="frame-5">
            <div class="frame-6">
              <div class="div-18">
                <img class="mask-3" src="img/mask-21.png" />
                <div class="div-13">
                  <div class="text-wrapper-36">John Smith</div>
                  <div class="frame-7">
                    <p class="text-wrapper-37">
                      &#34;Healthonomy&#39;s AI solutions have simplified patient intake. It&#39;s efficient and
                      error-free. Highly impressed!&#34;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-6">
              <div class="div-18">
                <img class="mask-3" src="img/mask-22.png" />
                <div class="div-13">
                  <div class="text-wrapper-36">Sarah Johnson</div>
                  <div class="frame-7">
                    <p class="text-wrapper-37">
                      &#34;Time tracking made easy with Healthonomy. It&#39;s user-friendly and saves us valuable
                      time.&#34;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-6">
              <div class="div-18">
                <img class="mask-3" src="img/mask-23.png" />
                <div class="div-13">
                  <div class="text-wrapper-36">David Thompson</div>
                  <div class="frame-7">
                    <p class="text-wrapper-37">
                      &#34;The triple check process is flawless with Healthonomy. It ensures accuracy and patient
                      safety. Highly recommend!&#34;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="meet-the-team-wrapper">
          <p class="meet-the-team">
            <span class="text-wrapper-38">Meet</span>
            <span class="text-wrapper-29">&nbsp;</span>
            <span class="text-wrapper-39">the Team</span>
          </p>
        </div>
      </div>
      <div class="footer">
        <div class="content">
          <div class="healthonomy-logo-wrapper">
            <img class="healthonomy-logo-2" src="img/healthonomy-logo-1-2.svg" />
          </div>
          <div class="social-links">
            <img class="img-2" src="img/icon-facebook-1.svg" />
            <img class="img-2" src="img/icon-instagram-1.svg" />
            <img class="img-2" src="img/icon-twitter-1.svg" />
            <img class="img-2" src="img/icon-linkedin-1.svg" />
          </div>
        </div>
        <div class="credits">
          <div class="divider"></div>
          <div class="div-19">
            <p class="text-wrapper-40">2023 Healthonomy. All right reserved.</p>
            <div class="div-19">
              <div class="text-wrapper-41">Privacy Policy</div>
              <div class="text-wrapper-41">Terms of Service</div>
              <div class="text-wrapper-41">Cookies Settings</div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
   </>
  );
}

export default App;
