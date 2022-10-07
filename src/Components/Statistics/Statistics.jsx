import data from '../../Moc/data.json';
import css from './statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const randomColor = () => Math.floor(Math.random()*16777215).toString(16);
  return (
    <section className={ css.statistics }>

      { data.title?.length && <h2 className={ css.title }> { data.title } </h2>}

      <ul className={ css.statList }>

        { data.length > 0 && data.map(item => {
            return <li className={ css.item } style={ { backgroundColor: `${"#" + randomColor()}` } } key={ item.id }>
          <span className={ css.label }>{ item.label }</span>
          <span className={ css.percentage }>{ item.percentage }%</span>
        </li>
        })}
      </ul>
    </section>
  );
};
