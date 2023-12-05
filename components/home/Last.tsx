import { GrFacebook } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";

const Last = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1000px] mx-auto px-3">
        <div className="lg:flex lg:flex-row flex flex-col items-center lg:gap-y-0 gap-y-3 lg:justify-between lg:py-10 py-6">
          <div className="lg:flex lg:flex-row flex flex-col items-center gap-x-3 lg:items-center">
            <img
              src="https://fgrf.org/web_assets/images/fgrf/newLogo.png"
              className="w-16"
              alt=""
            />
            <p className="text-sm lg:text-left text-center">
              Faizan Global Relief Foundation UK 24 WITTON <br />
              ROAD,BIRMINGHAM B6 6NX, Birmingham, United Kingdom
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:gap-y-0 gap-y-4 md:mt-0 mt-5 gap-x-6 text-sm">
            <h5>Here to help:</h5>
            <div>
              <h4>Monday - Friday</h4>
              <p>Always open</p>
            </div>
            <div>
              <h4>888.855.9595</h4>
              <p>info@qgiv.com</p>
            </div>
            <div className="flex gap-x-2 text-lg text-[#1eb1af]">
              <a href="https://www.facebook.com/profile.php?id=61550763330971">
                <GrFacebook />
              </a>
              {/* <BsLinkedin /> */}
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftwitter.com%2FFGRF%2520UK%3Ffbclid%3DIwAR3uIvtDIUi6K1Gup4R9y6b1AaspToWqg5HOqhDuZTbfg1wjngAu0nZlCiQ&h=AT19ViF2wDZyIoPjKqzB5HXm0cZZHzdvuDqIL_tdCfr_1T_tnHbQCCv_CbC0XFJfIDx1H66wq5Pda5C79DoJUFwqR8R77yprEGLiTIV-4fyjZBNbmY3gteEtsSy9Go1QiOLi">
                <FaXTwitter />
              </a>
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2FFGRF%2520UK%3Ffbclid%3DIwAR2RqANRfDITwCoKxsivO8vTzi6dVcgL9T-XRafDVugFucxfA9SwGk3lpuw&h=AT2ZW-k7Iw2NqkBXGYQeBYseJnpB2qC-yvNjrUA9C-OKGOLt8hkiL_uI3HyYx-_NhgGIC0Ov8Z8tHy7xmmnHApt1x-tbEO5gNcMZLKHpuBKYwfLJKZu3EPymjWPQt_2n7mxh">
                <GrInstagram />
              </a>
              <BsYoutube />
            </div>
          </div>
        </div>
        <div className="bg-[#88c6d1] w-full h-1 rounded-full"></div>
        <div className="flex flex-wrap justify-center lg:gap-y-0 gap-y-2 gap-x-10 py-2 md:mt-0 mt-5 text-sm tracking-wider font-light">
          <h3>2023 FGRF.Inc</h3>
          <h3>Aceptable Use Policy</h3>
          <h3>Policy Privacy</h3>
          <h3>Hope you are having a great Tuesday</h3>
        </div>
      </div>
    </section>
  );
};

export default Last;
