export const loadPosts = async () => {
    const postsResponses = fetch('https://jsonplaceholder.typicode.com/posts')
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsResponses, photosResponse])
    const postsJson = await posts.json()
    const photosJson = await photos.json()

  
    const PostsAndPhotos = postsJson.map((post, index) => {
      return {...post, foto: photosJson[index].url }
    })

    return PostsAndPhotos
}