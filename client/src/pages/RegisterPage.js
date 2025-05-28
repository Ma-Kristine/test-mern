import {useState} from 'react';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    async function register(ev) {
        ev.preventDefault();
        const response = await fetch('https://replit.com/@Ma-Kristine-RKr/my-blog-site/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
        });
        if (response.status == 200) {
            alert('Registration successful!');
        } else {
            alert('Registration failed.');
        }
    }

    return (
        <form className="register" onSubmit={register}>
            <h1>Create an Account</h1>

            <input type="text" 
                placeholder="Username" 
                value={username} 
                onChange={ev => setUsername(ev.target.value)}
            />

            <input type="password" 
                placeholder="Password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
            />

            <button>Register</button>
        </form>
    );
}