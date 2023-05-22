import css from './Statistic.module.css'
import {data} from '../App'


export default function Statistic({data}) {
  
   return (
    <section className={css.statistics}>
    <Title title="Upload stats"/>
    <ul className={css.statlist}>
    <Stats  stats={data}/>
    </ul>
  </section>
  
   )
   }

   const Stats = () => {
    return data.map(({id, label, percentage}) => {
    return(
    <li key={id}className={css.item}>
    <span className={css.label}>{label}</span><br></br>
    <span className={css.percentage}>{percentage}%</span>
    </li>
    )
    })
}

const Title = () => {
  return <h2 className={css.title}>Upload stats</h2>
}