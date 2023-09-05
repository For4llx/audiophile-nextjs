import BaseIconHamburger from "../BaseIconHamburger";
import styles from "./ButtonHamburger.module.scss";

const ButtonHamburger: React.FC = () => {
  return (
    <button className={styles.container}>
      <BaseIconHamburger />
    </button>
  );
};

export default ButtonHamburger;
