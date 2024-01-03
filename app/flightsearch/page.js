'use client'

import { useState } from 'react';
export default function FlightSearch () {
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [flightNumber, setFlightNumber] = useState("");
    const [airline, setAirline] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [results, setResults] = useState([]);

    async function searchFlights() {
        const res = await fetch('http://api.aviationstack.com/v1/flights?access_key=32197ff0f8930d7075cc389ae27514d1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const flights = await res.json();
        setResults(flights);
    }

  return (
    <div className="mx-auto text-center pt-4 bg-gradient-to-b from-red-100 to-red-900 min-h-screen">
      <div className="min-w-0 flex-1">
        <h3 className="text-xl text-black-300 font-thin font-sans">WELCOME TO</h3>
        <h2 className="text-xl font-bold leading-7 text-white sm:truncate sm:text-8xl sm:tracking-tight">
          <span className="text-red-600">USC</span> <span className="text-yellow-500">RIDESHARE</span>
        </h2>
      </div>
      <div>
        <form>
            <label>
                <input type="radio" value="driver" checked={role === 'driver'} onChange={() => setRole('driver')} />
                Driver
            </label>
            <label>
                <input type="radio" value="passenger" checked={role === 'passenger'} onChange={() => setRole('passenger')} />
                Passenger
            </label>
            <input type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Enter your phone number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
            <input type="text" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
        </form>
        <input type="text" placeholder="Enter your flight number" value={flightNumber} onChange={e => setFlightNumber(e.target.value)} />
        <input type="text" placeholder="Enter your airline" value={airline} onChange={e => setAirline(e.target.value)} />
        <input type="text" placeholder="Enter your departure date" value={departureDate} onChange={e => setDepartureDate(e.target.value)} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={searchFlights} >
            Search
        </button>
      </div>
      <div>
        <span>Results: {results}</span>
      </div>
    </div>     
  );
}