import { CHECK_GHE, HUY_GHE } from "../consts/BookingTicketConst";

export const actionCheckGhe = (ghe) => ({
    type: CHECK_GHE,
    ghe
})
export const actionHuyGhe = (soGhe) => ({
    type: HUY_GHE,
    soGhe
})

