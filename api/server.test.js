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
//1

//2

//login
//1

//2

//get users
//1

//2

//get jokes
//1

//2
