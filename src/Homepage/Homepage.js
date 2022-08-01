//css
import "./Homepage.scss";

//data
import {
  primaryInsertionItems,
  gridInsertionItems,
  // navbarItems,
} from "./dataHomepage";
// import appleLogo from "../images/globalnav_apple_image__b5er5ngrzxqq_large.svg";
// import bag from "../images/globalnav_bag_image__yzte50i47ciu_large.svg";

//components
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
          <head />

      <Navbar />
   <Body />
      <Footer />
    </>
  );
};

export default Homepage;
