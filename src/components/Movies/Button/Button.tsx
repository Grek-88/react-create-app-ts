import s from "../Button/Button.module.css";

interface Props {
  onClick: ()=> void
};

export default function Button({ onClick }: Props) {
  return (
    <button type="button" className={s.Button} onClick={onClick}>
      Load more
    </button>
  );
}
