import { Connection_record } from '../app_data'

// 数据库连接配置
export
type Connection_config = Record<string, string | number | null>

// 插入、更新连接时的表单字段
export
interface Connection_form_field {
  key: string
  label: string
  type: 'string' | 'number' | 'file'
}

export
interface Adapter {
  key: string
  label: string
  ui: {
    connection: {
      upsert: {
        form: Connection_form_field[]
      }
    }
  }
}
