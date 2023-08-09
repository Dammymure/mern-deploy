import './App.css';
import { useState } from 'react'
import axios from 'axios';
import swal from "sweetalert"

function App() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  })

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(`${process.env.REACT_APP_API_URL}/user/create`, user)
      .then((response) => {
        swal(response.data.msg === "User created successfully" ? "Succesfully Registered" : "Seller already exists",
          response.data.msg,
          response.data.msg === "User created successfully" ? "success" : "error")
      }).catch((err) => {
        console.log(err)
      })
  }



  const [result, setResult] = useState('')

  async function fetchInfo() {
    const url = `${process.env.REACT_APP_API_URL}/test`
    const response = await fetch(url)
    const json = await response.json()
    setResult(json)
  }


  return (<>
    <div className="">
      <button onClick={fetchInfo}>Fetch info from API: </button>
      <div>result:{result}</div>
    </div>

    <form class="row register-form" onSubmit={handleSubmit}>
      <div class="col-md-6">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="fullname *"
            name="fullname"
            value={user.fullname}
            onChange={handleInputs} />
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password *"
            name="password"
            value={user.password}
            onChange={handleInputs} />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Your Email *"
            name="email"
            value={user.email}
            onChange={handleInputs} />
        </div>
        <button type='submit' class="btn btn-primary btnRegister">Register</button>
        {/* <input type="submit" class="btnRegister" value="Register" /> */}
      </div>
    </form>
  </>);
}

export default App;
