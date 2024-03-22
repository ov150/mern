// import React from 'react'

import { useState } from "react"

const Register = () => {
  const [user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password: "",
  });

  const handlerInp = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value,

    })
  }
  const handleSub = (e) =>{
    e.preventDefault();
    alert(user);
  }
  return (
    <>
    <section>
      <main>
        <div className="section-registration">
          <div className="registration-form">
            <h1 className="heading">registration</h1>
            <br />
            <form action="" onSubmit={handleSub}>
              <div>
                <label htmlFor="username">username</label>
                <br />
                <input 
                  type="text" 
                  name="username" 
                  placeholder="Enter your name"
                  id="username"
                  required
                  autoComplete="off"
                  value={user.username}
                  onChange={handlerInp}
                />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <br />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email"
                  id="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handlerInp}
                />
              </div>
              <div>
                <label htmlFor="phone">phone</label>
                <br />
                <input 
                  type="number" 
                  name="phone" 
                  placeholder="Enter your phone number"
                  id="phone"
                  required
                  autoComplete="off"
                  value={user.phone}
                  onChange={handlerInp}
                />
              </div>
              <div>
                <label htmlFor="password">password</label>
                <br />
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Enter your password"
                  id="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handlerInp}
                />
              </div>
              <br />
              <button type="submit" className="btn submit-btn">Register Now</button>
            </form>
          </div>
        </div>
      </main>
    </section>
    </>
  )
}

export default Register