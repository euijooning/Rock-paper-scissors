import './App.css';
import Box from './component/Box';
import { useState } from 'react'

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
  const [userSelect, setUserSelect] = useState(null); // 유저 선택 값 나타내는 것
  const [computerSelect, setComputerSelect] = useState(null); // 컴퓨터 랜덤 값 나타내는 것
  const [result, setResult] = useState(null); // 승패 결과 값 나타내는 것
  const play = (userChoice) => {
    // userSelect = choice[userChoice] 이거 안 됨.
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice(); // 새로운 함수를 만들어준다.

    // 이제 마지막으로 값 집어넣어주기
    setComputerSelect(computerChoice);

    // 판단하는 함수 추가 유저선택값과 컴퓨터랜덤값을 넣어줌.
    // judgement(choice[userChoice], computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  // 그 새로운 판단함수 만들어주기
  const judgement = (user, computer) => {
    console.log("user" , user, "computer", computer);
    // 경우의 수
    // 1. user == computer
    // 2. user rock / computer scissors => user 승
    // 3. user rock / computer paper => user 패
    // 4. user scissors / computer paper => user 승
    // 5. user scissors / computer rock => user 패
    // 6. user paper / computer rock => user 승
    // 7. user paper / computer scissors => user 패
    if(user.name == computer.name) {
      return "tie";
    // } else if(user.name == "Rock") {
    //   return "win";
    // } else {
    //   return "lose";
    // }
    } else if(user.name == "Rock") 
      return computer.name=="Scissors" ? "win" : "lose"
    else if(user.name == "Scissors") 
      return computer.name=="Paper" ? "win" : "lose"
    else if(user.name == "Paper") 
      return computer == "Rock" ? "win" : "lose";
  };


  const randomChoice = () => {
    // 배열화시키기위한 작업
    let itemArray = Object.keys(choice)
    // console.log("item array", itemArray)

    let randomItem = Math.floor(Math.random() * itemArray.length) ; // 여기에 추가
    // console.log("random value", randomItem)
    let final = itemArray[randomItem];
    // console.log("final", final);
    return choice[final]; // 이제 얘가 computerChoice 안으로 쏙 들어간다.
  }


  return (
    <div>
      <div className='main'>
        <Box title = "You" item={userSelect} result={result} />
        <Box title = "Computer" item={computerSelect} result={result} />
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
