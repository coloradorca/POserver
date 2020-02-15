// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// const { blogService } = require('../services')

// const { createBlogpost } = blogService

// /*
//  * call other imported services, or same service but different functions here if you need to
// */
// const postBlogpost = async (req, res, next) => {
//   const {user, content} = req.body
//   try {
//     await createBlogpost(user, content)
//     // other service call (or same service, different function can go here)
//     // i.e. - await generateBlogpostPreview()
//     res.sendStatus(201)
//     next()
//   } catch(e) {
//     console.log(e.message)
//     res.sendStatus(500) && next(error)
//   }
// }

// module.exports = {
//   postBlogpost
// }
