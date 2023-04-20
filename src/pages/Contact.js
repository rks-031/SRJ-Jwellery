import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h2 className="text-center my-4 store font-weight-bold er">Contact Us</h2>
      <hr className="horizontal" />
      <div className="row">
        <div className="col">
          <a href="https://goo.gl/maps/LgXdmYBRXsQ3j2868">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1198.0972853839528!2d77.67253903081276!3d27.507756199722397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371732b26b7e9%3A0xb9a693cd4c02ba40!2sOm%20Sai%20Poshak%20Bhandar!5e0!3m2!1sen!2sin!4v1680979955556!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </a>
        </div>

        <div className="col spacing mt-5">
          <section className="font-weight-bold ">
            <img
              src="https://i.ibb.co/mvxYRxB/office.png"
              alt="office"
              border="0"
            />
            :
            <a
              href="https://www.google.com/maps/search/1st+floor,+Hari+Complex,+Gurhai+Bazar,+Mathura+281001./@27.5111676,77.6689503,15z"
              className="links"
            >
              <strong>
                &nbsp;&nbsp;1st floor, Hari Complex, Gurhai Bazar, Mathura -
                281001.
              </strong>
            </a>
          </section>
          <section className="font-weight-bold ">
            <img
              src="https://i.ibb.co/6rh8YRP/gmail.png"
              alt="gmail"
              border="0"
            />
            :
            <a href="srjpayal1170@gmail.com" className="links" target="blank">
              &nbsp;&nbsp;srjpayal1170@gmail.com
            </a>
          </section>
          <section className="font-weight-bold ">
            <img
              src="https://i.ibb.co/x2DPHh8/whatsapp.png"
              alt="whatsapp"
              border="0"
            ></img>
            :
            <a href="tel: +91- 78952 91958" className="links" target="blank">
              <strong>&nbsp;&nbsp;+91- 78952 91958</strong>
            </a>
          </section>
          <section className="font-weight-bold ">
            <img
              src="https://i.ibb.co/jgdStbg/facebook.png"
              alt="facebook"
              border="0"
            />
            :
            <a
              href="https://www.facebook.com/profile.php?id=100090317825058&mibextid=ZbWKwL"
              className="links"
              target="blank"
            >
              &nbsp;Shri Ram Ji Payal
            </a>
          </section>
          <section className="font-weight-bold ">
            <img
              src="https://i.ibb.co/dffPj6Q/instagram.png"
              alt="instagram"
              border="0"
            />
            :
            <a
              href="https://www.instagram.com/shriramjipayal/?igshid=YmMyMTA2M2Y%3D"
              className="links"
              target="blank"
            >
              &nbsp;Shri Ram Ji Payal
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
