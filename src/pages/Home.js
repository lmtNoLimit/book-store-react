import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { BookActions } from "stores/actions";
import AppLayout from "components/layout/AppLayout";
import Books from "components/Home/Books";

const Home = () => {
  const bookState = useSelector((state) => state.bookReducers, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BookActions.getBooks());
  }, [dispatch]);

  const { loading, books } = bookState;

  return (
    <AppLayout>
      <Books loading={loading} books={books} />
    </AppLayout>
  );
};

export default Home;
