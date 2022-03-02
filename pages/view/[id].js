import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../components/Item/Item";

export default function ID() {
  const router = useRouter();
  const { id } = router.query;

  const [info, setInfo] = useState({});

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData() {
    Axios.get(API_URL).then((res) => {
      // setInfo(res.data);

      console.log(res.data);
      setInfo({
        id: res.data.id,
        description: res.data.description,
        name: res.data.name,
        image_link: res.data.image_link,
        price: res.data.price,
        type: res.data.product_type,
      });
    });
    console.log("info1", info);
  }

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  console.log("info2", info);

  return <Item info={info} />;
}
