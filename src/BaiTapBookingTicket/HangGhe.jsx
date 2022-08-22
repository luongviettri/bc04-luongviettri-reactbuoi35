import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCheckGhe } from '../redux/actions/BookingTicketActions';
class HangGhe extends Component {
    constructor(props) {
        super(props);
    }

    // ! hàm render hàng đầu tiên
    //! nếu là hàng đầu tiên thì css kiểu number  
    renderFirstRow = () => {
        let { item, index } = this.props;
        let hangDauTien;
        if (index == 0) {
            hangDauTien = item.danhSachGhe.map((ghe, index) => {
                return <button className={`rowNumber`}
                    key={index.toString()}
                >{ghe.soGhe}</button>
            })
        }
        return hangDauTien;
    }
    // ! hàm render cả row ( trừ firstRow )
    renderRow = () => {
        let { item, index, mangGheDangDat } = this.props;
        let mangCanRender;
        if (index !== 0) {
            mangCanRender = item.danhSachGhe.map((ghe, index) => {
                // ! LƯU Ý: phải css trong vòng lặp
                let cssGheDuocChon = "";
                let cssGheDangChon = '';
                let disabled = false;
                if (ghe.daDat == true) { //! css ghế đã chọn
                    cssGheDuocChon = "gheDuocChon";
                    disabled = true;
                }
                let checkTrung = mangGheDangDat.findIndex(item => item.soGhe === ghe.soGhe)   // ! css ghế đang chọn
                if (checkTrung != -1) {
                    cssGheDangChon = 'gheDangChon'
                }
                return (
                    <button
                        disabled={disabled ? disabled : ""}
                        className={`ghe ${cssGheDuocChon} ${cssGheDangChon} }`}
                        key={index.toString()}
                        onClick={() => {
                            this.props.checkGhe(ghe)
                        }}
                    >{ghe.soGhe}
                    </button>
                )
            })
        }
        return mangCanRender;
    }
    renderRowNumber = () => {
        let { item, index } = this.props;
        return <span>{item.hang}</span>
    }
    render() {
        return (
            <div className='text-light  ' >
                {this.renderFirstRow()}
                {this.renderRowNumber()}
                {this.renderRow()}

            </div>
        )
    }

}
const mapStateToProps = (state) => ({
    mangGheDangDat: state.BookingTicketReducer.mangGheDangDat
})

const mapDispatchToProps = (dispatch) => {
    return {
        checkGhe: (ghe) => {
            dispatch(actionCheckGhe(ghe))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
