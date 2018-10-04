pragma solidity ^0.4.4;
contract IScoreStore {
    function getScore(string name) returns (int);
}

contract MyGame {
    function showScore(string name) returns (int) {
        IScoreStore scoreStore = IScoreStore(0x913e09B0abf52e22ef8fE4E8B1E455332d585828);
        return scoreStore.getScore(name);
        }   
}