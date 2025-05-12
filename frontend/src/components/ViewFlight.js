// // import React from 'react';
// // import '../pagestyles/Searchflights.css'; // Import the CSS file
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faPlane } from '@fortawesome/free-solid-svg-icons';
// // import { useNavigate, Link } from 'react-router-dom';

// // const Searchflights = () => {
// //   const navigate = useNavigate();
// //   return (
// //     <div className="search-container">
// //       <header className="header-">
// //         <h1 className="logo">
// //           <FontAwesomeIcon icon={faPlane} className="logo-icon-" />
// //           JetVoyage
// //         </h1>
// //         <nav className="nav-links-">
// //           <button className="nav-button-" onClick={() => navigate('/flightsearchinside')}>Flights</button>
// //           <button className="nav-button-" onClick={() => navigate('/hotel')}>Hotels</button>
// //           <button className="nav-button-" onClick={() => navigate('/carhire')}>Car Hire</button>
// //         </nav>
// //       </header>
// //       <main className="main-content-">
// //         <h2 className="search-header-">Search Flights</h2>
// //         <div className="search-section-">
// //           <select className="search-input-">
// //             <option>One Way</option>
// //             <option>Round Trip</option>
// //             <option>Multi-City</option>
// //           </select>
// //           <input type="text" className="search-input-" placeholder="From: Country, city or airport" />
// //           <input type="text" className="search-input-" placeholder="To: Country, city or airport" />
// //           <input type="date" className="search-input-" placeholder="Depart" />
// //           <input type="date" className="search-input-" placeholder="Return" />
// //           <select className="search-input-">
// //             <option>1 Adult, Economy</option>
// //             <option>2 Adults, Economy</option>
// //             <option>1 Adult, Business</option>
// //           </select>
// //           <button className="search-button-">Search</button>
// //         </div>
// //         <div className="flights-section">
// //           <h3>Available Flights</h3>
// //           <ul>
// //             <li>
// //               <span className="flight-details">From: New Delhi, India</span>
// //               <span className="flight-details">To: Mumbai, India</span>
// //               <span className="flight-details">Date: Tue, May 13, 2025</span>
// //               <span className="flight-price">₹5,000</span>
// //               <button className="view-details" onClick={() => navigate('/booking')}>View Details</button>
// //             </li>
// //             <li>
// //               <span className="flight-details">From: New Delhi, India</span>
// //               <span className="flight-details">To: Mumbai, India</span>
// //               <span className="flight-details">Date: Tue, May 13, 2025</span>
// //               <span className="flight-price">₹5,446</span>
// //               <button className="view-details" onClick={() => navigate('/booking')}>View Details</button>
// //             </li>
// //             <li>
// //               <span className="flight-details">From: New Delhi, India</span>
// //               <span className="flight-details">To: Mumbai, India</span>
// //               <span className="flight-details">Date: Tue, May 13, 2025</span>
// //               <span className="flight-price">₹6000</span>
// //               <button className="view-details" onClick={() => navigate('/booking')}>View Details</button>
// //             </li>
// //             <li>
// //               <span className="flight-details">From: New Delhi, India</span>
// //               <span className="flight-details">To: Mumbai, India</span>
// //               <span className="flight-details">Date: Tue, May 13, 2025</span>
// //               <span className="flight-price">₹3000</span>
// //               <button className="view-details" onClick={() => navigate('/booking')}>View Details</button>
// //             </li>
// //             <li>
// //               <span className="flight-details">From: New Delhi, India</span>
// //               <span className="flight-details">To: Mumbai, India</span>
// //               <span className="flight-details">Date: Tue, May 13, 2025</span>
// //               <span className="flight-price">₹4,446</span>
// //               <button className="view-details" onClick={() => navigate('/booking')}>View Details</button>
// //             </li>
// //             <li>
// //               <span className="flight-details">From: New Delhi, India</span>
// //               <span className="flight-details">To: Mumbai, India</span>
// //               <span className="flight-details">Date: Tue, May 13, 2025</span>
// //               <span className="flight-price">₹8,446</span>
// //               <button className="view-details" onClick={() => navigate('/booking')}>View Details</button>
// //             </li>
            
// //             {/* More flight entries can be added here */}
// //           </ul>
         
// //         </div>
// //         {/* <div className="image-section">
// //           <img src="/image2.jpg" alt="Booking" className="side-image" />
// //         </div> */}
// //       </main>
// //     </div>
// //   );
// // };

// // export default Searchflights;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlane, faHeart } from '@fortawesome/free-solid-svg-icons';
// import '../pagestyles/Saved.css';

