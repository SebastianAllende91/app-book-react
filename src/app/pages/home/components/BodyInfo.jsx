import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { isMobileOnly } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks, setLoading } from "../../../../redux/books/action";
import {
  bookSelector,
  loadingSelector,
} from "../../../../redux/books/selectors";
import ImgMediaCard from "./Card";

const BodyInfo = () => {
  const books = useSelector(bookSelector);
  const loading = useSelector(loadingSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getAllBooks());
  }, [dispatch]);

  if (loading) return <div>Loading..</div>;

  return (
    <Grid
      container
      mb={2}
      columnSpacing={3}
      rowSpacing={2}
      justifyContent={isMobileOnly ? "center" : "normal"}
    >
      {books &&
        books.map((book) => {
          return (
            <React.Fragment key={book.id}>
              <Grid item md={3} sm={12}>
                <ImgMediaCard {...book} />
              </Grid>
            </React.Fragment>
          );
        })}
    </Grid>
  );
};

export default BodyInfo;
