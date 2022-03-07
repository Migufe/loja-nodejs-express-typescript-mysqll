import { Product } from '../infra/typeorm/entities/Product'
import { ICreateProductDTO } from '../dtos/ICreateProductDTO'

export interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>
  listByName(name: string): Promise<Product[]>
  findByName(name: string): Promise<Product | undefined>
}
