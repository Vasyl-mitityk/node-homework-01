const fs = require("fs/promises"); // for works with files
const contactsPath = require("./contactsPath");

const listContacts = require("./listContacts");

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === contactId);
  if (idx === -1) {
    return null;
  }
  const [remeveContact] = contacts.splice(idx, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return remeveContact;
};

module.exports = removeContact;