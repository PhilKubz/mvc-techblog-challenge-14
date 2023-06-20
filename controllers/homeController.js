const { Post, User, Comment } = require('../models');

const homeController = {
  getHomePage: async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [{ model: User }],
        order: [['created_at', 'DESC']],
      });

      const posts = postData.map((post) => post.get({ plain: true }));

      res.render('home', { posts });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = homeController;
