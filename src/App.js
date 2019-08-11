import React from "react";
import "./App.css";
import EventsProvider from "./context/EventsContext";
import Calendar from "./components/Calendar";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  
  return (
    <EventsProvider>
    <div className="App">
      <Header/>
      <Calendar/>
      <Footer/>
    </div>
    </EventsProvider>
  );
}

export default App;
