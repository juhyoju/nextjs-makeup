import { Button } from "semantic-ui-react";
import styles from "./Items.module.css";

export default function Item({ info }) {
  return (
    <div className={styles.item}>
      <div className={styles.item_top}>
        <img
          src={info.image_link}
          alt={info.name}
          className={styles.item_img}
        />
        <div className={styles.item_info}>
          <span>{info.type}</span>
          <h2 className={styles.info_name}>{info.name}</h2>

          <div className={styles.item_price}>
            <span>PRICE</span>
            <span className={styles.price_num}>${info.price}</span>
          </div>
          <Button color="red">구매하기</Button>
          <Button href={info.product_link} target="_blank">
            자세히보기
          </Button>
        </div>
      </div>

      <div>
        <h2>DESCRIPTION</h2>
        <p className={styles.item_des}>{info.description}</p>
      </div>
    </div>
  );
}
