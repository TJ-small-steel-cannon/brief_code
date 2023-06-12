import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Page from "./pages/Page/Page";
import Router from './router/Router';



function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      
      <Router/>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
