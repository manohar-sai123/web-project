const users = [
    {
      title: "suny new paltz",
      content: "web project",
    },
    {
      title: "america",
      content: "place",
    }
  ]
  
  // CRUD functions
  let getNotes = () => notes;
  
  function getNotes2() {
    return notes;
  }
  
  // export functions so can utilize them in another
  // file in application
  module.exports = {getNotes, getNotes2}