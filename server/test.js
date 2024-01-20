import chai from 'chai';
import chaiHttp from 'chai-http';
const { app } = await import('./app.js'); 
chai.use(chaiHttp);
const expect = chai.expect;

describe('Server Tests', function () {
  it('should generate greetings for a valid input', async function () {
    const response = await chai
      .request(app)
      .post('/generate-greeting')
      .send({
        event: 'birthday',
        age: 25,
        type: 'formal',
        atmosphere: 'joyful',
      });

    expect(response).to.have.status(200);
    expect(response.body).to.have.property('greetings');
  });

  it('should handle missing parameters gracefully', async function () {
    const response = await chai
      .request(app)
      .post('/generate-greeting')
      .send({});

    expect(response).to.have.status(500); 
    expect(response.body).to.have.property('error');
  });

  it('should handle an invalid age gracefully', async function () {
    const response = await chai
      .request(app)
      .post('/generate-greeting')
      .send({
        event: 'wedding',
        age: 'gjh',
        type: 'casual',
        atmosphere: 'fun',
      });

    expect(response).to.have.status(500); // Assuming 500 is used for internal server error
    expect(response.body).to.have.property('error');
  });

  // Add more tests as needed

  after(() => {
    // Cleanup or additional tasks after all tests run
  });
});
