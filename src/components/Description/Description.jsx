import s from './Description.module.css';

const Description = ({ title, description }) => {
  return (
    <div className={s.description}>
      <h1 className={s.title}>{title}</h1>
      <p className={s.description_text}>{description}</p>
    </div>
  );
};

export default Description;
