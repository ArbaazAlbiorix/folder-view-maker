export class NodeModel { 
    name?: string;
    type: 'folder' | 'file' | 'unset' | null | undefined; 
    id: string | undefined;
    children?: NodeModel[];
}