PennController.DebugOff() 
PennController.ResetPrefix(null);
PennController.Sequence( "welcome", "details", "trial", "trial2", "trialbunny", "trialbunny2", "introductionanimals", "experiment", "send" , "final" )
;
PennController( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p> Salutare tuturor! </p>")
    ,
    newText("<p> Salutare tuturor, vom juca un joc foarte distractiv împreună cu un vrăjitor, un pui de dragon, nişte umbre care aparţin unor animale şi sunete făcute de ele. (Fii atent şi la sunete deci.) </p>" ),
    newText("<p> Te rog introdu ID-ul tău, răspunde la nişte întrebări, iar apoi fă click pe butonul de mai jos pentru a începe experimentul.</p>")
    ,
    newTextInput("ID")
    .settings.log()
    .settings.lines(0)
        .print()
    ,
     newText("<p> Ce vârstă ai? </p>"),
    newTextInput("Age")
	.settings.log()
        .settings.lines(0)
        .print()
	       ,
	  newText("<p> Ce sex ai? (M/ F/ Altul) </p>"),
	       newTextInput ("Gender")
 .settings.log()
    .settings.lines(0)
        .print()
	       , 
	        newText("<p> Cu ce te ocupi?</p>"),
	    newTextInput ("Profession")  
	 .settings.log()
    .settings.lines(0)
        .print()
	       ,
	       newText ("<p>Pentru a trece la pagina următoare pe parcursul jocului, foloseşte bara de spaţiu (space bar). </p>")
	       .print()
	       ,
	       
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .settings.global()
        .set( getTextInput("ID")))
	      
.log( "ID" , getVar("ID"));
PennController("welcome" ,
	    defaultText
	        .print()
	    ,
	    newText ("<p> A fost odată ca niciodată, într-un ţinut îndepărtat, un vrăjitor foarte talentat pe nume Merlin, căruia îi plăcea foarte mult să se joace cu umbre şi să îi facă pe ceilalţi să ghicească ale cui sunt. </p>")
	    ,
	                             
	     newImage ("wizardanddragon.png")
               .print ()
	       ,
	       newKey(" ")
        .wait());
PennController("details" ,
	    defaultText
	        .print()
	    
	       ,
newText ("<p> Acum Merlin joacă jocul umbrelor cu un pui de dragon foarte drăguţ care trebuie să ghicească ale căror animale sunt umbrele pe care le are în faţa sa.</p>")
	,
newText("<p> Imaginile vor arăta umbrele, dar şi toate animalele din joc şi animalele care se află atunci în faţa cortinei. </p>"),
newText ("<p> Dacă nu sunt deloc animale în faţa cortinei, va fi în loc o linie. </p>")
	       , newText ("<p> De exemplu, în imaginea de mai jos, sunt patru perechi de pisici şi niciuna din ele nu este în faţa cortinei.</p>"),
		newText ("<p> Toate pisicile s-au dus în spatele cortinei, dar putem vedea numai umbrele a patru pisici. </p>"),
   
	  newImage ("catshadowscenario3", "catshadowscenario3.png")
	.print (),
	 newKey(" ")
        .wait())

