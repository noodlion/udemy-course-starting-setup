import './Card.css';

function Card(props) {
    /*tiene un espacio dsps de card */
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;

