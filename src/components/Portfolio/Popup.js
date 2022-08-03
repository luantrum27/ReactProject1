import React from 'react'
import '../../styles/Popup.css'
import btnClose from '../../assets/image/close.png'
import { actions, useStore } from '../../store'

function Popup(props) {
    const [state, dispatch] = useStore();
    const { popup } = state;

    console.log('popup: ', popup);

    const handleToggle = () => {
        dispatch(actions.setPopup(!popup))
    }
    return (
        <div className='popup-component'>
            <div className='overlay'></div>
            <div className='popup-wrapper'>
                <div className='popup-title'>
                    <h1>{props.title}</h1>
                </div>
                <div className='popup-desc'>
                    <div className='popup-desc--list'>
                        <div className='popup-desc--item'>
                            <i class="fa fa-file-lines"></i>
                            <span className='popup-desc--type'>Project: <span>{props.project}</span></span>
                        </div>
                        <div className='popup-desc--item'>
                            <i class="fa fa-file-lines"></i>
                            <span className='popup-desc--type'>Client: <span>{props.client}</span></span>
                        </div>
                    </div>
                    <div className='popup-desc--list'>
                        <div className='popup-desc--item'>
                            <i class="fa fa-file-lines"></i>
                            <span className='popup-desc--type'>Language: <span>{props.language}</span></span>
                        </div>
                        <div className='popup-desc--item'>
                            <i class="fa fa-file-lines"></i>
                            <span className='popup-desc--type'>Preview: <span>{props.preview}</span></span>
                        </div>
                    </div>
                </div>
                <div className='popup-media'>
                    <iframe width="98%" height="300" src="https://www.youtube.com/embed/b0VKqqxCAkU" title="Món quà chính là trên nụ cười em thôi!!... Những bản remix hay nhất hot tiktok của CUKAK!!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <span className='btn-close'>
                    <img src={btnClose} alt='' onClick={handleToggle}/>
                </span>
            </div>

        </div>
    )
}

export default Popup