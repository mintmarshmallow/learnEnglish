function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

const WORDS = [
  {
    name: 'apple',
    meaning:['사과']
  },
  {
    name: 'iron',
    meaning: ['철', '철분', '다리미']
  },
  {
    name: 'steam',
    meaning: ['수증기']
  },
  {
    name: 'country',
    meaning: ['국가', '나라']
  },
  {
    name: 'possible',
    meaning: ['가능한']
  },
  {
    name: 'friend',
    meaning: ['친구']
  },
];

function WordTest(words){
  alert('단어 테스트를 시작하겠습니다.');
  let shuffledWords = shuffle(words);
  var correctNum = 0;
  var incorrectNum = 0;
  var exitWord = '나가고싶어()'
  for(let i in words){
    let userAnswer = prompt(`${words[i].name}의 뜻을 입력해 주세요     그만하려면:${exitWord}을 입력하세요`);
    if(userAnswer === exitWord){
      break;
    }
    words[i].meaning.some(function(v){
      if(userAnswer === v){
        alert('정답입니다!');
        correctNum++;
        return (userAnswer === v)
      } else {
        if(v === words[i].meaning[words[i].meaning.length-1]){
          alert('오답입니다!    답:' + words[i].meaning);
          incorrectNum++;
        }
      }
    })
  }
  alert(`맞은개수: ${correctNum}개   틀린개수:${incorrectNum}개`)
}

WordTest(WORDS)
