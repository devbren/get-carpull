const router = require('express').Router();
const { User, Cars } = require('../models');
const withAuth = require('../utils/auth');

app.post("/upload", uploader.single("file"), async (req, res) => {
    const upload = await cloudinary.v2.uploader.upload(req.file.path);
    return res.json({
      success: true,
      file: upload.secure_url,
    });
  });

  module.exports = cloudinary;