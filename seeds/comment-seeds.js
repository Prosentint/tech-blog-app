const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Comment Test 1",
        user_id: 1,
        post_id: 1,
        
    },
    {
        comment_text: "Comment Test 2",
        user_id: 1,
        post_id: 2,
        
    },
    {
        comment_text: "Comment Test 3",
        user_id: 1,
        post_id: 3,
        
    },
    {
        comment_text: "Woah",
        user_id: 2,
        post_id: 2,
        
    },
    {
        comment_text: "Woah",
        user_id: 2,
        post_id: 3,
        
    },
    {
        comment_text: "This is great",
        user_id: 3,
        post_id: 1,
        
    },
    {
        comment_text: "woah",
        user_id: 2,
        post_id: 1,
        
    },
    {
        comment_text: "I love this!",
        user_id: 3,
        post_id: 3,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;