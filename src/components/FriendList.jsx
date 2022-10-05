import { FriendListItem } from './FriendListItem';
import css from '../components/modules/friendList.module.css';

export const FriendsList = ( {friends} ) => {
    return (
        <ul className={css.friendList}>
        { friends.map(item => {
            return <FriendListItem avatar={ item.avatar } name={ item.name } isOnline={ item.isOnline } key={ item.id }/>
        })}
        </ul>
    )
}
