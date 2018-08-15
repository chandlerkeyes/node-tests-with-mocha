const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
  it('should add two numbers', () => {
    var res = utils.add(33,11);
    expect(res).toBe(44).toBeA('number');
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square the number entered', (done) => {
    var res = utils.square(2);
    expect(res).toBe(4).toBeA('number');
    done();
  });

  it('should async square two numbers', (done) => {
    utils.asyncSquare(2, (res) => {
      expect(res).toBe(4).toBeA('number');
      done();
    })
  })
});

it('should set first and last name', () => {
    var user = {
      age: 19,
      location: 'Michigan'
    };
    var res = utils.setName(user, "Chandler Keyes");
    expect(res).toInclude({
      firstName: 'Chandler', lastName: 'Keyes'
    });
});
