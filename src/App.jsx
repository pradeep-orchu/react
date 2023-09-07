import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="overflow-hidden h-screen bg-neutral-50">
      <Navbar/>
      <Hero/>
    </div>
  )
}