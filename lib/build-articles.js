const axios = require('axios');
const fs = require('fs');
const path = require('path');

axios('https://distance-school-server.herokuapp.com/articles/').then(
  ({ data }) => {
    fs.writeFileSync(
      path.join(__dirname, '../public', 'data', 'articles.json'),
      JSON.stringify(data)
    );
  }
);
