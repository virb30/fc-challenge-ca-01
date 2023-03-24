import Product from "../../../domain/product/entity/product";
import ProductFactory from "../../../domain/product/factory/product.factory";
import UpdateProductUseCase from "./update.product.usecase";

const product = ProductFactory.create("a", "Product", 10);

const input = {
    id: product.id,
    name: "Product Updated",
    price: 20
};

const MockRepository = () => {
    return {
        create: jest.fn(),
        findAll: jest.fn(),
        find: jest.fn().mockReturnValue(Promise.resolve(product)),
        update: jest.fn(),
    }
};

describe("Update product unit test", () => {
    it("should update product", async () => {
        const productRepository = MockRepository();
        const updateProductUseCase = new UpdateProductUseCase(productRepository);
        const output = await updateProductUseCase.execute(input);
        expect(output).toEqual(input);
    });

    it("should not update product", async () => {
        const productRepository = MockRepository();
        productRepository.find.mockImplementation(() => {
            throw new Error("Product not found");
        });
        const updateProductUseCase = new UpdateProductUseCase(productRepository);
        expect(() => updateProductUseCase.execute(input)).rejects.toThrow("Product not found");
    });


    it("should not update a product with invalid name", async () => {
        const productRepository = MockRepository();
        const usecase = new UpdateProductUseCase(productRepository);
        const input = {
            id: "123",
            name: "",
            price: 20
        }
        expect(() => usecase.execute(input)).rejects.toThrow("Name is required");
    });

    it("should not update a product with invalid price", async () => {
        const productRepository = MockRepository();
        const usecase = new UpdateProductUseCase(productRepository);
        const input = {
            id: "123",
            name: "Product updated",
            price: -20
        }
        expect(() => usecase.execute(input)).rejects.toThrow("Price must be greater than 0");
    });
});