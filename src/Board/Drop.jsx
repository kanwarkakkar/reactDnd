    import React from 'react';
    import { PropTypes } from 'prop-types';

    const Drop = ({ image,both, color,width,height }) => (
      <div className={`board__drops__droptarget--${color}--${both}`}>
      <img src={image} alt="Girl in a jacket" width={width} height={height}></img>
      </div>
    );

    Drop.propTypes = {
      color: PropTypes.string.isRequired,
    };

    export default Drop;
