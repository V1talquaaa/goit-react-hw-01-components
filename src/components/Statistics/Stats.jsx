// import { data } from "index"
import css from './Statistic.module.css'
import {data} from '../App'

 
const Stats = ({title, stats}) => {
    return data.map(({id, label, percentage}) => {
    return(
    <li key={id}className={css.item}>
    <span className={css.label}>{label}</span><br></br>
    <span className={css.percentage}>{percentage}%</span>
    </li>
    )
    })
}

export {Stats}

