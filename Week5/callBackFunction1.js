let myPosts = ['dave', 'garry', 'steve'];

const allPosts = () => {
    setTimeout(() => {
        myPosts.map((post) => console.log(post));
    }, 1000);
};

const createPost = (post, callback) => {
    setTimeout(() => {
        myPosts.push(`${post}`);
        if (callback) {
            callback();
        }
    }, 2000);
};

createPost('post4', allPosts);