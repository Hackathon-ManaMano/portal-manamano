import { useState } from 'react';
import Head  from 'next/head';
import HeaderPublic from '../../components/HeaderPublic';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

export default function Login(){
    const [senha, setSenha] = useState('');
    const [login, setLogin]= useState('');
    return (
        <>
            <Head>
                <title>ManaMano login</title>
                <link rel="icon" href="/icon-manamano.png" />
            </Head>
            <HeaderPublic/>
           
            <div id='login' className='justify-content-center card'>
                <br />
                <div className="field">

                <span className="p-float-label">
                    <InputText id="in" value={login} onChange={(e) => setLogin(e.target.value)} />
                    <label htmlFor="in">Login</label>
                </span>
                </div>
                <br />
                <div className="fields">

                <span className="p-float-label">
                    <Password inputId="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                </span>
                <br />
                </div>
                <Button label="ENTRAR" className="p-button-secondary" />
            </div>
            
        </>
          
    );
}