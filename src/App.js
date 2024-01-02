import './App.css';
import Box from './component/Box';

// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위/바위/보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보인다.
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3, 4의 결과를 따져서 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색 변주(승-초록, 패-빨강, 무-검정)

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://www.tefal.co.kr/medias/?context=bWFzdGVyfGltYWdlc3wzMTM3MHxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaDc4LzE2MjU1MjQwODMxMDA2LmpwZ3xiYzhjMzQ5ODEwM2JhYTRiYWFmYzBhZDBkMDFhNjYzNWY1NDBkMzc1OWZhM2FjZDg0ZjAwM2MzZTE3OTU2N2Zi",
  },
  paper: {
    name: "Paper",
    img: "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw8aedf2d1/images/large/584769_1000_1_-white-premium-smooth-paper-a4-100-pack.jpg?sw=680&q=85",
  }
}
function App() {
  const play = (userChoice) => {
    console.log("선택됨!", userChoice);
  }
  return (
    <div>
      <div className='main'>
        <Box title = "You" />
        <Box title = "Computer" />
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
  </div>
  );
}

export default App;
