
const http = require('http');
const fs = require('fs');
const url = require('url');

const PORT = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    res.setHeader('Content-Type', 'application/json');

    // Route 1: Home page
    if (pathname === '/' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({
            message: 'Welcome to Student Information Server',
            endpoints: [
                '/students',
                '/student?id=1'
            ]
        }));
    }

    // Route 2: Display all students using fs
    else if (pathname === '/students' && req.method === 'GET') {
        fs.readFile('students.json', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end(JSON.stringify({
                    error: 'Unable to read student data'
                }));
            }

            res.writeHead(200);
            res.end(data);
        });
    }

    // Route 3: Display a student by ID using url
    else if (pathname === '/student' && req.method === 'GET') {
        const id = parsedUrl.query.id;

        if (!id) {
            res.writeHead(400);
            return res.end(JSON.stringify({
                error: 'Please provide a student ID'
            }));
        }

        fs.readFile('students.json', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end(JSON.stringify({
                    error: 'Unable to read student data'
                }));
            }

            const students = JSON.parse(data);
            const student = students.find(s => s.id === Number(id));

            if (student) {
                res.writeHead(200);
                res.end(JSON.stringify(student));
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({
                    error: 'Student not found'
                }));
            }
        });
    }

    // Route 4: Add a new student using fs
    
    else if (pathname === '/add-student' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            let newStudent;

            try {
                newStudent = JSON.parse(body);

                if (
                    !newStudent.name ||
                    !newStudent.department ||
                    !Number.isInteger(newStudent.year) ||
                    newStudent.year < 1
                ) {
                    res.writeHead(400);
                    return res.end(JSON.stringify({
                        error: 'Provide name, department, and a valid year'
                    }));
                }
            } catch {
                res.writeHead(400);
                return res.end(JSON.stringify({
                    error: 'Invalid JSON data'
                }));
            }

            fs.readFile('students.json', 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(500);
                    return res.end(JSON.stringify({
                        error: 'Unable to read student data'
                    }));
                }

                try {
                    const students = JSON.parse(data);

                    newStudent.id = students.length
                        ? Math.max(...students.map(s => s.id)) + 1
                        : 1;

                    students.push(newStudent);

                    fs.writeFile(
                        'students.json',
                        JSON.stringify(students, null, 2),
                        err => {
                            if (err) {
                                res.writeHead(500);
                                return res.end(JSON.stringify({
                                    error: 'Unable to save student data'
                                }));
                            }

                            res.writeHead(201);
                            res.end(JSON.stringify({
                                message: 'Student added successfully',
                                student: newStudent
                            }));
                        }
                    );
                } catch {
                    res.writeHead(500);
                    res.end(JSON.stringify({
                        error: 'Invalid student data file'
                    }));
                }
            });
        });
    }

    // Route 5: Handle invalid routes
    else {
        res.writeHead(404);
        res.end(JSON.stringify({
            error: 'Route not found'
        }));
    }
});

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
