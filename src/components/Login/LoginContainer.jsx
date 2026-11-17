import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import LoginForm from './LoginForm';

const LoginContainer = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const handleLogin = (data) => {

        const auth = getAuth();

        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("logged-in user:", user);
                alert("Successfull login!");
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Login error:", errorCode, errorMessage);
                alert("Error: " + errorMessage);
            });

    };

    return (
        <LoginForm
            register={register}
            handleSubmit={handleSubmit(handleLogin)}
            errors={errors}
        />
    )
}

export default LoginContainer;