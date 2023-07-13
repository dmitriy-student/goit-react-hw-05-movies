import css from './Gallery.module.css';

export default function Gallery({ children }) {
  return <ul className={css.gallery}>{children}</ul>;
}
