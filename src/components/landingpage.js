import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div className="bigDiv">
        <div className="pimg1" style={{width: '100%'}}>
          <div className="ptext">
              <span className="border">
                <Grid className="landing-grid">
                  <Cell col={12}>
                      <img
                      src="https://i.imgur.com/qNZJmLK.png"
                      /*src="https://i.imgur.com/IxyCNb3.jpg"*/
                      alt="David Epps"
                      className="profile-img"
                      />

                      <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr />

                        <p>HTML/CSS | Bootstrap | JavaScript | MERN | Python | Git+hub</p>
                        <div className="social-links">

                          {/* LinkedIn */}
                          <a href="https://www.linkedin.com/in/david-epps/" rel="noopener noreferrer" target="_blank">
                          <i class="fab fa-linkedin"><span>LinkedIn</span></i>
                          </a>

                          {/* Github */}
                          <a href="https://github.com/kaliforniaco" rel="noopener noreferrer" target="_blank">
                          <i className="fab fa-github-alt"><span>GitHub</span></i>
                          </a>

                          {/* Twitter */}
                          <a href="https://www.twitter.com/dave_epps" rel="noopener noreferrer" target="_blank">
                          <i className="fab fa-twitter"><span>Twitter</span></i>
                          </a>

                          {/* Resume */}
                          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                          <i className="fas fa-file-pdf"><span>Download Resume</span></i>
                          </a>


                        </div>
                      </div>

                  </Cell>
                </Grid>
              </span>
          </div>
        </div>

        <div id="introduction" className="pimg2" style={{width: '100%'}}>
          <div className="ptext">
              <span className="border">
                <Grid className="landing-grid">
                  <Cell col={12}>
                    {/*[<img
                      src="https://i.imgur.com/qNZJmLK.png"
                      src="https://i.imgur.com/IxyCNb3.jpg"
                      alt="profile picture"
                      className="avatar-img"
                      />
                    */}
                      <div className="banner-text2">
                        <h1>Computer/Science Enthusiast</h1>
                        <hr />


                        <p>
                          Through an early interest and study in computers and technology, I was able
                          to gain an understanding of basic electronics and the basis of machine
                          language. This included courses in TurboPascal and DBASE, introductory
                          C and VisualBasic. I also completed certifications in CompTIA and MSCE.
                          Other core competencies in focus were critical thinking,
                          speech communications, and maths for programming.
                        </p>

                        <code>"Remember to look up at the stars and not down at your feet.
                        Try to make sense of what you see and wonder about what makes the
                        Universe exist. Be curious. And however difficult Life may seem,
                        there is always something you can do and succeed at."

                        - Prof. Stephen Hawking</code>


                      </div>

                  </Cell>
                </Grid>

              </span>
          </div>
        </div>

        <div id="services" className="pimg3" style={{width: '100%'}}>
          <div className="ptext">
              <span className="border">
              <Grid className="landing-grid">
                <Cell col={12}>
                  {/*[<img
                    src="https://i.imgur.com/qNZJmLK.png"
                    src="https://i.imgur.com/IxyCNb3.jpg"
                    alt="profile picture"
                    className="avatar-img"
                    />
                  */}
                    <div className="banner-text3">
                      <h1>Coding...Colorado Style!</h1>
                      <hr />


                      <p>
                        A full stack mechanic who likes to take things apart and see how
                        they work. I believe in crafting user experiences using a combination
                        of interactive design, responsive and adaptable styling, and a personal
                        touch that says I have taken pride in developing your best vision.
                      </p>

                      <p>
                        I realize that I can now apply any new skills to a higher level,
                        creating something that speaks volumes to a client through an empassioned
                        use of what I have learned in the ways that mean the most to me. I can
                        deliver the full spectrum of service in that I  am a part of the
                        development of a vision and ideal, and have the tools to continue
                        to expand in the directions that trends in technology take the medium,
                        as well as the expectation.
                      </p>


                    </div>

                </Cell>
              </Grid>

              </span>
          </div>
        </div>

        <div id="contact" className="pimg4" style={{width: '100%'}}>
          <div className="ptext">
              <span className="border">
                <Grid className="landing-grid4">
                  <Cell col={4}>


                  </Cell>
                  <Cell col={4}>


                  </Cell>
                  <Cell col={4}>

                      <div className="banner-text4">
                        <h1>Contact Me</h1>
                      </div>

                  </Cell>

                </Grid>
                <Grid className="landing-grid4">
                  <Cell col={8}>

                      <div className="banner-text4a">

                        <p><a href="mailto:davidaepps@kineticlegacy.com?Subject=Portifolio%20page%20query...">davidaepps@kineticlegacy.com</a></p>

                        <p>Location: West Metro/Denver/Golden, CO</p>

                        <p>Phone: (720)432-8336</p>

                        <p>Check out the social links above!</p>

                        <a href="https://dev.to/dave_epps/hello-world-2ffh"><code>const myBlog = lostDatas(Fear && Coding)</code></a>

                      </div>

                  </Cell>

                  <Cell col={4}>



                  </Cell>

                </Grid>
              </span>
          </div>
        </div>

      </div>
    )
  }
}

export default Landing;
