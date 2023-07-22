const { Post, User, Comment } = require('../../models');

const postController = {
  getPostById: async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          { model: User },
          {
            model: Comment,
            include: [{ model: User }],
          },
        ],
      });

      if (!postData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = postData.get({ plain: true });

      res.render('post', { post });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = postController;
