import React from 'react';
import moment from 'moment';
import './photoDetail.scss';
import usePhoto from '../hooks/usePhoto';
const SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

type PhotoDetailProps = {
    close: () => void;
}

function PhotoDetail({ close }: PhotoDetailProps) {

    const { selectedPhoto } = usePhoto();

    return (
        <div className="photo-detail">
            <div className="photo-detail-left">
                <div className="blur-img-wrp">
                    <img className="blur-img" src={`${SERVER_URL}/static/${selectedPhoto.file_path}`} />
                </div>
                <div className="photo-detail-img-wrp">
                    <img src={`${SERVER_URL}/static/${selectedPhoto.file_path}`} />
                </div>
                <button className="photo-detail-btn-close" onClick={close}>
                    <i className="ri-close-line"></i>
                </button>
            </div>
            <div className="photo-detail-right">
                <div className="photo-detail-infos-wrp">
                    <div className="photo-detail-info-unit">
                        <i className="ri-user-fill"></i>
                        <p>{selectedPhoto.photograper}</p>
                    </div>
                    <div className="photo-detail-info-unit">
                        <i className="ri-road-map-fill"></i>
                        <p>{selectedPhoto.location}</p>
                    </div>
                    <div className="photo-detail-info-unit">
                        <i className="ri-calendar-2-fill"></i>
                        <p>{moment(selectedPhoto.date).format('YYYY-MM-DD')}</p>
                    </div>
                    <div className="photo-detail-info-unit">
                        <i className="ri-camera-line"></i>
                        <p>{selectedPhoto.equipment}</p>
                    </div>
                    <div className="photo-detail-info-unit">
                        <i className="ri-flashlight-line"></i>
                        <p>{selectedPhoto.exposure}</p>
                    </div>
                    <div className="photo-detail-info-unit">
                        <i className="ri-equalizer-line"></i>
                        <p>{selectedPhoto.processing}</p>
                    </div>
                    <div className="photo-detail-info-unit">
                        <i className="ri-chat-quote-line"></i>
                        <p>{selectedPhoto.story}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoDetail;