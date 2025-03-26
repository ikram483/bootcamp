function hotelCost(nights) {
    const pricePerNight = 140;
    return nights * pricePerNight;
  }
  
  function planeRideCost(destination) {
    const city = destination.toLowerCase();
    if (city === "london") return 183;
    if (city === "paris") return 220;
    return 300; 
  }
  
  function rentalCarCost(days) {
    const dailyRate = 40;
    let total = days * dailyRate;
    if (days > 10) {
      total *= 0.95; 
    }
    return total;
  }
  
  function totalVacationCost(nights, destination, carDays) {
    const hotel = hotelCost(nights);
    const flight = planeRideCost(destination);
    const car = rentalCarCost(carDays);
  
    return {
      hotel,
      flight,
      car,
      total: hotel + flight + car,
    };
  }
  
  document.getElementById("vacationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nights = parseInt(document.getElementById("nights").value);
    const destination = document.getElementById("destination").value.trim();
    const carDays = parseInt(document.getElementById("carDays").value);
  
    if (!nights || !destination || !carDays) {
      alert("Please fill in all fields!");
      return;
    }
  
    const costs = totalVacationCost(nights, destination, carDays);
  
    document.getElementById("result").innerHTML = `
       Plane ticket: $${costs.flight} <br>
       Hotel: $${costs.hotel} <br>
       Car Rental: $${costs.car.toFixed(2)} <br><br>
      <strong> Total: $${costs.total.toFixed(2)}</strong>
    `;
  });
  