import { useState } from "react"

const Contact = () => {
  const [contact, setContact] = useState({
    username:"",
    email:"",
    message:"",
  });

  const handlerInp = (e) =>{
    let name = e.targer.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    })
  }

  //   setContact((prev) =>({
  //     ...prev,
  //     [name]: value,
  //   }))
  // }


  const handleSub = (e) =>{
    e.preventDefault();
  }
  return (
    <>
    <section>
      <main>
      <div className="section-registration">
          <div className="registration-form">
            <h1 className="heading">Contact</h1>
            <br />
            <form action="" onSubmit={handleSub}>
              <div>
                <label htmlFor="username">username</label>
                <br />
                <input 
                  type="text" 
                  name="username" 
                  placeholder="Enter your username"
                  id="usernamea"
                  required
                  autoComplete="off"
                  value={contact.username}
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
                  value={contact.email}
                  onChange={handlerInp}
                />
              </div>
              <div>
                <label htmlFor="message">message</label>
                <br />
                <textarea 
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handlerInp}
                  cols="40"
                  rows="5"
                >

                </textarea>
              </div>
              <br />
              <button type="submit" className="btn submit-btn">Submit now</button>
            </form>
          </div>
        </div>
      </main>
    </section>
    </>
  )
}

export default Contact