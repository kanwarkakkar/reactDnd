    import React from 'react';
    import { DragSource } from 'react-dnd';
    import { PropTypes } from 'prop-types';
    import { ITEM } from './itemTypes';

    const Source = ({ image,width,height, connectDragSource, isDragging }) => (
      connectDragSource(
        <div>
          <img src={image} alt="Girl in a jacket" width={width} height={height}></img>
        </div>
      )
    );

    Source.propTypes = {
      color: PropTypes.string.isRequired,
      connectDragSource: PropTypes.func.isRequired,
      isDragging: PropTypes.bool.isRequired,
    }

    const source = {
      beginDrag(props) {
      return props
      },
      endDrag(props, monitor) {
        if (!monitor.didDrop()) {
          return;
        }
        const { onDrop } = props;
        const { color,image,width,height } = monitor.getItem();
        const { shape } = monitor.getDropResult();
        let attrDrop = {color,image,width,height,shape}
        onDrop(attrDrop);
      },
    };

    const collect = (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    });

    export default DragSource(ITEM, source, collect)(Source);