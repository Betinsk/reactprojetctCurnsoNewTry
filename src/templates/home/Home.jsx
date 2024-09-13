
import './Home.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/loadPosts';
import { Posts } from '../../components/posts';
import { Button } from '../../components/Button/button';
import { TextInput } from '../../components/TextInput';

class Home extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPages:2,
    searchValue: ''

  }

  async componentDidMount() {
    await  this.loadPosts()
    }
  
  loadPosts = async () => {
    const { page, postsPerPages }  = this.state
    const PostsAndPhotos = await loadPosts()
     this.setState({
       posts: PostsAndPhotos.slice(page,postsPerPages),
      allPosts: PostsAndPhotos,
      })
}

  loadMorePosts = () => {
    const {
      page,
      postsPerPages,
      allPosts,
      posts
    } = this.state

    const nextPage = page + postsPerPages
    console.log(nextPage)
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPages)
    console.log('next posts', nextPosts)
    posts.push(...nextPosts)
    console.log(posts)
    this.setState({posts, page: nextPage})


  }

  handleChange = (e) => {
    const {value} = e.target
    this.setState({searchValue: value})
  }

  render() {
    const { posts, page, postsPerPages, allPosts, searchValue } = this.state
    const noMorePosts = page + postsPerPages >= allPosts.length;

    const filteredPosts = !!searchValue ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
    })
    : posts;

    return (
      <section className='container'>
        <div className='search-container'>
        {!!searchValue && (
          <h1>Seach value: {searchValue}</h1>
        )}

        <TextInput searchValue={searchValue} handleChange ={this.handleChange} />
      </div>
        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

      {filteredPosts.length === 0 && (
          <p>Não existem postes</p> 
        )}
        <Posts posts={filteredPosts}/>
        <div className='button-container'> 
          {!searchValue && (
              <Button  text='Load more posts'
              onClick={this.loadMorePosts}
              disabled={noMorePosts}/>
          )}
      
        </div>
      
    </section>
    );
  }
}

export default Home;
