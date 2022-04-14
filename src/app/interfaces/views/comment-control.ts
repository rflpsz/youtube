
import { Comment } from 'src/app/interfaces/comment';

export interface CommentControl extends Comment {
    showReplyMore: boolean;
    countReply: number;
    showReplyComment: boolean;
    replyShowButtonMore: boolean;
    showButtonMore: boolean;
    editing: boolean;
    loading: boolean;
}