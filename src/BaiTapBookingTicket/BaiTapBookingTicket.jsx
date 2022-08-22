import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGheData from '../data/danhSachGhe.json'
import HangGhe from './HangGhe'
export default class BaiTapBookingTicket extends Component {
    // ! hàn dùng để render tất cả các ghế ra màn hình
    // todo: đầu tiên là render là row number, sau đó là render ra cả row
    renderAllChairs = () => {
        let allChairArr = danhSachGheData;
        let mangDuocRender = allChairArr.map((item, index) => {
            return (
                <HangGhe
                    item={item}
                    index={index}
                    key={index.toString()}
                />
            )
        })
        return mangDuocRender
    }
    render() {
        return (
            <div>
                <div className="container-fluid p-0 m-0 bookingMovie">
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "fixed",
                            backgroundImage: "url(./img/BookingTicket/bgmovie.jpg)",
                            backgroundSize: "100%"
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "fixed",
                                backgroundColor: 'rgba(0,0,0,0.7)'
                            }}
                        >
                            <div className="row">
                                <div className="col-8 text-center">
                                    <div className='display-4 text-warning' >ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                                    <div
                                        className='mt-3 text-light'
                                        style={{
                                            fontSize: "25px"
                                        }}
                                    >Màn hình</div>
                                    <div
                                        className='mt-2 d-flex justify-content-center flex-column'
                                    >
                                        <div className="screen"
                                            style={{
                                                margin: "0 auto"
                                            }}
                                        ></div>
                                        <div className='mt-3' >
                                            {this.renderAllChairs()}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 ">
                                    <div
                                        className='text-light mt-2'
                                        style={{
                                            fontSize: "35px"
                                        }}
                                    >DANH SÁCH GHẾ BẠN CHỌN</div>
                                    <ThongTinDatGhe />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
