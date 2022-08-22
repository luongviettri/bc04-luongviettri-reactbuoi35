import React, { Component } from "react";
import { connect } from 'react-redux';
import { actionHuyGhe } from "../redux/actions/BookingTicketActions";
class ThongTinDatGhe extends Component {

    renderGheDangDat = () => {

        let { mangGheDangDat } = this.props;
        return mangGheDangDat.map((item, index) => {
            return (
                <tr key={index.toString()} >
                    <th>{item.soGhe}</th>
                    <th>{item.gia}</th>
                    <th>
                        <button
                            onClick={() => {
                                // ! gửi thẳng lên redux
                                this.props.dispatch(actionHuyGhe(item.soGhe));
                            }}
                            style={{
                                cursor: "pointer"
                            }}
                            className="btn btn-danger"
                        >Hủy</button>
                    </th>

                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <div className="mt-5">
                    <button className="gheDuocChon"></button>
                    <span
                        className="text-light"
                        style={{
                            fontSize: "30px",
                        }}
                    >
                        Ghế đã đặt
                    </span>
                    <br />
                    <button className="gheDangChon"></button>
                    <span
                        className="text-light"
                        style={{
                            fontSize: "30px",
                        }}
                    >
                        Ghế đang đặt
                    </span>
                    <br />
                    <button
                        className="ghe"
                        style={{
                            marginLeft: "0",
                        }}
                    ></button>
                    <span
                        className="text-light"
                        style={{
                            fontSize: "30px",
                        }}
                    >
                        Ghế chưa đặt
                    </span>
                </div>
                <div className="mt-5">
                    <table className="table " border={1}>
                        <thead>
                            <tr
                                className="text-light"
                                style={{
                                    fontSize: '35px'
                                }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-warning" >
                            {this.renderGheDangDat()}
                        </tbody>
                        <tfoot className="text-warning">
                            <tr>
                                <td cols='2'></td>
                                <td >Tổng tiền</td>
                                <td >
                                    {
                                        this.props.mangGheDangDat.reduce((sum, item, index) => {
                                            return sum += item.gia
                                        }, 0)
                                    }
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div >
        );
    }
}
const mapStateToProps = (state) => ({
    mangGheDangDat: state.BookingTicketReducer.mangGheDangDat
})

export default connect(mapStateToProps)(ThongTinDatGhe)
