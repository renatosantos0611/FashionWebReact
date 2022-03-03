import React from 'react'
import '../Styles/login.css';

import { useNavigate, Link } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate()

  const GotoRegister = () => {
    navigate(`/register`)
  }

  const GotoForgotPass = () => {
    navigate(`/forgotpassword`)
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
          <input className='input' placeholder='exemple@exemple.com'></input>
        </div>

        <div className='box_input'>
          <p className='input_tx'>Senha</p>
          <input className='input' placeholder='****************' type='password' ></input>
        </div>

        <div className='box_forgot_pass'>
          <span className='forgot_tx' onClick={GotoForgotPass}>Esqueci a senha</span>
        </div>

        <div className='box_button'>
          <button className='btn_primary'>Login</button>
          <button className='btn_secundary' onClick={GotoRegister}  >Registrar-se</button>
        </div>

      </div>

    </div>
  );
}

export default LoginPage;
