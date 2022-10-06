import user from '../Moc/user.json';
import css from './profile.module.css'
// npx kill port ***

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
      <div className={ css.profile }>
        <div className={ css.description }>
          <img className={ css.avatar } src={ user.avatar } alt="User avatar" width="200px" />
          <p className={ css.name }> { user.username } </p>
          <p className={ css.tag }>@{user.tag}</p>
          <p className={ css.location }> {user.location} </p>
        </div>
  
        <ul className={ css.stats }>
          <li  className={ css.stats__item }>
            <span className={ css.label }>Followers</span>
            <span className={ css.quantity }>{user.stats.followers}</span>
          </li>
          <li className={ css.stats__item }>
            <span className={ css.label }>Views</span>
            <span className={ css.quantity }>{user.stats.views}</span>
          </li>
          <li className={ css.stats__item }>
            <span className={ css.label }>Likes</span>
            <span className={ css.quantity }>{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  };
  
