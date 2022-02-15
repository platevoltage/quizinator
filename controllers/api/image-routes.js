
const router = require("express").Router();
const upload = require('./uploadMiddleware');
const Resize = require('./Resize');
const path = require('path');

router.post('/', upload.single('image'), async function (req, res) {
    console.log(req.file);
    const imagePath = path.join(__dirname, '../../public/images/');
    const fileUpload = new Resize(imagePath);
    
    if (!req.file) {
      res.status(401).json({error: 'Please provide an image'});
    }
    const filename = await fileUpload.save(req.file.buffer);
    res.status(200).json({ name: filename });
    
  });



  
  module.exports = router;