import './App.css'

function App() {
  return (
    <div className="bg-[#f0f0f0] my-12 mx-auto md:p-8 p-2 md:w-[40%] w-full">
      <h1 className="text-2xl font-bold mb-4 text-center">React App on Form Creation</h1>

      <form className="w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md space-y-5">
        <div>
          <label>Name: </label>
          <input type="text" name="name" className='border border-gray-300 rounded-md p-1 w-full mt-2'/>
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" className='border border-gray-300 rounded-md p-1 w-full mt-2'/>
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" className='border border-gray-300 rounded-md p-1 w-full mt-2'/>
        </div>
        <button type="submit" className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full'>Submit</button>
      </form>
    </div>
  )
}

export default App