import css from './Statistic.module.css'
import { Stats } from './Stats'


export default function Statistic({data}) {
   return (
    <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
    <ul className={css.statlist}>
    <Stats />
    </ul>
  </section>
   )
   }


