import { Posts } from './posts.model';
export namespace Post {
    export class Add {
        static readonly type = '[POSTS] Add post';
        constructor(public payload: Posts) { }
    }
    export class Remove {
        static readonly type = '[POSTS] Remove post';
        constructor(public payload: string) { }
    }
}