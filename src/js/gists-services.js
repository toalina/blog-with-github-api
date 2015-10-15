function deleteGist(id) {
	$http.delete('https://api.github.com/users/toalina/gists/' + id )
	
}