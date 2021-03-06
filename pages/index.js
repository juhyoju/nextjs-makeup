import Axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header } from "semantic-ui-react";
import ItemList from "../components/Item/ItemList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    Axios.get(API_URL).then((res) => {
      setList(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <Head>
        <title>Home | powder</title>
      </Head>

      <Header as="h1">THE BEST</Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      {/* slice(0, 9) : index 0 ~ 9 */}

      <Header as="h1">NEW ITEM</Header>
      <Divider />
      <ItemList list={list.slice(9)} />
      {/* slice(9) : index 9 ~ 끝 */}

      <style jsx>
        {`
          section {
            padding: 45px 15px;
          }
        `}
      </style>
    </section>
  );
}
