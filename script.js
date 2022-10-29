const api_url = 'https://635c92fff0bc26795b00ed36.mockapi.io/book';

const userAction = async () => {
    const response = await fetch(api_url);
    console.log(response);
    const data = await response.json(); 
    show(data);
}
userAction();
function show(books){
    let tab =``;

    for (let book of books){
        tab += `<tr>
        <td>${book.bookCode}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.category}</td>
        <td> <input type="checkbox" checked="${book.approved}"> </td>
    </tr>
        `
    }
    document.getElementById("book-rows").innerHTML=tab;
}