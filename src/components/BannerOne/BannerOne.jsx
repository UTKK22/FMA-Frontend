import React from 'react'
import styles from '../../components/BannerOne/BannerOne.module.css'
function BannerOne() {
  return (
    <div className={styles.outer}>
        <div className={styles.text}>
          <div className={styles.textone}>
            <p>Order Restaurant food, takeaway and groceries.</p>
          </div>
          <div className={styles.texttwo}>
            <p>
            Feast Your Senses,<br/><span>Fast and Fresh</span>
            </p>
          </div>
          <div className={styles.textthree}>
            <p>Enter a postcode to see what we deliver</p>
            <input type="text" placeholder="e.g. EC4R 3TE"></input>
            <button>Search</button>
          </div>
        </div>
        <div className={styles.image}>
          <img
            src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732191333/xcxd9ma310vwuyg753ui.png"
            alt="girl image"
          ></img>
        </div>
        <div className={styles.noodleimage}>
          <img
            src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732191375/oclfld4mzmjty3tvm57h.png"
            alt="noodle girl"
          />
        </div>
        <div className={styles.order}>
          <div className={styles.containerone}>
            <div className={styles.oneWrapper}>
              <div className={styles.none}><p>1</p></div>
            </div>
            <div className={styles.cone}>
              <div className={styles.one}>
                <div className={styles.logo}>
                  <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732252821/mnpw8ydvkgypep60azfe.png"></img>
                </div>
                <div>
                  <p>
                    We’ve Received your order!{" "}
                    <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732629466/fv13byifwbphhw5jde34.png" />
                  </p>
                </div>
                <div>
                  <p>Awaiting Restaurant acceptance </p>
                </div>
              </div>
              <div>now</div>
            </div>
          </div>
          <div className={styles.containertwo}>
            <div className={styles.twoWrapper}>
              <div className={styles.ntwo}><p>2</p></div>
            </div>
            <div className={styles.ctwo}>
              <div className={styles.two}>
                <div className={styles.logo}>
                  <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732252821/mnpw8ydvkgypep60azfe.png" />
                </div>
                <div>
                  <p>
                    Order Accepted! ✅
                  </p>
                </div>
                <div>
                  <p>Your order will be delivered shortly</p>
                </div>
              </div>
              <div>now</div>
            </div>
          </div>
          <div className={styles.containerthree}>
            <div className={styles.threeWrapper}>
              <div className={styles.nthree}><p>3</p></div>
            </div>
            <div className={styles.cthree}>
              <div className={styles.three}>
                <div className={styles.logo}>
                  <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732252821/mnpw8ydvkgypep60azfe.png" />
                </div>
                <div>
                  <p>Your rider's nearby 🎉</p>
                </div>
                <div>
                  <p>They're almost there - get ready!</p>
                </div>
              </div>
              <div>now</div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default BannerOne