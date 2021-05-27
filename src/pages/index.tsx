import styles from "../styles/Home.module.css";
import Homepage from "../components/Homepage";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Homepage />
    </div>
  );
};

export default Home;
