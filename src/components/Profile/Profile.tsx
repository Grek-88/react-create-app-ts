import s from './Profile.module.css';

interface Proile {
  name: string,
  tag: string,
  location: string,
  avatar: string,
  stats: {
    followers: number,
    views: number,
    likes: number
  }
};

export default function Profile(props: Proile) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={props.avatar}
          alt="Аватар пользователя"
          className={s.avatar}
        />
        <p className={s.name}>{props.name}</p>
        <p className={s.tag}>@{props.tag}</p>
        <p className={s.location}>{props.location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{props.stats.followers}</span>
        </li>
        <li className={s.item + ' ' + s.itemCentr}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{props.stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
