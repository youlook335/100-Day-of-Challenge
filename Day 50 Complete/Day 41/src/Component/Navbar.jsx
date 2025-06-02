import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "15px 20px",
                backgroundColor: "#2c3e50",
                color: "#ecf0f1",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            }}>
                {/* Logo / Name */}
                <div style={{ fontWeight: "bold", fontSize: "24px", cursor: "default" }}>
                    MK
                </div>

                {/* Links */}
                <div>
                    <Link to="/" style={linkStyle}>Home</Link>
                    <Link to="/about" style={linkStyle}>About</Link>
                    <Link to="/contact" style={linkStyle}>Contact</Link>
                    <Link to="/help" style={linkStyle}>Help</Link>
                </div>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search..."
                    style={{
                        padding: "5px 10px",
                        borderRadius: "4px",
                        border: "none",
                        outline: "none",
                        fontSize: "16px"
                    }}
                />
            </nav>
        </>
    )
}

export default Navbar


const linkStyle = {
    margin: "0 15px",
    color: "#ecf0f1",
    textDecoration: "none",
    fontSize: "18px",
    transition: "color 0.3s",
};