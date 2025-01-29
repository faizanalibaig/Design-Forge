import React from "react";
import Main from "./components/main/Main.jsx"
import EggSection from './components/Egg/EggSection.jsx';

function App() {
    return (
        <div className="bg-primary d-flex flex-column">
            <Main />
            <EggSection />
        </div>
    );
}

export default App;
