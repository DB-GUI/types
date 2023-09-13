// 插入、更新连接时的表单字段
export
interface Connection_form_field {
  key: string
  label: string
  type: 'string' | 'number' | 'file'
}

// 与数据库的连接
export
interface I_connection {
  
}

export
interface Adapter<Connection_config, Connection extends I_connection> {
  key: string
  label: string

  ui: {
    connection: {
      upsert: {
        form: Connection_form_field[]
      }
    }
  }
  
  make_conn(config: Connection_config): Connection
}
