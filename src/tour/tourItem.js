// 정보입력

const TourItem = ({article}) => {
    const {
        MAIN_TITLE, /* 콘텐츠명 */
        TITLE, /* 제목 */
        GUGUN_NM, /* 구군 */
        HOMEPAGE_URL, /* 홈페이지 */
        MAIN_IMG_NORMAL, /* 이미지 URL */
        ADDR1 /* 주소 */
    } = article;

    return (
        <div className="item">
            <div className="inner">
                <div className="title">
                    <span>{GUGUN_NM}</span>
                    <h4>{MAIN_TITLE}</h4>
                </div> {/* .title end */}

                <figure><img src={MAIN_IMG_NORMAL} alt={MAIN_TITLE} /></figure>

                <div className="text">
                    <p>{TITLE}</p>
                    <div className="bottom">
                        <p>{ADDR1}</p>
                        {/* noreferrer : 해당페이지로 넘어가기 위해 http에게 요청함 */}
                        {HOMEPAGE_URL && <a href={HOMEPAGE_URL} target="_blank" rel="noreferrer">홈페이지</a> }
                    </div> {/* .bottom end */}
                </div> {/* .text end */}

            </div>{/* .inner end */}
        </div> /* .item end */
    )

}

export default TourItem;