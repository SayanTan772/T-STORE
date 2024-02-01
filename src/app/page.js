'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';

export default function Home() {
  let [display, setDisplay] = useState('none');
  let [height, setHeight] = useState('0vh');

  const click = () => {
    setHeight('100vh');
    setDisplay('block');
  }

  const close = () => {
    setHeight('0vh');
    setDisplay('none');
  }

  return (
    <main className={styles.main}>

      <div className={styles.dropdown} style={{ height: `${height}` }}>
        <Image className={styles.cross} style={{ display: `${display}` }}
          src="/cross-close.svg"
          alt=""
          width={20}
          height={20}
          onClick={close}
        />
        <ul style={{ display: `${display}`, transition: 'all 0.55s ease-in-out' }}>
          <li className={styles.drop_item}>New</li>
          <li className={styles.drop_item}>Women</li>
          <li className={styles.drop_item}>Men</li>
          <li className={styles.drop_item}>Shop</li>
        </ul>
      </div>

      <div className={styles.add}><p className={styles.p}>Sale is on! 25% off sitewide using TEES25 at checkout</p></div>
      <nav className={styles.nav}>
        <div className={styles.logo}>T SHOP</div>
        <div className={styles.div}>
        <div className={styles.nav_item}>New</div>
        <div className={styles.nav_item}>Women</div>
        <div className={styles.nav_item}>Men</div>
        <div className={styles.login}>
          <Image
            src="/profile-user.svg"
            alt=""
            width={22}
            height={22}
          />
          <p style={{ margin: '0px 10px' }}>Log In</p>
          <Image
            src="/cart.svg"
            alt=""
            width={22}
            height={22}
          />
        </div>
        </div>
        <Image className={styles.menu} style={{ marginRight: '16px' }}
          src="/burger-menu.svg"
          alt=""
          width={50}
          height={50}
          onClick={click}
        />
      </nav>

      <div className={styles.home}>
        <h1 className={styles.h_big}>T SHOP</h1>
        <div className={styles.highlight}>There's One for Everyone</div>
        <div className={styles.display}>
          <div className={styles.left}>
            <Image className={styles.img} style={{ objectFit: 'cover', objectPosition: 'center' }}
              src="/women.webp"
              alt=""
              width={309}
              height={449}
            />
            <div className={styles.overlay}>WOMEN</div>
          </div>
          <div className={styles.middle}>
            <Image className={styles.majhe} style={{ objectFit: 'cover', objectPosition: 'center' }}
              src="/middle.jpg"
              alt=""
              width={875}
              height={449}
            />
            <div className={styles.overlay}>SHOP NEW</div>
          </div>
          <div className={styles.right}>
            <Image className={styles.img} style={{ objectFit: 'cover', objectPosition: 'center' }}
              src="/boy.webp"
              alt=""
              width={309}
              height={449}
            />
            <div className={styles.overlay}>MENS</div>
          </div>
        </div>
      </div>

      <div className={styles.product}>
        <div className={styles.h_big}>NEW DROPS</div>
        <div className={styles.prod_container}>
          <div className={styles.card}>
            <Image className={styles.shirt}
              src="/jama1.avif"
              alt=""
              width={224}
              height={300}
            />
            <p className={styles.info}>This is a product</p>
            <strong className={styles.price}><i>$25</i></strong>
          </div>
          <div className={styles.card}>
            <Image className={styles.shirt}
              src="/jama2.avif"
              alt=""
              width={224}
              height={300}
            />
            <p className={styles.info}>This is a product</p>
            <strong className={styles.price}><i>$25</i></strong>
          </div>
          <div className={styles.card}>
            <Image className={styles.shirt}
              src="/jama3.avif"
              alt=""
              width={224}
              height={300}
            />
            <p className={styles.info}>This is a product</p>
            <strong className={styles.price}><i>$25</i></strong>
          </div>
          <div className={styles.card}>
            <Image className={styles.shirt}
              src="/jama4.jpg"
              alt=""
              width={224}
              height={300}
            />
            <p className={styles.info}>This is a product</p>
            <strong className={styles.price}><i>$25</i></strong>
          </div>
          <div className={styles.card}>
            <Image className={styles.shirt}
              src="/jama1.avif"
              alt=""
              width={224}
              height={300}
            />
            <p className={styles.info}>This is a product</p>
            <strong className={styles.price}><i>$25</i></strong>
          </div>
          <div className={styles.card}>
            <Image className={styles.shirt}
              src="/jama2.avif"
              alt=""
              width={224}
              height={300}
            />
            <p className={styles.info}>This is a product</p>
            <strong className={styles.price}><i>$25</i></strong>
          </div>
          <div className={styles.card}>
            <Image className={styles.shirt}
              src="/jama3.avif"
              alt=""
              width={224}
              height={300}
            />
            <p className={styles.info}>This is a product</p>
            <strong className={styles.price}><i>$25</i></strong>
          </div>
          <div className={styles.card}>
            <Image className={styles.shirt}
              src="/jama4.jpg"
              alt=""
              width={224}
              height={300}
            />
            <p className={styles.info}>This is a product</p>
            <strong className={styles.price}><i>$25</i></strong>
          </div>
      </div>
      <button className={styles.btn}>Shop New</button>
    </div>

      <div className={styles.sale}>
        <div className={styles.bg}>
        <p className={styles.h_small}>SALE IS ON!</p>
        <p className={`${styles.h_big} ${styles.very_big}`}>25% OFF</p>
        <p className={styles.h_small}>25% off sitewide using TEES25 at checkout</p>
        </div>
        <div className={styles.women}></div>
      </div>

      <div className={styles.banner}>
        <Image className={styles.chev} style={{ marginRight: '16px' }}
          src="/chev-Right.svg"
          alt=""
          width={40}
          height={40} 
        />
        <h1 className={styles.h_bigger}>GET 10% OFF YOUR FIRST ORDER!</h1>
        <Image className={styles.chev} style={{ marginLeft: '16px' }}
          src="/chev-Left.png"
          alt=""
          width={40}
          height={40} 
        />
      </div>

      <div className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.box}>
            <div className={styles.heading}>T SHOP</div>
            <ul>
              <li style={{ textAlign: 'center', margin: '8px 0px' }}>info@mysite.website</li>
              <li style={{ textAlign: 'center', margin: '8px 0px' }}>Tel: 123-456-7890</li>
            </ul>
          </div>
          <div className={`${styles.right_box} ${styles.black}`}>
            <ul className={styles.ul}>
              <li className={styles.heading}>SHOP</li>
              <li style={{ margin: '8px 0px' }}>New</li>
              <li style={{ margin: '8px 0px' }}>Woman</li>
              <li style={{ margin: '8px 0px' }}>Men</li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.heading}>OUR STORE</li>
              <li style={{ margin: '8px 0px' }}>About Us</li>
              <li style={{ margin: '8px 0px' }}>Subscribe</li>
              <li style={{ margin: '8px 0px' }}>FAQ</li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.heading}>TERMS & CONDITION</li>
              <li style={{ margin: '8px 0px' }}>Store Policy</li>
              <li style={{ margin: '8px 0px' }}>Shipping Returns</li>
              <li style={{ margin: '8px 0px' }}>Payment Method</li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.kichu_na}></div>
          <div className={styles.copyright}>© 2035 by T Shop. Powered and secured by Wix</div>
        </div>
      </div>

    </main>
  );
}
