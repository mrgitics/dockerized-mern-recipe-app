import { useState, useEffect } from "react";

function CommentSection(recipeIds) {
	const recipes = Object.values(recipeIds).join("");
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState("");

	const loggedIn = localStorage.getItem("isLoggedIn");

	async function fetchComments() {
		try {
			const response = await fetch("/api/comments"); // Updated path
			const data = await response.json();
			setComments(data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetch("/api/comments") // Updated path
			.then(res => res.json())
			.then(data => {
				setComments(data);
			});
	}, []);

	function handleChange(event) {
		setNewComment(event.target.value);
	}

	async function handleSubmit(event) {
		event.preventDefault();

		const userId = localStorage.getItem("user");
		const body = { newComment, recipeIds, userId };

		try {
			await fetch("/api/comments", { // Updated path
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});

			setNewComment("");
		} catch (error) {
			console.error(error);
		}

		fetchComments();
	}

	async function handleDelete(id) {
		try {
			const response = await fetch(`/api/comments/${id}`, { // Updated path
				method: "DELETE",
			});
			const deletedComment = await response.json();
			console.log(deletedComment);
		} catch (error) {
			console.error(error);
		}
		fetchComments();
	}

	return (
		<div className="commentSection">
			<h2>Comments</h2>
			<div className="comments">
				{comments.map((comment) => (
					JSON.stringify(recipes) === JSON.stringify(comment.recipe) && (
						<div className="comment" key={comment._id}>
							<button onClick={() => handleDelete(comment._id)} className="deleteComment">
								X
							</button>
							<p>{comment.createdAt.split("T").join(" ").slice(0, -5)}</p>
							<p>user: {comment.user?.name}</p>
							<p key={comment._id}>{comment.comment}</p>
						</div>
					)
				))}
			</div>
			{loggedIn && (
				<form onSubmit={handleSubmit}>
					<textarea
						rows="10"
						cols="70"
						className="commentArea"
						value={newComment}
						onChange={handleChange}
						placeholder="add a comment"
						required
					></textarea>
					<button className="commentButton" type="submit">
						Add comment
					</button>
				</form>
			)}
		</div>
	);
}

export default CommentSection;