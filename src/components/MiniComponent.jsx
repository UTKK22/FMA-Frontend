import React from 'react'
import styles from '../components/MiniComponent.module.css'
function MiniComponent() {
  return (
    <div className={styles.reviews}>
        <div className={styles.flx}>
          <div className={styles.f}>
            <div>
                <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732854520/vclzsvsfjnkukfemnry0.png"/>
            </div>
            <div className={styles.verticalLine}></div>
            <div>
                St Glx<br/>
                <span>South London</span>
            </div>
            <div className={styles.star}>
                <div>
                <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732855482/rfllqg7wkabugq1bbyjq.png"/>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732855551/dmluytobownou5osi9wo.png"/>
                     24th September, 2023
                </div>
            </div>
          </div>
          <div>
            <p>
              The positive aspect was undoubtedly the efficiency of <br />
              the service. The queue moved quickly, the staff was
              <br /> friendly, and the food was up to the usual McDonald's{" "}
              <br />
              standard – hot and satisfying.
            </p>
          </div>
        </div>
      </div>
  )
}

export default MiniComponent