// const ViewFlight = () => {
//   const [flights, setFlights] = useState([]);
//   const [searchParams, setSearchParams] = useState({ origin: '', destination: '' });
//   const navigate = useNavigate();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const origin = queryParams.get('origin');
//   const destination = queryParams.get('destination');

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get('http://localhost:2000/flights/search', {
//         params: { origin: searchParams.origin, destination: searchParams.destination }
//       });
//       setFlights(response.data);
//     } catch (error) {
//       console.error('Error fetching flights:', error);
//     }
//   };

//   const getFlightStatusClass = (departureTime) => {
//     const currentDate = new Date();
//     const flightDate = new Date(departureTime);
//     return flightDate < currentDate ? 'flight-past' : 'flight-upcoming';
//   };

//   return (
//     <div className="saved-container">
//       <header className="header">
//         <h1 className="logo">
//           <FontAwesomeIcon icon={faPlane} className="logo-icon" onClick={() => navigate('/flightsearchinside')} />
//           JetVoyage
//         </h1>
//         <nav className="nav-links">
//           <button className="button" onClick={() => navigate('/flightsearchinside')}>Flights</button>
//           <button className="button" onClick={() => navigate('/hotel')}>Hotels</button>
//           <button className="button" onClick={() => navigate('/carhire')}>Car hire</button>
//         </nav>
//       </header>
//       <div className="content">
       
//         <div className="view-flights-container">
//           <h2>Available Flights from {origin} to {destination}</h2>
//           <ul>
//             {flights.map((flight) => (
//               <li key={flight.id}>
//                 {flight.origin} to {flight.destination} | Departure: {flight.departureTime} | Price: {flight.price}
//               </li>
//             ))}
//           </ul>
//         </div>
       
//       </div>
//     </div>
//   );
// };

// export default ViewFlight;






import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate ,Link } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../pagestyles/Searchflights.css';

const ViewFlight = () => {
  const [flights, setFlights] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  // Extract origin and destination from URL query parameters
  const queryParams = new URLSearchParams(location.search);
  const origin = queryParams.get('origin');
  const destination = queryParams.get('destination');

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        // Make a GET request to the backend, passing origin and destination as query parameters
        const response = await axios.get('http://localhost:2000/flights/search', {
          params: { origin: origin, destination: destination }
        });
        console.log(response.data); // Debugging: Check the API response
        setFlights(response.data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    // Only fetch flights if both origin and destination are provided
    if (origin && destination) {
      fetchFlights();
    }
  }, [origin, destination]);

  return (
    <div className="view-flights-container">
      <header className="header">
         <h1 className="logo">
           <FontAwesomeIcon icon={faPlane} className="logo-icon-" onClick={() => navigate('/flightsearchinside')} />
           JetVoyage
         </h1>
         <nav className="nav-links-">
           <button className="nav-button-" onClick={() => navigate('/flightsearchinside')}>Flights</button>
           <button className="nav-button-" onClick={() => navigate('/hotel')}>Hotels</button>
           <button className="nav-button-" onClick={() => navigate('/carhire')}>Car hire</button>
         </nav>
       </header>
       <h2>Available Flights from {origin} to {destination}</h2>
       <div className="flightdetails">
        {flights.length > 0 ? (
        <ul>
          {flights.map((flight) => (
            <li key={flight.id}>
              {flight.origin} to {flight.destination} | Departure: {flight.departureTime} | Price: {flight.price} |     
              <button className="view-details" onClick={() => navigate('/booking')}>Book</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights found for the selected route.</p>
      )}
      </div>
      
    </div>
        
    
  );
};

export default ViewFlight;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import '../pagestyles/Searchflights.css';

// const ViewFlight = () => {
//   const [flights, setFlights] = useState([]);
//   const location = useLocation();

//   const queryParams = new URLSearchParams(location.search);
//   const origin = queryParams.get('origin');
//   const destination = queryParams.get('destination');

//   useEffect(() => {
//     const fetchFlights = async () => {
//       try {
//         const response = await axios.get('http://localhost:2000/flights/search', {
//           params: { origin, destination }
//         });
//         setFlights(response.data);
//       } catch (error) {
//         console.error('Error fetching flights:', error);
//       }
//     };

//     fetchFlights();
//   }, [origin, destination]);

//   return (
//     <div className="view-flights-container">
//       <h2>Available Flights from {origin} to {destination}</h2>
//       <ul>
//         {flights.map((flight) => (
//           <li key={flight.id}>
//             {flight.origin} to {flight.destination} | Departure: {flight.departureTime} | Price: {flight.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ViewFlight;
