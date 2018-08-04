
function openModalKnight(character) {
  var modal = document.getElementById('Knight');
  modal.style.display = 'block';
}
function openModalMage(character) {
  var modal = document.getElementById('Mage');
  modal.style.display = 'block';
}
function openModalAssassin(character) {
  var modal = document.getElementById('Assassin');
  modal.style.display = 'block';
}
function openModalHealer(character) {
  var modal = document.getElementById('Healer');
  modal.style.display = 'block';
}


function closeModalKnight() {
  var modal = document.getElementById('Knight');
  modal.style.display = 'none';
}
function closeModalMage() {
  var modal = document.getElementById('Mage');
  modal.style.display = 'none';
}
function closeModalAssassin() {
  var modal = document.getElementById('Assassin');
  modal.style.display = 'none';
}
function closeModalHealer() {
  var modal = document.getElementById('Healer');
  modal.style.display = 'none';
}

function statsKnight() {
  var statsKnightObj = {
    ATK: 100,
    MATK: 50,
    DEF: 100,
    MDEF: 75,
    HP: 100,
    MANA: 50,
    STR: 100,
    AGI: 50,
    INT: 60,
    CRIT: 80,
    PRCS: 60,
    RES: 100,
  }
  var KLevel = document.getElementById("KnightText").value;
  var KnightLevel = Number(KLevel);
   if (KnightLevel > 0 && KnightLevel <= 150) {
     document.getElementById("knightAtk").innerHTML =  Math.round(KnightLevel * 2.6 * statsKnightObj.ATK);
     document.getElementById("knightMatk").innerHTML = Math.round(KnightLevel * 0.8 * statsKnightObj.MATK);
     document.getElementById("knightDef").innerHTML =  Math.round(KnightLevel * 2.5 * statsKnightObj.DEF);
     document.getElementById("knightMdef").innerHTML =  Math.round(KnightLevel * 1.2 * statsKnightObj.MDEF);
     document.getElementById("knightHp").innerHTML = Math.round(KnightLevel * 2.4 * statsKnightObj.HP);
     document.getElementById("knightMana").innerHTML =  Math.round(KnightLevel * 0.9 * statsKnightObj.MANA);

     document.getElementById("knightStr").innerHTML = Math.round(KnightLevel * 2.8 * statsKnightObj.STR);
     document.getElementById("knightAgi").innerHTML = Math.round(KnightLevel * 0.7 * statsKnightObj.AGI);
     document.getElementById("knightInt").innerHTML =  Math.round(KnightLevel * 1.2 * statsKnightObj.INT);
     document.getElementById("knightCrit").innerHTML =  Math.round(KnightLevel * 2.1 * statsKnightObj.CRIT);
     document.getElementById("knightPrcs").innerHTML = Math.round(KnightLevel * 1.8 * statsKnightObj.PRCS);
     document.getElementById("knightRes").innerHTML =  Math.round(KnightLevel * 2.3 * statsKnightObj.RES);
   }
}
function statsMage() {
  var statsMageObj = {
    ATK: 40,
    MATK: 100,
    DEF: 50,
    MDEF: 90,
    HP: 60,
    MANA: 100,
    STR: 60,
    AGI: 70,
    INT: 100,
    CRIT: 70,
    PRCS: 75,
    RES: 75,
  }
  var MLevel = document.getElementById("MageText").value;
  var MageLevel = Number(MLevel);
   if (MageLevel > 0 && MageLevel <= 150) {
     document.getElementById("mageAtk").innerHTML =  Math.round(MageLevel * 0.8 * statsMageObj.ATK);
     document.getElementById("mageMatk").innerHTML = Math.round(MageLevel * 2.8 * statsMageObj.MATK);
     document.getElementById("mageDef").innerHTML =  Math.round(MageLevel * 0.6 * statsMageObj.DEF);
     document.getElementById("mageMdef").innerHTML =  Math.round(MageLevel * 1.8 * statsMageObj.MDEF);
     document.getElementById("mageHp").innerHTML = Math.round(MageLevel * 1.7 * statsMageObj.HP);
     document.getElementById("mageMana").innerHTML =  Math.round(MageLevel * 2.3 * statsMageObj.MANA);

     document.getElementById("mageStr").innerHTML = Math.round(MageLevel * 1 * statsMageObj.STR);
     document.getElementById("mageAgi").innerHTML = Math.round(MageLevel * 1.3 * statsMageObj.AGI);
     document.getElementById("mageInt").innerHTML =  Math.round(MageLevel * 2.6 * statsMageObj.INT);
     document.getElementById("mageCrit").innerHTML =  Math.round(MageLevel * 1.8 * statsMageObj.CRIT);
     document.getElementById("magePrcs").innerHTML = Math.round(MageLevel * 1.5 * statsMageObj.PRCS);
     document.getElementById("mageRes").innerHTML =  Math.round(MageLevel * 1.7 * statsMageObj.RES);
   }
}
function statsAssassin() {
  var statsAssassinObj = {
    ATK: 87,
    MATK: 70,
    DEF: 63,
    MDEF: 63,
    HP: 80,
    MANA: 80,
    STR: 70,
    AGI: 100,
    INT: 73,
    CRIT: 100,
    PRCS: 100,
    RES: 75,
  }
  var ALevel = document.getElementById("AssassinText").value;
  var AssassinLevel = Number(ALevel);
   if (AssassinLevel > 0 && AssassinLevel <= 150) {
     document.getElementById("assassinAtk").innerHTML =  Math.round(AssassinLevel * 2.2 * statsAssassinObj.ATK);
     document.getElementById("assassinMatk").innerHTML = Math.round(AssassinLevel * 2.2 * statsAssassinObj.MATK);
     document.getElementById("assassinDef").innerHTML =  Math.round(AssassinLevel * 1.7 * statsAssassinObj.DEF);
     document.getElementById("assassinMdef").innerHTML =  Math.round(AssassinLevel * 1.8 * statsAssassinObj.MDEF);
     document.getElementById("assassinHp").innerHTML = Math.round(AssassinLevel * 1.7 * statsAssassinObj.HP);
     document.getElementById("assassinMana").innerHTML =  Math.round(AssassinLevel * 1.9 * statsAssassinObj.MANA);

     document.getElementById("assassinStr").innerHTML = Math.round(AssassinLevel * 2 * statsAssassinObj.STR);
     document.getElementById("assassinAgi").innerHTML = Math.round(AssassinLevel * 2.4 * statsAssassinObj.AGI);
     document.getElementById("assassinInt").innerHTML =  Math.round(AssassinLevel * 1.7 * statsAssassinObj.INT);
     document.getElementById("assassinCrit").innerHTML =  Math.round(AssassinLevel * 2.9 * statsAssassinObj.CRIT);
     document.getElementById("assassinPrcs").innerHTML = Math.round(AssassinLevel * 2.3* statsAssassinObj.PRCS);
     document.getElementById("assassinRes").innerHTML =  Math.round(AssassinLevel * 2 * statsAssassinObj.RES);
   }
}
function statsHealer() {
  var statsHealerObj = {
    ATK: 30,
    MATK: 70,
    DEF: 73,
    MDEF: 94,
    HP: 80,
    MANA: 100,
    STR: 40,
    AGI: 80,
    INT: 100,
    CRIT: 70,
    PRCS: 100,
    RES: 80,
  }
  var HLevel = document.getElementById("HealerText").value;
  var HealerLevel = Number(HLevel);
   if (HealerLevel > 0 && HealerLevel <= 150) {
     document.getElementById("healerAtk").innerHTML =  Math.round(HealerLevel * 0.4 * statsHealerObj.ATK);
     document.getElementById("healerMatk").innerHTML = Math.round(HealerLevel * 1.2 * statsHealerObj.MATK);
     document.getElementById("healerDef").innerHTML =  Math.round(HealerLevel * 1.8 * statsHealerObj.DEF);
     document.getElementById("healerMdef").innerHTML =  Math.round(HealerLevel * 3 * statsHealerObj.MDEF);
     document.getElementById("healerHp").innerHTML = Math.round(HealerLevel * 1.7 * statsHealerObj.HP);
     document.getElementById("healerMana").innerHTML =  Math.round(HealerLevel * 2.8 * statsHealerObj.MANA);

     document.getElementById("healerStr").innerHTML = Math.round(HealerLevel * 0.5 * statsHealerObj.STR);
     document.getElementById("healerAgi").innerHTML = Math.round(HealerLevel * 2 * statsHealerObj.AGI);
     document.getElementById("healerInt").innerHTML =  Math.round(HealerLevel * 2.8 * statsHealerObj.INT);
     document.getElementById("healerCrit").innerHTML =  Math.round(HealerLevel * 1.6 * statsHealerObj.CRIT);
     document.getElementById("healerPrcs").innerHTML = Math.round(HealerLevel * 1.6 * statsHealerObj.PRCS);
     document.getElementById("healerRes").innerHTML =  Math.round(HealerLevel * 2.3 * statsHealerObj.RES);
   }
}
