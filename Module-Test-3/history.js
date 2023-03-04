const searchPageBtn = document.getElementById('searchPage')
searchPageBtn.addEventListener("click",() => {
    console.log("working");

    window.location.href = 'index.html'
})


function showHistory(history, index){
    return `
    <div class="history_tab" id="histroyTab" data-search-id=${index}>
        <p class="serial_number" id="serialNumber">${index}.</p>
        <div class="history_contents" id="historyContents" >
            <p class="book_name" id="bookName">${history.search}</p>
            <p class="search_at" id="searchedAt">Searched on: 
                <span class="date_time"  id="dateTime">${history.date} at ${history.time}</span>
            </p>
        </div>
    </div>
    `
}

let historyTabWrapper = document.getElementById('historyWrapper')
let historyTabs;
const historyData = JSON.parse(localStorage.getItem('history'))
console.log(historyData);
historyTabs = historyData.map((history,index) => showHistory(history,index+1))
historyTabWrapper.innerHTML = historyTabs.join("")

historyTabWrapper.addEventListener("click",(event) =>{
    console.log("working");
    let searched;
    if(event.target.classList.contains('history_tab')){
        const id = parseInt(event.target.getAttribute('data-search-id'));
        const index = historyData.findIndex((history) => history.id === id);
        if(index !== -1){
            searched = historyData[index]
            sessionStorage.setItem('searched',JSON.stringify(searched))
            window.location.href = "searched.html"
        }
    }
})



const clearSearchBtn = document.getElementById('clearSearch')
clearSearchBtn.addEventListener("click",() => {
    console.log("working");
    localStorage.removeItem('history')
    historyTabWrapper.innerHTML = ""
})