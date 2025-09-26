import "./Form.css";
//TODO: set up a form, collect the users' data, send the data to the server
// - to store form values in state
// - submit event --> handler and listener
// - change event --> handler and listener
// - collect the data and update state --> we used the spread syntax
// - fetch the server POST route and send the form values

// fetch("http://localhost:8080/endpoint", {
//     headers:,
//     body:
// })

// - set up an accessible, validated form
// - remember to track the changes!
// - be consistent with your names!
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    username: "",
    content: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Post submitted successfully");
        setFormData({ username: "", content: "", age: "" });
      } else {
        console.error("Error submitting post");
      }
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <>
      <h1 className="Posts">Post your comments</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            type="text"
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
