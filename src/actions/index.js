export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  LOAD_ALL: 'LOAD_ALL',
  LOAD_HACKER_NEWS: 'LOAD_HACKER_NEWS',
  LOAD_REDDIT: 'LOAD_REDDIT',
  LOAD_PRODUCT_HUNT: 'LOAD_PRODUCT_HUNT',
  LOAD_GITHUB_TRENDING: 'LOAD_GITHUB_TRENDING'
}