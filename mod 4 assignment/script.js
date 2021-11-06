var names=new Array();
names[0]="rahul";
names[1]="John";
names[2]="Jen";
names[3]="jason";
names[4]="rohit";
names[5]="virat";
names[6]="jasprit";
names[7]="rishab";
names[8]="laura";
names[9]="jadeja";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}