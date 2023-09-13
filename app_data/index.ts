export
interface Other_data {
  migration_version: string
  platform: string
}

/** 列表型数据的单条记录 */
interface List_data_record {
  _id: string
}
/** 连接记录 */
export
interface Connection_record<Connection_config> extends List_data_record {
  name: string
  adapter: string
  config: Connection_config
}

/** 最基础的 app data 存取 */
export
interface Data_accessor<Data> {
  get(default_data: Data): Data | Promise<Data>
  save(data: Data): undefined | Promise<undefined>
}

/** list 类型的 app data 存取 */
export
interface List_data_accessor<Record extends List_data_record> extends Data_accessor<Record[]> {
  get_by_id(id: string): Record | Promise<Record>
  insert(record: Record): Promise<string>
  update(record: Record): Promise<undefined>
}

/** 所有的 app data 存取 */
export
interface App_data {
  other: Data_accessor<Other_data>
  connection: List_data_accessor<Connection_record<any>>
}
