"use strict";

const inputBookName = document.querySelector("#bookName");
const searchBtn = document.querySelector("#search");

// 책 검색
function searchBooks() {
  getBookData(inputBookName.value).then((books) => {
    displayBooks(books);
  });
  inputBookName.value = "";
  inputBookName.focus();
}

// 검색한 책의 데이터를 Kakao api를 통해 가져온다.
function getBookData(bookName) {
  return fetch(`https://dapi.kakao.com/v3/search/book?target=title&query=${bookName}`, {
    headers: {
      Authorization: "KakaoAK {카카오 API키 입력}",
    },
  })
    .then((response) => response.json())
    .then((json) => json.documents);
}

// 넘어온 데이터를 가지고 화면에 표시할 내용을 만든다.
function createBook(book) {
  const noImg = "https://3.bp.blogspot.com/-WhBe10rJzG4/U4W-hvWvRCI/AAAAAAAABxg/RyWcixpgr3k/s1600/noimg.jpg";
  return `
  <li class="book">
    <span class="title">${book.title}</span>
      <img
        src=${book.thumbnail === "" ? noImg : book.thumbnail}
      />
      <p>
        ${book.contents === "" ? "(내용이 없습니다.)" : book.contents}
      </p>
  </li>
  <hr />
  `;
}

// 만든 내용을 화면에 표시한다.
function displayBooks(books) {
  const bookList = document.querySelector(".book-list");
  bookList.innerHTML = books.map((book) => createBook(book)).join("");
}

// 클릭 검색
searchBtn.addEventListener("click", searchBooks);
//Enter 검색
inputBookName.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchBooks();
  }
});
