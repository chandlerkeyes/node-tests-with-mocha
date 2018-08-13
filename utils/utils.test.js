const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
  var res = utils.add(33,11);
  expect(res).toBe(44).toBeA('number');

  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}.`);
  // }
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
  // if (res !== 4) {
  //   throw new Error(`Expected 4, but got ${res}.`);
  // }
  done();
});

it('should async square two numbers', (done) => {
  utils.asyncSquare(2, (res) => {
    expect(res).toBe(4).toBeA('number');
    done();
  })
})

// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   expect({name: 'Chandler'}).toEqual({name: 'Chandler'});
//   expect([2,3,4]).toInclude(2);
//   expect({
//     name: 'Chandler',
//     age: 19,
//     location: "Michigan"
//   }).toExclude({
//     age: 12
//   })
// });

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
