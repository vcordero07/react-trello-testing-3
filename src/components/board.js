import React from 'react';

import List from './list';
import AddForm from './add-form';

import './board.css';

export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: []
        };

        this.addList = this.addList.bind(this);
    }

    addList(title) {
        this.setState({
            lists: [...this.state.lists, {title}]
        });
    }

    render() {
        const lists = this.state.lists.map((list, index) => (
            <li className="list-wrapper" key={index}>
                <List {...list} />
            </li>
        ));

        return (
            <div className="board">
                <h2>{this.props.title}</h2>
                <ul className="lists">
                    {lists}
                    <li className="add-list-wrapper">
                        <AddForm
                            type="list"
                            onAdd={text => this.addList(text)}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

Board.defaultProps = {
    title: 'Board'
};
