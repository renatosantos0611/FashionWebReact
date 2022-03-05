import React from 'react'
import '../Styles/login.css';

import { useNavigate } from 'react-router-dom';

function RegisterPage() {

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

            <span className='login_title'>Cadastrar-se</span>

            <div className='box_input'>
                <p className='input_tx'>Nome</p>
                <input className='input' placeholder='James'/>
            </div>

            <div className='box_input'>
                <p className='input_tx'>Sobrenome</p>
                <input className='input' placeholder='Bond'/>
            </div>

            <div className='box_input'>
                <p className='input_tx'>Email</p>
                <input className='input' placeholder='exemple@exemple.com'/>
            </div>

            <div className='box_input'>
                <p className='input_tx'>Senha</p>
                <input className='input' placeholder='****************' type='password' ></input>
            </div>

            <div className='box_input'>
                <p className='input_tx'>Confirmar Senha</p>
                <input className='input' placeholder='****************' type='password' />
            </div>

            <div className='box_input'>
                <div className="input_tx">
                    <input type='checkbox'/>
                    <> Li e concordo com os Termos e Políticas</>
                </div>  
            </div>

            <div className='box_button'>
                <button className='btn_primary'>Registrar-se</button>
                <button className='btn_secundary' onClick={GotoLogin}>Voltar para Login</button>
            </div>

            </div>

        </div>
    );
}

export default RegisterPage;
