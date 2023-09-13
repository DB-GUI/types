import { Connection_record } from '../app_data'
import { Adapter } from '.'
import { Treeview_element } from '../connection_view/vscode'

export
interface Vscode_adapter<Connection_config> extends Adapter {
  make_treeview(config: Connection_record<Connection_config>): Treeview_element
}
