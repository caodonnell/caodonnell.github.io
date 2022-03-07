function Square(name, pricetext, color, price, groupNumber, baserent, grouprent, rent1, rent2, rent3, rent4, rent5, roundval=Math.pow(10,1)) {
	this.name = name;
    if (null == pricetext) {
	    priceround = Math.round(price/roundval)*roundval;
	    this.pricetext = "$" + priceround.toString();
	} else {
	    this.pricetext = pricetext;
	}
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
        this.price = (Math.round(price/roundval)*roundval || 0);
        this.baserent = (Math.round(baserent/roundval)*roundval || 0);
        this.grouprent = (Math.round(grouprent/roundval)*roundval || 0);
	this.rent1 = (Math.round(rent1/roundval)*roundval || 0);
	this.rent2 = (Math.round(rent2/roundval)*roundval || 0);
	this.rent3 = (Math.round(rent3/roundval)*roundval || 0);
	this.rent4 = (Math.round(rent4/roundval)*roundval || 0);
	this.rent5 = (Math.round(rent5/roundval)*roundval || 0);
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 250;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 500;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 800;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 1000;
	} else {
		this.houseprice = 0;
	}
}

//function isEmpty(str) {
//    return (null === str);
//}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
    //document.getElementById("cell1name").textContent = "Mediter-ranean Avenue";

    //game spaces
    document.getElementById("cell0name").style.backgroundColor = "#FFFFFF";
    document.getElementById("cell2name").style.backgroundColor = "#FFFFFF";
    document.getElementById("cell4name").style.backgroundColor = "#FFFFFF";
    document.getElementById("cell7name").style.backgroundColor = "#FFFFFF";
    document.getElementById("cell10name").style.backgroundColor = "#FFFFFF";
    document.getElementById("cell17name").style.backgroundColor = "#FFFFFF";
    document.getElementById("cell20name").style.backgroundColor = "#FFFFFF";
    document.getElementById("cell22name").style.backgroundColor = "#FFFFFF";
    document.getElementById("cell30name").style.backgroundColor = "#FFFFFF";
    document.getElementById("cell33name").style.backgroundColor = "#FFFFFF";
    document.getElementById("cell36name").style.backgroundColor = "#FFFFFF";
    document.getElementById("cell38name").style.backgroundColor = "#FFFFFF";

    //group 1: utilities
    document.getElementById("cell12name").style.backgroundColor = "#BCBCBC";
    document.getElementById("cell28name").style.backgroundColor = "#BCBCBC";
    
    //group 2: railroad
    document.getElementById("cell5name").style.backgroundColor = "#000000";
    document.getElementById("cell5name").style.color = "#FFFFFF";
    document.getElementById("cell15name").style.backgroundColor = "#000000";
    document.getElementById("cell15name").style.color = "#FFFFFF";
    document.getElementById("cell25name").style.backgroundColor = "#000000";
    document.getElementById("cell25name").style.color = "#FFFFFF";
    document.getElementById("cell35name").style.backgroundColor = "#000000";
    document.getElementById("cell35name").style.color = "#FFFFFF";
    
    //group 3: brown
    document.getElementById("cell1name").style.backgroundColor = "#8B4513";
    document.getElementById("cell1name").style.color = "#FFFFFF";
    document.getElementById("cell3name").style.backgroundColor = "#8B4513";
    document.getElementById("cell3name").style.color = "#FFFFFF";
     
    //group 4: sky blue
    document.getElementById("cell6name").style.backgroundColor = "#87CEEB"; 
    document.getElementById("cell8name").style.backgroundColor = "#87CEEB";
    document.getElementById("cell9name").style.backgroundColor = "#87CEEB";

    //group 5: pink
    document.getElementById("cell11name").style.backgroundColor = "#D393E3";
    document.getElementById("cell13name").style.backgroundColor = "#D393E3";
    document.getElementById("cell14name").style.backgroundColor = "#D393E3";

    //group 6: orange
    document.getElementById("cell16name").style.backgroundColor = "#FFA500";  
    document.getElementById("cell18name").style.backgroundColor = "#FFA500";
    document.getElementById("cell19name").style.backgroundColor = "#FFA500";

    //group 7: red
    document.getElementById("cell21name").style.backgroundColor = "#FF0000";
    document.getElementById("cell23name").style.backgroundColor = "#FF0000";
    document.getElementById("cell24name").style.backgroundColor = "#FF0000";
    
    //group 8: yellow
    document.getElementById("cell26name").style.backgroundColor = "#FFFF00";
    document.getElementById("cell27name").style.backgroundColor = "#FFFF00";
    document.getElementById("cell29name").style.backgroundColor = "#FFFF00";

    //group 9: green
    document.getElementById("cell31name").style.backgroundColor = "#008000";
    document.getElementById("cell31name").style.color = "#FFFFFF";
    document.getElementById("cell32name").style.backgroundColor = "#008000";
    document.getElementById("cell32name").style.color = "#FFFFFF";
    document.getElementById("cell34name").style.backgroundColor = "#008000";
    document.getElementById("cell34name").style.color = "#FFFFFF";
     
    //group 10: dark blue
    document.getElementById("cell37name").style.backgroundColor = "#0000FF";
    document.getElementById("cell37name").style.color = "#FFFFFF";
    document.getElementById("cell39name").style.backgroundColor = "#0000FF";
    document.getElementById("cell39name").style.color = "#FFFFFF";

    

	// Add images to enlarges.
	document.getElementById("enlarge5token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge15token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge12token").innerHTML += '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge28token").innerHTML += '<img src="images/workshop_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is owned rent is 40 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilities" are owned rent is 100 times amount shown on dice.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Rent<span style="float: right;">$250.</span><br />If 2 Railroads are owned<span style="float: right;">500.</span><br />If 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">1000.</span><br />If 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">2000.</span></div>';
}

