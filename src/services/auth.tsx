export function signIn(userName, password) {
  const userData = {name: 'test', password: '123456'};
  if (userData.name === userName && userData.password === password) {
    return true;
  } else {
    return false;
  }
  // return new Promise(resolve => {
  //   resolve({
  //     user: {
  //       name: 'test',
  //       password: '123456',
  //     },
  //   });
  // });
}
