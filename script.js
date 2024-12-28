let box = document.querySelectorAll('.box');
let output = document.querySelector('.output');
let clicksound = new Audio('tap.mp3');
let control = true;
let count = 0;
let array = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];
function turn() {
    clicksound.play();
    control = !control;
    if (control) {
        output.innerText = 'Turn : X';
    }
    else {
        output.innerText = 'Turn : O';

    }
}
function reus() {

    array = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];
    control = true;
    count = 0;
    document.body.style.backgroundImage = '';
    box.forEach(button => {
        button.style.backgroundImage = '';
    })
    output.innerText = 'Turn : X';
}
document.querySelector('.rst').addEventListener('click', () => { reus(); });
// 1 = left | 2 = right | 3 = top | 4 = bottom | 5 = lt 
// 6 = lb | 7 = rt | 8 = rb
function win() {
    if (array[0][0] == array[0][1] && array[0][1] == array[0][2] && array[0][0] != -1) {
        return array[0][0];
    }
    if (array[1][0] == array[1][1] && array[1][1] == array[1][2] && array[1][0] != -1) {
        return array[1][0];
    }
    if (array[2][0] == array[2][1] && array[2][1] == array[2][2] && array[2][0] != -1) {
        return array[2][0];
    }
    if (array[0][0] == array[1][0] && array[1][0] == array[2][0] && array[1][0] != -1) {
        return array[0][0];
    }
    if (array[0][1] == array[1][1] && array[1][1] == array[2][1] && array[0][1] != -1) {
        return array[0][1];
    }
    if (array[0][2] == array[1][2] && array[1][2] == array[2][2] && array[0][2] != -1) {
        return array[0][2];
    }
    if (array[0][0] == array[1][1] && array[1][1] == array[2][2] && array[0][0] != -1) {
        return array[0][0];
    }
    if (array[0][2] == array[1][1] && array[1][1] == array[2][0] && array[0][2] != -1) {
        return array[0][2];
    }
    return -1;
}
box.forEach(container => {
    container.addEventListener('click', () => {
        if (container.style.backgroundImage) {
            return;
        }
        let index = container.id;
        array[index[2]][index[4]] = (control) ? 1 : 0;
        if (control) {
            container.style.backgroundImage = "url('X.png')";
        }
        else {
            container.style.backgroundImage = "url('O.png')";

        }
        let check = win();
        if (check == 1) {
            setTimeout(() => {
                document.body.style.backgroundImage = "url('celebrate.gif')";
                alert('X is the winner!!!');
            }, 100);

        }
        else if (check == 0) {
            setTimeout(() => {
                document.body.style.backgroundImage = "url('celebrate.gif')";
                alert('O is the winner!!!');
            }, 100);
        }
        count++;
        if (count == 9) {
            setTimeout(() => {
                alert("Game Over!!!");
            }, 100);
        }
        turn();
    })
})