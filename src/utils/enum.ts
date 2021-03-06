const enum patch {
    NODE_DELETE = 'NODE_DELETE',   //节点被删除
    NODE_TEXT_MODIFY = 'NODE_TEXT_MODIFY ',   //文本节点被更改
    NODE_REPLACE = 'NODE_REPLACE',   //节点被替代
    NODE_ADD = 'NODE_ADD',   //添加节点
    NODE_ATTRIBUTE_MODIFY = 'NODE_ATTRIBUTE_MODIFY',   //更新属性
    NODE_ATTRIBUTE_ADD = 'NODE_ATTRIBUTE_ADD',   //添加属性
    NODE_ATTRIBUTE_DELETE = 'NODE_ATTRIBUTE_DELETE'    //删除属性
}

export {
    patch
}