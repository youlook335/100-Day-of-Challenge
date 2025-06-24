import axios from "axios";
import { useState } from "react"

function Form_data() {
    const [Form_data, setForm_data] = useState({ name: '', email: '', messgae: '' });
    const [response, setresponse] = useState('');

    const handlechnge = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm_data({ ...Form_data, [e.target.name]: e.target.value })
    }

    const handlesubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/feedback', FormData);
            setresponse(res.data.message)
        } catch (err) {
            setresponse('Something went wrong!');
        }
    }
    return (
        <><h2 style={{ textAlign: "center", fontSize: "28px", color: "#333" }}>Feedback Form</h2>

            <form
                onSubmit={handlesubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    maxWidth: '400px',
                    margin: '40px auto',
                    padding: '25px',
                    borderRadius: '15px',
                    background: 'linear-gradient(to right, #e3f2fd, #ffffff)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    fontFamily: 'Arial, sans-serif',
                }}
            >
                <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    onChange={handlechnge}
                    style={{
                        padding: '12px',
                        marginBottom: '15px',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                    }}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    onChange={handlechnge}
                    style={{
                        padding: '12px',
                        marginBottom: '15px',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                    }}
                />
                <input
                    name="message"
                    type="text"
                    placeholder="Your Message"
                    required
                    onChange={handlechnge}
                    style={{
                        padding: '12px',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '12px',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        width:'90px',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseOver={e => (e.currentTarget.style.backgroundColor = '#218838')}
                    onMouseOut={e => (e.currentTarget.style.backgroundColor = '#28a745')}
                >
                    Submit
                </button>
            </form>

            <p style={{ textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>{response}</p>

        </>
    )
}

export default Form_data
