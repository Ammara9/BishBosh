// // Function to generate the Bish-Bosh 1.0 list
// function generateBishBosh() {
//     const outputDiv = document.querySelector('.bish-bosh-list');
//     let result = '';

//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 4 === 0) {
//             result += 'Bish-Bosh<br>'; // Divisible by both 3 and 4
//         } else if (i % 3 === 0) {
//             result += 'Bish<br>'; // Divisible by 3
//         } else if (i % 4 === 0) {
//             result += 'Bosh<br>'; // Divisible by 4
//         } else {
//             result += i + '<br>'; // Not divisible by 3 or 4
//         }
//     }

//     outputDiv.innerHTML = result; // Display the result in the HTML
// }

// // Call the function to generate the list
// generateBishBosh();


// Funktion för att generera Bish-Bosh-listan
function generateBishBosh(loopTal, bishTal, boshTal) {
    const resultDiv = document.querySelector('.bish-bosh-result');
    let result = '<ul>';
  
    for (let i = 1; i <= loopTal; i++) {
      if (i % bishTal === 0 && i % boshTal === 0) {
        result += `<li>${i} - Bish-Bosh</li>`; // Delbart med både bishTal och boshTal
      } else if (i % bishTal === 0) {
        result += `<li>${i} - Bish</li>`; // Delbart med bishTal
      } else if (i % boshTal === 0) {
        result += `<li>${i} - Bosh</li>`; // Delbart med boshTal
      } else {
        result += `<li>${i}</li>`; // Inte delbart med bishTal eller boshTal
      }
    }
  
    result += '</ul>';
    resultDiv.innerHTML = result; // Visa resultatet i HTML
  }

// Hämta inputfälten och knappen
const loopTalInput = document.getElementById('loop-tal');
const bishTalInput = document.getElementById('bish-tal');
const boshTalInput = document.getElementById('bosh-tal');
const startButton = document.getElementById('start-button');

// Lägg till en eventlyssnare till knappen
startButton.addEventListener('click', () => {
    const loopTal = parseInt(loopTalInput.value);
    const bishTal = parseInt(bishTalInput.value);
    const boshTal = parseInt(boshTalInput.value);

    if (!isNaN(loopTal) && !isNaN(bishTal) && !isNaN(boshTal) && loopTal > 0 && bishTal > 0 && boshTal > 0) {
        generateBishBosh(loopTal, bishTal, boshTal);
    } else {
        alert('Please enter positive numbers for all fields!');
    }
});