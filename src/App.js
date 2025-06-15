import React, { useState } from "react";

const Header = () => (
  <header style={styles.header}>
    Cinemateca Boliviana
  </header>
);

const Menu = ({ setPage }) => (
  <nav style={styles.menu}>
    <button onClick={() => setPage("principal")} style={styles.button}>Principal</button>
    <button onClick={() => setPage("peliculas")} style={styles.button}>Películas</button>
  </nav>
);

const Cartilla = ({ actor, img }) => (
  <div style={styles.card}>
    <img src={img} alt={actor} style={styles.img} />
    <h3>{actor}</h3>
  </div>
);

const Principal = () => (
  <div style={styles.cardContainer}>
    <Cartilla actor="Betterman" img="https://m.media-amazon.com/images/M/MV5BYWU3YzU0NTItMGVlYi00YTFmLWE5MmQtNjg4ODQ3ZWYyNjRkXkEyXkFqcGc@._V1_.jpg" />
    <Cartilla actor="Rocketman" img="https://m.media-amazon.com/images/M/MV5BMTMxODlkMzMtMTE0MC00NWYzLWJkYTUtMmJkZTEwYjM4YmU4XkEyXkFqcGc@._V1_.jpg" />
    <Cartilla actor="Barbie" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwEFrTzcM9bTdQeDhY5OrlpkNqp2yPTsDJ9w&s" />
  </div>
);

const Modal = ({ show, onClose, title, summary }) => {
  if (!show) return null;
  return (
    <div style={styles.modalBackdrop}>
      <div style={styles.modal}>
        <h2>{title}</h2>
        <p>{summary}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

const Peliculas = () => {
  const [modalData, setModalData] = useState({ show: false, title: "", summary: "" });

  const peliculas = [
    { titulo: "La nación clandestina", resumen: "Película boliviana dirigida por Jorge Sanjinés." },
    { titulo: "Cuestión de fe", resumen: "Película de Marcos Loayza, humor político y cultural." },
    { titulo: "American Beauty", resumen: "Un hombre con crisis de mediana edad busca sentido a su vida." },
    { titulo: "The Godfather", resumen: "Historia de una familia mafiosa ítalo-estadounidense." },
    { titulo: "Roma", resumen: "Un retrato íntimo de la vida doméstica en México en los años 70." },
  ];

  return (
    <div style={styles.peliculas}>
      {peliculas.map((peli, i) => (
        <button
          key={i}
          onClick={() => setModalData({ show: true, title: peli.titulo, summary: peli.resumen })}
          style={styles.peliButton}
        >
          {peli.titulo}
        </button>
      ))}
      <Modal {...modalData} onClose={() => setModalData({ ...modalData, show: false })} />
    </div>
  );
};

const Footer = () => (
  <footer style={styles.footer}>
    <span>Jose Luis Mamani Ventura</span>
    <span>INF122</span>
  </footer>
);

const App = () => {
  const [page, setPage] = useState("principal");

  return (
    <div>
      <Header />
      <Menu setPage={setPage} />
      {page === "principal" ? <Principal /> : <Peliculas />}
      <Footer />
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#8B0000',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 'bold'
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '10px',
    backgroundColor: '#B22222'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px'
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    textAlign: 'center',
    width: '30%',
    borderRadius: '10px'
  },
  img: {
    width: '100%',
    borderRadius: '10px'
  },
  peliculas: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  peliButton: {
    padding: '15px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    cursor: 'pointer'
  },
  footer: {
    marginTop: '40px',
    padding: '15px',
    backgroundColor: '#222',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between'
  },
  modalBackdrop: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '400px'
  }
};

export default App;
