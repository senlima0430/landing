import Header from '../components/Header';
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Subject from "../components/Subject";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Header />
      <Intro />
      <Subject />
      <Contact />
      <Footer />
    </div>
  );
}
