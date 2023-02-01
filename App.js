import {Routes,Route} from 'react-router-dom';
import './App.css';
import BookDetails from './components/bookdetails';
import Footer from './components/footer';
import Favorites from './components/favorites';
import BookList from './components/booklist';
import Navbar from './components/navbar';





function App() {
 


  return (
    <div className="App">
    
      <Navbar/>
     
     
      <Routes>
        
        <Route path='/' element={<BookList/>}/>
        <Route path='/books/:id' element={<BookDetails/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
     
      </Routes>
      
    
      <Footer/>

       </div>
  );
}

export default App;
