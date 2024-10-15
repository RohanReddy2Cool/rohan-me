---
title: Examples on how to analyze two player games
date:  2024-10-14
description: We will analyze two problems called the 16 coins and the 2 piles of stones games
image: /blogs-img/math/game_theory/two_player_game.jpg
alt: 2 player game examples
tags: ['math',"game theory"]
published: true
---

## Introduction
The analysis of two player games is very interesting because there are many ways in which you can make moves. A winning strategy for a player is a set of moves that a singular player can do to guarantee a win for all possible moves that the other player can do. Let us analyze two examples of two player games with winning strategies for a specific player.

## 16 coins game
### Description
The game starts with a pile of 16 coins. Two players take turns removing 1 to 4 coins by their choice from the pile. The player who cannot take any more coins loses. Is there a winning strategy for either of the players? If so, find it.

### Solution
 Let the states be 0-16 coins, the initial state to be 16 coins, and the final/winning state be 0 coins. For such problems, it is usually better to work backwards from the final state to the initial state. When you have 1-4 coins, the player whose current turn it is (CT) wins as they can take away all the coins. But when you have 5 coins, the player whose current turn it is always loses, because irrespective of how many coins they pick, it will end up in the 1-4 coins case described above, so whoever’s turn is next (N) will win. When you have 6-9 coins, the player whose current turn it is wins if they get the coin value to 5 for the next player. The pattern goes on as the table below shows. We can see that at the end of the table, the player whose current turn it is wins if they take 1 away as their first move and follow the strategy on the table.

| Number of Coins | Winner | Move     |
| :-------------: | :----: | :------: |
| 0               | *      | *        |
| 1               | CT     | Take 1   |
| 2               | CT     | Take 2   |
| 3               | CT     | Take 3   |
| 4               | CT     | Take 4   |
| 5               | N      | Take 1-4 |
| 6               | CT     | Take 1   |
| 7               | CT     | Take 2   |
| 8               | CT     | Take 3   |
| 9               | CT     | Take 4   |
| 10              | N      | Take 1-4 |
| 11              | CT     | Take 1   |
| 12              | CT     | Take 2   |
| 13              | CT     | Take 3   |
| 14              | CT     | Take 4   |
| 15              | N      | Take 1-4 |
| 16              | CT     | Take 1   |


## 2 piles of stones game
### Description
 The game starts with two piles of 7 stones. Two players take turns removing any amount of stones 1-7 from a specific pile. The player who cannot take any more stones loses. Is there a winning strategy for either of the players? If so, find it.  

### Solution
Let the states be (n, m) where n and m are between 0 and 7 inclusive, the initial state be (7,7), and the final/winning state be (0,0). We will try working backwards for this problem too. We use the following notation:
* \* is win state
* CT mean that if both players play strategically, whoever’s current turn it is wins,
* N means that if both players play strategically, whoever’s next turn it is wins. 

Consider state (0, n) or (n, 0), the winning strategy for these cases is to take all the stones from the non-empty pile. In this case we label these states as CT meaning the player with the current turn wins.

|     | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 0   | *   | CT  | CT  | CT  | CT  | CT  | CT  | CT  |
| 1   | CT  |     |     |     |     |     |     |     |
| 2   | CT  |     |     |     |     |     |     |     |
| 3   | CT  |     |     |     |     |     |     |     |
| 4   | CT  |     |     |     |     |     |     |     |
| 5   | CT  |     |     |     |     |     |     |     |
| 6   | CT  |     |     |     |     |     |     |     |
| 7   | CT  |     |     |     |     |     |     |     |


Now consider state (1, 1), the player whose current turn it is will lose because they can only take one from either of the piles, which puts it in the states (0, 1) or (1, 0). Now consider the case of (3, 1), current player will want to get the state to (1, 1) so that the other player loses. So when you have (1, n) or (n, 1) where n > 1, the player whose current turn it is has to take away n-1 stones from the pile of n stones to win. So (1, 1) will be N (meaning the player with next turn will win), while (1, n) and (n,1) will be labeled as CT.

|     | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 0   | *   | CT  | CT  | CT  | CT  | CT  | CT  | CT  |
| 1   | CT  | N   | CT  | CT  | CT  | CT  | CT  | CT  |
| 2   | CT  | CT  |     |     |     |     |     |     |
| 3   | CT  | CT  |     |     |     |     |     |     |
| 4   | CT  | CT  |     |     |     |     |     |     |
| 5   | CT  | CT  |     |     |     |     |     |     |
| 6   | CT  | CT  |     |     |     |     |     |     |
| 7   | CT  | CT  |     |     |     |     |     |     |


Similarly considering (2, 2), we can take away either 1 or 2 stones from either pile, which gets us (2, 1), (2, 0), (1, 2), or (0, 2). If both players play strategically, we can see that all of the cases cause the player who plays from the state (2, 2) to lose. So (2, 2) will be N, while (2, n), (n, 2) CT.

|     | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 0   | *   | CT  | CT  | CT  | CT  | CT  | CT  | CT  |
| 1   | CT  | N   | CT  | CT  | CT  | CT  | CT  | CT  |
| 2   | CT  | CT  | N   | CT  | CT  | CT  | CT  | CT  |
| 3   | CT  | CT  | CT  |     |     |     |     |     |
| 4   | CT  | CT  | CT  |     |     |     |     |     |
| 5   | CT  | CT  | CT  |     |     |     |     |     |
| 6   | CT  | CT  | CT  |     |     |     |     |     |
| 7   | CT  | CT  | CT  |     |     |     |     |     |


We can continue this on and create the full grid of labeling state with who will win if both play strategically. The final grid looks like:

|     | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 0   | *   | CT  | CT  | CT  | CT  | CT  | CT  | CT  |
| 1   | CT  | N   | CT  | CT  | CT  | CT  | CT  | CT  |
| 2   | CT  | CT  | N   | CT  | CT  | CT  | CT  | CT  |
| 3   | CT  | CT  | CT  | N   | CT  | CT  | CT  | CT  |
| 4   | CT  | CT  | CT  | CT  | N   | CT  | CT  | CT  |
| 5   | CT  | CT  | CT  | CT  | CT  | N   | CT  | CT  |
| 6   | CT  | CT  | CT  | CT  | CT  | CT  | N   | CT  |
| 7   | CT  | CT  | CT  | CT  | CT  | CT  | CT  | N   |


So, the winning strategy is to make every pile equal in count and this also means the player who started at (7, 7) cannot win if both players play strategically.


## Conclusion

This is why I think that 2 player games are very interesting. You can create strategies for specific players to win by working backwards from win state and analyzing state and possible moves.
