import { BodyDiv } from "./style";
import { useParams, useNavigate } from "react-router-dom";
import { getRecommendMovies } from "../../apis/apis";
function Body() {

    const movieTitle = useParams().movieTitle;
    const navigate = useNavigate();
    getRecommendMovies(navigate, movieTitle);
    
    return(
        <BodyDiv>
            <div></div>
            <p>추천 영화를 찾는 중입니다...</p>
        </BodyDiv>
    )
}

export default Body;