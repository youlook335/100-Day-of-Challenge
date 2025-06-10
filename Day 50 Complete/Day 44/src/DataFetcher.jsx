import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(jsonData => {
        setData(jsonData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={styles.loading}>Loading...</p>;
  if (error) return <p style={styles.error}>Error: {error}</p>;

  // Agar sirf pehla user dikhana hai:
return (
 <div style={styles.container}>
  <h1 style={styles.heading}>Users List</h1>
  {data.map(user => (
    <div key={user.id} style={styles.card}>
      <h3>{user.id}</h3>
      <h1 style={styles.title}>{user.name}</h1>
      <p style={styles.body}><strong>Username:</strong> {user.username}</p>
      <p style={styles.body}><strong>Phone:</strong> {user.phone}</p>
      <p style={styles.body}><strong>Website:</strong> {user.website}</p>
      <p style={styles.body}><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
      <p style={styles.body}><strong>Company:</strong> {user.company.name}</p>
      <p style={styles.body}><strong>CatchPhrase:</strong> {user.company.catchPhrase}</p>
      <p style={styles.body}><strong>BS:</strong> {user.company.bs}</p>
      <p style={styles.body}><strong>Zipcode:</strong> {user.address.zipcode}</p>
      <p style={styles.body}><strong>Suite:</strong> {user.address.suite}</p>
      <p style={styles.body}><strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p>
      <p style={styles.body}><strong>Email:</strong> {user.email}</p>
    </div>
  ))}
</div>

);

}

const styles = {
  container: {
    maxWidth: '700px',
    margin: '30px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '25px',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '15px 20px',
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  title: {
    color: '#007bff',
    marginBottom: '10px',
  },
  body: {
    color: '#555',
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#666',
  },
  error: {
    textAlign: 'center',
    fontSize: '18px',
    color: 'red',
  }
};

export default DataFetcher;
