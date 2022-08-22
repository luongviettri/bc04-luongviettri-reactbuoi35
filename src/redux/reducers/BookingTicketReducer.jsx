import { CHECK_GHE, HUY_GHE } from "../consts/BookingTicketConst"

const initialState = {
    mangGheDangDat: [

    ]
}

export default (state = initialState, action) => {

    switch (action.type) {

        case CHECK_GHE: {
            let { ghe } = action;

            let newMangGhe = [...state.mangGheDangDat];
            let index = newMangGhe.findIndex(item => item.soGhe == ghe.soGhe);
            index === -1 ?
                newMangGhe.push(ghe) //! nếu ko tìm thấy thì push ghế vào mảng
                :
                newMangGhe.splice(index, 1) // ! nếu tìm thấy thì cắt nó ra nghen
            return { ...state, mangGheDangDat: newMangGhe }
        }
        case HUY_GHE: {
            // console.log(action);
            let { soGhe } = action;
            let newMangGhe = [...state.mangGheDangDat];
            let index = newMangGhe.findIndex(item => item.soGhe == soGhe);
            newMangGhe.splice(index, 1);
            return { ...state, mangGheDangDat: newMangGhe }
        }

        default:
            return state
    }
}
