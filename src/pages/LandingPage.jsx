import Header from "../components/Header";
import Hero from "../components/Hero";


function LandingPage() {
    

  return (

   
    <div className="relative flex size-full min-h-screen flex-col bg-[#121a21] dark group/design-root overflow-x-hidden" style={{fontFamily: "Spline Sans" || "Noto Sans" || sans-serif}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <Hero />
      </div>
    </div>    

  )
}

export default LandingPage;
