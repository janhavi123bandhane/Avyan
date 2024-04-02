import ImageSlider from "../../ImageSlider";
import Testimonial from "../../Testimonial.jsx";
import About from "../About/About.jsx"
import Contact from "../Contact/Contact.jsx"
import Portfolio from "../Portfolio/Portfolio.jsx";




export default function Home() {
    return (
        <>
        <div className=" xl:w-full md:w-[90rem] lg:w-[100rem] w-[60.3rem] overflow-hidden">
        <ImageSlider/>
        <About/>
        <Portfolio></Portfolio>
        <Testimonial/>
        {/* <Contact/> */}

        </div>
      
        </>
        
    );
}
