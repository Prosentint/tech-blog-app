const { Post } = require('../models');

const postData = [
    {
        title: "Test Title",
        content: "This is the first test of a post!",
        user_id: 1
    },
    {
        title: "This is giberish!",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et mi dictum, suscipit nibh eget, ullamcorper sapien. Etiam non sapien eget tortor porta dapibus. Duis blandit, odio non imperdiet fermentum, tortor est bibendum odio, sit amet faucibus ex diam ut arcu. Nulla vel enim quis orci dapibus pretium eget quis libero. Cras sollicitudin purus ut blandit fermentum. Donec justo mi, rhoncus vel sollicitudin vitae, pellentesque commodo tellus. Sed maximus consectetur fermentum. Donec sit amet nisl hendrerit, mattis urna vitae, lobortis diam. Sed ac condimentum massa.",
        user_id: 2
    },
    {
        title: "FitnessGram Pacer Test",
        content: "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.",
        user_id: 2

    },
    {
        title: "Honey Bee Fact #12",
        content: "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway. Because bees don't care what humans think is impossible.",
        user_id: 3
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;