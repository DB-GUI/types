import { Connection_record } from '../app_data'
import { Adapter, I_connection } from '.'
import { Treeview_element } from '../connection_view/vscode'

interface Connection_view_icon {
  database: string
  table
}

interface Vscode_adapter<Connection_config, Connection extends I_connection>
extends Adapter<Connection_config, Connection> {
  make_treeview(record: Connection_record<Connection_config>, icon: Connection_view_icon): Treeview_element
}

export
type func_activate<Connection_config, Connection extends I_connection> =
  () => Vscode_adapter<Connection_config, Connection>
