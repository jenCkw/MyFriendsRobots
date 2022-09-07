import React, {useState} from "react";
import "./style.css";

export default function SearchBar({ value, onChange}) {
  return (
    <div className="search-bar">
      <input 
        type="text"
        name="search"
        placeholdr="Rechercez par nom"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}