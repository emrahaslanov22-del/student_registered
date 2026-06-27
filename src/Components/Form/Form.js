import React, { useState } from "react";
import StudentObject from "../../Object/StudnetObject.js";
import StudentCard from "../StudentCard/StudentCard.js";

const styles = {
    ComponenetDiv:{
    display: "flex",
    alignItems: "flex-start",
    gap: "30px",
    padding: "20px",
    },

  FormSection: {
    border: "2px solid #4a90e2",
    width: "350px",
    padding: "20px",
    margin:"0",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    backgroundColor: "#f8f9fa",
  },

  Title: {
    textAlign: "center",
    marginBottom: "20px",
  },

  Label: {
    display: "block",
    marginTop: "10px",
    marginBottom: "5px",
    fontWeight: "bold",
  },

  Input: {
    width: "100%",
    padding: "8px",
    border: "1px solid gray",
    borderRadius: "5px",
    marginBottom: "10px",
    boxSizing: "border-box",
  },

  Button: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#4a90e2",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default function Form() {
  const [studnet, setStudnet] = useState(StudentObject);
  const [submittedStudent, setSubmittedStudent] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (studnet.name.trim() === "" || studnet.surname.trim() === "") {
      alert("Name and surname cannot be empty.");
      return;
    }

    if (studnet.age < 16 || studnet.age > 39) {
      alert("Age must be between 16 and 39.");
      return;
    }

    if (studnet.score < 10 || studnet.score > 100) {
      alert("Score must be between 10 and 100.");
      return;
    }

    setSubmittedStudent(studnet);
    setStudnet(StudentObject);
  }

  return (
    <div style={styles.ComponenetDiv}>
      <section style={styles.FormSection}>

        <form onSubmit={handleSubmit}>

          <h3 style={styles.Title}>Stundet Form</h3>

          <label style={styles.Label}>Name</label>
          <input
            style={styles.Input}
            type="text"
            value ={studnet.name}
            onChange={(e) =>
              setStudnet({
                ...studnet,
                name: e.target.value,
              })
            }
          />

          <br />
          <label style={styles.Label}> Surname</label>

          <input
            style={styles.Input}
            type="text"
            value ={studnet.surname}
            onChange={(e) =>
              setStudnet({
                ...studnet,
                surname: e.target.value,
              })
            }
          />

          <br />
          <label style={styles.Label}>Age</label>

          <input
            style={styles.Input}
            type="number"
            value={studnet.age}
            onChange={(e) =>
              setStudnet({
                ...studnet,
                age: e.target.value,
              })
            }
          />

          <br />
          <label style={styles.Label}>Score</label>

          <input
            style={styles.Input}
            type="number"
            value = {studnet.score}
            onChange={(e) =>
              setStudnet({
                ...studnet,
                score: e.target.value,
              })
            }
          />

          <button style={styles.Button} type="submit">
            Send
          </button>
        </form>

      </section>
      
      {submittedStudent && (<StudentCard studnet={submittedStudent} />)}
    
    </div>
  );
}
