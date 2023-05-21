import { data } from "index"
import css from './Statistic.module.css'

 
const Stats = () => {
    return data.map(({id, label, percentage}) => {
    return(
    <li key={id}className={css.item}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}</span>
    </li>
    )
    })
}

export {Stats}

// 2:16