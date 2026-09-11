
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import What_We_Will_Work_On_Section from "./sections/What_We_Will_Work_On_Section";
import Why_Do_Parents_Trust_Me_Section from "./sections/Why_Do_Parents_Trust_Me_Section";
import What_Parents_Say_About_Working_With_Me_Section from "./sections/What_Parents_Say_About_Working_With_Me_Section";
import Faqs_Section from "./sections/Faqs_Section";
import Footer from "./sections/Footer";

// The CSS styling was done with desktop first approach
function App() {
  return (
    <div className="bg-edubecks-yellowF9 overflow-x-hidden">
      <main className="2xl:max-w-7xl mx-auto bg-edubecks-yellowF9">
        {/* Desktop, Mobile  */}
        <Header />

        {/* Hero Section */}
        <HeroSection />

        {/* What we will work on */}
        <What_We_Will_Work_On_Section />

        {/* Why do parents trust me*/}
        <Why_Do_Parents_Trust_Me_Section />

        {/*What Parents Say About Working With Me?*/}
        <What_Parents_Say_About_Working_With_Me_Section />

        {/* FAQ */}
        <Faqs_Section />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
