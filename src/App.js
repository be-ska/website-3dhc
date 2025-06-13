import React from "react";
import { Suspense } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Pilots from "./components/Pilots";
import Format from "./components/Format";
import Sponsors from "./components/Sponsors";

export default function App() {
  return (
    <main className="text-yellow-300 bg-gray-900 body-font">
      <Suspense fallback="loading">
        <Navbar />
        <About />
        <Format />
        <Contact />
      </Suspense>
    </main>
  );
}
