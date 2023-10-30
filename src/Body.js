import CoachInfo from "./CoachInfo"
import ExerciseSearch from "./ExerciseSearch"
import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import Header from "./Header"
const Body=()=>{


    return(
        <>
        <h1>Trainer App</h1>
        
       <Header /> 
        <SideBar/>
        <CoachInfo/>
        <ExerciseSearch/>
        <Outlet/>
        </>
    )
}
export default Body