function luxurytax() {
	addAlert(player[turn].name + " paid $200 for landing on Insurance Premiums.");
	player[turn].pay(200, 0);

	$("#landed").show().text("You landed on Insurance Premiums. Pay $200.");
}

function citytax() {
	addAlert(player[turn].name + " paid $500 for landing on Income Tax.");
	player[turn].pay(500, 0);

	$("#landed").show().text("You landed on Income Tax. Pay $500.");
}

var square = [];

square[0] = new Square("GO", "COLLECT $2000 BONUS AS YOU PASS.", "#FFFFFF");
square[1] = new Square("Virginia Tech", null,  "#8B4513", 747, 3, 726, 754, 793, 1586, 2379, 3172, 3965);
square[2] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[3] = new Square("Illinois State University", null,  "#8B4513", 853, 3, 773, 896, 997, 1994, 2991, 3987, 9968);
square[4] = new Square("Income Tax", "Pay $500", "#FFFFFF");
square[5] = new Square("Pre-service Teaching", null, "#000000", 2000, 1);
square[6] = new Square("Western Michigan Univ", null, "#87CEEB", 881, 4, 806, 999, 999, 1997, 2996, 3994, 4993);
square[7] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[8] = new Square("Michigan State Univ", null, "#87CEEB", 909, 4, 779, 938, 956, 1913, 2869, 3826, 6695);
square[9] = new Square("SUNY Buffalo State", null, "#87CEEB", 920, 4, 724, 905, 1007, 2015, 3022, 4030, 10074);
square[10] = new Square("Just Visiting", "", "#FFFFFF");
square[11] = new Square("University of Cincinnati", null, "#FF0080", 916, 5, 928, 1118, 1213, 2427, 3640, 4854, 7280);
square[12] = new Square("Classroom Supplies", null, "#989898", 1501, 2);
square[13] = new Square("Brigham Young Univ", null, "#FF0080", 943, 5, 875, 964, 1053, 2106, 3159, 4212, 22111);
square[14] = new Square("University of Central FL", null, "#FF0080", 1050, 5, 853, 853, 910, 1820, 2730, 3640, 5461);
square[15] = new Square("In-service Teaching", null, "#000000", 2000, 1);
square[16] = new Square("Texas State University", null, "#FFA500", 1114, 6, 1027, 1044, 1082, 2164, 3246, 4328, 5410);
square[17] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[18] = new Square("Georgia State Univ", null, "#FFA500", 1185, 6, 943, 1044, 1148, 2297, 3445, 4593, 6890);
square[19] = new Square("Middle TN State Univ", null, "#FFA500", 1197, 6, 835, 952, 1052, 2103, 3155, 4207, 5258);
square[20] = new Square("Free Parking", "", "#FFFFFF");
square[21] = new Square("Arizona State University", null, "#FF0000", 1251, 7, 922, 1006, 1056, 2113, 3169, 4225, 6338);
square[22] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[23] = new Square("Rowan", null, "#FF0000", 1260, 7, 973, 990, 1070, 2139, 3209, 4279, 6418);
square[24] = new Square("University of Minnesota", null, "#FF0000", 1308, 7, 855, 942, 1073, 2146, 3219, 4292, 8584);
square[25] = new Square("Physics Teacher Educ.", null, "#000000", 2000, 1);
square[26] = new Square("Univ of  WI - River Falls", null, "#FFFF00", 1308, 8, 711, 727, 773, 1546, 2318, 3091, 3864);
square[27] = new Square("Towson University", null, "#FFFF00", 1384, 8, 1018, 1078, 1114, 2228, 3342, 4456, 5570);
square[28] = new Square("PD Workshops", null, "#989898", 1500, 2);
square[29] = new Square("UT Austin", null, "#FFFF00", 1434, 8, 984, 1011, 1028, 2055, 3083, 4110, 5138);
square[30] = new Square("Go to Re-Certify", "Go directly to Re-Certification. Do not pass GO. Do not collect $2000.", "#FFFFFF");
square[31] = new Square("Boston University", null, "#008000", 1547, 9, 892, 1070, 1124, 2247, 3371, 4494, 6741);
square[32] = new Square("CU Boulder", null, "#008000", 1605, 9, 832, 984, 1091, 2183, 3274, 4366, 6549);
square[33] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[34] = new Square("Rutgers", null, "#008000", 1753, 9, 1045, 1083, 1139, 2279, 3418, 4558, 11395);
square[35] = new Square("PhysTEC Community", null, "#000000", 2000, 1);
square[36] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[37] = new Square("CSU Long Beach", null, "#0000FF", 2058, 10, 1178, 1232, 1357, 2713, 4070, 5427, 6783);
square[38] = new Square("Insurance Premiums", "Pay $200", "#FFFFFF");
square[39] = new Square("City College of New York", null, "#0000FF", 2053, 10, 1091, 1152, 1287, 2574, 3861, 5149, 6436);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card(" GET OUT OF RE-CERTIFICATION FREE. This card may be kept until needed or sold.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("You have won second prize in a physics demo contest. Collect $1000.", function() { addamount(1000, 'Community Chest');});
communityChestCards[2] = new Card("From sale of lesson plans, you get $200.", function() { addamount(200, 'Community Chest');});
communityChestCards[3] = new Card("You are fully vested in your pension! Collect $500.", function() { addamount(500, 'Community Chest');});
communityChestCards[4] = new Card("Income tax refund. Collect $200.", function() { addamount(200, 'Community Chest');});
communityChestCards[5] = new Card("You get National Board Certification! Receive $3000.", function() { addamount(3000, 'Community Chest');});
communityChestCards[6] = new Card("You become the advisor for the STEM Club. Receive $1500.", function() { addamount(1500, 'Community Chest');});
communityChestCards[7] = new Card("You become a football coach! Earn $2,000 in duty pay.", function() { addamount(2000, 'Community Chest');});
communityChestCards[8] = new Card("Pay textbook fees of $300.", function() { subtractamount(300, 'Community Chest');});
communityChestCards[9] = new Card("Bank error in your favor. Collect $500.", function() { addamount(500, 'Community Chest');});
communityChestCards[10] = new Card("Pay school fees of $200.", function() { subtractamount(200, 'Community Chest');});
communityChestCards[11] = new Card("You need to buy more classroom supplies. Pay $100.", function() { subtractamount(100, 'Community Chest');});
communityChestCards[12] = new Card("It is your birthday! Collect $100 from every player.", function() { collectfromeachplayer(100, 'Community Chest');});
communityChestCards[13] = new Card("Advance to \"GO\" (Collect $2000).", function() { advance(0);});
communityChestCards[14] = new Card("You are assessed for additional certification fees. $200 per Diploma. $500 per Cohort.", function() { streetrepairs(200, 300);});
communityChestCards[15] = new Card("Go directly to Re-certification. Do not pass \"GO\". Do not collect $2000.", function() { gotojail();});


chanceCards[0] = new Card("GET OUT OF RE-CERTIFICATION FREE. This card may be kept until needed or traded.", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Pay additional certification fees. For each Diploma pay $150. For each Cohort $300.", function() { streetrepairs(150, 300);});
chanceCards[2] = new Card("You lose a class session this semester. Pay $500.", function() { subtractamount(500, 'Chance');});
chanceCards[3] = new Card("You have been asked to share your classroom activities with your colleagues. Pay each player $200.", function() { payeachplayer(200, 'Chance');});
chanceCards[4] = new Card("Go back three spaces.", function() { gobackthreespaces();});
chanceCards[5] = new Card("ADVANCE TO THE NEAREST UTILITY (Classroom Supplies or PD Workshops). If UNOWNED, you may buy it from the Bank. If OWNED, throw dice and pay owner a total hundred times the amount thrown.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("You become the advisor for the Newspaper Club. Earn $500 in duty pay.", function() { addamount(500, 'Chance');});
chanceCards[7] = new Card("ADVANCE TO THE NEAREST RAILROAD (Pre-service Teaching, In-service Teaching, Physics Teacher Education, or PhysTEC Community). If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("You lose a class session this semester. Pay $500.", function() { subtractamount(500, 'Chance');});
chanceCards[9] = new Card("You connect with local pre-service teachers - advance to the Pre-Service Teaching space. If you pass \"GO\" collect $2000.", function() { advance(5);});
chanceCards[10] = new Card("ADVANCE to City College of New York.", function() { advance(39);});
chanceCards[11] = new Card("ADVANCE to University of Minnesota. If you pass \"GO\" collect $2000.", function() { advance(24);});
chanceCards[12] = new Card("Your insurance premiums are reduced this year! Collect $150.", function() { addamount(150, 'Chance');});
chanceCards[13] = new Card("ADVANCE TO THE NEAREST RAILROAD (Pre-service Teaching, In-service Teaching, Physics Teacher Education, or PhysTEC Community). If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("ADVANCE to University of Cincinnati. If you pass \"GO\" collect $2000.", function() { advance(11);});
chanceCards[15] = new Card("Go Directly to Re-certification. Do not pass \"GO\". Do not collect $2000.", function() { gotojail();});
