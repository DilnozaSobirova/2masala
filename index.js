function move(position, roll) {
    return position + 2 * roll;
}

let position = prompt("Sonni kiriting:");
let roll = prompt("Raqamni kiriting:");

position = Number(position);
roll = Number(roll);

console.log(move(position, roll));
