/*
(Aufgabe 6)
Name: (Alicia Burger)
Matrikel: (254604)
Datum: (07.05.17)
    
Hiermit versichere ich,
dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
//---------------------------------------
var wiese;
(function (wiese) {
    window.addEventListener("load", init);
    let canvas;
    wiese.bees = [];
    wiese.honeybees = [];
    wiese.flowers = [];
    wiese.fBlumen = 10;
    wiese.n = 10;
    //    export let hfx: number;
    //    export let hfy: number;
    //    let beetype: number;
    let hintergrund;
    let blaetterFarbe = ["#cb0051", "#b628bf", "#28d2d4", "#ffd2d4", "#00bcec", "#ff4e00", "#ffa400", "#bcff00"];
    let blueteFarbe = ["#f1ffcb", "#ffc4aa", "#fff8c6", "#cefeff", "#ffd2d4", "#ffb8ea", "#fe7aa4", "#e9abff"];
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        wiese.crc2 = canvas.getContext("2d");
        drawFlowerField();
        createBees();
        //bei click/touch neue Biene erzeugen
        canvas.addEventListener("click", zusatzBiene);
        canvas.addEventListener("touch", zusatzBiene);
        // Ausgabe der Arrays in der Konsole
        console.log("bees:" + wiese.bees);
        console.log("flowers:" + wiese.flowers);
        window.setTimeout(animate, 20);
        console.log(wiese.bees);
        console.log(wiese.bees.length);
    }
    function drawFlowerField() {
        drawSky();
        drawMountain();
        drawGrass();
        drawSun();
        drawTree(50, 145);
        drawTree(110, 155);
        createZufallsBlumen();
        createFesteBlumen();
        drawKorb(290, 210);
        //Hintergrund speichern
        hintergrund = wiese.crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    // Zusammenfassende FKT. für Bienen erstellen
    function createBees() {
        anfangsBienen();
        createHoneybees();
    }
    //FKT. Himmel malen
    function drawSky() {
        wiese.crc2.beginPath();
        wiese.crc2.fillStyle = "#91e7ff";
        wiese.crc2.rect(0, 0, canvas.width, canvas.height);
        wiese.crc2.fill();
    }
    //FKT. Berge malen
    function drawMountain() {
        wiese.crc2.beginPath();
        wiese.crc2.moveTo(-20, 125); //Wiese Startpunkt
        wiese.crc2.lineTo(44, 20);
        wiese.crc2.lineTo(84, 100);
        wiese.crc2.lineTo(120, 45);
        wiese.crc2.lineTo(140, 80);
        wiese.crc2.lineTo(185, 10);
        wiese.crc2.lineTo(260, 80);
        wiese.crc2.lineTo(280, 60);
        wiese.crc2.lineTo(300, 95);
        wiese.crc2.lineTo(335, 50);
        wiese.crc2.lineTo(350, 80);
        wiese.crc2.lineTo(350, 130);
        wiese.crc2.closePath();
        wiese.crc2.fillStyle = "#c8c8c8";
        wiese.crc2.fill();
    }
    //FKT. Gras malen
    function drawGrass() {
        wiese.crc2.beginPath();
        wiese.crc2.fillStyle = "#00aa24";
        wiese.crc2.rect(0, 125, 350, 250);
        wiese.crc2.fill();
    }
    //FKT. Sonne malen
    function drawSun() {
        wiese.crc2.beginPath();
        wiese.crc2.fillStyle = "#ffe527";
        wiese.crc2.arc(305, 27, 22, 0, 2 * Math.PI);
        wiese.crc2.fill();
    }
    //FKT. Baum malen
    function drawTree(_x, _y) {
        //Baumstamm
        wiese.crc2.beginPath();
        wiese.crc2.fillStyle = "#ab6909";
        wiese.crc2.moveTo(_x, _y);
        wiese.crc2.lineTo(_x, _y - 30);
        wiese.crc2.lineTo(_x + 5, _y - 30);
        wiese.crc2.lineTo(_x + 5, _y);
        wiese.crc2.closePath();
        wiese.crc2.fill();
        //Krone
        wiese.crc2.beginPath();
        wiese.crc2.fillStyle = "#006d0a";
        wiese.crc2.arc(_x, _y - 32, 8, 0, 2 * Math.PI);
        wiese.crc2.arc(_x - 5, _y - 40, 10, 0, 2 * Math.PI);
        wiese.crc2.arc(_x + 2, _y - 48, 11, 0, 2 * Math.PI);
        wiese.crc2.arc(_x + 8, _y - 39, 11, 0, 2 * Math.PI);
        wiese.crc2.fill();
    }
    // zufällige Blumen
    function createZufallsBlumen() {
        for (let i = 0; i < 15; i++) {
            let zufallBlume = Math.floor((Math.random() * 2)) + 1;
            // if für zufällige Blumensorte
            if (zufallBlume == 1) {
                let f = new wiese.Bluemchen();
                f.setRandomColor();
                f.setRandomPosition();
                f.drawBlume();
            }
            else {
                let f = new wiese.Tulpe();
                f.setRandomColor();
                f.setRandomPosition();
                f.drawBlume();
            }
        }
    }
    // feste Blumen
    function createFesteBlumen() {
        for (let i = 0; i < wiese.fBlumen; i++) {
            let zufallBlume = Math.floor((Math.random() * 2)) + 1;
            // if für zufällige Blumensorte
            if (zufallBlume == 1) {
                let f = new wiese.Bluemchen();
                wiese.flowers[i] = f;
                f.setRandomColor();
                f.flowerType = "Bluemchen";
                f.setRandomPositionStatic();
                f.drawBlume();
                console.log("X = " + f.x + " Y = " + f.y + " flowerType = " + f.flowerType);
            }
            else {
                let f = new wiese.Tulpe();
                wiese.flowers[i] = f;
                f.setRandomColor();
                f.flowerType = "Tulpe";
                f.setRandomPositionStatic();
                f.drawBlume();
                console.log("X = " + f.x + " Y = " + f.y + " flowerType = " + f.flowerType);
            }
        }
        console.log(wiese.flowers);
    }
    //10 Anfangsbienen
    function anfangsBienen() {
        for (let i = 0; i < wiese.n; i++) {
            let b = new wiese.Bee(300, 200);
            b.setRandomColor();
            wiese.bees[i] = b;
            console.log("neue Bee");
            b.beetype = true;
        }
    }
    function createHoneybees() {
        for (let i = 0; i < 5; i++) {
            let b = new wiese.Honeybee(300, 200);
            b.askHoneyflower();
            console.log("neue honigbiene x: " + b.hfx + " y: " + b.hfy);
            b.setRandomColor();
            //            bees[i] = b;
            wiese.bees.push(b);
            b.beetype = false;
        }
    }
    // animate
    function animate() {
        //        for (let j: number = 0; j < bees.length; j++) {
        //            let ab: Bee = bees[j];
        //            crc2.putImageData(hintergrund, 0, 0);
        //            if (ab.beetype == false) {
        //                for (let i: number = 0; i < 5; i++) {
        //                    let b: Honeybee = bees[i];
        //                    b.update();
        //                }
        //            }
        //            if (ab.beetype == true) {
        wiese.crc2.putImageData(hintergrund, 0, 0);
        for (let i = 0; i < wiese.bees.length; i++) {
            let b = wiese.bees[i];
            b.update();
        }
        //                for (let i: number = 0; i < n; i++) {
        //                    let b: Bee = bees[i];
        //                    b.update();
        //                }
        //                for (let i: number = 0; i < shapes.length; i++) {
        //                    let s: MovingShape = shapes[i];
        //                    s.update();
        //                }
        //
        //            }
        //        }
        window.setTimeout(animate, 20);
    }
    // zusätzliche Biene      
    function zusatzBiene(_event) {
        let b = new wiese.Bee(300, 200);
        b.setRandomColor();
        wiese.bees.push(b);
        console.log("Anzahl der Bienen = " + wiese.n);
        wiese.n++;
    }
    // Bienenkorb
    function drawKorb(_x, _y) {
        wiese.crc2.beginPath();
        wiese.crc2.fillStyle = "#955500";
        wiese.crc2.moveTo(_x - 15, _y + 10); //u links
        wiese.crc2.lineTo(_x + 40, _y + 10); // u rechts
        wiese.crc2.lineTo(_x + 40, _y - 30); //o rechts
        wiese.crc2.lineTo(_x - 15, _y - 30); //o links
        wiese.crc2.lineTo(_x - 15, _y + 10); //u links
        wiese.crc2.fill();
        // Strich zur Seitenwand
        wiese.crc2.beginPath();
        wiese.crc2.strokeStyle = "#000000";
        wiese.crc2.moveTo(_x + 40, _y - 30);
        wiese.crc2.lineTo(_x + 40, _y + 10); // u rechts
        wiese.crc2.stroke();
        // Seitenwand
        wiese.crc2.beginPath();
        wiese.crc2.fillStyle = "#844B00";
        wiese.crc2.moveTo(_x + 40, _y - 30); //o links
        wiese.crc2.lineTo(_x + 50, _y - 40); // o rechts
        wiese.crc2.lineTo(_x + 50, _y); //u rechts
        wiese.crc2.lineTo(_x + 40, _y + 10); //u links
        wiese.crc2.lineTo(_x + 40, _y - 30); //o links
        wiese.crc2.fill();
        //Schwrzer strich  unter dem Dach
        wiese.crc2.beginPath();
        wiese.crc2.strokeStyle = "#000000";
        wiese.crc2.moveTo(_x - 20, _y - 25); //u links
        wiese.crc2.lineTo(_x + 35, _y - 25); // u rechts
        wiese.crc2.lineTo(_x + 50, _y - 40); //o rechts
        wiese.crc2.stroke();
        // Dach
        wiese.crc2.beginPath();
        wiese.crc2.fillStyle = "#876D4A";
        wiese.crc2.moveTo(_x - 20, _y - 25); //u links
        wiese.crc2.lineTo(_x + 35, _y - 25); // u rechts
        wiese.crc2.lineTo(_x + 50, _y - 40); //o rechts
        wiese.crc2.lineTo(_x - 5, _y - 40); //o links
        wiese.crc2.lineTo(_x - 20, _y - 25); //u links
        wiese.crc2.fill();
        //Eingang
        wiese.crc2.beginPath();
        wiese.crc2.fillStyle = "#000000";
        wiese.crc2.arc(_x + 12, _y - 10, 10, 0, 2 * Math.PI);
        wiese.crc2.fill();
        //        
    }
})(wiese || (wiese = {}));
//# sourceMappingURL=main.js.map