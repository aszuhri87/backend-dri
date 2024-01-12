const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");
const db = require("../config/database")

chai.use(chaiHttp);
chai.should();

let customer_id = null;

describe("Customer", async () => {

  await describe("/GET Customer Data", () => {
    it("it should get Customer Data", (done) => {
      chai
        .request(app)
        .get("/customer")
        .end((err, res) => {
          done();
        });
    });
  });

  await describe("/POST Customer Data", () => {
    let data = {
      name: "customer test mocha"
    };

    it("it should POST a Customer Data", (done) => {
      chai
        .request(app)
        .post("/customer")
        .send(data)
        .end((err, res) => {
          customer_id = res.body.data.id;

          console.log(customer_id);

          res.should.have.status(200);
          res.body.should.be.a("object");

          done();
        });
    });
  });

  after(function (done) {
    db.query(`
        DELETE FROM customer WHERE id=${customer_id}
    `)
      .then(function () {
        done();
      });
  });
});

let transaction_id = null;

describe("Transaction", async () => {

  await describe("/GET Transaction Data", () => {
    it("it should get Transaction Data", (done) => {
      chai
        .request(app)
        .get("/transaction")
        .end((err, res) => {
          done();
        });
    });
  });

  await describe("/POST Transaction Data", () => {
    let data = {
      menu: "ice test",
      qty: 1,
      price: "500",
      total: 1,
      payment: "bank",
      customer_id: customer_id
    };

    it("it should POST a Transaction Data", (done) => {
      chai
        .request(app)
        .post("/transaction")
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");

          done();
        });
    });
  });

  after(function (done) {
    db.query(`
        DELETE FROM transaction WHERE id=${transaction_id}
    `)
      .then(function () {
        done();
      });
  });
});
