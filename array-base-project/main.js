const funnyWords = ["Anda","Deliya","Shampo", "Biryani", "Chai", "Tamatar","kullfi", "Pakora", "Qeema", "Lassi", "Chappal","Mirch", "Daal", "Nihari"];
const funnyEndings = ["OP", "99", "420", "78", "LOL", "Noob", "Pro", "X", "123"];


function generatePassword() {
  const word1 = funnyWords[Math.floor(Math.random() * funnyWords.length)];
  const word2 = funnyWords[Math.floor(Math.random() * funnyWords.length)];
  const end = funnyEndings[Math.floor(Math.random() * funnyEndings.length)];
  
  const password = word1 + word2 + end;
  document.getElementById("passwordOutput").innerText = password;
  

}

function copyPassword() {
  
  const text = document.getElementById("passwordOutput").innerText;
  if (text !== "Your Password Will Appear Here!!!!") {
    navigator.clipboard.writeText(text);
    alert("Copied!: Tu bn gya a hacker bhi");

  } else {
    alert("Phle Generate to kr ly password aya bda hacker!");
  }
}
