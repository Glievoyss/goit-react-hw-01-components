import React from 'react';
import PropTypes from 'prop-types';
import styles from './profileCard.module.css';

const ProfileCard = ({ user }) => {
  return (
    <section className="profileCard-section">
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={user.avatar} alt="user avatar" className={styles.avatar} />
          <p className={styles.name}>{user.name}</p>
          <p className={styles.tag}>@{user.tag}</p>
          <p className={styles.location}>{user.location}, Brasil</p>
        </div>

        <ul className={styles.stats}>
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{user.stats.followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{user.stats.views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

ProfileCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProfileCard;
