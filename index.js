const express = require("express");
const {
    Saveproduct,
    Getallproducts,
    editProductPage,
    deleteProduct,
    update,
} = require("./Controller/productcontroller");
const proModel = require("./Model/product");
const router = express.Router();
router.get('/', (req, res,next) => {
    let products=proModel.products;
    proModel
    .find()
    .then((products) => {
        // res.send(products)
      res.render("index", {
        Title: "Crud application",
        prods: products,
        path: "/",
        pageTitle: "Home",
      });
    })
    .catch((err) => console.log(err));
  
})
router.get("/addproduct", (req, res) => {
    res.render("add")
})
router.get("/user", (req, res) => {
    res.render("user")
})
router.get("/edit/:id", editProductPage);

router.post("/edit-data", update);
router.post("/addedproduct", Saveproduct);
router.get("/getproducts", Getallproducts);
router.get("/delete/:id", deleteProduct);
module.exports = router;
