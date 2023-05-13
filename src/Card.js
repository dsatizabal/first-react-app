import './App.css';

function Card(props) {
    return (
    <div className='card'>
        <div className='data-field'>
        <div className='tag'>Nombres: </div>
        <div className='value'>{props.name}</div>
        </div>
        <div className='data-field'>
        <div className='tag'>Apellidos: </div>
        <div className='value'>{props.last_name}</div>
        </div>
        <div className='data-field'>
        <div className='tag'>Telefono: </div>
        <div className='value'>{props.phone}</div>
        </div>
    </div>
    );
  }

export default Card;
