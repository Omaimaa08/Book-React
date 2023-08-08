import React from 'react'

export default function (props) {
  return (
    <div className='col-md-3'>
    
    <div className="card" >
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.brandName}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">{props.collectionName}"</h6>
      <p className="card-text">
        
      </p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
    </ul>
    <div className="card-body">
      <a href="#" className="card-link">
        {props.CatagoryName}
      </a>
      
      </div>
</div>
  </div>
  )
}
