const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius"
  ];
  
  const quoteElement = document.getElementById('quote');
  const generateBtn = document.getElementById('generateBtn');
  const shareBtn = document.getElementById('shareBtn');
  
  // Function to generate a random quote
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote;
  }
  
  // Event listener for the Generate Quote button
  generateBtn.addEventListener('click', generateRandomQuote);
  
  // Event listener for the Share Quote button
  shareBtn.addEventListener('click', () => {
    const quoteText = quoteElement.textContent;
    const shareUrl = `https://example.com/share?quote=${encodeURIComponent(quoteText)}`;
    window.open(shareUrl, '_blank');
  });
  
  // Initial quote generation
  generateRandomQuote();