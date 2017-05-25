var wiese;
(function (wiese) {
    class Bluemchen extends wiese.Flower {
        drawBlume() {
            let _x = this.x;
            let _y = this.y;
            let _blueteFarbe = this.zufallFarbeBluete;
            let _blaetterFarbe = this.zufallFarbeBlatt;
            //Blumenstengel
            wiese.crc2.beginPath();
            wiese.crc2.fillStyle = "#006e11";
            wiese.crc2.moveTo(_x, _y);
            wiese.crc2.lineTo(_x, _y - 16);
            wiese.crc2.lineTo(_x + 2.5, _y - 16);
            wiese.crc2.lineTo(_x + 2.5, _y);
            wiese.crc2.closePath();
            wiese.crc2.fill();
            //Blütenblätter
            wiese.crc2.beginPath();
            wiese.crc2.fillStyle = _blaetterFarbe;
            wiese.crc2.arc(_x - 2, _y - 18, 3.5, 0, 2 * Math.PI);
            wiese.crc2.moveTo(_x - 4, _y - 24);
            wiese.crc2.arc(_x - 4, _y - 24, 3.5, 0, 2 * Math.PI);
            wiese.crc2.moveTo(_x + 1, _y - 27);
            wiese.crc2.arc(_x + 1, _y - 27, 3.5, 0, 2 * Math.PI);
            wiese.crc2.moveTo(_x + 6.5, _y - 24);
            wiese.crc2.arc(_x + 6.5, _y - 24, 3.5, 0, 2 * Math.PI);
            wiese.crc2.moveTo(_x + 4.5, _y - 18);
            wiese.crc2.arc(_x + 4.5, _y - 18, 3.5, 0, 2 * Math.PI);
            wiese.crc2.fill();
            //Blütenkopf
            wiese.crc2.beginPath();
            wiese.crc2.fillStyle = _blueteFarbe;
            wiese.crc2.moveTo(_x + 1.25, _y - 22.5);
            wiese.crc2.arc(_x + 1.25, _y - 22.5, 3.5, 0, 2 * Math.PI);
            wiese.crc2.fill();
        }
    }
    wiese.Bluemchen = Bluemchen;
})(wiese || (wiese = {}));
//# sourceMappingURL=bluemchen.js.map