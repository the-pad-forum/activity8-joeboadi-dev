import React from 'react'
import styles from '../styles/About.module.css'

export default function ExplainerVideo() {
  return (
    <div>
      <video className={styles.aboutVideo} controls>
            <source src="/web-dev.mp4" type="video/mp4"/>
          </video>
    </div>
    
  )
}
