export interface INodeTypeHttp {
    get(url: string): Promise<any>;
    post(url: string, data: any): Promise<any>;
    put(url: string, data: any): Promise<any>;
    delete(url: string): Promise<any>;
    patch(url: string, data: any): Promise<any>;
}