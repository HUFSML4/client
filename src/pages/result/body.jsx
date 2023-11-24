import { BodyDiv } from "./style";
function Body() {

    return(
        <BodyDiv>
            <h1>추천 영화를 찾았습니다!!</h1>
            <section id="resultSection">
                <div>
                    <p>The Dark Knight</p>
                    <p>'Action','Crime','Drama','Thriller'</p>
                    <p><span>평점 : </span>8.2</p>
                </div>
                <div>
                    <p>Title</p>
                    <p>Genre</p>
                    <p><span>평점 : </span>Rate</p>
                </div>
                <div>
                    <p>Title</p>
                    <p>Genre</p>
                    <p><span>평점 : </span>Rate</p>
                </div>
                <div>
                    <p>Title</p>
                    <p>Genre</p>
                    <p><span>평점 : </span>Rate</p>
                </div>
                <div>
                    <p>Title</p>
                    <p>Genre</p>
                    <p><span>평점 : </span>Rate</p>
                </div>
                <div>
                    <p>Title</p>
                    <p>Genre</p>
                    <p><span>평점 : </span>Rate</p>
                </div>
            </section>
            <button>다시하기</button>
        </BodyDiv>
    )
}

export default Body;