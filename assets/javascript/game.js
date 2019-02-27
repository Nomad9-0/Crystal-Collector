$(document).ready(function(){

    var targetNum = 0;
    var playerNum = 0;
    var wins = 0;
    var loss = 0;
    var red = 0;
    var blue = 0;
    var yellow = 0;
    var green = 0;
    var min;
    var max;


    $(function startUp() {
        
        //get random number between 19-20 to be targetNum
        $(function randomTarget() {
            min = Math.ceil(19);
            max = Math.ceil(120);
            targetNum = Math.floor(Math.random() * (max - min)) + min;
            $('#guessNum').text(targetNum);
        })

        //assign random numbers to crystals between 1-12
        $(function randomCrystal() {
            min = Math.ceil(1);
            max = Math.ceil(12);
            red = Math.floor(Math.random() * (max - min)) + min;
            blue = Math.floor(Math.random() * (max - min)) + min;
            yellow = Math.floor(Math.random() * (max - min)) + min;
            green = Math.floor(Math.random() * (max - min)) + min;
        })
        
        //compares numbers NOT WORKING ON CALL
        // $(function lose() {
        //     if (playerNum > targetNum) {
        //         alert('You lose!');
        //         startUp();
        //         playerNum = 0;
        //         $('#total').text(playerNum);
        //         loss++;
        //         $('#losses').text('Losses: ' + loss);
        //     } 
        // })

        // $(function win() {
        //     if (playerNum === targetNum) {
        //         alert('You Win!');
        //         startUp();
        //         playerNum = 0;
        //         $('#total').text(playerNum);
        //         wins++;
        //         $('#wins').text('Wins: ' + wins);
        //     }
        // })

        //add chosen crystals to total playerNum
        $('#red').on('click', function (){
            playerNum += red;
            $('#total').text(playerNum);
            if (playerNum > targetNum) {
                alert('You lose!');
                startUp();
                playerNum = 0;
                $('#total').text(playerNum);
                loss++;
                $('#losses').text('Losses: ' + loss);
            } 
            if (playerNum === targetNum) {
                alert('You Win!');
                startUp();
                playerNum = 0;
                $('#total').text(playerNum);
                wins++;
                $('#wins').text('Wins: ' + wins);
            }
        })
        $('#blue').on('click', function (){
            playerNum += blue;
            $('#total').text(playerNum);
            if (playerNum > targetNum) {
                alert('You lose!');
                startUp();
                playerNum = 0;
                $('#total').text(playerNum);
                loss++;
                $('#losses').text('Losses: ' + loss);
            } 
            if (playerNum === targetNum) {
                alert('You Win!');
                startUp();
                playerNum = 0;
                $('#total').text(playerNum);
                wins++;
            }  
        })
        $('#yellow').on('click', function (){
            playerNum += yellow;
            $('#total').text(playerNum);
            if (playerNum > targetNum) {
                alert('You lose!');
                startUp();
                playerNum = 0;
                $('#total').text(playerNum);
                loss++;
                $('#losses').text('Losses: ' + loss);
            } 
            if (playerNum === targetNum) {
                alert('You Win!');
                startUp();
                playerNum = 0;
                $('#total').text(playerNum);
                wins++;
            }  
        })
        $('#green').on('click', function (){
            playerNum += green;
            $('#total').text(playerNum);
            if (playerNum > targetNum) {
                alert('You lose!');
                startUp();
                playerNum = 0;
                $('#total').text(playerNum);
                loss++;
                $('#losses').text('Losses: ' + loss);
            } 
            if (playerNum === targetNum) {
                alert('You Win!');
                startUp();
                playerNum = 0;
                $('#total').text(playerNum);
                wins++;
            }  
        })    

    })

});

