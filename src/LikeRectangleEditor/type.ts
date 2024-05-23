import LikeRectangleEditor from ".";

export interface IEnhanceProperty {
    likeRectangleEditor: LikeRectangleEditor;
    polygonEditorOpen: () => void;
}

export interface IEnhanceEditorOptions {
    onChange?: (type: string, data: any) => void;
    /**
     * 旋转操作时自动控制编辑状态（开始旋转时：关闭；旋转结束后：开启）
     * !!!注意 rotatingCloseEditor 设置为 false 则需要自行控制编辑器状态，否则旋转时，操作点不会跟随变化
     */
    rotatingCloseEditor?: boolean;
    /**
     * 点位操作时自动控制旋转器状态（点位拖动时：关闭；点位拖动后：开启）
     * !!!注意 editingCloseRotator 设置为 false 则需要自行控制旋转器状态，否则编辑时，旋转操作点不会跟随变化
     */
    editingCloseRotator?: boolean;
    /**
     * 是否为移动端
     */
    isMobile?: boolean;
}
