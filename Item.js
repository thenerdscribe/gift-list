import React, { Component } from 'react';

export default class Item extends Component {
	render() {
		const { gift } = this.props;

		if (!gift) {
			return null
		}
		else {
			return (
			<div className="gift-item">
				 <h1 className="gift-item__name"><a href={ gift.url }>{ gift.name }</a></h1>
        <p><strong>Price:</strong> ${ gift.price }</p>
        { gift.category &&
          <p><strong>Category:</strong> { gift.category }</p>
        }
        { gift.notes &&
          <p><strong>Notes:</strong> { gift.notes }</p>
        }
        { gift.priority &&
          <p><strong>Priority:</strong> { gift.priority }</p>
        }
			</div>
			)
		}
	}
}
