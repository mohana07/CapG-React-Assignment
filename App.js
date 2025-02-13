import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";

const songs = [
  { id: 1, title: "Peaches", price: "$2", genre: "Pop" },
  { id: 2, title: "Love Yourself", price: "$3", genre: "Acoustic Pop" },
  { id: 3, title: "Sorry", price: "$2.5", genre: "Dancehall Pop" },
  { id: 4, title: "Baby", price: "$3", genre: "Teen Pop" },
  { id: 5, title: "What Do You Mean?", price: "$2", genre: "Tropical House" },
  { id: 6, title: "Yummy", price: "$2.5", genre: "R&B Pop" },
  { id: 7, title: "Intentions", price: "$2", genre: "Hip-Hop Pop" },
  { id: 8, title: "Ghost", price: "$3", genre: "Pop" },
  { id: 9, title: "Hold On", price: "$2", genre: "Pop Rock" },
  { id: 10, title: "As Long As You Love Me", price: "$2.5", genre: "R&B" },
];

function MusicApp() {
  const [query, setQuery] = useState("");

  // Filter songs based on search input
  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center">Justin Bieber Songs Search</h2>
      
      {/* Search Input */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search songs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="input-group-text">
          <FaSearch />
        </span>
      </div>

      {/* Songs Table */}
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song) => (
              <tr key={song.id}>
                <td>{song.id}</td>
                <td>{song.title}</td>
                <td>{song.price}</td>
                <td>{song.genre}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No songs found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MusicApp;

// Ensure dependencies are installed
// Run the following command in the terminal if you encounter errors:
// npm install bootstrap react-icons
