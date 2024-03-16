const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Serve static files (uploaded files)
app.use('/uploads', express.static('uploads'));

// Handle file uploads
app.post('/upload', upload.fields([{ name: 'pdf', maxCount: 10 }, { name: 'video', maxCount: 10 }, { name: 'audio', maxCount: 10 }]), (req, res) => {
  // Access the uploaded files via req.files
  const pdfFiles = req.files['pdf'];
  const videoFiles = req.files['video'];
  const audioFiles = req.files['audio'];

  // Process the files as needed (e.g., save file information to a database)

  res.json({ message: 'Files uploaded successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
