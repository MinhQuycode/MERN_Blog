import { INIT_STATE } from "../../constant";
import { getType, hidenModal, showModal } from "../actions";

export default function modalReducer(state = INIT_STATE.modal, action) {
    switch (action.type) {
        case getType(showModal):
            return {
                isShow: true,
            };
        case getType(hidenModal):
            return {
                isShow: false,
            };
        default:
            return state;
    }
}