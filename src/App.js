import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { NavBar } from './components/Navigation';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  const [currentTab, setCurrentTab] = useState("about");

	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
			default:
				return null;
		}
	};

	return (
    <div className="App">
      <Header />
      <NavBar currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      <span>{renderTab()}</span>
      <Footer />
    </div>
  );
};

export default App;
