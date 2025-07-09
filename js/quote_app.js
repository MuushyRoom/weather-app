const quote_container = document.querySelector('.weather-details-container')

function displayQuotes(data){

console.log("🚀 ~ displayQuotes ~ data:", data)
quote_container.innerHTML=`<p class="text-quote">"${data.text}"</p>
<p class="text-quote-author">- ${data.author}</p>`;
  


}