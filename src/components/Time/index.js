import React, { Fragment } from "react";
import PropTypes from "prop-types";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import ruLocale from "date-fns/locale/ru";

const Time = ({ date }) => (
  <Fragment>
    {distanceInWordsToNow(date, { addSuffix: true, locale: ruLocale })}
  </Fragment>
);

Time.propTypes = {
  date: PropTypes.string
};

export default Time;
