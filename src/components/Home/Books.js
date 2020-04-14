import React, { Fragment } from "react";
import { Row, Col, Spin, notification } from "antd";
import { useDispatch } from "react-redux";

import BookItem from "components/BookItem";
import { BookActions } from "stores/actions";

const Books = (props) => {
  const dispatch = useDispatch();
  const { loading, books } = props;

  const handleAddToCart = (book) => {
    const { _id, name } = book;
    dispatch(BookActions.addToCart(_id));
    notification.success({
      message: "Success",
      description: `${name} has been added to cart`,
    });
  };

  return (
    <Fragment>
      {loading ? (
        <div className='h-64 flex justify-center items-center'>
          <Spin size='large' />
        </div>
      ) : (
        <Row gutter={16}>
          {books.map((book) => (
            <Col key={book._id} xs={12} md={4}>
              <BookItem data={book} addToCart={() => handleAddToCart(book)} />
            </Col>
          ))}
        </Row>
      )}
    </Fragment>
  );
};

export default Books;
