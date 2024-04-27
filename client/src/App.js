
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Home from './components/Layout';

import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

import Profile from './pages/Profile';
import Category from './pages/Category';
import AddCategory from './pages/AddCategory';
import Addstudent from './pages/Addstudent';
import Userdash from './pages/Userdash';
import Applyrequest from './pages/Applyrequest';
import Studentlist from './pages/Studentlist';
import StudentAdd from './pages/StudentAdd';


function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
<Routes>

            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dash' element={<Dashboard />}>
            <Route path='/dash/student' element={<StudentAdd/>} ></Route>
            <Route path='/dash/profile' element={<Profile/>} ></Route>
            <Route path='/dash/category' element={<Category/>} ></Route>
            <Route path='/dash/addcategory' element={<AddCategory/>} ></Route>
            <Route path='/dash/addstudent' element={<Addstudent/>} ></Route>
            <Route path='/dash/studentlist' element={<Studentlist/>} ></Route>

              </Route>
              <Route path='/userdash' element={<Userdash/>}>
            <Route path='/userdash/apply' element={<Applyrequest/>} ></Route>
            <Route path='/userdash/home' element={<Home/>} ></Route>

                


              </Route>
        

                 </Routes>   
          </BrowserRouter>
    </div>
  );
}

export default App;
