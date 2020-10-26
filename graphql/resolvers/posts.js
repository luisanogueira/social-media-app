const Post = require('../../models/Post');

// For each query, mutation
module.exports = {
    Query:{
        async getPosts() {
            try {
                const posts = await Post.find();
                return posts;
            } catch(err) {
                throw new Error(err);
            }
        }
    }
}