import axios from "axios";
import { useState } from "react"

const Login = () => {
    const [fromData, setFormData] = useState({ email: '', password: '' });
    const [message, setmessage] = useState('');

    const handlechnge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...fromData, [e.target.name]: e.target.value });
    }

    const handlesub = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:3000/api/login', fromData);
            const token = res.data.token;
            localStorage.setItem('token', token);
            setmessage('Login Successful')
        } catch (error) {
            console.log(error);
            
            setmessage('Login Failed!');
        }
    }
    return (
        <>
        <div style={{maxWidth: '400px', margin:'50px auto', textAlign: 'center'}}>
            <h2>Login</h2>
            <form onSubmit={handlesub}>
                <input type="email" name="email" placeholder="Email" onChange={handlechnge} required />
                <br /><br />
                <input type="password" name="password" placeholder="Password" onChange={handlechnge} required />
                <br /><br />

                <button type="submit">Login</button>
            </form>
            <p>{message}</p>
        </div>
        </>
    )
}

export default Login
