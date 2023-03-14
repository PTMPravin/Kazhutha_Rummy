
var deck ;
var playerOne ;
var playerTwo ;
var player_Two_Remove_Card ;
var number = 0 ;
var dealer_Number = 0;
// var player_One_Array ;
var player_Two_Remove_Card_Array ;
var player_One_Discard ;
var name ;
var player_One_Name ;
var player_One_Split_Name ;
var player_Two_Split_Name ;
var biggest_Num_In_Player_One ;
var A = 14 ;
var K = 13 ;
var Q = 12 ;
var J = 11 ;
var spade_A = 0;
var checking_Your_Discard ;
var your_Discard_Cards_Value ;
var dealer_Discard_Checking ;
var whose_Turn_Number = 0;
var setting_Dealer_Discard_Cards_Boolean = false;
let changing_Dealer_Discards_Cards = false;
let setting_Boolean = false;
var new_Variable;
var new_Boolean = false;
var player_One_Big_Number = 0;
var checking_Turn = 0;
//var dealer_A_Spade_Checking ;
//var checking_Number_Two = 0;

window.onload = function () {
    buildDeck();
    shuffleDeck();
    playerOneFun();
    playerTwoFun();
    player_One_Card_Show();
    player_Two_Card_Show();
    player_One_Discard_Function();
}

//console.log(dealer_Number);

function buildDeck () {
    let values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let types = ["C","D","H","S"];
    deck = [];

    for(let i=0;i<types.length;i++){
        for(let j=0;j<values.length;j++){
            deck.push(values[j]+"-"+types[i]);
        }
    }
  //  console.log(deck);
}

