import React from 'react'
import '../Styles/login.css';

import { useNavigate } from "react-router-dom";

function ForgotPassPage() {

  const navigate = useNavigate()

  const GotoLogin = () => {
    navigate(`/login`)
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
          <p className='input_tx'>Infome o email de recuperação</p>
          <input className='input' placeholder='exemple@exemple.com'></input>
        </div>

        <div className='box_button'>
          <button className='btn_primary'>Enviar</button>
          <button className='btn_secundary' onClick={GotoLogin}  >Voltar para Login</button>
        </div>

      </div>

    </div>
  );
}

export default ForgotPassPage;
