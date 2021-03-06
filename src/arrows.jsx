'use strict';

import React from 'react';
import classnames from 'classnames';

export var PrevArrow = React.createClass({

  clickHandler: function (options, e) {
    e.preventDefault();
    this.props.clickHandler(options, e);
  },
  render: function () {
    var prevClasses = {'slick-prev': true};
    var prevHandler = this.clickHandler.bind(this, {message: 'previous'});

    if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
      prevClasses['slick-disabled'] = true;
      prevHandler = null;
    }

    var prevArrowProps = {
      key: '0',
      'data-role': 'none',
      className: classnames(prevClasses),
      style: {display: 'block'},
      onClick: prevHandler
    };
    var prevArrow;

    if (this.props.prevArrow) {
      prevArrow = <this.props.prevArrow {...prevArrowProps} />;
    } else {
      prevArrow = <button key='0' type='button' {...prevArrowProps}> Previous</button>;
    }

    return prevArrow;
  }
});


export var NextArrow = React.createClass({
  clickHandler: function (options, e) {
    e.preventDefault();
    this.props.clickHandler(options, e);
  },
  render: function () {
    var nextClasses = {'slick-next': true};
    var nextHandler = this.clickHandler.bind(this, {message: 'next'});

    if (!this.props.infinite) {
      if (this.props.centerMode && this.props.currentSlide >= (this.props.slideCount - 1)) {
        nextClasses['slick-disabled'] = true;
        nextHandler = null;
      } else {
        if (this.props.currentSlide >= (this.props.slideCount - this.props.slidesToShow)) {
          nextClasses['slick-disabled'] = true;
          nextHandler = null;
        }
      }

      if (this.props.maxSlide && this.props.currentSlide >= this.props.maxSlide) {
        nextClasses['slick-disabled'] = true;
        nextHandler = null;
      }

      if (this.props.slidesWidth && this.props.slidesWidth <= this.props.listWidth) {
        nextClasses['slick-disabled'] = true;
        nextHandler = null;
      }

      if (this.props.slideCount <= this.props.slidesToShow) {
        nextClasses['slick-disabled'] = true;
        nextHandler = null;
      }
    }


    var nextArrowProps = {
      key: '1',
      'data-role': 'none',
      className: classnames(nextClasses),
      style: {display: 'block'},
      onClick: nextHandler
    };

    var nextArrow;

    if (this.props.nextArrow) {
      nextArrow = <this.props.nextArrow {...nextArrowProps} />;
    } else {
      nextArrow = <button key='1' type='button' {...nextArrowProps}> Next</button>;
    }

    return nextArrow;
  }
});
