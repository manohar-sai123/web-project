const users = [
    {
      username: "ironman",
      password: "123456789"
    },
    {
      username: "camerica",
      password: "frozen"
    }
  ]
  
  // CRUD functions
  let getUsers = () => users;
  
  function getUsers2() {
    return users;
  }
  
  // export functions so can utilize them in another
  // file in application
  module.exports = {getUsers, getUsers2}