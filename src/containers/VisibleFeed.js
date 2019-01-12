import { connect } from 'react-redux'
import Feed from '../components/Feed'
import { VisibilityFilters } from '../actions'

const getVisiblePosts = (posts, filter) => {
  switch (filter) {
    case VisibilityFilters.LOAD_ALL:
     return posts
    case VisibilityFilters.LOAD_HACKER_NEWS:
      return posts.filter(p => p.source === 'Hacker News')
    case VisibilityFilters.LOAD_REDDIT:
      return posts.filter(p => p.source === 'Reddit')
    case VisibilityFilters.LOAD_PRODUCT_HUNT:
      return posts.filter(p => p.source === 'Product Hunt')
    case VisibilityFilters.LOAD_GITHUB_TRENDING:
     return posts.filter(p => p.source === 'Github Trending')
    default:
      return posts
  }
}

const mapStateToProps = state => ({
  posts: getVisiblePosts(state.posts.items, state.visibilityFilter)
})

export default connect(
  mapStateToProps
)(Feed)