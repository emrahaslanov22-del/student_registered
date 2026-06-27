import React from "react";

const styles = {
  Card: {
    width: "350px",
    padding: "20px",
    marginTop: "40px",
    marginLeft: "30px",
    border: "2px solid #4a90e2",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  },

  Image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    margin: "0 auto 20px",
    border: "3px solid #4a90e2",
  },

  Title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#4a90e2",
  },

  Text: {
    fontSize: "18px",
    marginBottom: "12px",
    paddingBottom: "5px",
    borderBottom: "1px solid #ddd",
  },
};

export default function StudentCard({ studnet }) {
  return (
    <section style={styles.Card}>
      <img style={styles.Image} src={studnet.image} alt={studnet.name} />

      <h2 style={styles.Title}>Student Card</h2>

      <div style={styles.Text}>Name: {studnet.name}</div>

      <div style={styles.Text}>Surname: {studnet.surname}</div>

      <div style={styles.Text}>Age: {studnet.age}</div>

      <div style={styles.Text}>Score: {studnet.score}</div>
    </section>
  );
}
