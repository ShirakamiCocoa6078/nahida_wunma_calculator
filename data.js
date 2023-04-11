const levelWunma = {
0:'0',
1:'0',
2:'29',
3:'58',
4:'58',
5:'87',
6:'115'
}

const own_weapon_level = [{
"떠오르는 천일 밤의 꿈" : {0:'102',1:'148',2:'172',3:'195',4:'218',5:'241',6:'265'},
"방랑하는 저녁별" : {0:'64',1:'93',2:'107',3:'122',4:'136',5:'151',6:'165'},
"제례의 악장" : {0:'85',1:'124',2:'143',3:'162',4:'182',5:'201',6:'221'},
"음유시인의 악장" : {0:'0',1:'0',2:'0',3:'0',4:'0',5:'0',6:'0'},
"마도 서론" : {0:'72',1:'105',2:'122',3:'138',4:'154',5:'171',6:'187'},
"기타 무기(원소 마스터리에 영향이 없는 무기)" : {0:'0',1:'0',2:'0',3:'0',4:'0',5:'0',6:'0'}
}]

const own_weapon_jaeryon =[{
"떠오르는 천일 밤의 꿈" : {1:'32',2:'40',3:'48',4:'56',5:'64'},
"방랑하는 저녁별" : {1:'0',2:'0',3:'0',4:'0',5:'0'},
"제례의 악장" : {1:'0',2:'0',3:'0',4:'0',5:'0'},
"음유시인의 악장" : {1:'0',2:'0',3:'0',4:'0',5:'0'},
"마도 서론" : {1:'0',2:'0',3:'0',4:'0',5:'0'},
"기타 무기(원소 마스터리에 영향이 없는 무기)" : {1:'0',2:'0',3:'0',4:'0',5:'0'}
}]

const notOwn_weapon={
1:'40',
2:'42',
3:'44',
4:'46',
5:'48'
}

const nahida_star ={
0:['0','0','0','0'],
1:['0','0','0','0'],
2:['0','0','0','0'],
3:['0','0','0','0'],
4:['100','120','140','160'],
5:['100','120','140','160'],
6:['100','120','140','160']}

const party_synergy = {1:['0','0','0'],
2:['50','30','20'],
3:['50','30','20'],
4:['50','30','20']}

const another = [{
"2c":'120',
"3c":'100',
"4c":'60',
"5c":'60',
"6c":'6',
"7c":'125',
"8c":'200',
"9c":'60',
"10c":'100',
"11c":'200',
"12c":'80',
"13c":'60'
}]
var PlusElement = {
'checkedJunmu' : false,
'HowManyUse' : 0,
'firW' : 0,
'SecW' : 0,
'ThiW' : 0
}
//사이트에 표기할 내용
/*
나히다 기본(무기 제외) 성유물 필요 원마
나히다 무기포함 성유물 필요 원마
공풀치가능여부(도금/숲기) = O면 각각 부옵필요량
원풀치가능여부(도금/숲기) = O면 각각 부옵필요량
원원치가능여부(도금/숲기) = O면 각각 부옵필요량
원원원필수여부(도금/숲기) = O면 각각 부옵필요량




*/
function resultPrint(){
    var NLevel = document.getElementById('Clevel').selectedIndex //나히다 레벨
    var SelectedW= document.getElementById('weapon-listbox').value //선택한 무기
    var WLevel= document.getElementById('WLevel').selectedIndex //무기의 레벨
    var WJaeryon= document.getElementById('JLevel').selectedIndex //무기의 재련도
    var NDolpa= document.getElementById('dolpa').selectedIndex //나히다 몇돌
    var Party1= document.getElementById('first').selectedIndex //파티 2번
    var Party2= document.getElementById('second').selectedIndex //파티 3번
    var Party3= document.getElementById('third').selectedIndex //파티 4번
    //히든 요소들
    PlusElement['checkedJunmu'] = document.getElementById("Junmu").checked //전무 딴캐가 쓸때
    if(document.getElementById("Junmu").checked){
        var NL = ['firW', 'SecW', 'ThiW']
        var HowManyUse = document.getElementById("PlusJunmuSelect").selectedIndex //전무쓰는애들
        for(let i = 0; i<= HowManyUse; i++){
            PlusElement[NL[i]] = document.getElementById(`PlusJaeryon${i+1}`).selectedIndex
        }
    }
    window.open('result.html', '계산 결과', 'width=1000, height=700, location=0, menubar=1');
}