const selectedSeatEl =document.getElementById('selectedSeat');
const totalBookedEl = document.getElementById('totalBooked');
const availableSeatEl = document.getElementById('available-seat');
const totalPriceEl = document.getElementById('total-price');
const hideNoSelectedEl = document.getElementById('hideNoSelected');

let selectedSeat = [];
let totalPrice = 0 ;
function selectSeat(event){
    event.classList.add('bg-primary');
    event.classList.add('text-white');

    selectedSeat.push(event.innerText);
    totalBookedEl.innerText = selectedSeat.length;

    // decrease available seat count
    let availableSeatValue = parseInt(availableSeatEl.innerText);
    let newAvailableSeatValue = availableSeatValue - 1;
    availableSeatEl.innerText = newAvailableSeatValue;

      // hide no seat li element 
      hideNoSelectedEl.classList.add('hidden');

    selectedSeatEl.innerHTML += `
        <li class="flex justify-between py-4 text-gray-950 opacity-60">
                                <p>${event.innerText}</p>
                                <p>Economy</p>
                                <p>550</p>
                            </li> `;

     
    // total price
    totalPrice += 550;
    totalPriceEl.innerText = totalPrice.toFixed(2);
}