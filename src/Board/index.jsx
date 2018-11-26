  import React, { Component } from 'react';
  import { DragDropContext } from 'react-dnd';
  import HTML5Backend from 'react-dnd-html5-backend';
  import Drop from './Drop';
  import Source from './Source';
  import Target from './Target';
  import './Board.css';

  class Board extends Component {
    constructor(props) {
      super(props);
      this.handleDrop = this.handleDrop.bind(this);
      this.state = {
        drops: [],
        isCheckedRight: false,
        isCheckedLeft: false
      };
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleDrop(attrDrop) {
      const { drops } = this.state;
      const { color, image, width, height } = attrDrop
      const nextDrops = [...drops, {
        color, image, width, height
      }];
      this.setState({
        drops: nextDrops,
      });

      this.setState({
        [color]: true
      });

    }
    handleInputChange(value, event) {
      const target = event.target;
      this.setState({
        [target.name]: target.checked
      });
      const { drops } = this.state;

      if (drops && target.checked === false) {
        let filteredDrop = drops.filter(el => el.color !== value);
        this.setState({
          drops: filteredDrop,
        });
      }
    }
    render() {
      const { drops,isCheckedRight,isCheckedLeft } = this.state;
      let both = 0
      if( isCheckedLeft && isCheckedRight){
        both = 1
      }
      return (
        <div id="board">
          <div id="board__sources">
            <label style={{ display: 'inline-flex' }}>
              <input
                name="isCheckedRight"
                type="checkbox"
                checked={this.state.isCheckedRight}
                onChange={this.handleInputChange.bind(this, 'isCheckedRight')} />
              <Source color="isCheckedRight" image="bizhub_754e2.jpg" width="100" height="50" onDrop={this.handleDrop} />
            </label>
            <label style={{ display: 'inline-flex' }}>
              <input
                name="isCheckedLeft"
                type="checkbox"
                checked={this.state.isCheckedLeft}
                onChange={this.handleInputChange.bind(this, 'isCheckedLeft')} />
              <Source color="isCheckedLeft" image="konica-minolta-fs534.jpg" width="50" height="100" onDrop={this.handleDrop} />
            </label>
          </div>
          <div id="board__targets">
            <Target shape="circle" />
          </div>
         
            {drops.map((drop, i) => (
            
            <div id="board__drops">
              <Drop
                color={drop.color}
                key={i}
                shape={drop.shape}
                image={drop.image}
                width={drop.width}
                height={drop.height}
                both={both}
              />
                </div>
            ))}
        
        </div>
      );
    }
  }
  export default DragDropContext(HTML5Backend)(Board);