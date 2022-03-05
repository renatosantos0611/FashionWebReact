import React, { useState } from 'react'
import '../Styles/login.css';
import { checkEmail, checkPassword, authenticate } from './login.functions';
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate()

  const [ emailInputError, setEmailInputError ] = useState({ message: '', error: false})
  const [ passwordInputError, setPasswordInputError ] = useState({ message: '', error: false})

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const GotoRegister = () => {
    navigate(`/register`)
  }

  const GotoForgotPass = () => {
    navigate(`/forgotpassword`)
  }

  const onChangeEmail = (value) => {
    setEmail(value)
    setEmailInputError(checkEmail(value))
  }

  const onChangePassword = (value) => {
    setPassword(value)
    setPasswordInputError(checkPassword(value))
  }

  const onSubmit = () => {

    const emailCheck = checkEmail(email)
    const passCheck = checkPassword(password)  

    setEmailInputError(emailCheck)
    setPasswordInputError(passCheck)

    if(emailCheck.error || passCheck.error){
      return
    }

    const resAuth = authenticate(email, password)
    
    if(resAuth.reference === 'email'){
      setEmailInputError(resAuth)
    }
    if(resAuth.reference === 'password'){
      setPasswordInputError(resAuth)
    }

  }

  return (  
    <div className="App">
      
      <span className='background_login'></span>
      
      <div className='box_login'>

        <span className='login_title'>Fashion</span>

        <span className='login_subtitle'>
        Moda, comportamento de uma dada época histórica. 
        É um sinônimo de "costume". 
        A palavra provém do termo latino modus, através do francês mode
        </span>

        <div className='box_input'>
          <p className='input_tx'>Email</p>

          <input  className='input' 
                  placeholder='exemple@exemple.com' 
                  value={email} 
                  onChange={(i) => onChangeEmail(i.target.value)} 
          />

          { emailInputError.error ? <span className='input_error_tx'>{emailInputError.message}</span> : null}
        </div>

        <div className='box_input'>
          <p className='input_tx'>Senha</p>

          <input  className='input' 
                  placeholder='**********' 
                  type='password' 
                  value={password}
                  onChange={(i) => onChangePassword(i.target.value)}  
          />
          { passwordInputError.error ? <span className='input_error_tx'>{passwordInputError.message}</span> : null}
        </div>

        <div className='box_forgot_pass'>
          <span className='forgot_tx' onClick={GotoForgotPass}>Esqueci a senha</span>
        </div>

        <div className='box_button'>
          <button className='btn_primary' onClick={onSubmit}>Login</button>
          <button className='btn_secundary' onClick={GotoRegister}  >Registrar-se</button>
        </div>

      </div>

    </div>
  );
}

export default LoginPage;
