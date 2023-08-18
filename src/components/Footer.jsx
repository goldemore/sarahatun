import { Link } from "react-router-dom";

import { SlLocationPin } from "react-icons/sl";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="aboutUs_information">
        <div className="aboutUs">
          <h4 id="haqqimizda">HAQQIMIZDA</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Turpis leo convallis sed
            feugiat ullamcorper adipiscing scelerisque proin. Felis mi
            condimentum ut maecenas dolor vitae. Urna leo consequat nulla
            sodales ante mattis ut vel consectetur. Arcu facilisis et cursus
            sollicitudin lorem mauris. Enim elementum quis porta lectus
            dignissim gravida maecenas. Cras eleifend cras pellentesque auctor
            volutpat faucibus venenatis id aliquam.
          </p>
        </div>
        
        <div className="flex_wrap">
        <div className="information">
          <h4>BİZİMLƏ ƏLAQƏ</h4>
          <div>
            <AiOutlinePhone size={22}/>
            <p className="phone_number">(051)555-55-55</p>
          </div>
          <div>
            <HiOutlineMail size={22}/>
            <p className="email">sarahatun@example.com</p>
          </div>
          <div>
            <SlLocationPin size={25}/>
            <p className="adress">3891 Ranchview Dr. Richardson, California 62639</p>
          </div>
        </div>
        <div className="follow_us">
          <h4>BİZİ İZLƏ</h4>
          <div className="social_media">
            <Link
              to="https://www.instagram.com"
              target="_blank"
              style={{ color: "#000" }}
            >
              <AiFillInstagram size={22} />
            </Link>
            <Link
              to="https://www.facebook.com"
              target="_blank"
              style={{ color: "#000" }}
            >
              <FaFacebookF size={20} />
            </Link>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
