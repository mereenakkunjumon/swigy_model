import {useState}from "react"
const Grocery=()=>{
  const [formData, setFormData] = useState({username:""});
  const handlechange=(e)=>{
    setFormData({[e.target.name]: e.target.value });
    console.log(e.target.value)
  }

  return(
    <div>
      <form>
        <h1>login</h1>
        <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handlechange}
            className="w-full p-2 border border-gray-300 rounded"
          />
      </form>
    </div>
  ) 
}
export default Grocery;