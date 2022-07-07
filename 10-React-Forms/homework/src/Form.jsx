import React,{useState} from 'react';
export default function  Form() {
  const [input , setInput ] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log([input.username,input.password])
  }

  const handleInputChange = function(e) {

    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }
  

  return (
        <form onSubmit={ handleSubmit }>
          <label>Username:</label>
            <input
            key='username'
            className={errors.username && 'danger'}
            name='username'
            type='text' 
            placeholder='UserName'
            value={input.username}
            onChange={handleInputChange}
            >
            </input>
            <br></br>
            <label>Password:</label>
            <input
            key='password'
            className={errors.password && 'danger'}
            name='password'
            type='password' 
            placeholder='name'
            value={input.password}
            onChange={handleInputChange}
            ></input>
            <br></br>
            <input 
            type='submit' 
            placeholder='enviar' 
            ></input>
        </form>
      
  )
}


export const validate = (input)=>{
  let errors = {};
  if(!input.username){
    errors.username = 'Username is required';
  } else if(!/\S+@\S+\.\S+/.test(input.username)){
    errors.username = 'Username is invalid';
  }
  if(!input.password){
    errors.password = 'Password is required';
  }else if(!/(?=.*[0-9])/.test(input.password)){
    errors.password = 'Password is invalid';
  }

  return errors;
}
