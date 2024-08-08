var contacts = [];
var elForm = document.querySelector("#js-form"),
  elUserNameInput = elForm.querySelector("#js-user-name"),
  elRelationshipInput = elForm.querySelector("#js-relationship"),
  elPhoneInput = elForm.querySelector("#js-phone");
var elContactList = document.querySelector("#js-contacts-list");

// console.log(
//   elContactList,
//   elForm,
//   elPhoneInput,
//   elRelationshipInput,
//   elUserNameInput
// );
elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  var contactInObj = {};
  var userName = elUserNameInput.value;
  var relationship = elRelationshipInput.value;
  var phoneNumber = elPhoneInput.value.replaceAll("+", "");
  if (userName.length == 0) {
    alert("Enter contact's name");
  } else if (userName.length < 2 || userName.length > 40) {
    alert("Name length error");
  } else {
    contactInObj.userName = userName;
  }
  if (relationship.length == 0) {
    alert("Enter contact's relationship");
  } else {
    contactInObj.relationship = relationship;
  }
  if (phoneNumber.length == 0) {
    alert("Enter phone number");
  } else if (phoneNumber.match(/[a-zA-Z]/gi)) {
    alert("Phone contact's number contains a letters");
  } else {
    contactInObj.phoneNumber = +phoneNumber;
  }

  var size = Object.keys(contactInObj).length;

  if (size == 3) {
    contacts.push(contactInObj);
  }

  // console.log(phoneNumber);
  // console.log(contacts);
  elContactList.innerHTML = ``;

  for (const contact of contacts) {
    var newItem = document.createElement("li"),
      newLink = document.createElement("a"),
      newDiv = document.createElement("div"),
      newTitle = document.createElement("h4"),
      newRel = document.createElement("span"),
      newNumber = document.createElement("span");

    newTitle.textContent = contact.userName;
    newRel.textContent = contact.relationship;
    newNumber.textContent = `+${contact.phoneNumber}`;

    newItem.classList.add("hero__items");
    newLink.classList.add("hero__phone-link");
    newDiv.classList.add("hero__info-wrapper");
    newTitle.classList.add("hero__username");
    newRel.classList.add("hero__relationship");
    newNumber.classList.add("hero__phone");

    newLink.href = `tel:+${contact.phoneNumber}`;

    newDiv.append(newTitle, newRel);
    newLink.append(newDiv, newNumber);
    newItem.appendChild(newLink);

    elContactList.appendChild(newItem);
  }
});
