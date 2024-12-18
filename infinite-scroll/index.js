const container = document.querySelector('.post-container')
const loader = document.querySelector('.loader')
const errorEl = document.querySelector('.error')
const endOfContentEl = document.querySelector('.end-of-content')

let startIndex = 0
let endIndex = getNextPostsCount(startIndex)
let isFetching = false
let isError = false
let endOfContent = false
let attempt = 0
const MAX_RETRIES = 3

//determines the no of posts to be fetched based on the current viewport height
function getNextPostsCount(start) {
    const postHeight = 90
    const newPostCount = Math.ceil(window.innerHeight / postHeight)
    return start + newPostCount
}

const addPosts = (posts = []) => {
    posts.forEach((post, index) => {
        const postContainer = document.createElement('div')
        postContainer.className = 'post'

        const postNumberEl = document.createElement('span')
        postNumberEl.className = 'post-number'
        postNumberEl.textContent = startIndex + index + 1

        const postContentEl = document.createElement('span')
        postContentEl.className = 'post-body'
        postContentEl.textContent = post.body

        postContainer.appendChild(postNumberEl)
        postContainer.appendChild(postContentEl)
        container.appendChild(postContainer)
    })
}


const showEndContent = () => {
    endOfContentEl.style.display = 'block'
}

const toggleError = (display) => {
    errorEl.style.display = display
}

const toggleLoader = (loaderStatus) => {
    loader.style.display = loaderStatus
}

const fetchPosts = async (start, end) => {
    const url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_end=${end}`
    isFetching = true
    toggleError('none')
    toggleLoader('block')

    try {
        const res = await fetch(url)
        const posts = await res.json()

        if (posts.length < end - start) {
            endOfContent = true
            toggleLoader('none')
            if (posts.length > 0) {
                addPosts(posts)
            }
            showEndContent()
        } else {
            addPosts(posts)
            startIndex = end
            endIndex = getNextPostsCount(startIndex)
        }
        attempt = 0
        isError = false
    } catch (err) {
        attempt++
        const renderedPosts = document.getElementsByClassName('post').length

        if (attempt > MAX_RETRIES) {
            toggleError('block')
            isError = true
        } else if (renderedPosts === 0) {
            fetchPosts(start, end)
        }

        toggleLoader('none')
    } finally {
        isFetching = false
    }
}

fetchPosts(startIndex, endIndex)

const checkAndGetPosts = () => {
    if (isFetching || isError || endOfContent) return
    const scrolledHeight = Math.ceil(window.innerHeight + window.scrollY)
    const docOffset = window.document.body.offsetHeight - 36

    //Check if the user reached the bottom
    if (scrolledHeight >= docOffset) {
        fetchPosts(startIndex, endIndex)
    }
}

window.addEventListener('scroll', checkAndGetPosts)