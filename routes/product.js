const express = require('express')
const router = express.Router()

const{create,productById,read,remove,update,list,listRelated,listCategories,listBySearch,photo,listSearch} = require('../controllers/product')
const {userById} = require('../controllers/user')
const{requireSignIn,isAdmin,isAuth} = require('../controllers/auth')

router.get('/product/:productId',read)
router.delete('/product/:productId/:userId',requireSignIn,isAdmin,isAuth,remove)
router.put('/product/:productId/:userId',requireSignIn,isAdmin,isAuth,update)
router.post('/product/create/:userId',requireSignIn,isAdmin,isAuth,create)
router.get('/products',list)
router.get('/products/related/:productId',listRelated)
router.get('/productss/categories', listCategories);
router.post("/products/by/search", listBySearch);
router.get("/products/search", listSearch);
router.get('/product/photo/:productId',photo)
router.param('userId',userById)
router.param('productId',productById)
module.exports = router