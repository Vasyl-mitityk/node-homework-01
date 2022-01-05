const fs = require("fs/promises"); // for works with files
const contactsPath = require("./contactsPath");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

module.exports = listContacts;