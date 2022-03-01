import { Grid, Header } from "semantic-ui-react";
import styles from "./ItemList.module.css";

export default function ItemList({ list }) {
  console.log("list", list);
  return (
    <>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id} className={styles.item_grid}>
              <img src={item.image_link} alt={item.name} />
              <h3 className={styles.item_name}>{item.name}</h3>
              <span className={styles.item_cate}>
                {item.category} {item.product_type}
              </span>
              <p className={styles.item_price}>$ {item.price}</p>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </>
  );
}
