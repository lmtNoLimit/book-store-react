import React from "react";
import { Card, Tooltip } from "antd";
import { ShoppingCartOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;

const BookItem = (props) => {
  const { _id, image, name, author, price } = props.data;

  return (
    <Card
      hoverable
      cover={<img alt='example' src={image} />}
      actions={[
        <Tooltip title='Add to cart'>
          <ShoppingCartOutlined key='addToCart' onClick={props.addToCart} />
        </Tooltip>,
        <Tooltip title='See detail'>
          <Link to={`/books/${_id}`}>
            <InfoCircleOutlined key='detail' />
          </Link>
        </Tooltip>,
      ]}
    >
      <div className='flex justify-between'>
        <Meta title={name} description={author} />
        <Meta title={`$${price}`} />
      </div>
    </Card>
  );
};

export default BookItem;
