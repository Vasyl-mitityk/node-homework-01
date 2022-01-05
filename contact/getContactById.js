const fs = require("fs/promises"); // for works with files
const listContacts = require("./listContacts");

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === contactId);
  if (!result) {
    return null;
  }
  return result;
};

module.exports = getContactById;