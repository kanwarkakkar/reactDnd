  import React from 'react';
  import { DropTarget } from 'react-dnd';
  import { PropTypes } from 'prop-types';
  import { ITEM } from './itemTypes';

  const Target = ({ connectDropTarget, highlighted, shape }) => (
    connectDropTarget(
      <div >
      <img src="bizhub-3622.jpg" alt="Girl in a jacket" width="150" height="250">
      </img></div>
    )
  );

  Target.propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    highlighted: PropTypes.bool.isRequired,
  }

  const target = {
    drop(props) {
      const { shape } = props;
      return ({
        shape,
      });
    }
  }

  const collect = (connect,  monitor) => ({
    connectDropTarget: connect.dropTarget(),
    highlighted: monitor.canDrop(),
  });

  export default DropTarget(ITEM, target, collect)(Target);
