function AddToFavoriteButton({ recipe, onDeleteState, onAddState, favorites }) {
	const userId = localStorage.getItem('user');

	// POST request to add recipe to favorites
	async function postRequest(recipe) {
		try {
			const httpResponse = await fetch(`/api/favorites?userId=${userId}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(recipe),
			});

			if (!httpResponse.ok) {
				throw new Error('Error during add to Favorites.');
			}

			const newRecipe = await httpResponse.json();
			onAddState(newRecipe);
			return newRecipe;
		} catch (error) {
			console.error(error);
		}
	}

	// PATCH request to update the user's favorite list
	async function userUpdate(newRecipeId) {
		try {
			const httpResponse = await fetch(`/api/users/${userId}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ favorites: newRecipeId }),
			});

			if (!httpResponse.ok) {
				throw new Error('Error during add to Favorites.');
			}

			const recipeId = await httpResponse.json();
			return recipeId;
		} catch (error) {
			console.error(error);
		}
	}

	// DELETE request to remove recipe from favorites
	async function deleteRequest(name) {
		try {
			const httpResponse = await fetch(`/api/favorites/${name}`, {
				method: "DELETE"
			});

			if (!httpResponse.ok) {
				throw new Error("Error during remove from Favorites.");
			}

			onDeleteState(name);
			return httpResponse;
		} catch (error) {
			console.error(error);
		}
	}

	function isAddedToFavorite(mealName) {
		return favorites.some(favRecipe => favRecipe.mealName === mealName);
	}

	async function handleUpdateButton(recipe) {
		const isAddedOrNot = isAddedToFavorite(recipe.mealName);
		if (isAddedOrNot) {
			await deleteRequest(recipe.mealName);
			console.log('deleted');
		}
		else {
			const newRecipe = await postRequest(recipe);
			await userUpdate(newRecipe._id);
			console.log('posted');
		}
	}

	return (
		<>
			<button className="addToFavorites" onClick={() => handleUpdateButton(recipe)}>
				{!isAddedToFavorite(recipe.mealName) ? "Add To Favorites" : "Remove From Favorites"}
			</button>
		</>
	);
}

export default AddToFavoriteButton;