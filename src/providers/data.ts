import { DataProvider, BaseRecord, GetListParams, GetListResponse } from "@refinedev/core";
import { Mock_Subjects } from "./mock-data";

export const dataProvider: DataProvider = {
  getList: async<TData extends BaseRecord = BaseRecord>({ resource }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== 'subjects') {
      return { data: [] as TData[], total: 0 }
    }
    console.log('resource is', resource);
    return { data: Mock_Subjects as unknown as TData[], total: Mock_Subjects.length }
  },
  getOne: async () => { throw new Error('this is function is not present in this mock') },
  create: async () => { throw new Error('this is function is not present in this mock') },
  update: async () => { throw new Error('this is function is not present in this mock') },
  deleteOne: async () => { throw new Error('this is function is not present in this mock') },
  getApiUrl() { return '' },
}