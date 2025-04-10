// import React from "react"
// import Hero from "./components/Hero"

// function App() {
  
//   return (
//     <>
//     <Hero/>
//     </>
//   )
// }

// export default App


import React from "react";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
}

export default App;

