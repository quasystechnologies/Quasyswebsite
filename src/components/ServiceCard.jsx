import React from 'react'
import './ServiceCard.css'

function ServiceCard({ icon, title, description, background }) {
  return (
    <div className="service-card">
      <div className="service-background">
        <img src={background} alt="" />
      </div>
      <div className="service-content">
        <div className="service-icon">
          <img src={icon} alt={title} />
        </div>
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
