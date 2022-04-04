import { useEffect, useState } from 'react';
import axios from 'axios';

import ScoopOption from './ScoopOption';
import Row from 'react-bootstrap/Row';

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      // optionType is 'scoops' or 'toppings'
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        //TODO: handle error response
        console.error(err);
      });
  }, [optionType]);

  //TODO: replace 'null' with ToppingOption when available
  const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row> {optionItems} </Row>;
};

export default Options;
