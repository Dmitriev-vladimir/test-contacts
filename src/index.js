import {Contact} from "./contact.js";

const URL = "http://127.0.0.1:3000";

(() => {
  window.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('app');

    const input = document.createElement('input');
    input.classList.add('search');
    const contactList = document.createElement('ul');
    contactList.classList.add('contacts');

    async function getContacts(term='') {
      let url = term === '' ? URL : `${URL}?term=${term}`;

      const request = await fetch(url);
      return await request.json()
    }

    function render(list) {
      contactList.innerHTML = '';
      list.forEach((contactData, index) => {
        const contact = new Contact(contactData);
        contactList.append(contact.card());
      });
    }

    container.append(input);
    container.append(contactList);

    input.addEventListener('input', async (e) => {
      const newContacts = await getContacts(e.target.value);
      render(newContacts);
    });

    const contacts = await getContacts();

    render(contacts);

  })
})()
