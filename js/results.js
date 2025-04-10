window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    document.getElementById("final-score").textContent = score;
  
    let message = '';
    if (score == 5) {
      message = 'Excellent! You have a great understanding'
    }
}
  