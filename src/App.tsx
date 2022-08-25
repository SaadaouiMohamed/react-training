import logo from './logo.svg';
import './assets/app.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Card from './components/card';
import Home from './components/layout/Home';
import Article from './components/layout/Article.jsx';
import Form from './components/Form/Form';
import FormWithHook from './components/Form/FormWithHook';

function App() {
  
  return (
    <div className="App">

      {/*<Card background='bg-red-600'>

         <h1 className='text-[30px] my-3'>hello</h1>

         <p>this is the body of my card</p>

         <form className='text-center rounded-lg w-1/2 m-auto bg-slate-100 shadow-xl '>
            <input type="text" className="" placeholder="Enter name"></input><br/>
            <input type="email" className="" placeholder="Enter mail"></input><br/>
            <input type="password" className="" placeholder="Enter password"></input><br/>
            <input type="submit" value="Envoyer" className='my-3 bg-sky-600 p-3 self-end'></input>
            </form>
  </Card>*/}
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}>
      <Route path='/' element={<Article/>}></Route>
      <Route path='/comments/:id' element={<FormWithHook/>}></Route>
    </Route>
  
  </Routes>
  </BrowserRouter>

  
    </div>
  );
}

export default App;
