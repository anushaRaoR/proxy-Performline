Proxy Service

This is a Node JS proxy service to get around the CORS issue as the api.performline.com does not send the CORS headers. The node service communicates with the performline api since browsers block API responses without CORS header in development.

Steps :

Run `npm install` inside the directory “proxy”

After the dependencies are installed, run `node index.js` to start the node service.



