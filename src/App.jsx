import { CustomForm } from "./components/CustomForm"

function App() {
  return (
    <div className="mx-4vw max-w-screen-lg sm:mx-auto">
     <div className="grid gap-y-8 md:gap-y-[3.5vmax] text-center">
      <header><h1 className="text-3xl text-center ">My Task List</h1></header>
      <CustomForm />
     </div>
     </div>
  )
}

export default App
