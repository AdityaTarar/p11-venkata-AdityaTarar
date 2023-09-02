import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserPreferences } from "../Store/Slices/userPreferencesSlice";

function UserPreferencesForm() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateUserPreferences({ category, priceRange }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price Range"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
      />
      <button type="submit">Update Preferences</button>
    </form>
  );
}

export default UserPreferencesForm;
