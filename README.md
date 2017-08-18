- Author: ghartong
- Created: June 2017
- Description: base for React SPA 

Look at Gruntfile.js and package.json for build/dev commands
Webpack.config.js has settings for min and ugly of css and js

Gruntfile.js uses Replace to update css and index.html files. Webpack/SASS not playing nice with ../ in background url paths. 
Base href gets updated based on environment. Update variables at top of gruntfile.js if needed.