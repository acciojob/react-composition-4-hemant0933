import React, { useState } from 'react';

const Form = () => {
    const [name,setName] = useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            name,
            email,
            password
        }
        console.log(obj);
    } 


  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} /><br/>
        <label htmlFor="email">Email</label>
        <input type='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/> <br/>
        <label htmlFor="password">Password</label>
        <input type='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/> <br/>
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
