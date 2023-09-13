import { TreeItem } from 'vscode'

export
interface Has_children {
  get_children(): Treeview_element[] | Promise<Treeview_element[]>
}

export
interface Has_item {
  get_item(): TreeItem
}

export
interface Has_both extends Has_children, Has_item {}

export
type Treeview_element = Has_children | Has_item | Has_both
