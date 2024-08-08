var elBooksList = document.querySelector("#js-books-list");

for (const book of books) {
  var newItems = document.createElement("li"),
    newImg = document.createElement("img"),
    newTitleWrapper = document.createElement("div"),
    newTitle = document.createElement("h3"),
    newTextWrapper = document.createElement("div"),
    newText = document.createElement("p"),
    newList = document.createElement("ul"),
    newYearItem = document.createElement("li"),
    newPagesItem = document.createElement("li"),
    newLanguagesItem = document.createElement("li"),
    newLink = document.createElement("a");

  newItems.classList.add("books__items");
  newImg.classList.add("books__img");
  newTitleWrapper.classList.add("books__title-wrapper");
  newTitle.classList.add("books__title");
  newTextWrapper.classList.add("books__text-wrapper");
  newText.classList.add("books__author");
  newList.classList.add("list_unstyled");
  newList.classList.add("flex_box");
  newList.classList.add("books__info-list");
  newYearItem.classList.add("books__info-items");
  newYearItem.classList.add("books__year");
  newPagesItem.classList.add("books__info-items");
  newPagesItem.classList.add("books__pages");
  newLanguagesItem.classList.add("books__info-items");
  newLanguagesItem.classList.add("books__language");
  newLink.classList.add("link_unstyle");
  newLink.classList.add("books__link");

  newImg.src = book.imageLink;
  newImg.alt = `${book.imageLink}'s poster`;
  newImg.width = "260";
  newImg.height = "320";
  newTitle.textContent = book.title;
  newText.textContent = `Author ${book.author}`;
  newYearItem.textContent = book.year;
  newPagesItem.textContent = book.pages;
  newLanguagesItem.textContent = book.language;
  newLink.textContent = `More Information ➞`;

  newLink.href = book.link;
  newLink.setAttribute("target", "blanck");

  newTitleWrapper.appendChild(newTitle);
  newTextWrapper.appendChild(newText);
  newList.append(newYearItem, newPagesItem, newLanguagesItem);
  newItems.append(newImg, newTitleWrapper, newTextWrapper, newList, newLink);
  elBooksList.appendChild(newItems);
}
// "author": "Chinua Achebe",
// "country": "Nigeria",
// "imageLink": "images/things-fall-apart.jpg",
// "language": "English",
// "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
// "pages": 209,
// "title": "Things Fall Apart",
// "year": 1958
