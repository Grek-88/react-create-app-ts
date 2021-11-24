import s from './FriendList.module.css';

type Data = {
  avatar: string,
  name: string,
  isOnline: boolean,
  id: number
};


interface Props {
  friends: Data[]
};

export default function FriendList({ friends }: Props) {
  return (
    <ul className="friend-list">
      {friends.map(el => (
        <li className={s.item} key={el.id}>
          <span className={el.isOnline ? s.online : s.offline}></span>
          <img className="avatar" src={el.avatar} alt={el.name} width="48" />
          <p className={s.name}>{el.name}</p>
        </li>
      ))}
    </ul>
  );
}
