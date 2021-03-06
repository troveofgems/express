const
  PORT = process.env.PORT || 7776,
  express = require('express');

// Generate an express app with some security configurations
const App = require('../config/security')
  .configureSecurityForApp(express);

// Set The Server Side Rendering Template Engine
require('../config/templateEngine')
  .configureTemplatingEngine(App, __dirname);

// Open A Connection To The Application Database
//

// Link Application Routes
App.get('/', (req, res, next) => {
  const { ttogArtifact } = require('../Examples/images/baseEnc64/ttog');
  res.status(200).render('index', {
    success: true,
    html: `<p><img src=${ttogArtifact} alt="Trove of Gems Logo" /></p>`
  });
});

// Serve Public & Static Assets ??
App.use('/images', express.static('images'));


App.listen(PORT, () => console.log(`Port ${PORT} Connected...`));