import './App.css';
import CoachInfo from './CoachInfo';
import ExerciseSearch from './ExerciseSearch';
import Header from './Header';
import SideBar from './SideBar';

function App() {
  // const isLoggedIn = !!localStorage.getItem('userId');

  return (
    <div className="App">
      <Header /> 
      <SideBar/>
       <CoachInfo />
      <ExerciseSearch /> 
    </div>
  );
}

export default App;
