import React, { useState } from "react";

function BookForm(props: any) {
  const [form, setFrom] = useState({
    title: "",
    author: "",
    year: "",
  });
  const handleAddBook = () => {
    if (
      form.title.trim() !== "" &&
      form.author.trim() !== "" &&
      form.year.trim() !== ""
    ) {
      props.handleNewBook(form);
    } else {
      alert("Please enter all values");
    }

    setFrom({
      title: "",
      author: "",
      year: "",
    });
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type={"text"}
          placeholder="Title"
          value={form.title}
          onChange={(e) => setFrom({ ...form, title: e.target.value })}
          required
        />
        <input
          type={"text"}
          placeholder="Author"
          value={form.author}
          onChange={(e) => setFrom({ ...form, author: e.target.value })}
          required
        />
        <input
          type={"number"}
          placeholder="Year of Published"
          value={form.year}
          onChange={(e) => setFrom({ ...form, year: e.target.value })}
          required
        />
        <button onClick={() => handleAddBook()}>Add new Book</button>
      </div>
    </div>
  );
}

export default BookForm;
