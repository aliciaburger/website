var wiese;
(function (wiese) {
    class Honeybee extends wiese.Bee {
        //         constructor(_x: number, _y: number) {
        //            super(_x, _y);
        //           
        //            
        //            this.askHoneyflower();
        //             
        //         }
        move() {
            let xDiff = this.hfx - this.x;
            let yDiff = this.hfy - this.y;
            //             if (this.x == this.hfx && this.y == this.hfy) {
            if (Math.abs(xDiff) < 0.3 && Math.abs(yDiff) < 0.3) {
                this.askHoneyflower();
            }
            else {
                this.x += xDiff * 0.03;
                this.y += yDiff * 0.03;
            }
        }
        //             console.log("position honigbiene x: " + this.x + " y: " + this.y);
        askHoneyflower() {
            let i = Math.floor(Math.random() * wiese.flowers.length);
            for (let j = 0; j > wiese.flowers.length; j++) {
                let i = Math.floor(Math.random() * wiese.flowers.length);
                if (wiese.flowers[i].blumenstatus == true) {
                    break;
                }
            }
            this.hfx = wiese.flowers[i].x;
            this.hfy = wiese.flowers[i].y - 24;
            wiese.flowers[i].blumenstatus = false;
            //            this.x = flowers[i].x;
            //            this.y = flowers[i].y;
            console.log("zufällige honeyflower an position:  x:" + this.hfx + " y: " + this.hfy);
        }
    }
    wiese.Honeybee = Honeybee;
})(wiese || (wiese = {}));
//# sourceMappingURL=honeybee.js.map