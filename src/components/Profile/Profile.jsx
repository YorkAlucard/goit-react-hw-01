import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => (
  <div className={css.profile}>
    <div className={css.profile__inner}>
      <img
        className={css.profile__avatar}
        src={image}
        alt={`Avatar of ${name}`}
      />
      <p className={css.profile__userName}>{name}</p>
      <p className={`${css.profile__userTag} ${css.grayText}`}>@{tag}</p>
      <p className={`${css.profile__userLocation} ${css.grayText}`}>
        {location}
      </p>
    </div>
    <ul className={css.profile__list}>
      <li className={css.profile__item}>
        <span
          className={`${css.profile__itemFollowers} ${css.socialDescription}`}
        >
          Followers
        </span>
        <span className={`${css.profile__itemFollowersStats} ${css.stats}`}>
          {stats.followers}
        </span>
      </li>
      <li className={css.profile__item}>
        <span className={`${css.profile__itemViews} ${css.socialDescription}`}>
          Views
        </span>
        <span className={`${css.profile__itemViewsStats} ${css.stats}`}>
          {stats.views}
        </span>
      </li>
      <li className={css.profile__item}>
        <span className={`${css.profile__itemLikes} ${css.socialDescription}`}>
          Likes
        </span>
        <span className={`${css.profile__itemLikesStats} ${css.stats}`}>
          {stats.likes}
        </span>
      </li>
    </ul>
  </div>
);

export default Profile;
