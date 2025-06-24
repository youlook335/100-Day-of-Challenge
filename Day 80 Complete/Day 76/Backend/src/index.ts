import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors()); // This Package Connect Frontend
app.use(express.json())

app.post('/api/feedback', (req, res) => {
  console.log('Feedback received:', req.body);
  res.status(200).json({ message: 'Thank you for your feedback!' });
});

// app.get('/', (_req, res) => {
//   res.send('Local Express Server is running!');
// });

// app.get('/about', (_req, res) => {
//   res.send('Local Express Server is running And is Page About!');
// });

// app.get('/api/message', (req, res) => {
//   res.json({message : 'This is a JSON Confirm'})
// })

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
