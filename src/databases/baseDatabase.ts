/* eslint-disable */
import { Model } from "mongoose"
import { v4 } from "uuid"

export default class BaseDatabase<T> {
  model: Model<any, any>

  constructor(model: any) {
    this.model = model
  }

  // Utilities funciton here

  // Queries methods here
  async create(docs: any): Promise<any> {
    Object.assign(docs, {
      ref_id: v4(),
      created_datetime_utc: new Date().toISOString(),
    })
    return this.model.create(docs)
  }

  async insertMany(query: Array<any>): Promise<any> {
    const payload = query.map((e) => {
      return {
        ...e,
        ref_id: v4(),
        created_datetime_utc: new Date().toISOString(),
      }
    })
    return await this.model.insertMany(payload)
  }

  async getCollection(
    filter: Object,
    sort: Object,
    page: number = 1,
    limit: number = 10,
    project: Object = {}
  ) {
    const skip = page !== 1 ? limit * (page - 1) : 0
    const data = await this.model
      .find(filter, project)
      .sort(sort)
      .skip(skip)
      .limit(limit)

    const totalCount = await this.model.find(filter).count()

    return {
      data: data || [],
      total: totalCount || 0,
      current_page: page || 1,
      limit: limit || 10,
    }
  }

  async findOne(query: Object = {}, projection = {}): Promise<any> {
    let result = await this.model.findOne(query, projection)
    result = JSON.stringify(result)
    result = JSON.parse(result)
    return result
  }

  async find(query: Object = {}, sort: any, projection = {}): Promise<any> {
    let result = await this.model.find(query, projection).sort(sort)
    result = JSON.stringify(result)
    result = JSON.parse(result)
    return result
  }

  async findAndCount(query: Object = {}, projection = {}): Promise<any> {
    let result = await this.model.find(query, projection).count()
    result = JSON.stringify(result)
    result = JSON.parse(result)
    return result
  }

  async update(query: any, id: string): Promise<any> {
    Object.assign(query, {
      modified_datetime_utc: new Date().toISOString(),
    })
    return this.model.updateOne({ ref_id: id }, { $set: query })
  }

  async delete(query: object) {
    return await this.model.deleteOne(query)
  }

  // async getAll(): Promise<any> {
  //   return this.model.find()
  // }

  // async getOne(): Promise<any> {
  //   return this.model.findOne()
  // }

  // async create(): Promise<any> {}

  // async update(): Promise<any> {}

  // async delete(): Promise<any> {}
}
