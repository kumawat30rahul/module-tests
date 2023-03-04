const searched = JSON.parse(sessionStorage.getItem('searched'))
console.log(searched);
let  historyCardDiv = document.getElementById("bookCardWrapper")
let tab = document.getElementById('historyWrapper')
let histories;
let historiesTab;
histories = searched.bookData.map(item => {
    return historyCard(item)
})
historyCardDiv.innerHTML = histories.join("")

historiesTab = historyTab(searched,0)
tab.innerHTML = historiesTab



function historyCard(item){
    let book = item.volumeInfo
    return `
    <div class="card">
        <div class="book_image" id="bookIMG">
            <img src="${ book.imageLinks ? book.imageLinks.smallThumbnail : 'image not found'}" alt="" class="image" id="Image">
        </div>
        <div class="book_contents" id="bookContents">
            <p class="title" id="Title">Title: ${book.title.slice(0,40)}</p>
            <p class="author" id="Author">Author: ${book.authors ? book.authors : 'NA'}</p>
            <p class="page_count" id="pageCount">Page Count: ${book.pageCount ? book.pageCount : 'NA'}</p>
            <p class="publisher" id="Publisher">Publisher: ${book.publisher ? book.publisher : 'NA'}</p>
        </div>
        <div class="booknow_button" id="booknowButton">
            <button class="btn" id="BTN">BOOK NOW</button>
        </div>
    </div>
    `
}

function historyTab(searched,index){
    return `
    <div class="history_tab" id="histroyTab">
        <p class="serial_number" id="serialNumber">${index +1 }.</p>
        <div class="history_contents" id="historyContents" >
            <p class="book_name" id="bookName">${searched.search}</p>
            <p class="search_at" id="searchedAt">Searched on: 
                <span class="date_time"  id="dateTime">${searched.date} at ${searched.time}</span>
            </p>
        </div>
    </div>
    `
}

const backButton = document.getElementById('backPage')
backButton.addEventListener("click",()=>{
    window.location.href = 'history.html'
})