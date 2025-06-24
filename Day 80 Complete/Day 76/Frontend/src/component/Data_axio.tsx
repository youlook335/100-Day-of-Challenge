import axios from "axios";
import { useEffect, useState } from "react"

const Data_axio = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('/api/message')
            .then(res => setMessage(res.data.message))
            .catch(err => console.error(err));
    }, [])

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Frontend Connected to Backend</h1>
                <p>{message}</p>
            </div>
        </>
    )
}

export default Data_axio;