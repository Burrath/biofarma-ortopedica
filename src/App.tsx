import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Products } from "./components/Products";
import { Assistance } from "./components/Assistance";
import { Advantages } from "./components/Advantages";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

function App() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isPrivacyPage = normalizedPath === "/privacy-policy";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {isPrivacyPage ? (
        <PrivacyPolicy />
      ) : (
        <>
          <Hero />
          <Services />
          <Products />
          <Assistance />
          <Advantages />
          <Contact />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
