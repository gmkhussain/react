import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) =>
  <div>
    <span className="box__upper">
      {value}
    </span>
    <span className="box__middle btn btn-xs">
	 {'Visites'}
    </span>
    <span className="box__lower">
      {'+16%'}
    </span>
    <small>
      {'Comp. au Ven. 22 Jan'}
    </small>
  </div>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});


class DragAndDrop extends Component{

    state = {
        items: ['Item 125', 'Item 125', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
      };
      onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
          items: arrayMove(this.state.items, oldIndex, newIndex),
        });
      };
      render() {
        return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
      }
      
}

export default DragAndDrop;