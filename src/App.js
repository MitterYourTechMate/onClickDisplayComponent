import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import News from './components/news';
import React, {useState} from "react"

function App() {

  const [page, setPage] = useState("home")

  return (
    <div className="App">
      <ul>
        <li onClick={() => setPage("home")}><a class="active" >Home</a></li>
        <li onClick={() => setPage("news")}><a >News</a></li>
        <li onClick={() => setPage("contact")}><a >Contact</a></li>
        <li onClick={() => setPage("about")}><a >About</a></li>
      </ul>
      {page === "home" && 
        <Home/>
      }
       {page === "about" && 
          <About/>
      }
       {page === "contact" && 
        <Contact/>
      }
       {page === "news" && 
         <News/>
      }
     
    </div>
  );
}

export default App;
