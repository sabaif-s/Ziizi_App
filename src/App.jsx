
import { useState,React } from 'react'
import { useEffect,Suspense,lazy } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const SelectedNavBar=lazy(()=> import("./components/navbar/selectedNavBar"));

  return (
    <>
    <Suspense fallback={<div>Loading Nav Bar</div>} >
        <SelectedNavBar selected={"sticky"} selectedNames={{brandName:"SEBAIF MOHAMMED" , firstNameLink:"About", secondNameLink:"Info", thirdNameLink:"Contact",fourthNameLink:"Footer",login:"login",signIn:"sign-in"}} />
        </Suspense>
      {/* <SelectedNavBar selected={"language"}  selectedNames={{brandName:"SEBAIF MOHAMMED" , firstNameLink:"About", secondNameLink:"Info", thirdNameLink:"Contact",fourthNameLink:"Footer",login:"login",signIn:"sign-in"}} />  */}
         {/* <SelectedNavBar selected={"search"}  selectedNames={{brandName:"SEBAIF MOHAMMED" , firstNameLink:"About", secondNameLink:"Info", thirdNameLink:"Contact",fourthNameLink:"Footer",login:"login",signIn:"sign-in"}} /> 
         <SelectedNavBar selected={"megaMenu"}  selectedNames={{brandName:"SEBAIF MOHAMMED" , firstNameLink:"About", secondNameLink:"Info", thirdNameLink:"Contact",fourthNameLink:"Footer",login:"login",signIn:"sign-in"}} /> 
         <SelectedNavBar selected={"avatar"}  selectedNames={{brandName:"SEBAIF MOHAMMED" , firstNameLink:"About", secondNameLink:"Info", thirdNameLink:"Contact",fourthNameLink:"Footer",login:"login",signIn:"sign-in"}} />  */}
    </>
  )
}

export default App
