import React, { PureComponent, Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Sidebar extends PureComponent {
  static propTypes = {
    categories: PropTypes.array,
    setCategoryHandle : PropTypes.func,
    category: PropTypes.string
  }

  render() {
    const {categories, setCategoryHandle, category} = this.props;

    return (
      <aside>
        <ul>
          {Children.map(categories, (el, i) => 
            <li className={ classNames({active : category == el })} 
                key={i} 
                onClick={() => setCategoryHandle(el)}>
                <span>{el}</span>
            </li>
          )}
        </ul>
      </aside>
    )
  }
}
