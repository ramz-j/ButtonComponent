import React, { useState } from "react"
import PropTypes from 'prop-types'
import '../styles/Button.css'

const Button = ({ variant, 
                    disableShadow, 
                    disabled, 
                    icon, 
                    startIcon,
                    endIcon,
                    size,
                    color }) => {

  if (color) {
    if (color === 'default') {
      return (
        <div>        
        <button className={`btn ${variant} colorDefault`}>
          Default
        </button>
      </div>
      )
    }
    if (color === 'secondary') {
      return (
        <div>        
        <button className={`btn ${variant} colorSecondary`}>
          Default
        </button>
      </div>
      )
    }
    if (color === 'danger') {
      return (
        <div>        
        <button className={`btn ${variant} colorDanger`}>
          Default
        </button>
      </div>
      )
    }
  }

  if (startIcon) {
    return (
      <div>        
        <button className={`btn ${variant}`}>
          <span className={`${startIcon}`}>{`${icon}`}</span>
          Default
        </button>
      </div>
    )
  }

  if (endIcon) {
    return (
      <div>        
        <button className={`btn ${variant}`}>
          Default
          <span className={`${endIcon}`}>{`${icon}`}</span>
        </button>
      </div>
    )
  }

  if (disableShadow) {
    return (
      <div>   
        <button className={`btn ${variant} disableShadow`}>
          Default
        </button>
      </div>
    )
  } 
  
  if (disabled) {
    if (variant==='default'){
      return (
        <div>
          <button className={`btn ${variant} disabled`}>
            Default
          </button>
        </div>
      )
    }
    if (variant==='outline'){
      return (
        <div>
          <button className={`btn ${variant} disabledOutline`}>
            Default
          </button>
        </div>
      )
    }
    if (variant==='text'){
      return (
        <div>
          <button className={`btn ${variant} disabledText`}>
            Default
          </button>
        </div>
      )
    }
  }

  if (size) {
    if (size==='sm') {
      return (
        <div>   
          <button className={`btn ${variant} sm`}>
            Default
          </button>
        </div>
      )
    }
    if (size==='md') {
      return (
        <div>   
          <button className={`btn ${variant}`}>
            Default
          </button>
        </div>
      )
    }
    if (size==='lg') {
      return (
        <div>   
          <button className={`btn ${variant} lg`}>
            Default
          </button>
        </div>
      )
    }
  }

  if (variant) {
    return (
      <div>        
        <button className={`btn ${variant}`}>
          Default
        </button>
      </div>
    ) 
  }
}

Button.propTypes = {
  variant: PropTypes.string,
  disableShadow: PropTypes.bool,
  icon: PropTypes.string,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger'])
}

Button.defaultProps = {
  variant: 'default',
  disableShadow: false,
  icon: '',
  startIcon: '',
  endIcon: '',
  size: 'md',
  color: 'primary',
}

export default Button;