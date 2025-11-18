const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Coding Practice</title></head>');
        res.write('<body><h1>Welcome to Home Page</h1></body>');
        res.write('</html>');
        return res.end();
    } 
    
    else if (req.url === '/about') {
        res.setHeader("Content-Type", 'text/html');
        res.write('<html>');
        res.write("<head><title>Coding About Page</title></head>");
        res.write('<body>');
        res.write('<h1>Welcome to our About Page</h1>');
        res.write('<p>We have started this server on 18 Nov 2025. Owner is Aditya Shukla.</p>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } 
    
    else if (req.url === '/contact') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Coding Contact</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to Contact Page</h1>');
        res.write('<p>Contact us on email, phone no.</p>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    // Default case
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>404 Page not found</h1>");
    res.end();
});

// ---------------------------------------------
// 🔥 Server should be started OUTSIDE callback
// ---------------------------------------------
const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
