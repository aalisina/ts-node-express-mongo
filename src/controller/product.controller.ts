import { Request, Response } from "express";
import {
  createProduct,
  findAndUpdateProduct,
  findProduct,
  deleteProduct,
} from "../services/product.service";
import {
  CreateProductInput,
  DeleteProductInput,
  GetProductInput,
  UpdateProductInput,
} from "../validators/product.schema";
export async function createProductHandler(
  req: Request<{}, {}, CreateProductInput["body"]>,
  res: Response
) {
  // todo: add a try catch block
  const userId = res.locals.user._id;
  const body = req.body;
  const product = await createProduct({
    ...body,
    user: userId,
  });
  return res.send(product);
}
 // todo: add a try catch block
export async function getProductHandler(
  req: Request<GetProductInput["params"]>,
  res: Response
) {
  const productId = req.params.productId;
  const product = await findProduct({ productId });
  if (!product) {
    return res.sendStatus(404);
  }
  return res.send(product);
}
 // todo: add a try catch block
export async function updateProductHandler(
  req: Request<UpdateProductInput["params"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const productId = req.params.productId;
  const update = req.body;

  const product = await findProduct({ productId });
  if (!product) {
    return res.sendStatus(404);
  }
  if (product.user !== userId) {
    return res.sendStatus(403);
  }
  const updatedProduct = await findAndUpdateProduct({ productId }, update, {
    new: true,
  });
  return res.send(updatedProduct);
}
 // todo: add a try catch block
export async function deleteProductHandler(
  req: Request<DeleteProductInput["params"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const productId = req.params.productId;
  const update = req.body;

  const product = await findProduct({ productId });
  if (!product) {
    return res.sendStatus(404);
  }
  if (product.user !== userId) {
    return res.sendStatus(403);
  }
  await deleteProduct({ productId });
  return res.sendStatus(200);
}
