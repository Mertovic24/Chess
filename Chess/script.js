// script.js
document.addEventListener('DOMContentLoaded', () => {
    const chessboard = document.getElementById('chessboard');
    const pieces = {
        0: '♜', 1: '♞', 2: '♝', 3: '♛', 4: '♚', 5: '♝', 6: '♞', 7: '♜',
        8: '♟', 9: '♟', 10: '♟', 11: '♟', 12: '♟', 13: '♟', 14: '♟', 15: '♟',
        48: '♙', 49: '♙', 50: '♙', 51: '♙', 52: '♙', 53: '♙', 54: '♙', 55: '♙',
        56: '♖', 57: '♘', 58: '♗', 59: '♕', 60: '♔', 61: '♗', 62: '♘', 63: '♖'
    };

    let selectedPiece = null;

    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        if (pieces[i]) {
            square.innerHTML = pieces[i];
            square.setAttribute('data-piece', pieces[i]);
        }
        square.setAttribute('data-index', i);
        chessboard.appendChild(square);
    }

    chessboard.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('square')) {
            if (selectedPiece) {
                target.innerHTML = selectedPiece;
                selectedPiece = null;
            } else {
                selectedPiece = target.innerHTML;
                target.innerHTML = '';
            }
        }
    });
});
