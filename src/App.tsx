import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Products } from "./components/Products";
import { Assistance } from "./components/Assistance";
import { Pricing } from "./components/Pricing";
import { Advantages } from "./components/Advantages";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Products />
      <Assistance />
      <Pricing />
      <Advantages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
