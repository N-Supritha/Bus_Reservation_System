const buses = [
    { id: 1, from: "Bangalore", to: "Mysore", time: "08:00 AM", seats: 5 },
    { id: 2, from: "Shimoga", to: "Udupi", time: "10:30 AM", seats: 3 },
    { id: 3, from: "Bangalore", to: "Chikmagalur", time: "12:00 PM", seats: 4 },
    { id: 4, from: "Shimoga", to: "Bangalore", time: "11:00 PM", seats: 6 } 
  ];
  
  document.getElementById("searchBtn").addEventListener("click", () => {
    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const busList = document.getElementById("busList");
    busList.innerHTML = "";
  
    const filtered = buses.filter(b => 
      b.from.toLowerCase() === from.toLowerCase() && 
      b.to.toLowerCase() === to.toLowerCase()
    );
  
    if (filtered.length === 0) {
      busList.innerHTML = "<p>No buses found!</p>";
      return;
    }
  
    filtered.forEach(bus => {
      const div = document.createElement("div");
      div.classList.add("bus");
      div.innerHTML = `
        <p><strong>${bus.from} ➡ ${bus.to}</strong></p>
        <p>Time: ${bus.time}</p>
        <p>Seats Available: ${bus.seats}</p>
        <button onclick="bookBus(${bus.id})">Book Now</button>
      `;
      busList.appendChild(div);
    });
  });
  
  function bookBus(id) {
    const bus = buses.find(b => b.id === id);
    const booking = document.getElementById("booking");
    if (bus.seats > 0) {
      bus.seats -= 1;
      booking.innerHTML = `
        <h3>🎟️ Booking Confirmed!</h3>
        <p>Bus from ${bus.from} to ${bus.to} at ${bus.time}</p>
        <p>Remaining Seats: ${bus.seats}</p>
      `;
    } else {
      booking.innerHTML = "<p>❌ No seats available!</p>";
    }
  }