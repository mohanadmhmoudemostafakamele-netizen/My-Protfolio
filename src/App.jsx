
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import './App.css';
import './index.css';
function App() {
  return (
    // يجب أن يبدأ العنصر الأب هنا
    <div className="main-wrapper">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div> // ويغلق هنا بعد جميع المكونات
  );
}

export default App;