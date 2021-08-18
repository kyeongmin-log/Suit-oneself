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

function searchBook() {
  const bookName = $("#bookName").val();

  getBookData(bookName);
  $("#bookName").val("");
  $("#bookName").focus();
}

function getBookData(bookName) {
  $.ajax({
    type: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    headers: {
      Authorization: "KakaoAK {카카오 API키 입력}",
    },
    data: {
      query: `${bookName}`,
    },
    success: function (result) {
      const bookList = result.documents.map((book) => createBook(book));
      $("#book-list").html(bookList);
    },
  });
}

$(document).ready(() => {
  $("#search").click(searchBook);
  $("#bookName").on("keypress", (event) => {
    if (event.key === "Enter") searchBook();
  });
});
