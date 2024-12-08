
import { useState,React } from 'react'
import { useEffect,Suspense,lazy } from 'react'
import SelectedNavBar from './components/navbar/selectedNavBar';
import HomePage from './components/HomePage/HomePage';
function App() {
  const [count, setCount] = useState(0)
  // const SelectedNavBar=lazy(()=> import("./components/navbar/selectedNavBar"));

  return (
    <>
         <SelectedNavBar selected={"avatar"}  selectedNames={{brandName:"SEBAIF MOHAMMED" , firstNameLink:"About", secondNameLink:"Info", thirdNameLink:"Contact",fourthNameLink:"Footer",login:"login",signIn:"sign-in"}} /> 
         <HomePage/> 
    </>
  )
}

export default App