;
PennController("details" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> Magicianul pune o întrebare legată de umbre, iar puiul de dragon trebuie să dea răspunsul cel mai potrivit pentru acea întrebare. </p>")
	       ,
   newText ("<p> Când puiul de dragon oferă cel mai bun răspuns, trebuie să-l răsplăteşti cu un măr mare. </p>"), 
   newText ("<p> Atunci când puiul de dragon nu oferă cel mai bun răspuns, îi dai doar un măr mic. </p>")
,
  newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;	    
PennController("trial" ,
	    defaultText
	        .print()
	    
	       ,
            newText ("<p> Hai să vedem cum te descurci. Hai să facem cunoştinţă cu nişte iepuraşi foarte drăguţi. </p> "),
	       newText("<p> Două perechi de iepuraşi roz. </p>"),
	       
	       newImage ("foursmallpinkbunnies", "foursmallpinkbunnies.png")
	       .print ()
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newText("<p> Şi două perechi de iepuraşi verzi. </p>"),
	       
	       newImage ("foursmallgreenbunnies", "foursmallgreenbunnies.png")
	       .print ()
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
)
;
PennController("trial2" ,
	    defaultText
	        .print()
	    
	       ,
	       newText 
	       ("<p> Toţi iepuraşii se duc în spatele cortinei. </p>")
	       ,
	       newText
	       ("<p> Apoi iepuraşii roz revin în faţa cortinei. </p>")
	       ,
	       newText ("<p> Puiul de dragon vede următoarele umbre şi trebuie să răspundă la o întrebare despre ele. </p>"),
	      
	       newImage ("bunnyshadowscenario", "bunnyshadowscenario.png")
	       .print ( )
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newText ("<p> Magicianul întreabǎ:'Este posibil sau sigur că sunt iepuraşi roz ȋn spatele cortinei?'</p>"),
	       newText ("<p> Puiul de dragon rǎspunde: 'Sigur că iepuraşii sunt roz'. </p>")
	       ,
	       newText ("<p> Puiul de dragon nu a oferit cel mai bun rǎspuns. Umbrele nu aparţin iepuraşilor roz, ci iepuraşilor verzi. </p>"),
	       newText ("<p> Din acest motiv, îi vei da puiului de dragon un măr mic, nu un măr mare. </p>"),
	       newText ("<p> Pentru a răsplăti puiul de dragon, fă click pe mărul care este răsplata sa, în cazul acesta, mărul mic. </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController("trialbunny" ,
	    defaultText
	        .print()
	    
	       ,
	        newText 
	       ("<p> Hai să vedem cum te descurci pe cont propriu. Puiul de dragon vede următoarele umbre şi trebuie să dea un rǎspuns la o întrebare legatǎ de ele .</p>")
	       ,
	       newText  ("<p> Pentru a răsplăti dragonul, fă pur şi simplu click pe mărul dorit.</p>")
		,
	       newImage ("bunnyshadowscenario", "bunnyshadowscenario.png")
	       .print ( )
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newText ("<p> Magicianul întreabǎ:'Este posibil sau sigur că sunt iepuraşi verzi ȋn spatele cortinei?'</p>"),
	       newText ("<p> Puiul de dragon: 'Sigur că iepuraşii sunt verzi.' </p>")
	       ,
	       newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("trialbunny2" ,
	    defaultText
	        .print()
	    
	       ,
	        newImage ("bunnyshadowscenario", "bunnyshadowscenario.png")
	       .print ( )
	       ,
	       newText ("<p> Magicianul întreabǎ:'Este posibil sau sigur că sunt iepuraşi verzi ȋn spatele cortinei?'</p>"),
	       newText ("<p> Puiul de dragon rǎspunde: 'Poate că iepuraşii sunt verzi.' </p>")
	       ,
	       newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("introductionanimals" ,
	    defaultText
	        .print()
	    ,
	    newText ("<p> Hai acum să facem cunoştinţă cu celelalte animale din spectacol. </p>"),
	       
	     newText ("<p> Toate animalele sunt foarte îndrăgostite, aşa că nu vei vedea niciodat un animal de unul singur. </p>"),
	       
	      newText ("<p> Vei vedea doar perechi de animale, cupluri, unde, adesea,  animalele îndrăgostite se privesc cu dragoste. </p>")
	       ,
	       
	       newText ("<p> Vei vedea perechi de câini. </p>")
	      
	    ,
	                  
	     newImage (" alldogs", "alldogs.png")
               .print ()
	       ,
	       
	       newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	      )
;

PennController("introductionanimals" ,
	    defaultText
	        .print()
	    ,
	   
	       newText ("<p> Perechi de broaşte. </p>")
	    ,
	                  
	     newImage ("allfrogs", "allfrogs.png")
               .print ()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       )
;       
PennController("introductionanimals" ,
	    defaultText
	        .print(),
	       newText ("<p> Perechi de pisici. </p>")
	    ,
	                  
	     newImage ("allcats","allcats.png")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController("introductionanimals" ,
	    defaultText
	        .print(),
	       newText ("<p> Şi perechi de vaci. </p>")
	    ,
	                  
	     newImage ("allcows", "allcows.png")
               .print ()
	       ,
	       newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon despre umbre.</p>")
		,
		newImage ("dogshadowscenario1","dogshadowscenario1.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,
               newText ("<p> Magicianul întreabǎ:'Este posibil sau sigur că sunt câini albaştri în spatele cortinei?'</p>")
		,
		newText ("<p> Puiul de dragon rǎspunde:'Sigur că toţi câinii sunt albaştri.'</p>")
	       ,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowscenario1","dogshadowscenario1.png")
               .print ()
		,
		  newText ("<p> Magicianul întreabǎ:'Este posibil sau sigur că sunt câini albaştri în spatele cortinei?'</p>")
		,
		newText ("<p> Puiul de dragon rǎspunde:'Sigur că unii câini sunt albaştri'. </p>")
	       ,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai acum să vedem ale cui sunt umbrele. Pam-pam! Sunt câinii albaştri! </p>")
	         ,         
	     newImage ("fourbluedogscurtainsmall.png")
               .print ()
	       ,
	       	newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
)
;
		


PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p>  Hai să vedem ce spune puiul de dragon despre umbre.</p>"),
   newText ("<p> Avem două perechi de broaşte mov şi two perechi de broaşte roşii. <p>")
	       ,
	       newImage("fourpurplefrogssmall", "fourpurplefrogssmall.png")
        .print()
    ,
    newImage("fourredfrogssmall", "fourredfrogssmall.png")
        .print()
    ,
 newText ("<p> Toate broaştele s-au dus acum în spatele cortinei. <p>")
,
	 newKey(" ")
        .wait()
)
;

PennController("experiment" ,
	    defaultText
	        .print()
	       ,
   newText ("<p> Puiul de dragon trebuie să rǎspundǎ la o întrebare despre umbre. </p>")
	       ,
   newText ("<p> Când puiul de dragon oferă cel mai bun rǎspuns, trebuie să-l răsplăteşti cu un măr mare. </p>"), 
   newText ("<p> Atunci când puiul de dragon nu oferă cel mai bun rǎspuns, îi dai doar un măr mic. </p>")
	       ,
  newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;		
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon despre umbre. </p>")
		,
		newImage ("frogshadowscenario3","frogshadowscenario3.png")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,
		newText ("<p> Magicianul întreabǎ:'Este posibil sau sigur că sunt broaşte roşii ȋn spatele cortinei?'</p>"),

		newText ("<p> Puiul de dragon rǎspunde:'Sigur că toate broaştele sunt roşii.'</p>")
	       ,
		newText ("<p> Cum vei răsplati puiul de dragon?</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowscenario3","frogshadowscenario3.png")
               .print ()
		,
	        newText ("<p> Magicianul întreabǎ:'Este posibil sau sigur că sunt broaşte mov ȋn spatele cortinei?'</p>"), 
		newText ("<p> Puiul de dragon rǎspunde:'Poate că unele broaşte sunt mov.' </p>")
	       ,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       
	        newText ("<p> Uite, o pereche de broaşte mov şi o pereche de broaşte roşii au venit în faţa cortinei. </p>")
	       ,
	       newText ("<p> Acum în faţa cortinei sunt patru broaşte: două broaşte mov şi două broaşte roşii, dar umbrele sunt încă acolo, în lumina reflectoarelor. </p>")
	       ,
	    
      newImage ("frogshadowscenario4", "frogshadowscenario4.png")
         .print()
    ,
	       	newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )

;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon despre umbre.</p>")
		,
		newImage ("frogshadowscenario4","frogshadowscenario4.png")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,
		newText ("<p> Magicianul întreabǎ: 'Este posibil sau sigur că sunt broaşte roşii ȋn spatele cortinei?' </p>"),

		newText ("<p> Puiul de dragon rǎspunde: 'Sigur că unele broaşte sunt roşii'. </p>")
	       ,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowscenario4","frogshadowscenario4.png")
               .print ()
		,
	        newText ("<p> Magicianul întreabǎ: 'Este posibil sau sigur că sunt broaşte mov ȋn spatele cortinei'? </p>"), 
		newText ("<p> Puiul de dragon rǎspunde: 'Poate că unele broaşte sunt mov.' </p>")
	       ,
		newText ("<p> Cum vei răsplăti puiul de dragon?</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai acum să vedem ale cui sunt umbrele. </p>"),
	       newText (" <p> Pam-pam! Umbrele sunt o pereche de broaşte mov (două broaşte mov) şi o pereche de broaşte roşii (două broaşte roşii)! </p>"),      
	       newImage ("twopurplefrogstworedfrogscurtainsmall.png")
               .print ()
	       ,
	       	newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
)
;
PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> Hai acum să trecem la grupul pisicilor. </p>"),
  newText ("<p> Avem două perechi de pisici albastre şi două perechi de pisici roz. <p>")
	       ,
	newImage("fourbluecatssmall", "fourbluecatssmall.png")
        .print()
,
	       
newImage("fourpinkcatssmall", "fourpinkcatssmall.png")
        .print()
    ,
 newText ("<p> Toate pisicile s-au dus acum în spatele cortinei. <p>")
,
	 newKey(" ")
        .wait()
)        
	    
;

PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> Puiul de dragon trebuie să dea un răspuns la o întrebare despre umbre. </p>") ,
   newText ("<p> Când puiul de dragon oferă cel mai bun răspuns, trebuie să-l răsplăteşti cu un măr mare. </p>"), 
   newText ("<p> Atunci când puiul de dragon nu oferă cel mai bun răspuns, îi dai doar un măr mic. </p>")
,
  newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;		
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon despre umbre.</p>")
		,
		newImage ("catshadowscenario3","catshadowscenario3.png")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
		,
                newText ("<p> Magicianul întreabǎ: 'Este posibil sau sigur că sunt pisici roz ȋn spatele cortinei'? </p>"),
		newText ("<p> Puiul de dragon rǎspunde: 'Sigur că toate pisicile sunt roz.' </p>")
	       ,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowscenario3","catshadowscenario3.png")
               .print (),
		newText ("<p> Magicianul întreabǎ: 'Este posibil sau sigur că sunt pisici albastre ȋn spatele cortinei?' </p>"),
		newText ("<p> Puiul de dragon rǎspunde: 'Poate că unele pisici sunt albastre.' </p>")
	       ,
		newText ("<p> Cum vei răsplati puiul de dragon?  </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Uite, o pereche de pisici roz şi o pereche de pisici albastre au venit în faţa cortinei. </p>")
	          ,    
	       newText ("<p> Acum în faţa cortinei sunt patru pisici: două pisici roz şi două pisici albastre, dar umbrele sunt încă acolo, în lumina reflectoarelor.! </p>")
			,
      newImage ("catshadowscenario4", "catshadowscenario4.png")
         .print()
    ,
	       	newAudio("catsounds", "catsounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )

;

PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon despre umbre. </p>")
		,
		newImage ("catshadowscenario4","catshadowscenario4.png")
               .print ()
		,
		newText ("<p> Magicianul întreabǎ: 'Este posibil sau sigur că sunt pisici roz ȋn spatele cortinei?' </p>"),

		newText ("<p> Puiul de dragon rǎspunde: 'Sigur că unele pisici sunt roz.' </p>")
	       ,
	        newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowscenario4","catshadowscenario4.png")
               .print ()
		,
		newText ("<p> Magicianul întreabǎ:'Este posibil sau sigur că sunt pisici albastre ȋn spatele cortinei?'</p>"),

		newText ("<p> Puiul de dragon rǎspunde:'Poate că unele pisici sunt albastre.' </p>")
	       ,
	        newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai acum să vedem ale cui sunt umbrele./p>")
	       ,
	       newText ("<p> Pam-pam! Umbrele sunt o pereche de pisici albastre (două pisici albastre) şi o pereche de pisici roz (două pisici roz)! </p>")
			,
      newImage ("twobluecatstwopinkcatscurtainsmall", "twobluecatstwopinkcatscurtainsmall.png")
         .print()
    ,
	       	newAudio("catsounds", "catsounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()  )

;

  PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p>  Hai să trecem mai departe la grupul vacilor. </p>"),
	       newText ("<p> Avem două perechi de vaci verzi şi două perechi de vaci galbene. <p>")
	       ,
	       newImage("fourgreencowssmall", "fourgreencowssmall.png")
        .print()
,
	       
newImage("fouryellowcowssmall", "fouryellowcowssmall.png")
        .print()
    ,
 newText ("<p> Toate vacile s-au dus acum în spatele cortinei. <p>")
,
	 newKey(" ")
        .wait()
)
;

PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> O pereche de vaci verzi a venit acum în faţa cortinei. <p>")  
	       ,
 newText ("<p> Puiul de dragon trebuie să dea un rǎspuns la o întrebare despre umbrele pe care le vede. </p>")
	       ,
   newText ("<p> Când puiul de dragon oferă cel mai bun rǎspuns, trebuie să-l răsplăteşti cu un măr mare. </p>"), 
   newText ("<p> Atunci când puiul de dragon nu oferă cel mai bun rǎspuns, îi dai doar un măr mic. </p>")
,
    
  newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;		
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon despre umbre.</p>")
		,
		newImage ("cowshadowscenario1","cowshadowscenario1.png")
               .print ()
		,
		newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
		,
                newText ("<p> Magicianul întreabǎ:'Este posibil sau sigur că sunt vaci galbene în spatele cortinei?'</p>")?'</p>"),
		newText ("<p> Puiul de dragon rǎspunde:'Sigur că toate vacile sunt galbene'.</p>")
	       ,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowscenario1","cowshadowscenario1.png")
               .print ()
		,
		newText ("<p> Magicianul întreabǎ:'Este posibil sau sigur că sunt vaci galbene în spatele cortinei?'</p>"),
	
		newText ("<p> Puiul de dragon rǎspunde: 'Sigur că unele vaci sunt galbene.' </p>")
	       ,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;  
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai să vedem acum ale cui sunt umbrele. Pam-pam! Sunt vacile galbene! </p>")
	         ,         
	     newImage ("fouryellowcowscurtainsmall.png")
               .print ()
	       ,
	       	newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
)
;

PennController("experiment" ,
	    defaultText
	        .print()
	       ,
	       newText ("<p> Toţi câinii s-au dus acum în spatele cortinei. <p>"),
   newText ("<p> Puiul de dragon trebuie să dea un rǎspuns la o întrebare despre umbre. </p>")
	       ,
   newText ("<p> Când puiul de dragon oferă cel mai bun rǎspuns, trebuie să-l răsplăteşti cu un măr mare. </p>"), 
   newText ("<p> Atunci când puiul de dragon nu oferă cel mai bun rǎspuns, îi dai doar un măr mic. </p>")
,
  newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;		
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon despre umbre.</p>")
		,
		newImage ("dogshadowscenario3","dogshadowscenario3.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,
		newText ("<p> Magicianul întreabǎ: 'E posibil sau sigur că sunt câini albaştri ȋn spatele cortinei?'</p>"),

		newText ("<p> Puiul de dragon rǎspunde:'Poate că unii câini sunt albaştri.'</p>")
	       ,
		newText ("<p> Cum vei răsplati puiul de dragon?  </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowscenario3","dogshadowscenario3.png")
               .print ()
		,
		newText ("<p> Magicianul întreabǎ:'Este posibil sau sigur că sunt câini galbeni ȋn spatele cortinei?'</p>"),
	
		newText ("<p> Puiul de dragon rǎspunde:'Sigur că toţi câinii sunt galbeni.'</p>")
	       ,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Uite, o pereche de câini galbeni şi o pereche de câini albaştri au venit în faţa cortinei. </p>")
	          ,    
	       newText ("<p> Acum în faţa cortinei sunt patru câini: doi câini galbeni şi doi câini albaştri, dar umbra este încă acolo, în lumina reflectoarelor! </p>")
			,
      newImage ("dogshadowscenario4", "dogshadowscenario4.png")
         .print()
    ,
	       	newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )

;


PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon despre umbre </p>")
		,
		newImage ("dogshadowscenario4","dogshadowscenario4.png")
               .print ()
		,
                newText ("<p> Magicianul întreabǎ:'Este posibil sau sigur că sunt câini albaştri ȋn spatele cortinei?'</p>"),
		newText ("<p> Puiul de dragon rǎspunde: 'Poate că unii câini sunt albaştri.'</p>"),
	        newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowscenario4","dogshadowscenario4.png")
               .print ()
		,
               newText ("<p> Magicianul întreabǎ:'Este posibil sau sigur că sunt câini galbeni ȋn spatele cortinei?'</p>"),
		newText ("<p> Puiul de dragon rǎspunde:'Sigur că unii câini sunt galbeni.' </p>")
	       ,
	        newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai acum să vedem ale cui sunt umbrele. </p>"),
	       newText ("<p> Pam-pam! Sunt o pereche de câini galbeni şi o pereche de câini albaştri!</p>"),
      newImage ("twoyellowdogstwobluedogscurtainsmall", "twoyellowdogstwobluedogscurtainsmall.png")
         .print()
    ,
	       	newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )

;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai să trecem acum la grupul broaştelor.  </p>")
	        ,
	        newText ("<p> Avem două perechi de broaşte mov şi două perechi de broaşte roşii. <p>")
	       ,
	       newImage("fourpurplefrogssmall", "fourpurplefrogssmall.png")
        .print()
    ,
    newImage("fourredfrogssmall", "fourredfrogssmall.png")
         .print()
           ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,
	       newText ("<p> Toate broaştele s-au dus acum în spatele cortinei. <p>")
	       ,
	       newKey(" ")
        .wait()
	       
	      )	
;

PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> O pereche de broaşte roşii a venit acum în faţa cortinei. <p>")  
	       ,
 newText ("<p> Puiul de dragon trebuie să răspundă magicianului ale cui crede că sunt umbrele. </p>")
	       ,
   newText ("<p> Când puiul de dragon oferă cel mai bun răspuns, trebuie să-l răsplăteşti cu un măr mare. </p>"), 
   newText ("<p> Atunci când puiul de dragon nu oferă cel mai bun răspuns, îi dai doar un măr mic. </p>")
,
  newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;		
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon despre umbre.</p>")
		,
		newImage ("frogshadowscenario1","frogshadowscenario1.png")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,
                newText ("<p> Magicianul întreabǎ: 'Este posibil sau sigur că sunt broaşte mov în spatele cortinei?'</p>"),
		newText ("<p> Puiul de dragon rǎspunde: 'Sigur că toate broaştele sunt mov.' </p>")
	       ,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowscenario1","frogshadowscenario1.png")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,
                newText ("<p> Magicianul întreabǎ: 'Sunt unele sau toate broaştele din spatele cortinei mov?'</p>"),
		newText ("<p> Puiul de dragon rǎspunde: 'Sigur că unele broaştele sunt mov.' </p>")
	       ,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai să vedem acum ale cui sunt umbrele. Pam-pam! Sunt broaştele mov. </p>")
	         ,         
	     newImage ("fourpurplefrogscurtainsmall.png")
               .print ()
	       ,
	       	newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
)
;
newText ("<p>  Hai acum să trecem la grupul pisicilor. </p>"),
	       newText ("<p> Avem două perechi de pisici albastre şi două perechi de pisici roz. <p>")
	       ,
	       newImage("fourbluecatssmall", "fourbluecatssmall.png")
        .print()
,
	       
newImage("fourpinkcatssmall", "fourpinkcatssmall.png")
        .print()
    ,
  newAudio("catsounds", "catsounds.mp3")
		.play()
		,
 newText ("<p> Toate pisicile s-au dus acum în spatele cortinei. <p>")
,
	 newKey(" ")
        .wait()
)
;
PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> O pereche de pisici roz a venit acum în faţa cortinei. <p>")  
	       ,
  newText ("<p> Puiul de dragon trebuie să descrie ale cui crede că sunt umbrele. </p>")
	       ,
   newText ("<p> Când puiul de dragon oferă cel mai bun răspuns, trebuie să-l răsplăteşti cu un măr mare. </p>"), 
   newText ("<p> Atunci când puiul de dragon nu oferă cel mai bun răspuns, îi dai doar un măr mic. </p>"),
	
  newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;		
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon despre umbre. </p>")
		,
		newImage ("catshadowscenario1","catshadowscenario1.png")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
		,
                newText ("<p> Magicianul întreabǎ:'Este posibil sau sigur că sunt broaşte mov în spatele cortinei?'</p>"),
		newText ("<p> Puiul de dragon rǎspunde:'Sigur că toate pisicile sunt albastre.' </p>")
	       ,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowscenario1","catshadowscenario1.png")
               .print ()
		,
	
	        newText ("<p> Magicianul întreabǎ: 'Este posibile sau sigur că sunt pisici albastre în spatele cortinei??'</p>"),
		newText ("<p> Puiul de dragon rǎspunde:'Sigur că unele pisici sunt albastre.' </p>")
	       ,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai acum să vedem ale cui sunt umbrele. Pam-pam! Umbrele sunt pisicile albastre! </p>")
	         ,         
	     newImage ("fourbluecatscurtainsmall.png")
               .print ()
	       ,
	       	newAudio("catsounds", "catsounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
)
;

PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> Hai să trecem mai departe la grupul vacilor. </p>"),
  newText ("<p> Avem două perechi de vaci verzi şi două perechi de vaci galbene. <p>")
	       ,
	newImage("fourgreencowssmall", "fourgreencowssmall.png")
        .print()
,
	       
newImage("fouryellowcowssmall", "fouryellowcowssmall.png")
        .print()
    ,
 newText ("<p> Toate vacile s-au dus acum în spatele cortinei. <p>")
,
	 newKey(" ")
        .wait()
)        
	    
;

PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> Puiul de dragon trebuie să dea un răspuns la o întrebare despre umbre. </p>")
	       ,
   newText ("<p> Când puiul de dragon oferă cel mai bun răspuns, trebuie să-l răsplăteşti cu un măr mare. </p>"), 
   newText ("<p> Atunci când puiul de dragon nu oferă cel mai bun răspuns, îi dai doar un măr mic. </p>")
,
  newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;		
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon despre umbre.</p>")
		,
		newImage ("cowshadowscenario3","cowshadowscenario3.png")
               .print ()
		,
		newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
		,
		newText ("<p> Magicianul întreabǎ:'Este posibil sau sigur că sunt vaci galbene ȋn spatele cortinei?'</p>"),

		newText ("<p> Puiul de dragon rǎspunde: 'Poate că unele vaci sunt galbene.' </p>")
	       ,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowscenario3","cowshadowscenario3.png")
               .print ()
		,
	        newText ("<p> Magicianul întreabǎ:'Este posibil sau sigur că sunt vaci verzi ȋn spatele cortinei?'</p>"),
		newText ("<p> Puiul de dragon rǎspunde:'Sigur că toate vacile sunt verzi.'</p>")
	       ,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Uite, o pereche de vaci galbene şi o pereche de vaci verzi au venit în faţa cortinei. </p>")
	          ,    
	       newText ("<p> Acum în faţa cortinei sunt patru vaci: două vaci galbene şi două vaci verzi, dar umbrele sunt încă acolo, în lumina reflectoarelor! </p>")
			,
      newImage ("cowshadowscenario4", "cowshadowscenario4.png")
         .print()
    ,
	       	newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )

