import './App.css';
//import CoachInfo from './CoachInfo';
//import ExerciseSearch from './ExerciseSearch';
import Header from './Header';
//import SideBar from './SideBar';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Clients from './Clients';
import Template from './Template';
import Workout from './Workout';
import Body from './Body';
//import { BrowserRouter } from 'react-router-dom';
const appRouter=createBrowserRouter([{
path:"/",
element:<Body/>,
children:[

  {
    path:"/Clients",
    element:<Clients/>
  },
  {
    path:"/Workout",
    element:<Workout/>
  },
  {
    path:"/Templates",
    element:<Template/>
  }
]




}])




function App() {
  // const isLoggedIn = !!localStorage.getItem('userId');

  return (   

    <div className="App">
    
     
    <RouterProvider router={appRouter}></RouterProvider>
    </div>


  );
}







export default App;
