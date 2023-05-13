
export const CustomForm = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e);
    }
  return (
    <form className="flex gap-2 text-base text-left" onSubmit={handleSubmit}>
        <div className="flex-1 relative grid gap-2">
            <label htmlFor="" className="block mb-2 text-sm font-medium text-white ">Typing</label>
            <input type="text"
            id="task"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 "
            //onInput={(e)=> setTask {e.target.value}}
            required
            autoFocus
            maxLength={60} 
            placeholder="Enter task"
             />
             <button className="flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500     " 
             aria-label="add task"
              type="submit">Search</button>
        </div>
    </form>
  )
}
