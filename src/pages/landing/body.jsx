import { BodyDiv } from "./style";
function Body() {
    const handleOnClickSearch = async() => {
        console.log('search');
    }
    const handleOnClickFind = async() => {
        console.log('find');
    }
    return(
        <BodyDiv>
            <h1>STEP 1.<br />
                <span>내 인생 영화</span>를 검색해 주세요!
            </h1>
            <p>
                <input type="text" name="" id="" placeholder="ex) spiderman"/><button onClick={handleOnClickSearch}>검색</button>
            </p>
            <h1>STEP 2.<br />
                검색 결과 중 <span>내 인생 영화</span>를 클릭해 주세요!
            </h1>
            <section id="searchResultSection">
                <p>검색 결과가 없어요 ㅠㅠ</p>
            </section>
            <h1>STEP 3.<br />
                <span>"비슷한 영화 찾기"</span> 버튼을 클릭해 주세요!
            </h1>
            <button onClick={handleOnClickFind}>비슷한 영화 찾기</button>
        </BodyDiv>
    )
}

export default Body;