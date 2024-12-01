import React from "react";
import styles from "../BannerFive/BannerFive.module.css";
function BannerFive() {
  return (
    <div className={styles.container}>
      <div className={styles.flex1}>
        <div className={styles.image1}>
          <p className={styles.one}>Earn more with lower fees</p>
          <p className={styles.two}>Signup as a business</p>
          <p className={styles.three}>Partner with us</p>
          <button>Get Started</button>
        </div>
        <div className={styles.image2}>
          <p className={styles.one}>Avail exclusive perks</p>
          <p className={styles.two}>Signup as a rider</p>
          <p className={styles.three}>Ride with us</p>
          <button>Get Started</button>
        </div>
      </div>
      <div className={styles.flex2}>
        <div className={styles.title}>
          <div className={styles.ask1}>
            <p>Know more about us!</p>
          </div>
          <div className={styles.ask2}>
            <div className={styles.dd}> Frequent Questions </div>
            <div> Who we are? </div>
            <div> Partner Program </div>
            <div> Help & Support </div>
          </div>
        </div>
        <div className={styles.component}>
          <div className={styles.componentone}>
            <div className={styles.bord}>How does Order.UK work?</div>
            <div>What payment methods are accepted?</div>
            <div>Can I track my order in real-time?</div>
            <div>
              Are there any special discounts or <br />
              promotions available?
            </div>
            <div>Is Order.UK available in my area?</div>
          </div>
          <div className={styles.componenttwo}>
            <div className={styles.child1}>
              <div className={styles.c1}>
                <div>Place an Order!</div>
                <div>
                  <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732771245/f3plolso97ktlnsxs4gh.png" />
                </div>
                <div className={styles.t}>
                  Place order through our
                  <br />
                  website or Mobile app
                </div>
              </div>
              <div className={styles.c1}>
                <div>Track Progress</div>
                <div>
                  <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732771370/uyibita5nyuf9ghypjck.png" />
                </div>
                <div className={styles.t}>
                  Your can track your order
                  <br />
                  status with delivery time
                </div>
              </div>
              <div className={styles.c1}>
                <div>Get your Order!</div>
                <div>
                  <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732771370/keu1mju0m0bzjybdlwv8.png" />
                </div>
                <div className={styles.t}>
                  Receive your order at a<br />
                  lighting fast speed!
                </div>
              </div>
            </div>
            <div className={styles.child2}>
              <p>
                Order.UK simplifies the food ordering process. Browse through
                our diverse menu, select your favorite dishes, and proceed to
                checkout. Your delicious meal will be on its way to your
                doorstep in no time!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.flex3}>
        <div>
            <p>546+<br/><span>Registered Riders</span></p>
        </div>
        <div>
            <p>789,900+<br/><span>Orders Delivered</span></p>
        </div>
        <div>
            <p>690+<br/><span>Restaurants Partnered</span></p>
        </div>
        <div>
            <p>17,457+<br/><span>Food items</span></p>
        </div>
      </div>
    </div>
  );
}

export default BannerFive;
