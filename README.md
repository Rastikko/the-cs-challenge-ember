# the-cs-challenge-ember

Data structure:

```
Games
  userId
    gameId -> true

Game
  userQuestions -> [userQuestionIds]
  state: 'NEW', 'INPROGRESS', 'FINISHED'

userQuestion
  state: 'NONE', 'STARTED', 'ANSWERED'
  correct: 'YES', 'NO'
  questionId -> questionId
  userAnswer -> answerId
  startTime -> date
  endTime -> date
```
