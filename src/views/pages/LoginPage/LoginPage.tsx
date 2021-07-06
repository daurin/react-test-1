import Joi from 'joi';
import React, { useEffect, useState } from 'react'
import LoginUseCase from '../../../domain/login/LoginUseCase';
import TextField from '../../components/TextField';
import { useHistory } from "react-router-dom";


export default function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [attempts, setAttempts] = useState(0);

    const history = useHistory();

    useEffect(() => {

        const attemptsSession: number = parseInt(sessionStorage.getItem('attempts') || '0');
        console.log(attemptsSession);
        setAttempts(attemptsSession);
        if (attemptsSession === 3) setPasswordError('Too many wrong attempts');
    }, []);

    const validateForm = (): boolean => {
        const usernameValidation = Joi.string().required().max(10).alphanum().validate(username).error;
        const passwordValidation = Joi.string().required().alphanum().validate(password).error;
        if (usernameValidation !== undefined) setUsernameError(usernameValidation?.message || '');
        if (passwordValidation !== undefined) setPasswordError(passwordValidation?.message || '');

        if (usernameValidation === undefined) setUsernameError('');
        if (passwordValidation === undefined) setPasswordError('');

        return usernameValidation === undefined && passwordValidation === undefined;
    };

    const onSubmit = async (e: any) => {
        e.preventDefault();
        if (attempts > 3) return;

        if (validateForm()) {
            new LoginUseCase().call({
                username: username,
                password: password,
            }).then(async (response) => {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                if (jsonResponse.success) {
                    history.push('/home');
                    sessionStorage.setItem('username',username);
                }
                else {
                    setAttempts(attempts + 1);
                    sessionStorage.setItem('attempts', (attempts + 1).toString());
                    if ((attempts + 1) === 3) setPasswordError('Too many wrong attempts');
                    else setPasswordError(jsonResponse.exception);

                }
            }).catch(err => {
                console.log(err);
            });
        }
    };



    return (
        <div className="" style={{
            margin: 'auto',
            maxWidth: '500px',
            padding: '10px',
        }}>

            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <TextField
                    name="username"
                    label='Username'
                    style={{ marginBottom: '15px' }}
                    value={username}
                    errorText={usernameError}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    name="password"
                    label='Password'
                    type='password'
                    style={{ marginBottom: '15px' }}
                    value={password}
                    errorText={passwordError}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    value="Submit"
                    className="btn btn-primary btn-lg btn-block"
                    disabled={attempts >= 3}
                >
                    SignIn
                </button>
            </form>

        </div >
    )
}
