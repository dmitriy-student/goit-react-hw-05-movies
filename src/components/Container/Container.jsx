import css from './Container.module.css';

export default function Container({ children }) {
  return <section className={css.container}>{children}</section>;
}
