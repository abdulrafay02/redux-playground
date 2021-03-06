import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {

	state = {
		title: "",
		body: ""
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit = e => {
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		}

		this.props.createPost(post);
	}

	render() {
		return (
			<div>
				<h1 className="text-blue">Add Post</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label htmlFor="title">Title:</label>
						<br />
						<input type="text" name="title" value={this.state.title} onChange={this.onChange} />
					</div>
					<br />
					<div>
						<label htmlFor="body">Body:</label>
						<br />
						<textarea type="text" name="body" value={this.state.body} onChange={this.onChange} />
					</div>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

PostForm.propTypes = {
	createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
