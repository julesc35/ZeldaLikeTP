class depart extends Phaser.Scene{
    constructor() {
        super('depart');

    }
    init(){}

    preload(){}

    create(){
    //musique

        departMusic = this.sound.add('depart');
        departMusic.play({volume: 0.2, loop: true});

    //placement du texte
    if (arrivee == 0){
        text_arrivee = this.add.text(400,580,'Me voila bloqué sur cette planète sans une goute d\'essence... esperons que je puisse trouver de l\'essence dans le coin...',{ fontFamily: 'NebulousRegular', fontSize: 10}).setOrigin(0.5,0.5).setDepth(5).setVisible(true);
    }

    //premier lieux visité
    arrivee = 1;


    ///////// ATH \\\\\\\\

//points de vie
    this.add.image(500,5, 'PV').setScale(0.35).setOrigin(0,0);
    text_vie = this.add.text(540,10,'X 0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setOrigin(0,0);
if (nbrvie == 1) {text_vie.setText('X 1');}
if (nbrvie == 2) {text_vie.setText('X 2');}
if (nbrvie == 3) {text_vie.setText('X 3');}
if (nbrvie == 4) {text_vie.setText('X 4');}
if (nbrvie == 5) {text_vie.setText('X 5');}
if (nbrvie == 6) {text_vie.setText('X 6');}
if (nbrvie == 7) {text_vie.setText('X 7');}

//récupération du pistolet

    this.add.image(380, 5, 'pistolet').setScale(0.75).setOrigin(0,0);
    pistolet_text = this.add.text(420, 10, 'X0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setOrigin(0,0);
if (pistolet_inv == 1) {pistolet_text.setText('X 1')};

// récupération de la matraque

    this.add.image(280, 5, 'matraque').setScale(0.5).setOrigin(0,0);
    matraque_text = this.add.text(305, 10, 'X0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setOrigin(0,0);
if (matraque_inv == 1) {matraque_text.setText('X 1')};

// essence dans l'inventaire
    this.add.image(180, 5, 'essence').setScale(0.5).setOrigin(0,0);
    essence_text = this.add.text(205, 10, 'X0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setOrigin(0,0);
if (essence_inv == 1) {essence_text.setText('X 1')};

// lampe
    this.add.image(80, 5, 'lampe').setScale(0.5).setOrigin(0,0);
    lampe_text = this.add.text(140, 10, 'X0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setOrigin(0,0);
if (lampe_inv == 1) {lampe_text.setText('X 1')};

//munitions
    this.add.image(580, 5, 'munition').setScale(0.4).setOrigin(0,0);
    munition_text = this.add.text(610, 10, 'X0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setOrigin(0,0);
if (munition_inv == 1) {munition_text.setText('X 1')};
if (munition_inv == 2) {munition_text.setText('X 2')};
if (munition_inv == 3) {munition_text.setText('X 3')};
if (munition_inv == 4) {munition_text.setText('X 4')};
if (munition_inv == 5) {munition_text.setText('X 5')};
if (munition_inv == 6) {munition_text.setText('X 6')};
if (munition_inv == 7) {munition_text.setText('X 7')};
if (munition_inv == 8) {munition_text.setText('X 8')};
if (munition_inv == 9) {munition_text.setText('X 9')};


    ///////creation des touches\\\\\\

    //ramasser objets
    pressE = this.input.keyboard.addKey('E');

    //utiliser la matraque
    pressF = this.input.keyboard.addKey('F');

    //utiliser le pistolet
    pressA = this.input.keyboard.addKey('A');


    ////////arrivée du joueur\\\\\\\\\\

    player = this.physics.add.sprite(360, 550, 'joueur').setScale(0.5).setDepth(1);

    //////////collision du joueur au bordures\\\\\\\\\\

    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    /////////creation des animations\\\\\\\\\\\\

    this.anims.create({
      key:'anim_joueur_droite',
      frames: this.anims.generateFrameNumbers('course_droite', {start: 0, end: 1}),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key:'anim_joueur_bas',
      frames: this.anims.generateFrameNumbers('course_face', {start: 0, end: 1}),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key:'anim_joueur_haut',
      frames: this.anims.generateFrameNumbers('course_dos', {start: 0, end: 1}),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key:'anim_joueur_arret',
      frames: this.anims.generateFrameNumbers('joueur', {start: 0, end: 1}),
      frameRate: 8,
      repeat: -1
    });



    //////////creation du décors\\\\\\\\\\\\

    //création du terrain

       this.add.image(400,300,'terrain').setDepth(-5);
       mur_invisible = this.physics.add.staticGroup();
       mur_invisible.create(400, 2, 'collide').setVisible(false).setScale(0.15, 0.15); 
       mur_invisible.create(2, 645, 'collide').setVisible(false).setScale(0.15, 0.15); 
       mur_invisible.create(0, 350, 'collideC').setVisible(false).setScale(0.1, 0.15); 
       mur_invisible.create(845, 450, 'collideC').setVisible(false).setScale(0.1, 0.15); 


       //placement des torches

torcheext = this.physics.add.staticGroup()
torcheext.create(740, 183, 'torcheext').setDepth(1);
torcheext.create(740, 375, 'torcheext').setDepth(1);
torcheext.create(136, 180, 'torcheext').setDepth(1);

//placement des objets
fusee = this.physics.add.staticGroup();
fusee.create(190,740, 'fusee').setOrigin(0.5,1.45).setSize(200,1).setDepth(2);

caisseB = this.physics.add.staticGroup();
caisseB.create(280 ,605 ,'caisseB').setOrigin(0.5,1.5).setSize(40,1).setDepth(1);

caisseV = this.physics.add.staticGroup();
caisseV.create(320,605 ,'caisseV').setOrigin(0.5,1.5).setSize(40,1).setDepth(1);

caisseR = this.physics.add.staticGroup();
caisseR.create(280 ,460 ,'caisseR').setOrigin(0.5,0.5).setSize(40,1);

trouP = this.physics.add.staticGroup();
trouP.create(470, 440, 'trouP');

trouPP = this.physics.add.staticGroup();
trouPP.create(260, 143, 'trouPP');

rocheG= this.physics.add.staticGroup();
rocheG.create(515,280, 'rocheG').setScale(0.75).setOrigin(0.65,1.37).setSize(150,15).setDepth(1);

rocheP= this.physics.add.staticGroup();
rocheP.create(480,285, 'rocheP');
rocheP.create(607,240, 'rocheP');

////////collisions\\\\\\\\\\\

this.physics.add.collider(player,mur_invisible);
this.physics.add.collider(player,caisseR);
this.physics.add.collider(player,caisseV);
this.physics.add.collider(player,caisseB);
this.physics.add.collider(player,rocheG);
this.physics.add.collider(player,fusee);

    }

    update(){
        /////////configuration des controles\\\\\\\\
    if (cursors.up.isDown) {
      player.anims.play('anim_joueur_haut', true);
      player.setVelocityY(-175);
      player.setVelocityX(0);
    }
    else if (cursors.down.isDown) {
      player.anims.play('anim_joueur_bas', true);
      player.setVelocityY(175);
      player.setVelocityX(0);
    }
    else if (cursors.right.isDown && cursors.up.isUp && cursors.down.isUp) {
      player.setVelocityX(225);
      player.setVelocityY(0);
      player.setFlipX(false);
      player.anims.play('anim_joueur_droite', true);
    }
    else if (cursors.left.isDown) {
      player.setVelocityX(-225);      
      player.anims.play('anim_joueur_droite', true);
      player.setVelocityY(0);
      player.setFlipX(true);
    }
    else if (cursors.left.isUp && cursors.right.isUp && cursors.up.isUp && cursors.down.isUp) {      
      player.anims.play('anim_joueur_arret', true);
      player.setVelocityX(0);
      player.setVelocityY(0);
    }

    //disparition du text arrivée

    this.time.addEvent({
        delay: 6000,
        callback: ()=>{
            text_arrivee.setVisible(false);
        },
        loop: false
    });
        //this.scene.start("");
    }
}