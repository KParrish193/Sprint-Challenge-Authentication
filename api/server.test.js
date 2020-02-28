const request = require("supertest");
const server = require("./server.js");
const db = require("../database/dbConfig.js");

//server
describe("server", () => {
    //1
    test("runs the tests", () => {
    expect(true).toBe(true);
    });

    //2
    test("should use testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
    })
});

//register
describe("POST to /api/register", () => {
    test("should return status 201 CREATED", () => {
        return request(server)
            .post("/api/auth/register")
            .send({ username:"testname1", password:"testpassword" })
            .then(res => {
                expect(res.status).toBe(201);
        });
    });

    test("should return JSON formatted body", () => {
        return request(server)
            .post("/api/auth/login")
            .then(res => {
                expect(res.type).toMatch(/json/);
        });
    });
});

//login
describe("POST to /api/login", () => {
    test("should return status 200 OK", () => {
        return request(server)
            .post("/api/auth/login")
            .send({ username:"testname1", password:"testpassword" })
            .then(res => {
                expect(res.status).toBe(200);
        });
    });

    test("should return JSON formatted body", () => {
        return request(server)
            .post("/api/auth/login")
            .then(res => {
                expect(res.type).toMatch(/json/);
        });
    });
});


//get users
describe("GET to /api/users", () => {
//1
    test("should return 200 OK", function() {
    return request(server)
        .get("/api/users")
        .then(res => {
            expect(res.status).toBe(200);
        });
    });  

//2
    test("should return JSON formatted body", function() {
        return request(server)
            .get("/api/users")
            .then(res => {
                expect(res.type).toMatch(/json/);
            });
    });
}); 

//get jokes
describe("GET to /api/jokes", () => {
//1
    test("should return 200 OK", function() {
        return request(server)
            .get("/api/jokes")
            .then(res => {
                expect(res.status).toBe(200);
            });
        });  
//2
    test("should return JSON formatted body", function() {
        return request(server)
            .get("/api/jokes")
            .then(res => {
                expect(res.type).toMatch(/json/);
            });
        });
//3
    test("should return an array of cohorts (async version)", async function() {
    const res = await request(server).get("/api/jokes");

    expect(Array.isArray(res.body)).toBe(true);
    });
});