const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keydown", function(event){
 if(event.code === "Enter") {
        search();
    }	
});
function search() {
	 const input = searchInput.value;
	   window.location.href = "https://www.baidu.com/s?ie=" + input + "utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + input + "&fenlei=256&rsv_pq=e8f3536a00030d6f&rsv_t=32b4cY2MexEnB4h9SxDDpO3QCahjrS3LVfqmAgmWAqvMyH52CJv6YJgiJZ8&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=11&rsv_sug1=10&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&prefixsug="
} 