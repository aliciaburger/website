var wiese;
(function (wiese) {
    class Bee {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            let _x = this.x;
            let _y = this.y;
            wiese.crc2.beginPath();
            wiese.crc2.fillStyle = "#000000";
            wiese.crc2.arc(_x, _y, 3.5, 0.5 * Math.PI, 1.5 * Math.PI);
            wiese.crc2.lineTo(_x + 10, _y - 3.5);
            wiese.crc2.lineTo(_x + 10, _y + 3.5);
            wiese.crc2.lineTo(_x, _y + 3.5);
            wiese.crc2.moveTo(_x + 10, _y + 3.5);
            wiese.crc2.arc(_x + 10, _y, 3.5, 1.5 * Math.PI, 0.5 * Math.PI);
            wiese.crc2.moveTo(_x + 12, _y + 2);
            wiese.crc2.lineTo(_x + 15, _y);
            wiese.crc2.lineTo(_x + 12, _y - 2);
            wiese.crc2.fill();
            //gelbe Streifen
            wiese.crc2.beginPath();
            //Achtung Flimmer,-Farbwechsler-bienen :D
            wiese.crc2.fillStyle = this.bienenColor;
            //        crc2.fillStyle = "yellow";
            wiese.crc2.moveTo(_x, _y + 3);
            wiese.crc2.lineTo(_x + 2, _y + 3);
            wiese.crc2.lineTo(_x + 2, _y + 3);
            wiese.crc2.lineTo(_x + 2, _y - 3);
            wiese.crc2.lineTo(_x, _y - 3);
            wiese.crc2.lineTo(_x, _y + 3);
            wiese.crc2.moveTo(_x + 4, _y + 3);
            wiese.crc2.lineTo(_x + 6, _y + 3);
            wiese.crc2.lineTo(_x + 6, _y + 3);
            wiese.crc2.lineTo(_x + 6, _y - 3);
            wiese.crc2.lineTo(_x + 4, _y - 3);
            wiese.crc2.lineTo(_x + 4, _y + 3);
            wiese.crc2.moveTo(_x + 8, _y + 3);
            wiese.crc2.lineTo(_x + 10, _y + 3);
            wiese.crc2.lineTo(_x + 10, _y + 3);
            wiese.crc2.lineTo(_x + 10, _y - 3);
            wiese.crc2.lineTo(_x + 8, _y - 3);
            wiese.crc2.lineTo(_x + 8, _y + 3);
            wiese.crc2.fill();
            //Kopf
            wiese.crc2.beginPath();
            wiese.crc2.fillStyle = "#000000";
            wiese.crc2.arc(_x - 3, _y - 4, 5, 0, 2 * Math.PI);
            wiese.crc2.fill();
            //Fühler
            wiese.crc2.beginPath();
            wiese.crc2.fillStyle = "#000000";
            wiese.crc2.moveTo(_x - 5, _y - 7);
            wiese.crc2.lineTo(_x - 10, _y - 11);
            wiese.crc2.lineTo(_x - 10, _y - 10);
            wiese.crc2.lineTo(_x - 6, _y - 8);
            wiese.crc2.lineTo(_x - 5, _y - 7);
            wiese.crc2.fill();
            wiese.crc2.beginPath();
            wiese.crc2.fillStyle = "#000000";
            wiese.crc2.moveTo(_x - 4, _y - 9);
            wiese.crc2.lineTo(_x - 9, _y - 13);
            wiese.crc2.lineTo(_x - 9, _y - 12);
            wiese.crc2.lineTo(_x - 5, _y - 10);
            wiese.crc2.lineTo(_x - 4, _y - 9);
            wiese.crc2.fill();
            //flügel links
            wiese.crc2.beginPath();
            //        crc2.fillStyle = "lightblue";
            wiese.crc2.fillStyle = this.fluegelColor;
            wiese.crc2.moveTo(_x + 5, _y - 3.5);
            wiese.crc2.bezierCurveTo(_x - 3, _y - 15, _x + 12, _y - 15, _x + 5, _y - 3.5);
            wiese.crc2.stroke();
            wiese.crc2.stroke();
            wiese.crc2.fill();
            //flügel rechts
            wiese.crc2.beginPath();
            //        crc2.fillStyle = "lightblue";
            wiese.crc2.fillStyle = this.fluegelColor;
            wiese.crc2.moveTo(_x + 6, _y - 3.5);
            wiese.crc2.bezierCurveTo(_x + 3, _y - 15, _x + 18, _y - 15, _x + 6, _y - 3.5);
            wiese.crc2.stroke();
            wiese.crc2.fill();
        }
        move() {
            //crc2.putImageData(hintergrund, 0, 0);
            this.x += Math.random() * (-2);
            this.y += Math.random() * 10 - 5;
            //if-Abfragen um die Bienen beim erreichen eines Bildrandes auf der anderen Seite wieder erscheinen zu lassen
            if (this.x >= wiese.crc2.canvas.width) {
                this.x = 0;
            }
            if (this.y <= 0) {
                this.y = wiese.crc2.canvas.height;
            }
            if (this.x < 0) {
                this.x = wiese.crc2.canvas.width;
            }
            if (this.y > wiese.crc2.canvas.height) {
                this.y = 0;
            }
        }
        setRandomColor() {
            let bienenFabe = ["#FFF700", "#FFD500", "#FFBC00", "#FFA600", "#FFD041", "#FFE041", "#FFFA41", "#EDFF41"];
            let fluegelFabe = ["#F8E1FF", "#FFE1FE", "#EBE1FF", "#E1E1FF", "#E1F2FF", "#E1FFFF", "#E1FFF7", "#E1FFE1"];
            this.bienenColor = bienenFabe[Math.floor(Math.random() * bienenFabe.length)];
            this.fluegelColor = fluegelFabe[Math.floor(Math.random() * fluegelFabe.length)];
        }
    }
    wiese.Bee = Bee;
})(wiese || (wiese = {}));
//# sourceMappingURL=bee.js.map