function shuffleDeck () {
    for(let i=0;i<deck.length;i++){
        let j = Math.floor(Math.random()*deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    //console.log(deck);
}

function playerOneFun () {
    playerOne = [];
    for(let i=0;i<7;i++){
        playerOne.push(deck[i]);
        //console.log(deck[i]+"->"+i);
        // let cardImg = document.createElement("img");
        // cardImg.src = "./cards/"+deck[i]+".png";
        // document.getElementById("your-cards").append(cardImg);
    }
    //console.log(playerOne);
//    player_One_Array = [];
//    for(let i=0;i<playerOne.length;i++){
//     player_One_Array.push(playerOne[i]);
//    }
}

function playerTwoFun () {
    playerTwo = [];
    for(let i=7;i<14;i++){
        playerTwo.push(deck[i]);
        //console.log(deck[i]+"->"+i);
        //let cardImg = document.createElement("img");
        //cardImg.src = "./cards/"+deck[i]+".png";
        //document.getElementById("your-cards").append(cardImg);
    }
    //console.log(playerTwo);
}

function player_One_Card_Show() {
    for(let i=0;i<playerOne.length;i++){
        let cardImg = document.createElement("img");
        cardImg.src = "./cards-back/"+playerOne[i]+".png";
        document.getElementById("dealer-cards").appendChild(cardImg);
    }
}

function player_Two_Card_Show() {
    for(let i=0;i<playerTwo.length;i++){
        let cardImg = document.createElement("img");
        cardImg.src = "./cards/"+playerTwo[i]+".png";
        document.getElementById("your-cards").appendChild(cardImg);
    }
   // console.log(playerTwo);
   // console.log(playerTwo.length);
}

function button_Click_Function () {
    name = document.querySelector("input").value;
    player_Two_Split_Name_Function(name);
    //console.log(name);
    for(let i=0;i<playerTwo.length;i++){
        if(name===playerTwo[i]){

            let remove = playerTwo.indexOf(name);
            playerTwo.splice(remove,1);

            //Remove Card From Player 2
            player_Two_Remove_Card = name ;
            checking_Your_Discard = player_Two_Split_Name[1];
            console.log("checking_Your_Discard : "+checking_Your_Discard);
            //console.log(player_Two_Remove_Card)

            number++;
            //checking_Number_Two++;
            //console.log(number);

            if(number>=2){
                //Function Of deleting_Your_Discard_Cards()
                //create_New_Div_Element_For_Your_Discard_Cards();
                deleting_Your_Discard_Cards();
                create_New_Div_Element_For_Your_Discard_Cards();
            }
            //Function Of Your Discards Cards()
            your_Discard_Function();

            //console.log(playerTwo);
            //console.log(playerTwo.length);


            //Calling Remove Div Function
            delete_Images_Div();

            //const imagesDiv = document.querySelector("#your-cards");
            //document.body.removeChild(imagesDiv);


            //Creating New Div Element
            create_New_Div_Element_For_Your_Cards()
            // const create_Div = document.createElement("div");
            // create_Div.setAttribute("id","your-cards");

            // const body = document.querySelector("body");
            // body.append(create_Div);

            for(let i=0;i<playerTwo.length;i++){
                let cardImg = document.createElement("img");
                cardImg.src = "./cards/"+playerTwo[i]+".png";
                document.getElementById("your-cards").append(cardImg);
            }
            if(whose_Turn_Number==1){
                window.setTimeout(setTimeout_Function,2777);
                function setTimeout_Function() {
                console.log("It's Worked Set Time Out");
                whose_Turn();
              }
            }
            else{
                window.setTimeout(setTimeout_Function,1400);
                function setTimeout_Function() {
                console.log("It's Worked Set Time Out");
                whose_Turn();
              }
            }
            console.log("GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG");
            if(spade_A===1){
                if(dealer_Discard_Checking[0]>player_Two_Remove_Card[0]){
                    console.log("HIBOT");
                    //removing_Dealer_Cards_By_Its_Own_Way();
                    console.log("HIBOT");
                }
            }
            console.log("Checking_Turn === "+checking_Turn);
            if(checking_Turn>=1){
                console.log("dealer_Discard_Checking === "+ dealer_Discard_Checking);
                if(dealer_Discard_Checking[0]>player_Two_Remove_Card[0]){
                    console.log("HIBOT");
                    //removing_Dealer_Cards_By_Its_Own_Way();
                    console.log("HIBOT");
                }
                console.log("player_Two_Remove_Card === "+ player_Two_Remove_Card);
            }
            console.log("GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG");
            // if(checking_Your_Discard!==which_Want_To_Remove_Cards_Seven[2]){
            //     console.log("Function Called");
            //     checking_New_Discards(which_Want_To_Remove_Cards_Seven);
            // }
        }
    }
}

//player_One_Discard_Function();

function delete_Images_Div () {
    const imagesDiv = document.querySelector("#your-cards");
    document.body.removeChild(imagesDiv);
}

//Store It In Your Discards Cards
function your_Discard_Function() {
    let discard_card_Img = document.createElement("img");
    discard_card_Img.src = "./cards/"+player_Two_Remove_Card+".png";
    document.getElementById("your_discard_cards").append(discard_card_Img);
    //checking_New_Dealer_Discards();
    if(spade_A==1){
        window.setTimeout(setTimeout_Function_Two,1200);
            function setTimeout_Function_Two() {
                console.log("It's Worked Set Time Out");
                if(dealer_Discard_Checking[2]!==checking_Your_Discard){
                    console.log("++++++++++++++++++++++++++++++++++");
                    console.log(dealer_Discard_Checking);
                    console.log(player_Two_Remove_Card);
                    console.log("++++++++++++++++++++++++++++++++++");
                    for(let i=0;i<playerTwo.length;i++){
                        var news = playerTwo[i];
                        console.log("++++++++++++++++++++++++++++++++++");
                        console.log(news);
                        console.log(news[2]);
                        console.log("++++++++++++++++++++++++++++++++++");
                        if(dealer_Discard_Checking[2]===news[2]){
                            new_Changing_Your_Discard_Function();
                            new_Boolean = true;
                            break;
                        }
                    }
                    console.log("New Boolean : "+new_Boolean);
                    if(new_Boolean===false){
                        checking_New_Dealer_Discards();
                    }
                }
            }
    }
}

function deleting_Your_Discard_Cards() {
    //const discard_Div = document.querySelector("#discards");
    //console.log(discard_Div);
    //const player_Two_Discard_Div = document.querySelector("#your_discard_cards");
    //document.body("#discards div").remove(player_Two_Discard_Div);
    const remove = document.getElementById("your_discard_cards");
    remove.remove();
}

//Creating Div Tag
function create_New_Div_Element_For_Your_Cards() {
    const create_Div = document.createElement("div");
    create_Div.setAttribute("id","your-cards");
    const body = document.querySelector("body");
    body.append(create_Div);
}

function create_New_Div_Element_For_Your_Discard_Cards() {
    const create_Div = document.createElement("div");
    create_Div.setAttribute("id","your_discard_cards");
    const discards = document.getElementById("discards");
    discards.append(create_Div);
    // const para = createElement("h3");
    // const adding_Text = document.createTextNode("Player-2-Discards :");
    // para.append(adding_Text);
}
// let arr = [2,3,4,5,6,7,8];
// let n = arr.indexOf(3);
// arr.splice(n,1);
// console.log(arr);

function player_One_Discard_Function() {
   for(let i=0;i<playerOne.length;i++){
    if(playerOne[i]==="A-S"){
        player_One_Name = playerOne[i];
        player_One_Split_Name_Function(player_One_Name);
        //console.log("Calling_Removing_Dealer_Cards");
        removing_dealer_cards();
    }
   }  
}

function dealer_Discard_Function() {
    // dealer_Number++;
    // if(dealer_Number>=1){

    // }
    console.log("A");
    let discard_card_Img = document.createElement("img");
    discard_card_Img.src = "./cards/"+player_One_Discard+".png";
    document.getElementById("dealer-discard-cards").append(discard_card_Img);
    spade_A++;
    console.log("Spade_A_Is_Having : "+spade_A);
    //console.log(dealer_Number);
}

// function dealer_discard_Removing_Function() {
//     const remove = document.getElementById("dealer_discard_cards");
//     remove.remove();
// }

function removing_dealer_cards() {
    //console.log(playerOne);
    for(let i=0;i<playerOne.length;i++){
        if(playerOne[i]==="A-S"){
            player_One_Discard = playerOne[i];
            dealer_Discard_Checking = player_One_Discard;
            //console.log("player_One_Discard : "+player_One_Discard);
            let remove = playerOne.indexOf("A-S");
            playerOne.splice(remove,1);
            //console.log(remove);
            //console.log("Removed_Array"+playerOne);
            //dealer_Discard_Checking = playerOne[i];
            console.log("==========");
            console.log("player_One_Discard : "+player_One_Discard);
            console.log("dealer_Discard_Checking : "+dealer_Discard_Checking);
            console.log("dealer_Discard_Checking[2] : "+dealer_Discard_Checking[2]);
            console.log("==========");
        }
    }
    dealer_Discard_Function();
    deleting_dealer_cards();
}

// function dealer_card_Function() {

// }

function deleting_dealer_cards() {
    const remove = document.getElementById("dealer-cards");
    remove.remove();
    creating_New_Div_Element_For_Dealer_cards();
}

function creating_New_Div_Element_For_Dealer_cards() {
    const create_Div = document.createElement("div");
    create_Div.setAttribute("id","dealer-cards");
    const tragetting_Div = document.getElementById("dealer-div");
    tragetting_Div.append(create_Div);
    setting_Card_For_New_Div_Element();  
}

function setting_Card_For_New_Div_Element() {
    for(let i=0;i<playerOne.length;i++){
        const cardImg = document.createElement("img");
        cardImg.src = "./cards-back/"+playerOne[i]+".png";
        const adding_Images = document.getElementById("dealer-cards");
        adding_Images.append(cardImg);
    }
}

function player_Two_Split_Name_Function(names) {
    //console.log(name);
    player_Two_Split_Name = names.split("-");
    //console.log(player_Two_Split_Name);
    return player_Two_Split_Name;
}

function player_One_Split_Name_Function(names_One) {
    player_One_Split_Name = names_One.split("-");
    //console.log(player_One_Split_Name);
    return player_One_Split_Name;
}

function whose_Turn() {
    checking_Turn++;
    var checking_For_Loop = 0;
    var which_Want_To_Remove ;
    let finding_Bigger_In_Array = 0;
    var checking_Dealer_Discard;
    console.log(playerOne);
    player_Two_Split_Name_Function(name);

    //console.log(player_Two_Split_Name[0]);
    for(let i=0;i<playerOne.length;i++){
        player_One_Split_Name_Function(playerOne[i]);
        //which_Want_To_Remove = playerOne[i];
        //console.log(playerOne[i]);
        //console.log(which_Want_To_Remove);
        console.log(player_One_Split_Name);

        if(player_Two_Split_Name[1]===player_One_Split_Name[1]){
            console.log("Same : "+player_One_Split_Name[1]);
            which_Want_To_Remove = playerOne[i];
            checking_Dealer_Discard = player_One_Split_Name[1];

            console.log("player_One_Split_Name : "+player_One_Split_Name[0]);
            console.log("player_Two_Split_Name : "+player_Two_Split_Name[0]);

            if(player_One_Split_Name[0]>finding_Bigger_In_Array){
                finding_Bigger_In_Array = player_One_Split_Name[0];
                which_Want_To_Remove = playerOne[i];
                checking_Dealer_Discard = player_One_Split_Name[1];
            }

            if(player_Two_Split_Name[0]>player_One_Split_Name[0]){
                console.log("Bigger : "+player_One_Split_Name[0]);
            }
        }
    }
    if(which_Want_To_Remove===undefined){
        for(let i=0;i<playerOne.length;i++){
            if(player_Two_Split_Name[1]==="S"){
                if(player_Two_Split_Name[1]!==player_One_Split_Name[1]){
                 if(player_One_Split_Name[1]==="H"){
                    which_Want_To_Remove = playerOne[i];
                    // if(player_One_Split_Name[0]>finding_Bigger_In_Array){
                    //     finding_Bigger_In_Array = player_One_Split_Name[0];
                    //     which_Want_To_Remove = playerOne[i];
                    // }
                    //console.log(which_Want_To_Remove);
                }
                else if(player_One_Split_Name[1]==="D"){
                    which_Want_To_Remove = playerOne[i];
                    // if(player_One_Split_Name[0]>finding_Bigger_In_Array){
                    //     finding_Bigger_In_Array = player_One_Split_Name[0];
                    //     which_Want_To_Remove = playerOne[i];
                    // }
                    //console.log(which_Want_To_Remove);
                }
                else if(player_One_Split_Name[1]==="C"){
                    which_Want_To_Remove = playerOne[i];
                    // if(player_One_Split_Name[0]>finding_Bigger_In_Array){
                    //     finding_Bigger_In_Array = player_One_Split_Name[0];
                    //     which_Want_To_Remove = playerOne[i];
                    // }
                    //console.log(which_Want_To_Remove);
                }
            }
        }
        if(player_Two_Split_Name[1]==="C"){
            if(player_Two_Split_Name[1]!==player_One_Split_Name[1]){
                if(player_One_Split_Name[1]==="H"){
                    which_Want_To_Remove = playerOne[i];
                    // if(player_One_Split_Name[0]>finding_Bigger_In_Array){
                    //     finding_Bigger_In_Array = player_One_Split_Name[0];
                    //     which_Want_To_Remove = playerOne[i];
                    // }
                    //console.log(which_Want_To_Remove);
                }
                else if(player_One_Split_Name[1]==="D"){
                    which_Want_To_Remove = playerOne[i];
                    // if(player_One_Split_Name[0]>finding_Bigger_In_Array){
                    //     finding_Bigger_In_Array = player_One_Split_Name[0];
                    //     which_Want_To_Remove = playerOne[i];
                    // }
                    //console.log(which_Want_To_Remove);
                }
                else if(player_One_Split_Name[1]==="S"){
                    which_Want_To_Remove = playerOne[i];
                    if(player_One_Split_Name[0]>finding_Bigger_In_Array){
                        finding_Bigger_In_Array = player_One_Split_Name[0];
                        which_Want_To_Remove = playerOne[i];
                    }
                    //console.log(which_Want_To_Remove);
                }
            }
        }
        if(player_Two_Split_Name[1]==="D"){
            if(player_Two_Split_Name[1]!==player_One_Split_Name[1]){
                if(player_One_Split_Name[1]==="C"){
                    which_Want_To_Remove = playerOne[i];
                    // if(player_One_Split_Name[0]>finding_Bigger_In_Array){
                    //     finding_Bigger_In_Array = player_One_Split_Name[0];
                    //     which_Want_To_Remove = playerOne[i];
                    // }
                    //console.log(which_Want_To_Remove);
                }
                else if(player_One_Split_Name[1]==="H"){
                    which_Want_To_Remove = playerOne[i];
                    // if(player_One_Split_Name[0]>finding_Bigger_In_Array){
                    //     finding_Bigger_In_Array = player_One_Split_Name[0];
                    //     which_Want_To_Remove = playerOne[i];
                    // }
                    //console.log(which_Want_To_Remove);
                }
                else if(player_One_Split_Name[1]==="S"){
                    which_Want_To_Remove = playerOne[i];
                    // if(player_One_Split_Name[0]>finding_Bigger_In_Array){
                    //     finding_Bigger_In_Array = player_One_Split_Name[0];
                    //     which_Want_To_Remove = playerOne[i];
                    // }
                    //console.log(which_Want_To_Remove);
                }
            }
        }
        if(player_Two_Split_Name[1]==="H"){
            if(player_Two_Split_Name[1]!==player_One_Split_Name[1]){
                if(player_One_Split_Name[1]==="D"){
                    which_Want_To_Remove = playerOne[i];
                    // if(player_One_Split_Name[0]>finding_Bigger_In_Array){
                    //     finding_Bigger_In_Array = player_One_Split_Name[0];
                    //     which_Want_To_Remove = playerOne[i];
                    // }
                    //console.log(which_Want_To_Remove);
                }
                else if(player_One_Split_Name[1]==="C"){
                    which_Want_To_Remove = playerOne[i];
                    // if(player_One_Split_Name[0]>finding_Bigger_In_Array){
                    //     finding_Bigger_In_Array = player_One_Split_Name[0];
                    //     which_Want_To_Remove = playerOne[i];
                    // }
                    //console.log(which_Want_To_Remove);
                }
                else if(player_One_Split_Name[1]==="S"){
                    which_Want_To_Remove = playerOne[i];
                    // if(player_One_Split_Name[0]>finding_Bigger_In_Array){
                    //     finding_Bigger_In_Array = player_One_Split_Name[0];
                    //     which_Want_To_Remove = playerOne[i];
                    // }
                    //console.log(which_Want_To_Remove);
                }
            }
        }
      }
    }
    console.log("Bigger In Array : "+finding_Bigger_In_Array);
    console.log("Which Want To Remove : "+which_Want_To_Remove);
    console.log("which_Want_To_Remove_One_Letter : "+which_Want_To_Remove[2]);
    removing_Next_Dealer_Cards(which_Want_To_Remove , checking_Dealer_Discard);
}

function removing_Next_Dealer_Cards(which_Want_To_Remove_Cards , checking_Dealer_Discards) {
    var remove;
    if(changing_Dealer_Discards_Cards===true){
        console.log(playerOne);
        if(playerOne.length%2===0){
            console.log("Even");
            new_Variable = playerOne[playerOne.length/2];
            console.log("Player_One : "+playerOne[playerOne.length/2]);
            console.log("new_Variable : "+new_Variable);
        }
        else{
            console.log("Odd");
            new_Variable = playerOne[0];
            console.log("Player_One : "+playerOne[0]);
            console.log("new_Variable : "+new_Variable);
        }
        // new_Variable = playerOne[playerOne.length/2];
        // console.log("Player_One : "+playerOne[playerOne.length/2]);
        // console.log("new_Variable : "+new_Variable);
        //let discard_card_Img = document.createElement("img");
        //discard_card_Img.src = "./cards/"+new_Variable+".png";
        //document.getElementById("dealer-discard-cards").append(discard_card_Img);


        remove = playerOne.indexOf(new_Variable);
        playerOne.splice(remove,1);


    }
    else{
        remove = playerOne.indexOf(which_Want_To_Remove_Cards);
        playerOne.splice(remove,1);
    }
    //let remove = playerOne.indexOf(which_Want_To_Remove_Cards);
    //playerOne.splice(remove,1);
    dealer_Discard_Checking = which_Want_To_Remove_Cards;
    console.log("Index Of : "+remove);
    console.log("A New Player One Array : "+playerOne);
    console.log("A New Player One Array Length : "+playerOne.length);
    console.log("Dealer Discard Image : "+checking_Dealer_Discards);
    console.log("which_Want_To_Remove_Cards_One_Letter : "+which_Want_To_Remove_Cards[2]);
    //checking_Discards(checking_Dealer_Discards);
    //console.log(playerOne);
     if(spade_A===1){
        if(number===1){
            console.log("Hi Paiyaa");
            deleting_Next_Dealer_Discards_Cards(which_Want_To_Remove_Cards);
            creating_A_Element_For_Next_Dealer_Discards(which_Want_To_Remove_Cards);
        }
     }
    //deleting_Next_Dealer_Discards_Cards(which_Want_To_Remove_Cards);
    //setting_A_Dealer_Dicards_Cards(which_Want_To_Remove_Cards);
    //deleting_Next_Dealer_Discards_Cards(which_Want_To_Remove_Cards);
    if(number>=2){
        deleting_Next_Dealer_Discards_Cards(which_Want_To_Remove_Cards);
        creating_A_Element_For_Next_Dealer_Discards(which_Want_To_Remove_Cards);
        //setting_A_Dealer_Dicards_Cards(which_Want_To_Remove_Cards);
    }
    setting_A_Dealer_Dicards_Cards(which_Want_To_Remove_Cards);
    deleting_Dealer_Cards_Div();
    //deleting_dealer_cards()
}

function deleting_Dealer_Cards_Div() {
    const remove = document.getElementById("dealer-cards");
    remove.remove();
    console.log("A New Player One Array : "+playerOne);
    console.log("Successfully Removed");
    creating_A_Div_Element_For_Dealer_Cards();
}

function creating_A_Div_Element_For_Dealer_Cards() {
    const create_Div = document.createElement("div");
    create_Div.setAttribute("id","dealer-cards");
    const tragetting_Div = document.getElementById("dealer-div");
    tragetting_Div.append(create_Div);
    console.log(playerOne);
    console.log("Successfully Added");
    setting_A_Cards_For_New_Div_Element();
}

function setting_A_Cards_For_New_Div_Element() {
    for(let i=0;i<playerOne.length;i++){
        const cardImg = document.createElement("img");
        cardImg.src = "./cards-back/"+playerOne[i]+".png";
        const adding_Images = document.getElementById("dealer-cards");
        adding_Images.append(cardImg);
    }
    console.log("Successfully Images Setted");
}

function deleting_Next_Dealer_Discards_Cards(which_Want_To_Remove_Cards_Two) {
    const which_Want_To_Remove_Cards_three = which_Want_To_Remove_Cards_Two ;
    console.log("which_Want_To_Remove_Cards_Three : "+which_Want_To_Remove_Cards_Two);
    //console.log(which_Want_To_Remove_Cards_Two);
    const removing_Dealer_Discards_cards = document.getElementById("dealer-discard-cards");
    removing_Dealer_Discards_cards.remove();
    console.log("Successfully Dealer Discard Deleted");
    //creating_A_Element_For_Next_Dealer_Discards(which_Want_To_Remove_Cards_three)
}

function creating_A_Element_For_Next_Dealer_Discards(which_Want_To_Remove_Cards_Four) {
    //console.log("which_Want_To_Remove_Cards_Five : "+which_Want_To_Remove_Cards_Four);
    const which_Want_To_Remove_Cards_Five = which_Want_To_Remove_Cards_Four;
    const create_Div_For_Dealer_Discards_Cards = document.createElement("div");
    create_Div_For_Dealer_Discards_Cards.setAttribute("id","dealer-discard-cards");
    const tragetting_Div = document.getElementById("dealer-discard-div");
    tragetting_Div.append(create_Div_For_Dealer_Discards_Cards);
    console.log("Successfully Dealer Discards Div Will Be Added");
    //setting_A_Dealer_Dicards_Cards(which_Want_To_Remove_Cards_Five)
}

function setting_A_Dealer_Dicards_Cards(which_Want_To_Remove_Cards_Six) {
    console.log(which_Want_To_Remove_Cards_Six);
    //console.log("which_Want_To_Remove_Cards_Six : "+which_Want_To_Remove_Cards_Seven);
    const which_Want_To_Remove_Cards_Seven = which_Want_To_Remove_Cards_Six;
    if(changing_Dealer_Discards_Cards===true){
        //var new_Variable = playerOne[playerOne.length/2];
        console.log("New_Variable : "+new_Variable);
        let discard_card_Img = document.createElement("img");
        discard_card_Img.src = "./cards/"+new_Variable+".png";
        document.getElementById("dealer-discard-cards").append(discard_card_Img);
    }
    else{
        let discard_card_Img = document.createElement("img");
        discard_card_Img.src = "./cards/"+which_Want_To_Remove_Cards_Seven+".png";
        document.getElementById("dealer-discard-cards").append(discard_card_Img);
    }
    //let discard_card_Img = document.createElement("img");
    //discard_card_Img.src = "./cards/"+which_Want_To_Remove_Cards_Seven+".png";
    //document.getElementById("dealer-discard-cards").append(discard_card_Img);
    console.log("Discard Images Successfully Setted");
    console.log("which_Want_To_Remove_Cards_Seven : "+which_Want_To_Remove_Cards_Seven[2]);
    setting_Dealer_Discard_Cards_Boolean = true;
    if(checking_Your_Discard!==which_Want_To_Remove_Cards_Seven[2]){
        console.log("Function Called");
        if(setting_Boolean!==true){
            checking_New_Your_Discards(which_Want_To_Remove_Cards_Seven);
        }
    }
    
}

function checking_New_Your_Discards(which_Want_To_Remove_Cards_Eight) {
    console.log("which_Want_To_Remove_Cards_Eight[2] : "+which_Want_To_Remove_Cards_Eight[2]);
    if(checking_Your_Discard!==which_Want_To_Remove_Cards_Eight[2]){
        console.log("-----------------------------------------------------------------------------------------------");
        console.log("Not Same");
        console.log("checking_Your_Discard : "+checking_Your_Discard);
        console.log("checking_Dealer_Discards_Cards : "+which_Want_To_Remove_Cards_Eight[2]);
        console.log("which_Want_To_Remove_Cards_Eight : "+which_Want_To_Remove_Cards_Eight);
        console.log("player_Two_Remove_Card : "+player_Two_Remove_Card);
        console.log("Player Two Array Normal Re : "+playerTwo);
       //playerTwo.push(which_Want_To_Remove_Cards_Eight,player_Two_Remove_Card);
        var card_1 = which_Want_To_Remove_Cards_Eight;
        var card_2 = player_Two_Remove_Card;
        playerTwo.push(card_2);
        playerTwo.push(card_1);
        delete_Images_Div ();
        create_New_Div_Element_For_Your_Cards();
        for(let i=0;i<playerTwo.length;i++){
            let cardImg = document.createElement("img");
            cardImg.src = "./cards/"+playerTwo[i]+".png";
            document.getElementById("your-cards").append(cardImg);
        }
        window.setTimeout(setTimeout_Function_Two,777);
            function setTimeout_Function_Two() {
                deleting_Your_Discard_Cards();
                deleting_Next_Dealer_Discards_Cards_Two();
            }
        create_New_Div_Element_For_Your_Discard_Cards();
        creating_A_Element_For_Next_Dealer_Discards_Two();
        console.log("Player Two Array Re-Arranged : "+playerTwo)
        console.log("-----------------------------------------------------------------------------------------------");
    }
}

function checking_New_Dealer_Discards() {
    console.log("Calling checking_New_Dealer_Discards() +++++");
    if(dealer_Discard_Checking[2]!==checking_Your_Discard){
        whose_Turn_Number++;
        console.log("Whose Turn Number : "+whose_Turn_Number);
        console.log("#######");
        console.log("Checking New Dealer Discards");
        console.log("-----------"+dealer_Discard_Checking);
        console.log("-----------"+checking_Your_Discard);
        console.log("player_Two_Remove_Card : "+player_Two_Remove_Card);
        console.log("Player_One_Array : "+playerOne);
        playerOne.push(dealer_Discard_Checking,player_Two_Remove_Card);
        deleting_New_Dealer_Cards();
        creating_A_Div_Element_For_Dealer_Cards_Two();
        for(let i=0;i<playerOne.length;i++){
            const cardImg = document.createElement("img");
            cardImg.src = "./cards-back/"+playerOne[i]+".png";
            const adding_Images = document.getElementById("dealer-cards");
            adding_Images.append(cardImg);
            changing_Dealer_Discards_Cards = true;
        }
        console.log("Setting_Dealer_Discard_Cards_Boolean : "+setting_Dealer_Discard_Cards_Boolean);
        if(setting_Dealer_Discard_Cards_Boolean!==true){
            deleting_Your_Discard_Cards();
            deleting_Next_Dealer_Discards_Cards_Two();
        }
        //deleting_Your_Discard_Cards();
        //deleting_Next_Dealer_Discards_Cards_Two();
         create_New_Div_Element_For_Your_Discard_Cards();
         creating_A_Element_For_Next_Dealer_Discards_Two();
        console.log("Player_One_Re-Arranged_Array : "+playerOne);
        console.log("#######");
        setting_Boolean = true;
    }
}

function deleting_New_Dealer_Cards() {
    const remove = document.getElementById("dealer-cards");
    remove.remove();
    //creating_New_Div_Element_For_Dealer_cards();
}

function deleting_Next_Dealer_Discards_Cards_Two() {
    const removing_Dealer_Discards_cards = document.getElementById("dealer-discard-cards");
    removing_Dealer_Discards_cards.remove();
}

function creating_A_Element_For_Next_Dealer_Discards_Two() {
    const create_Div_For_Dealer_Discards_Cards = document.createElement("div");
    create_Div_For_Dealer_Discards_Cards.setAttribute("id","dealer-discard-cards");
    const tragetting_Div = document.getElementById("dealer-discard-div");
    tragetting_Div.append(create_Div_For_Dealer_Discards_Cards);
}

function creating_A_Div_Element_For_Dealer_Cards_Two(){
    const create_Div = document.createElement("div");
    create_Div.setAttribute("id","dealer-cards");
    const tragetting_Div = document.getElementById("dealer-div");
    tragetting_Div.append(create_Div);
}

function new_Changing_Your_Discard_Function() {
    console.log("Calling new_Changing_Your_Discard_Function() ++++");
    console.log("||||||||||||||||||||||||||||||||||");
    console.log(dealer_Discard_Checking);
    console.log(player_Two_Remove_Card);
        // if(dealer_Discard_Checking[0]>player_Two_Remove_Card[0]){
        //     console.log("HI");
        // }
    console.log("||||||||||||||||||||||||||||||||||||||||||||||");
    playerTwo.push(dealer_Discard_Checking,player_Two_Remove_Card);

    delete_Images_Div ();
    create_New_Div_Element_For_Your_Cards();
    for(let i=0;i<playerTwo.length;i++){
        let cardImg = document.createElement("img");
        cardImg.src = "./cards/"+playerTwo[i]+".png";
        document.getElementById("your-cards").append(cardImg);
    }
    deleting_Your_Discard_Cards();
    create_New_Div_Element_For_Your_Discard_Cards();
    // window.setTimeout(setTimeout_Function_Two,777);
    //     function setTimeout_Function_Two() {
    //         deleting_Your_Discard_Cards();
    //         deleting_Next_Dealer_Discards_Cards_Two();
    //     }
    //     create_New_Div_Element_For_Your_Discard_Cards();
    //     creating_A_Element_For_Next_Dealer_Discards_Two();
}

function removing_Dealer_Cards_By_Its_Own_Way() {
    console.log("playerOne = "+playerOne);
    for(let i=0;i<playerOne.length;i++){
        let new_Player_One_Vale = playerOne[i];
        if(new_Player_One_Vale[0]>player_One_Big_Number){
            player_One_Big_Number = new_Player_One_Vale;
        }
    }
    console.log("DDDDDDDDDDDDDDDDDDDDDDDDD");
    console.log(player_One_Big_Number);
    console.log(dealer_Discard_Checking);
    console.log(player_Two_Remove_Card);
    console.log("DDDDDDDDDDDDDDDDDDDDDDDDD");
    deleting_Your_Discard_Cards();
    create_New_Div_Element_For_Your_Discard_Cards();
    let discard_card_Img = document.createElement("img");
    discard_card_Img.src = "./cards/"+player_One_Big_Number+".png";
    document.getElementById("dealer-discard-cards").append(discard_card_Img);
}
console.log("++++++++++"+dealer_Discard_Checking);
console.log("++++++++++"+player_Two_Remove_Card);