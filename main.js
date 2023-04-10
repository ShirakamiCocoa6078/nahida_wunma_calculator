function LevelChanged(){
    var CL = document.getElementById('Clevel').selectedIndex
    document.getElementById("LevelImage").src = `./image/levels/level${CL}.PNG`
}
function WLevelChanged(){
    var WL = document.getElementById('WLevel').selectedIndex
    document.getElementById("WeaponLevelImage").src = `./image/levels/level${WL}.PNG`
}
function jaeryonChanged(){
    var JR = document.getElementById('JLevel').selectedIndex
    document.getElementById('jaeryonImage').src = `./image/jaeryon/${JR+1}jae.PNG`
}
function dolpaChanged(){
    var dol = document.getElementById('dolpa').selectedIndex
    document.getElementById('dolpaImage').src = `./image/dol/${dol}dol.PNG`
}
const weaponlists = ["떠오르는 천일 밤의 꿈",
"방랑하는 저녁별",
"제례의 악장",
"음유시인의 악장",
"마도 서론",
"기타 무기(원소 마스터리에 영향이 없는 무기)"]
function weaponChanged(){
    var weaponLvl = document.getElementById('weaponEnforce')
    if(weaponlists.includes(document.getElementById('weapon-listbox').value)){
        weaponLvl.style.visibility = 'visible'
    }else{
        weaponLvl.style.visibility = 'hidden'
    }
}
function checkOnlyOne(element) {
    const checkboxes= document.getElementsByName("chk_info");
    checkboxes.forEach((cb) => {
        cb.checked = false;
    })
    element.checked = true;
}
function resetSung(){
    const checkboxes= document.getElementsByName("chk_info");
    checkboxes.forEach((cb) => {
        cb.checked = false;
    })
}
var HOrV = ['hidden', 'hidden', 'hidden', 'hidden']
function junmuChecked(){
    var main = document.getElementById("PlusJunmu").style.visibility
    if(main=="hidden"){
        document.getElementById("PlusJunmu").style.visibility = "visible"
        document.getElementById("PlusJaeryon1").style.visibility = HOrV[1]
        document.getElementById("PlusJaeryon2").style.visibility = HOrV[2]
        document.getElementById("PlusJaeryon3").style.visibility = HOrV[3]
        HOrV[0] = "visible"
    }else{
        document.getElementById("PlusJunmu").style.visibility = "hidden"
        document.getElementById("PlusJaeryon1").style.visibility = "hidden"
        document.getElementById("PlusJaeryon2").style.visibility = "hidden"
        document.getElementById("PlusJaeryon3").style.visibility = "hidden"
    }
}
function PlusChanged(){
    var PC = document.getElementById("PlusJunmuSelect").selectedIndex
    if(PC==0){
        document.getElementById("PlusJaeryon1").style.visibility = "hidden"
        document.getElementById("PlusJaeryon2").style.visibility = "hidden"
        document.getElementById("PlusJaeryon3").style.visibility = "hidden"
        for(let i = 1; i < 4; i++){
            HOrV[i] = 'hidden'
        }
    }else{
        if(PC==1){
            document.getElementById("PlusJaeryon1").style.visibility = "visible"
            document.getElementById("PlusJaeryon2").style.visibility = "hidden"
            document.getElementById("PlusJaeryon3").style.visibility = "hidden"
            HOrV[1] = 'visible'
            for(let i = 2; i < 4; i++){
                HOrV[i] = 'hidden'
            }
        }else if(PC==2){
            document.getElementById("PlusJaeryon1").style.visibility = "visible"
            document.getElementById("PlusJaeryon2").style.visibility = "visible"
            document.getElementById("PlusJaeryon3").style.visibility = "hidden"
            for(let i = 1; i < 3; i++){
                HOrV[i] = 'visible'
            }
            HOrV[3] = 'hidden'
        }else if(PC==3){
            document.getElementById("PlusJaeryon1").style.visibility = "visible"
            document.getElementById("PlusJaeryon2").style.visibility = "visible"
            document.getElementById("PlusJaeryon3").style.visibility = "visible"
            for(let i = 1; i < 4; i++){
                HOrV[i] = 'visible'
            }
        }
    }
}