;


PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon despre umbre. </p>")
		,
		newImage ("cowshadowscenario4","cowshadowscenario4.png")
               .print ()
		,
                newText ("<p> Magicianul întreabǎ:'Este posibil sau sigur că sunt vaci galbene ȋn spatele cortinei?'</p>"),
		newText ("<p> Puiul de dragon rǎspunde:'Poate că unele vaci sunt galbene.'</p>")
	       ,
	        newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowscenario4","cowshadowscenario4.png")
               .print ()
		,
		newText ("<p> Magicianul întreabǎ:'E posibil sau sigur că sunt vaci verzi ȋn spatele cortinei?'</p>"),

		newText ("<p> Puiul de dragon rǎspunde:'Sigur că unele vaci sunt verzi.'</p>")
	       ,
	        newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai acum să vedem ale cui sunt umbrele! </p>")
	       ,
	       newText ("<p> Umbrele sunt o pereche de vaci verzi şi o pereche de vaci galbene! </p>")
			,
      newImage ("twogreencowstwoyellowcowscurtainsmall", "twogreencowstwoyellowcowscurtainsmall.png")
         .print()
    ,
	       	newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )

;
PennController.SendResults( "send" );

PennController( "final" ,
	       newText ("<p> Mulţumesc pentru participare! </p>")
	       .print()
	       ,
	 newText("<p> Puiul de dragon îţi mulţumeşte pentru mere şi la fel şi vrăjitorul! Pa-pa! </p>")
        .print(),
    newButton("void")
        .wait()
	       )
;
  
