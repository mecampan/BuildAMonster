class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 50;

        this.eyesX = this.bodyX;
        this.eyesY = this.bodyY - 30;

        this.leftHornX = this.bodyX - 50;
        this.leftHornY = this.bodyY - 80;

        this.rightHornX = this.bodyX + 50;
        this.rightHornY = this.bodyY - 80;

        this.leftArmX = this.bodyX -80;
        this.leftArmY = this.bodyY + 50;

        this.rightArmX = this.bodyX + 80;
        this.rightArmY = this.bodyY + 50;

        this.leftLegX = this.bodyX -80;
        this.leftLegY = this.bodyY + 150;

        this.rightLegX = this.bodyX + 80;
        this.rightLegY = this.bodyY + 150;         
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueF.png");
        
        my.sprite.eye = this.add.sprite(this.eyesX, this.eyesY, "monsterParts", "eye_red.png");

        my.sprite.smile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthH.png");
        my.sprite.fanges = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthB.png");

        my.sprite.smile.visible = false;

        my.sprite.hornLeft = this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.hornLeft.flipX = true;
        my.sprite.hornRight = this.add.sprite(this.rightHornX, this.rightHornY, "monsterParts", "detail_dark_horn_large.png");

        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_redC.png");
        my.sprite.leftLeg.flipX = true;           
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_darkC.png"); 

        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_greenA.png");
        my.sprite.leftArm.flipX = true;           
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_whiteA.png");    
        
        this.input.keyboard.on("keydown", function (event) {        
            if (event.code == "KeyS") {
                my.sprite.smile.visible = true;
                my.sprite.fanges.visible = false;
            }
            if (event.code == "KeyF") {
                my.sprite.smile.visible = false;
                my.sprite.fanges.visible = true;
            }          
            
            if (event.code == "KeyA") {
                for( let parts in my.sprite) {
                    my.sprite[parts].x--;
                }
            } 
            if (event.code == "KeyD") {
                for( let parts in my.sprite) {
                    my.sprite[parts].x++;
                }
            }
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

    }

}