import { atom } from 'recoil';
import {recoilPersist} from "recoil-persist";
const { persistAtom } = recoilPersist()

const messagesAtom = atom({
    key: 'messagesMain',
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export { messagesAtom };
