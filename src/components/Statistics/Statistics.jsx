import css from './Statistic.module.css'
import PropTypes from 'prop-types';

export default function Statistic({title="Upload stats", stats}) {
  
   return (
    <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>
    <ul className={css.statlist}>
    {stats.map(({id, label, percentage}) => {
    return (
    <li key={id}className={css.item}>
    <span className={css.label}>{label}</span><br></br>
    <span className={css.percentage}>{percentage}%</span>
    </li>
    )
    })}
    </ul>
  </section>
  
   )
   }


Statistic.propTypes = {
title: PropTypes.string.isRequired,
stats: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}).isRequired).isRequired
}