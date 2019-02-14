import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import chuck_norris_img from '../assets/img/index.gif';

export default class Content extends PureComponent {
  static propTypes = {
    joke: PropTypes.object,
    clickButton: PropTypes.func
  }

  // Функция отрисовки блоков
  renderDanceItem = () => {
    let items = [];
    for(let i = 0; i<5; i++ ){
      items.push(<img key={i} src={chuck_norris_img} alt={`dance_${i}`} />)
    }
    return items;
  }

  render() {
    const {joke, clickButton} = this.props;
    return (
      <main>
        <div className='dance_block'>
          {this.renderDanceItem()}
        </div>
        <div className='text'>
          {joke.value}
        </div>
        <div className='dance_block'>
          {this.renderDanceItem()}
        </div>
        <button className='btn random_joke_btn' onClick={clickButton}>Random Joke</button>
      </main>
    )
  }
}
