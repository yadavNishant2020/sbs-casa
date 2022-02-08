import React from "react";
import "./contact.scss";
import emailjs from "emailjs-com";
export default function Contact() {
  // const [userData, setUserdata] = useState({
  //   Name: "",
  //   Email: "",
  //   Message: "",
  // });
  // let name, value;
  // const postUserData = (event) => {
  //   name = event.target.name;
  //   value = event.target.value;
  //   setUserdata({ ...userData, [name]: value });
  // };

  // //connection with firebase
  // const submitData = async (event) => {
  //   event.preventDefault();
  //   const { Name, Email, Message } = userData;
  //   if (Name && Email && Message) {
  //     const res = await fetch(
  //       "https://personal-react-portfolio-default-rtdb.firebaseio.com/userDataRecords.json",
  //       {
  //         method: "POST",
  //         hearders: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           Name,
  //           Email,
  //           Message,
  //         }),
  //       }
  //     );
  //     if (res) {
  //       setUserdata({
  //         Name: "",
  //         Email: "",
  //         Message: "",
  //       });
  //       alert("Your Message has been sent successfully.");
  //     } else {
  //       alert("Plz fill the data");
  //     }
  //   } else {
  //     alert("Plz fill the data");
  //   }
  // };

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_y9cqmft",
        "template_l9y2pae",
        e.target,
        "user_lkBHyUUWDZ15UldwlZqor"
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
                  <h2>Let's Chat</h2>
                  <p>
                    Whether you have a question, book a room or simply want to
                    connect.
                  </p>
                  <br />
                  <p>Feel free to send me a message in the contact form</p>
                </div>
              </div>
              <div class="right-container">
                <div class="right-inner-container">
                  <form onSubmit={sendEmail}>
                    <h2 class="lg-view">Contact</h2>
                    <h2 class="sm-view">Let's Chat</h2>
                    <p>* Required</p>

                    <input type="text" placeholder="Name *" name="name" />
                    <input type="email" placeholder="Email *" name="email" />

                    <input type="phone" placeholder="Phone" name="phone" />
                    <textarea
                      rows="4"
                      placeholder="Message"
                      name="message"
                    ></textarea>
                    {/* <button type="submit" onClick={sendEmail}>
                      Submit
                    </button> */}
                    <input type="submit" value="Send" />
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
                    <img src="images/location.gif" alt="" />
                  </div>
                  <div class="contact-info-text">
                    <span>
                      1215, Lorem Ipsum, Ch 176080 <br />{" "}
                    </span>
                    <span>Delhi, India</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-info">
                <div class="contact-info-item">
                  <div class="contact-info-icon">
                    <img src="images/mail.gif" alt="" />
                  </div>
                  <div class="contact-info-text">
                    <span>Hello@sbscasa</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-info">
                <div class="contact-info-item">
                  <div class="contact-info-icon phone">
                    <img src="images/call.gif" alt="" />
                  </div>
                  <div class="contact-info-text ">
                    <span>1800-SBS-CASA</span>
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
