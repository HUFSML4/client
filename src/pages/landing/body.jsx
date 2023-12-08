import { BodyDiv } from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { searchMovies } from "../../apis/apis";
function Body() {

    // keyword 검색 시
    const setMovies = (currMovies) => {
        const searchResultSection = document.getElementById('searchResultSection');
        const lenOfCurrMovies = currMovies.length;
        
        // 영화가 있는 경우
        if (lenOfCurrMovies !== 0){
            searchResultSection.style.display = 'block';
            searchResultSection.innerHTML = ``;
            for (let i=0; i<lenOfCurrMovies; i++) {
                const prevMovies = searchResultSection.innerHTML;
                searchResultSection.innerHTML = prevMovies + `
                    <h3 id="${currMovies[i]}">${currMovies[i]}</h3>
                `
            }
        }
        // 영화가 없는 경우
        else{
            searchResultSection.innerHTML = `
                <p>검색 결과가 없어요 ㅠㅠ</p>
            `
        }
    }

    // 검색 시
    const handleOnClickSearch = async() => {
        const keyword = document.getElementById('keywordBox').value;
        if (keyword === '') {
            alert('검색어를 설정해주세요!');
        }
        else{
            const currMovies = await searchMovies(keyword);
            setMovies(currMovies);
        }
    }

    // 검색 결과 내 클릭 시
    const handleOnClickSearchResultSection = (e) => {
        const selectedMovie = e.target.id;
        if (selectedMovie !== 'searchResultSection'){
            setSelectedMovie(selectedMovie);
            const h3Elements = document.querySelectorAll('#searchResultSection h3');

            h3Elements.forEach((h3) => {
                // 기존에 선택된 클래스가 있으면 제거
                h3.classList.remove('selected');
            });
        
            if (selectedMovie !== 'searchResultSection') {
                setSelectedMovie(selectedMovie);
                // 선택된 h3에 클래스 추가
                e.target.classList.add('selected');
            }
        }
    }

    // 추천 유형 선택
    const [recommendType, setRecommendType] = useState('');
    const handleOnClickIncludeExclude = (e) => {
        const selectedType = e.target.id;
        const includeP = document.getElementById('include');
        const excludeP = document.getElementById('exclude');
        
        if (selectedType === 'include'){
            includeP.style.color = `navy`;
            excludeP.style.color = `#000`;
        }
        else if(selectedType === 'exclude'){
            includeP.style.color = `#000`;
            excludeP.style.color = `navy`;
        }
        setRecommendType(selectedType);
    }

    // 비슷한 영화 찾기 클릭 시
    const [selectedMovie, setSelectedMovie] = useState('');
    const navigate = useNavigate();
    const handleOnClickFind = () => {
        if (selectedMovie === '') {
            alert('선택된 영화가 없어요!');
        }
        else if(recommendType === ''){
            alert('추천 유형을 선택해 주세요!');
        }
        else{
            navigate(`/loading/${selectedMovie}`);
        }
    }

    return(
        <BodyDiv>
            <h1>STEP 1.<br />
                <span>내 인생 영화</span>를 검색해 주세요! (키워드 검색)
            </h1>
            <p>
                <input type="text" name="" id="keywordBox" placeholder="ex) batman"/><button onClick={handleOnClickSearch}>검색</button>
            </p>
            <h1>STEP 2.<br />
                검색 결과 중 <span>내 인생 영화</span>를 클릭해 주세요!
            </h1>
            <section id="searchResultSection" onClick={handleOnClickSearchResultSection}></section>
            <h1>STEP 3.<br />
                <span>추천 유형</span>을 선택해 주세요!
            </h1>
            <p id="include" onClick={handleOnClickIncludeExclude}>감독, 출연진도 고려해서 추천받기 <span>(클릭!)</span></p>
            <p id="exclude" onClick={handleOnClickIncludeExclude}>내용 위주로만 추천받기 <span>(클릭!)</span></p>
            <h1>STEP 4.<br />
                <span>"비슷한 영화 찾기"</span> 버튼을 클릭해 주세요!
            </h1>
            <button onClick={handleOnClickFind}>비슷한 영화 찾기</button>
        </BodyDiv>
    )
}

export default Body;