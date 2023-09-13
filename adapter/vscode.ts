import { Adapter, I_connection } from '.'
import { Treeview_element } from '../connection_view/vscode'

export
interface Vscode_adapter<
  Connection_config,
  Connection extends I_connection,
> extends Adapter<Connection_config, Connection> {
  make_treeview(conn: Connection): Treeview_element
}
