import { BodyDiv } from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Body() {

    // 다시하기 버튼 클릭 시
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate(`/`);
    }
    
    // movieList
    const location = useLocation();
    const movieList = location.state.recommendMovies;

    // 결과 섹션 채우기
    const setResultSection = () => {
        const resultSection = document.getElementById('resultSection');
        const lenOfMovieList = movieList.length;
        resultSection.innerHTML = ``;
        for (let i=0; i<lenOfMovieList; i++) {
            const prevMovies = resultSection.innerHTML;
            const currMovieTitle = movieList[i].title;
            const currMovieGenres = movieList[i].genres;
            const currMovieRating = movieList[i].rating;
            resultSection.innerHTML = prevMovies + `
              <div>
                <p>${currMovieTitle}</p>
                <p>${currMovieGenres}</p>
                <p>평점 : ${currMovieRating}</p>
              </div>  
            `;
        }
    }
    
    useEffect(() => {
        setResultSection();
    }, []);

    return(
        <BodyDiv>
            <h1>추천 영화를 찾았습니다!!</h1>
            <section id="resultSection">
            </section>
            <button onClick={handleOnClick}>다시하기</button>
        </BodyDiv>
    )
}

export default Body;