const levelWunma = {
'0':0,
'1':0,
'2':29,
'3':58,
'4':58,
'5':87,
'6':115
}

const own_weapon_level = {
"떠오르는 천일 밤의 꿈" : {0:102,1:148,2:172,3:195,4:218,5:241,6:265},
"방랑하는 저녁별" : {0:64,1:93,2:107,3:122,4:136,5:151,6:165},
"제례의 악장" : {0:85,1:124,2:143,3:162,4:182,5:201,6:221},
"음유시인의 악장" : {0:0,1:0,2:0,3:0,4:0,5:0,6:0},
"마도 서론" : {0:72,1:105,2:122,3:138,4:154,5:171,6:187},
"기타 무기(원소 마스터리에 영향이 없는 무기)" : {0:0,1:0,2:0,3:0,4:0,5:0,6:0}
}

const own_weapon_jaeryon ={
"떠오르는 천일 밤의 꿈" : {1:32,2:40,3:48,4:56,5:64},
"방랑하는 저녁별" : {1:0,2:0,3:0,4:0,5:0},
"제례의 악장" : {1:0,2:0,3:0,4:0,5:0},
"음유시인의 악장" : {1:0,2:0,3:0,4:0,5:0},
"마도 서론" : {1:0,2:0,3:0,4:0,5:0},
"기타 무기(원소 마스터리에 영향이 없는 무기)" : {1:0,2:0,3:0,4:0,5:0}
}

const notOwn_weapon={
1:40,
2:42,
3:44,
4:46,
5:48
}

const nahida_star ={
0:[0,0,0,0],
1:[0,0,0,0],
2:[0,0,0,0],
3:[0,0,0,0],
4:[100,120,140,160],
5:[100,120,140,160],
6:[100,120,140,160]}

const another = [{
"2c":120,
"3c":100,
"4c":60,
"5c":60,
"6c":6,
"7c":125,
"8c":200,
"9c":60,
"10c":100,
"11c":200,
"12c":80,
"13c":60
}]
var PlusElement = {
"checkedJunmu" : false,
"HowManyUse" : 0,
"firW" : 0,
"SecW" : 0,
"ThiW" : 0
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
var all_result = {
    '1':'nullValue',
    '2':'nullValue',
    '3':'nullValue'
}
function resultPrint(){
    try{
        //변수들 가져오기
        var NLevel = document.getElementById('Clevel').selectedIndex //나히다 레벨
        var SelectedW= document.getElementById('weapon-listbox').value //선택한 무기
        var WLevel= document.getElementById('WLevel').selectedIndex //무기의 레벨
        var WJaeryon= document.getElementById('JLevel').selectedIndex //무기의 재련도
        var NDolpa= document.getElementById('dolpa').selectedIndex //나히다 몇돌
        var Party1= document.getElementById('first').value //파티 2번
        var Party2= document.getElementById('second').value //파티 3번
        var Party3= document.getElementById('third').value //파티 4번
        var synergy = [Party1, Party2, Party3]
        //히든 요소들
        PlusElement['checkedJunmu'] = document.getElementById("Junmu").checked //전무 딴캐가 쓸때
        if(document.getElementById("Junmu").checked){
            var NL = ['firW', 'SecW', 'ThiW']
            var HowManyUse = document.getElementById("PlusJunmuSelect").selectedIndex //전무쓰는애들
            for(let i = 0; i<= HowManyUse; i++){
                PlusElement[NL[i]] = document.getElementById(`PlusJaeryon${i+1}`).selectedIndex
            }
        }
        //변수들 사용하기
        var NLvlVal = levelWunma[NLevel] //나히다 기본 원마
        var SWV = own_weapon_level[SelectedW][WLevel] //선택한 무기의 레벨에서 오는 원마
        var OWJV = own_weapon_jaeryon[SelectedW][WJaeryon] //선택한 무기의 재련에서 오는 원마
        if (Party1 === "ful" || Party2 === "ful" || Party3 === "ful") {
            var party_synergy = 50;
        }
        let count = 0
        for (let i in synergy){
            if(i == 'ful'){
                count++
            }
        }
        if(count==0){
            count++
        }
        var OWJV2 = OWJV*count //나히다 전무 스킬에서 오는 원마
        var WValue = SWV+OWJV2 //무기 자체에서 오는 원마

        var PlusElementWunma = notOwn_weapon[PlusElement['firW']]+notOwn_weapon[PlusElement['SecW']]+notOwn_weapon[PlusElement['ThiW']]
        //다른캐릭들 무기에서 오는 원마
        var normalWunma = NLvlVal+WValue+PlusElementWunma //나히다의 평상시 원마
        var isit4dol = [nahida_star[NDolpa][0], nahida_star[NDolpa][4]] //1마리 마킹시, 4마리 이상 마킹시
        all_result['1'] = NLvlVal
        all_result['2'] = normalWunma
        all_result['3'] = isit4dol
        window.open('result.html', '계산 결과', 'width=1000, height=900, location=0, menubar=1');
        var first = document.getElementById("first").innerText
        document.getElementById("first").innerText = first+all_result['1']
    }catch(error){
        alert("입력해야할 값들을 입력해주세요");
    }
}