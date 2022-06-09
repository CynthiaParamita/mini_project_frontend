import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Login from './components/login'
import Register from'./components/register'
import Home from'./components/home'
import Main from'./components/main'
import AddWallet from './components/AddWallet'
import EditWallet from './components/EditWallet'
import DetailWallet from './components/DetailWallet'

 
function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/main" element={<Main/>}/>
          <Route exact path="/addWallet" element={<AddWallet/>}/>
          <Route exact path="/editWallet/:id" element={<EditWallet/>}/>
          <Route exact path="/detailWallet/:id" element={<DetailWallet/>}/>
        </Routes>
    </Router>
  );
}
 
export default App;