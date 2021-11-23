import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TeasersSection from "./components/TeasersSection";
import UsersSection from "./components/UsersSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <TeasersSection />
        <UsersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
