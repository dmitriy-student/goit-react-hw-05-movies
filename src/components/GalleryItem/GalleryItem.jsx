import css from './GalleryItem.module.css';

export default function GalleryItem({ children }) {
  return <li className={css.item}>{children}</li>;
}
