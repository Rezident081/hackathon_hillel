import React, { PureComponent } from 'react';
import axios from 'axios';
import logo from './assets/img/chucknorris_logo_coloured_small@2x.png';

import Sidebar from './components/Sidebar';
import Content from './components/Content';

export default class App extends PureComponent {
   
	state = {
		categories : [],
		category : null,
		joke : null,
  }

	componentDidMount(){
		this.getCategories();
		this.getRandomJoke()
	}
	
	// Получения всех категорий
	async getCategories(){
		await axios.get('https://api.chucknorris.io/jokes/categories')
							 .then((categories) => this.setState({categories : categories.data}))
	}

	// Получение рандомной шутки по категории
	async getRandomJokeByCategory(category){
		await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
							 .then((joke) => this.setState({joke: joke.data}))
	}

	// Получение рандомной шутки
	async getRandomJoke(){
		await axios.get('https://api.chucknorris.io/jokes/random')
							 .then((joke) => this.setState({joke: joke.data}))
	}

	// Сетим категорию
	setCategoryHandle = (category) => {
		this.setState({
			category
		})
		this.getRandomJokeByCategory(category);
	}

	// Клик по кнопке
	clickButtonHandle = () => {
		const {category} = this.state;
		return category ? this.getRandomJokeByCategory(category) : this.getRandomJoke();
	}
  

  render() {
		const {categories, joke, category} = this.state;
    return (
      <div className='app_wrapper container'>
        <div className='logo'>
					<img src={logo} alt='logo' />
				</div>
				<div className='content'>
					<Sidebar 
						categories={categories}
						category={category} 
						setCategoryHandle={this.setCategoryHandle} 
					/>
					{joke && <Content joke={joke} clickButton={this.clickButtonHandle} /> }
				</div>
      </div>
    )
  }
}
