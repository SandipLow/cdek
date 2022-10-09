import React from 'react'
import styles from './loading.module.css'

const LoadingSpinner = () => {
  return (
    <div className={styles.ldsRipple}><div></div><div></div></div>
  )
}

export default LoadingSpinner