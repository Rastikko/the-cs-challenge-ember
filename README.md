# the-cs-challenge-ember

##Data structure:

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

## Rules

GAME:

- Only one game per user, the id is uid.
- A user can delete a 1 day old game.
- A user can only create a game with state 'NEW'.
- A user can change game state only to FINISHED

USERQUESTION:

 - A user can only change the state to STARTED
 - question can only readed if the userQuestion has started.
 - user can create an answer.
