import React from "react";
import "./contact.scss";
import { Fade, Zoom } from "react-reveal";

import emailjs from "emailjs-com";
export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kd3cjz8",
        "template_7jhf4mj",
        e.target,
        "user_13jdfxcM0vv1Xlo9hL6WK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <section class="contact-page-sec" id="contact">
      <div class="containers">
        <div className="master">
          <div class="container">
            <div class="form-container">
              <div class="left-container">
                <div class="left-inner-container">
                  <Fade bottom>
                    <h2>Let's Chat</h2>
                    <p>
                      Whether you have a question, book a room or simply want to
                      connect.
                    </p>
                    <br />
                    <p>Feel free to send me a message in the contact form</p>
                  </Fade>
                </div>
              </div>
              <div class="right-container">
                <div class="right-inner-container">
                  <form onSubmit={sendEmail}>
                    <h2 class="lg-view">Contact</h2>
                    <h2 class="sm-view">Let's Chat</h2>
                    <Zoom clear>
                      <p>* Required</p>
                      <input type="text" placeholder="Name *" name="name" />
                      <input type="email" placeholder="Email *" name="email" />

                      <input type="phone" placeholder="Phone" name="phone" />
                      <textarea
                        rows="4"
                        placeholder="Message"
                        name="message"
                      ></textarea>
                      <button type="submit" value="Send">
                        Submit
                      </button>
                    </Zoom>
                    {/* <input type="submit" /> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div className="contain-info">
            <div class="col-md-4">
              <div class="contact-info">
                <div class="contact-info-item">
                  <div class="contact-info-icon">
                    <Zoom clear>
                      <img src="images/location.gif" alt="" />
                    </Zoom>
                  </div>
                  <div class="contact-info-text">
                    <Zoom clear>
                      <span>
                      15A DDA Flat, Vijay Mandal, Kalu Sarai <br></br>
                      Delhi,  India</span>
                    </Zoom>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-info">
                <div class="contact-info-item">
                  <div class="contact-info-icon">
                    <Zoom clear>
                      <img src="images/mail.gif" alt="" />
                    </Zoom>
                  </div>
                  <div class="contact-info-text">
                    <Zoom clear>
                      <span>sbscasahostel@gmail.com</span>
                    </Zoom>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-info">
                <div class="contact-info-item">
                  <div class="contact-info-icon phone">
                    <Zoom clear>
                      <img src="images/call.gif" alt="" />
                    </Zoom>
                  </div>
                  <div class="contact-info-text ">
                    <Zoom clear>
                      <span>+91 70535 50509</span>
                    </Zoom>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
