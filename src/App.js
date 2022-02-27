import React from 'react'
import './App.css';

function App() {
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
          <p className='input_tx'>Username</p>
          <input className='input' placeholder='exemple@exemple.com'></input>
        </div>

        <div className='box_input'>
          <p className='input_tx'>Password</p>
          <input className='input' placeholder='****************' type='password' ></input>
        </div>

        <span className='box_forgot_pass'>Esqueci a senha</span>

        <div className='box_button'>
          <button className='btn_primary'>Login</button>
          <button className='btn_secundary'>Register</button>
        </div>

      </div>

    </div>
  );
}

export default App;
