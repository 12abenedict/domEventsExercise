
// 1a
const button1 = document.getElementById('one');
// 1b
button1.onclick = () => alert("You Clicked Button One");

// 2a
const button2 = document.getElementById('two');
// 2b
button2.addEventListener('dblclick', () => alert("You DOUBLE Clicked The Second Button!!!!!!"));

// BONUS
// 3a
const form = document.querySelector('form');
// 3b
form.addEventListener('submit', () => {
    // p.preventDefault();
    const username = form.elements.username.value
    const input = document.querySelector('input');
    input.innerText = `${username}`;
    alert(`${username}`);
})

// 4a
const darkMode = document.getElementById('dm');
// 4b
const all = document.querySelectorAll('*');
darkMode.addEventListener('click', () => {
   for (element of all){
       element.classList.toggle('dark-mode')
   }
    
});

// A For Loop could also be used