var wiese;
(function (wiese) {
    class Tulpe extends wiese.Flower {
        drawBlume() {
            let _x = this.x;
            let _y = this.y;
            let _blueteFarbe = this.zufallFarbeBluete;
            //Blumenstengel
            wiese.crc2.beginPath();
            wiese.crc2.fillStyle = "#006e11";
            wiese.crc2.moveTo(_x, _y);
            wiese.crc2.lineTo(_x, _y - 18);
            wiese.crc2.lineTo(_x + 2.5, _y - 18);
            wiese.crc2.lineTo(_x + 2.5, _y);
            wiese.crc2.closePath();
            wiese.crc2.fill();
            //Blütenkopf
            wiese.crc2.beginPath();
            wiese.crc2.fillStyle = _blueteFarbe;
            wiese.crc2.moveTo(_x + 4, _y - 22);
            wiese.crc2.arc(_x + 1.25, _y - 22, 10, -0.15 * Math.PI, 1.15 * Math.PI);
            wiese.crc2.lineTo(_x - 2.75, _y - 22);
            wiese.crc2.lineTo(_x + 1.25, _y - 28);
            wiese.crc2.fill();
        }
    }
    wiese.Tulpe = Tulpe;
})(wiese || (wiese = {}));
//# sourceMappingURL=tulpe.js.map