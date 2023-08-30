const Product = require("./../models/product.model");

exports.product = async (req, res) => {
    try {
        var products = await Product.find();
        products.sort((a, b) => a.ProductStoreCode.localeCompare(b.ProductStoreCode));

        res.render("product", {
            product: products,
        });
    } catch (error) {
        res.send(error);
    }
};

exports.formCreate = async (req, res) => {
    const data = req.body;
    res.render("form", { product: data });
};

exports.store = async (req, res) => {
    const data = req.body;

    try {
        const p = new Product(data);
        await p.save();
        res.redirect("/");
    } catch (error) {
        res.send("/create", { products: data, error: error });
    }
};

exports.delete = async (req, res) => {
    const _id = req.params.id;
    try {
        await Product.findByIdAndDelete(_id);
        res.redirect("/");
    } catch (error) {
        res.redirect("/");
    }
};
