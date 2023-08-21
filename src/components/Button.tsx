import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  color?: string;
}

export function Button({ text }: ButtonProps) {
  return <button className={styles.button}>{text}</button>;
}
