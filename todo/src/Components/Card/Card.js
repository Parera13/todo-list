import React, {useState} from 'react'

function Card() {
  const [isVisible, setVisible] = useState(false)
  const remove = () => {
    setVisible(!isVisible)
  }
  return (
    <div className="card" id={isVisible ? 'remove' : ''}>
      <div className="description">
        <div className="cardHeader">
          <input className="cardInput" type="text" placeholder="untitled card name"></input>
          <button onClick={remove} className='cardX'>X</button>
        </div>
        <textarea rows="4"  name="comment" placeholder="description"></textarea>
      </div>
    </div>
  )
}

export default Card
