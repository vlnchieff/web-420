let data = [
  { id: 1, title: "Web Dev for Vikings", author: "Chieff Weaver" },
  { id: 2, title: "MongoDB Mastery", author: "Tech Titan" }
];

function find() {
  return data;
}

function findOne(id) {
  return data.find(book => book.id === id);
}

module.exports = { data, find, findOne };
