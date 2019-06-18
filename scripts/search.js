function showSearch() {
   var search = document.getElementById("forSer")
       search.classList.toggle("openSearch");
   var searchIcon = document.getElementById("searchIcon");
    searchIcon.style.display = "none";
     
}

function closeSearch() {
//    var forSearch = document.getElementById("forSer")
//    forSearch.classList.close("openSearch")
       var search = document.getElementById("forSer")
       search.classList.toggle("openSearch");
     var searchIcon = document.getElementById("searchIcon");
    searchIcon.style.display = "block";
}