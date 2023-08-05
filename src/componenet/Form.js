import React, { useEffect, useState } from 'react'

function Form() {
    const data ={name:"",email:"",password:""}
    const [inputData, setInputData]=useState(data)
    const[flag,setflag]=useState(false)

    useEffect(()=>{
        // console.log('Registered')
    },[flag])


    // onchange event handler function
    function handleData(e){
        setInputData({...inputData,[e.target.name]:e.target.value});
        // console.log(inputData)
    }


    // input field check whether input is given are not
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name  || !inputData.email || !inputData.password){
            alert('all fields are mandatory')
        }
        else(
            setflag(true)
        )
    }

  return (
    <>
    <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name},You Have Registered succssfully</h2>:""}</pre>
    <form className='container' onSubmit={handleSubmit}>
        <div className="header">
            <h1>Registration Form</h1>
        </div>
        <div>
            <input type="text" name='name' value={inputData.name} onChange={handleData} placeholder='Enter Your Name' />
        </div>
        <div>
            <input type="email" name='email' value={inputData.email} onChange={handleData} placeholder='Enter Your Email' />
        </div>
        <div>
            <input type="password" name='password' value={inputData.password} onChange={handleData} placeholder='Enter Your Password' />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>    
    </form>
    </>
  )
}

export default Form

// whatever is in the return sttement that wiull be excuted only once because we have use usestate hook
// we want to show the succesufuly registered line after submiting the form that requires re-rendering of webpage this can be achieve by useeffect hook
// we know that in useefect hook whatever the dependency we have given whenever changes occur to the dependency the page will re-render and we can display the registered succesful in line


//useEffect-->rerendering webpage whenever changes occur flag dependency(in short to re-render the webpage after the submit btn clicked)