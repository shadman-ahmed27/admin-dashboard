import Product from "../modelsMongoDB/Product";
import ProductStat from "../modelsMongoDB/ProductStat";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    const productStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.findOne({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
