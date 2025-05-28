//Vercel Analytics
import { Analytics } from '@vercel/analytics/next';
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// POST route to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, mob, message } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com', // Replace with your email address
      pass: 'your-password' // Replace with your password
    }
  });

  // Email content
  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com', // Replace with your email address
    subject: 'New message from contact form',
    text: `${name} (${email}) says: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error: Could not send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
