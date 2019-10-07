import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const randomizeColor = function randomizeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const randomColor = `#${r.toString(16) + g.toString(16) + b.toString(16)}`;
  return randomColor;
};

const Stats = ({ title, stats }) => {
  return (
    <section className={styles.statsSection}>
      {title && <h2 className={styles.title}>{title.toUpperCase()}</h2>}
      <ul className={styles.statList}>
        {stats.map(elem => (
          <li
            key={elem.id}
            className={styles.item}
            style={{ backgroundColor: randomizeColor() }}
          >
            <span className={styles.label}>{elem.label}</span>
            <span className={styles.percentage}>{elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default Stats;
