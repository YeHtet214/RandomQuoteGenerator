
$('document').ready(function() {
  // Fetch data from api
  const fetchData = () => {
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(data => {
        generateQuote(data);
        console.log(data)
      })
  }
  let color;
  function generateQuote(data) {
    $('#text p').html(data.content);
    $('#author').html(data.author);

    // random color
    const colorGenerator = () => Math.floor(Math.random() * 255);
    color = `rgb(${colorGenerator()}, ${colorGenerator()}, ${colorGenerator()})`
    $('body').css({color: color, background: color});
    $('.links i').each((idx, el) => {
      el.style.background = color;
    });
    $('#new-quote').css('background', color);
  }

  $('#new-quote').click(fetchData);

  fetchData();
})
