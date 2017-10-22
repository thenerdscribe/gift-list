import React, { Component } from 'react';
import Item from './Item';

export default class List extends Component {
	renderItem(gift, key) {
		return (
			<Item key={ key } gift={ gift } />
		)
	}

	render() {
		const { gifts } = this.props;

		return (
			<div className="gift-items">
        { gifts.map(this.renderItem) }
			</div>
		)
		

	}
}
