import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="overflow-hidden h-screen bg-slate-100">
      <Navbar/>
      <Hero/>
    </div>
  )
}