
import { Reply } from 'src/app/interfaces/reply';

export interface ReplyControl extends Reply {
    editing: boolean;
    loading: boolean;
}