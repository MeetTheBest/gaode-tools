import LikeRectangleEditor from ".";
export interface IEnhanceProperty {
    likeRectangleEditor: LikeRectangleEditor;
    polygonEditorOpen: () => void;
}
export interface IEnhanceEditorOptions {
    onChange: () => void;
}
