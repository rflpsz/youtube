import { Post } from 'src/app/interfaces/post';
import { Comment } from './../comment';

export interface PostControl extends Post {
    makeComment: boolean;
    loadingComment: boolean;
    comments: Array<Comment>;
    showButtonMore?: boolean,
    reactName?: string,
    reactionOpen?: boolean,
    showComment?: boolean
}