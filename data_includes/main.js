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
        .print()
    ,
     newText("<p> Ce vârstă ai? </p>"),
    newTextInput("Age")
        .print()
	       ,
	  newText("<p> Ce sex ai? (M/ F/ Altul) </p>"),
	       newTextInput ("Gender")
        .print()
	       , 
	        newText("<p> Cu ce te ocupi?</p>"),
	    newTextInput ("Profession")  
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
	      
.log( "ID" , getVar("ID") );
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
newText ("<p> Acum Merlin joacă jocul umbrelor cu un pui de dragon foarte drăguţ care trebuie să ghicească a căror animale este umbra pe care o are în faţa sa.</p>")
	,
newText("<p> Imaginile vor arăta umbrele, dar şi toate animalele din joc şi animalele care se află atunci în faţa cortinei. </p>"),
newText ("<p> Dacă nu sunt deloc animale în faţa cortinei, va fi în loc o linie. </p>")
	       ,
	       newText ("<p> De exemplu, în imaginea de mai jos, sunt patru perechi de pisici şi niciuna din ele nu este în faţa cortinei. Toate pisicile s-au dus în spatele cortinei, dar umbrele aparţin doar a doua perechi de pisici. </p>"),
             ,
	  newImage ("catshadowscenario3", "catshadowscenario3.png")
	.print (),
	 newKey(" ")
        .wait())

;
PennController("details" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> Puiul de dragon trebuie să descrie a cui crede el că sunt umbrele. </p>")
	       ,
   newText ("<p> Când puiul de dragon oferă cea mai bună descriere, trebuie să-l răsplăteşti cu un măr mare. </p>"), 
   newText ("<p> Atunci când puiul de dragon nu oferă cea mai bună descriere, îi dai doar un măr mic. </p>")
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
	       newText ("<p> Puiul de dragon vede următoarele umbre şi trebuie să le descrie. </p>"),
	      
	       newImage ("bunnyshadowscenario", "bunnyshadowscenario.png")
	       .print ( )
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newText ("<p> Puiul de dragon spune: Unii iepuraşi sunt roz. </p>")
	       ,
	       newText ("<p> Puiul de dragon nu a oferit cea mai bună descriere. Umbrele nu aparţin iepuraşilor roz, ci iepuraşilor verzi. </p>"),
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
	       ("<p> Hai să vedem cum te descurci pe cont propriu. Puiul de dragon vede următoarele umbre şi trebuie să le descrie.</p>")
	       ,
	       newText  ("<p> Pentru a răsplăti dragonul, fă pur şi simplu click pe mărul dorit.</p>")
		,
	       newImage ("bunnyshadowscenario", "bunnyshadowscenario.png")
	       .print ( )
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newText ("<p> Puiul de dragon: Toţi iepuraşii sunt verzi. </p>")
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
	       newText ("<p> Puiul de dragon: Unii iepuraşi sunt verzi. </p>")
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
	       
	      newText ("<p> Vei vedea doar perechi de animale, cupluri, unde animalele îndrăgostite se privesc cu dragoste. </p>")
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
  PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> Hai să ne jucăm acum jocul umbrelor cu câinii. </p>"),
	       newText ("<p> Avem două perechi de câini albaştri şi două perechi de câini galbeni. <p>")
	       ,
	       newImage("fourbluedogssmall", "fourbluedogssmall.png")
        .print()
,
	       
newImage("fouryellowdogssmall", "fouryellowdogssmall.png")
        .print()
    ,
 newText ("<p> Toţi câinii s-au dus acum în spatele cortinei. <p>")
,
	 newKey(" ")
        .wait()
)
;

PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> O pereche de câini galbeni a venit acum în faţa cortinei. <p>")  
	       ,
  newText ("<p> Puiul de dragon trebuie să descrie a cui crede el că sunt umbrele. </p>")
	       ,
   newText ("<p> Când puiul de dragon oferă cea mai bună descriere, trebuie să-l răsplăteşti cu un măr mare. </p>"), 
   newText ("<p> Atunci când puiul de dragon nu oferă cea mai bună descriere, îi dai doar un măr mic. </p>")
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
		newImage ("dogshadowscenario1","dogshadowscenario1.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,

		newText ("<p> Puiul de dragon: Sigur că toţi câinii sunt albaştri. </p>")
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
	
		newText ("<p> Puiul de dragon: Sigur că unii câini sunt galbeni. </p>")
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

		newText ("<p> Puiul de dragon: Poate că toţi câinii sunt albaştri. </p>")
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

		newText ("<p> Puiul de dragon: Poate că unii câini sunt galbeni. </p>")
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
		newImage ("dogshadowscenario1", "dogshadowscenario1.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,
		newText ("<p> Baby Dragon: Sigur că unii câinii sunt albaştri.</p>")
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
		newImage ("dogshadowscenario1", "dogshadowscenario1.png")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că unii câini sunt albaştri.</p>")
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
		newImage ("dogshadowscenario1", "dogshadowscenario1.png")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că unii câinii sunt roşii.</p>")
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
		newImage ("dogshadowscenario1", "dogshadowscenario1.png")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că toţi câinii sunt galbeni.</p>")
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
	       newText ("<p> Oh, look, another pair of yellow dogs has come in front of the curtain. Now there are four yellow dogs in front of the curtain.</p>")
	          ,    
	       newText ("<p> So the shadows are not the yellow dogs! </p>")
			,
      newImage ("dogshadowscenario2", "dogshadowscenario2.png")
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
		newText ("<p> Now let's see what the baby dragon says about the shadows. </p>"),
		newImage ("dogshadowscenario2", "dogshadowscenario2.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
	       ,
		newText ("<p> Baby Dragon: It is possible that some dogs are blue.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("dogshadowscenario2", "dogshadowscenario2.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,
		newText ("<p> Baby Dragon: It is certain that all dogs are blue.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("dogshadowscenario2", "dogshadowscenario2.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that some dogs are yellow.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("dogshadowscenario2", "dogshadowscenario2.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that all dogs are blue.</p>")
		,
	        newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("dogshadowscenario2", "dogshadowscenario2.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that some dogs are blue.</p>")
		,
	        newText ("<p> How will you reward the baby dragon? </p>")
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
	       newText ("<p> Now let's see who the shadows belong to. Pam-pam! It's the blue dogs! </p>")
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
  newText ("<p>  Now let's play the shadow game with the frogs. </p>"),
	       newText ("<p> We have got two pairs of purple frogs, and two pairs of red frogs. <p>")
	       ,
	       newImage("fourpurplefrogssmall", "fourpurplefrogssmall.png")
        .print()
    ,
    newImage("fourredfrogssmall", "fourredfrogssmall.png")
        .print()
    ,
 newText ("<p> Now all the frogs have gone behind the curtain. <p>")
,
	 newKey(" ")
        .wait()
)
;

PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> The baby dragon has to describe what he thinks is behind the shadows. </p>")
	       ,
   newText ("<p> If it's the best description, you have to reward the baby dragon with a big apple. </p>"),
   newText ("<p> If it's not the best description, you'll just give him a small apple.  </p>")
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
		newText ("<p> Let's look at the shadows, and see what the baby dragon says.</p>")
		,
		newImage ("frogshadowscenario3","frogshadowscenario3.png")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is certain that all frogs are red. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
	
		newText ("<p> Baby Dragon: It is possible that some frogs are purple. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
	       newText ("<p> Oh, look, one pair of purple frogs and one pair of red frogs have come in front of the curtain. </p>")
	          ,    
	       newText ("<p> Now there are four frogs in front of the curtain: two purple frogs and two red frogs! </p>")
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
		newText ("<p>  Now let's look at the shadows, and see what the baby dragon says.</p>")
		,
		newImage ("frogshadowscenario4","frogshadowscenario4.png")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is certain that some frogs are purple. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
	
		newText ("<p> Baby Dragon: It is possible that some frogs are purple. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
	       newText ("<p> Now let's see who the shadows belong to. Pam-pam! The shadows are a pair of two purple frogs and a pair of two red frogs! </p>")
	         ,         
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
  newText ("<p>  Now let's play the shadow game with the cats. </p>"),
	       newText ("<p> We have got two pairs of blue cats, and two pairs of pink cats. <p>")
	       ,
	newImage("fourbluecatssmall", "fourbluecatssmall.png")
        .print()
,
	       
newImage("fourpinkcatssmall", "fourpinkcatssmall.png")
        .print()
    ,
 newText ("<p> Now all the cats have gone behind the curtain. <p>")
,
	 newKey(" ")
        .wait()
)        
	    
;

PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> The baby dragon has to describe what he thinks is behind the shadow. </p>")
	       ,
  newText ("<p> If it's the best description, you have to reward the baby dragon with a big apple. </p>"),
   newText ("<p> If it's not the best description, you'll just give him a small apple.  </p>")
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
		newText ("<p> Let's look at the shadows, and see what the baby dragon says.</p>")
		,
		newImage ("catshadowscenario3","catshadowscenario3.png")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is certain that all cats are pink. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
               .print ()
		,
	
		newText ("<p> Baby Dragon: It is possible that some cats are blue. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
	       newText ("<p> Oh, look, one pair of pink cats and one pair of blue cats have come in front of the curtain. </p>")
	          ,    
	       newText ("<p> Now there are four cats in front of the curtain: two pink cats and two blue cats! </p>")
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
		newText ("<p> Now let's see what the baby dragon says about the shadows. </p>")
		,
		newImage ("catshadowscenario4","catshadowscenario4.png")
               .print ()
		,

		newText ("<p> Baby Dragon: It is certain that some cats are blue. </p>")
	       ,
	        newText ("<p> How will you reward the baby dragon? </p>")
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

		newText ("<p> Baby Dragon: It is possible that some cats are blue. </p>")
	       ,
	        newText ("<p> How will you reward the baby dragon? </p>")
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
	       newText ("<p> Now let's see who the shadows belong to! </p>")
	       ,
	       newText ("<p> The shadows are a pair of blue cats and a pair of pink cats! </p>")
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
  newText ("<p>  Now let's play the shadow game with the cows. </p>"),
	       newText ("<p> We have got two pairs of green cows, and two pairs of yellow cows. <p>")
	       ,
	       newImage("fourgreencowssmall", "fourgreencowssmall.png")
        .print()
,
	       
newImage("fouryellowcowssmall", "fouryellowcowssmall.png")
        .print()
    ,
 newText ("<p> Now all the cows have gone behind the curtain. <p>")
,
	 newKey(" ")
        .wait()
)
;

PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> Now a pair of green cows has come in front of the curtain. <p>")  
	       ,
  newText ("<p> The baby dragon has to describe what he thinks is behind the shadows. </p>")
	       ,
   newText ("<p> If it's the best description, you have to reward the baby dragon with a big apple. </p>"),
   newText ("<p> If it's not the best description, you'll just give him a small apple.  </p>")
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
		newText ("<p> Let's look at the shadows, and see what the baby dragon says.</p>")
		,
		newImage ("cowshadowscenario1","cowshadowscenario1.png")
               .print ()
		,
		newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is certain that all cows are yellow. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
	
		newText ("<p> Baby Dragon: It is certain that some cows are green. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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

		newText ("<p> Baby Dragon: It is possible that some cows are yellow. </p>")
	       ,
	        newText ("<p> How will you reward the baby dragon? </p>")
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

		newText ("<p> Baby Dragon: It is possible that some cows are green. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("cowshadowscenario1", "cowshadowscenario1.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that some cows are yellow.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("cowshadowscenario1", "cowshadowscenario1.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that some cows are pink.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("cowshadowscenario1", "cowshadowscenario1.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that all cows are green.</p>")
		,
	        newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("cowshadowscenario1", "cowshadowscenario1.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that all cows are yellow.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
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
	       newText ("<p> Oh, look, another pair of green cows has come in front of the curtain. Now there are four green cows in front of the curtain.</p>")
	          ,    
	       newText ("<p> So the shadows are not the green cows! </p>")
			,
      newImage ("cowshadowscenario2", "cowshadowscenario2.png")
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
		newText ("<p> Now let's see what the baby dragon says about the shadows. </p>"),
		newImage ("cowshadowscenario2", "cowshadowscenario2.png")
               .print ()
		,
		newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
	       ,
		newText ("<p> Baby Dragon: It is possible that some cows are yellow.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("cowshadowscenario2", "cowshadowscenario2.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that all cows are yellow.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("cowshadowscenario2", "cowshadowscenario2.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that some cows are green.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("cowshadowscenario2", "cowshadowscenario2.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that all cows are yellow. </p>")
		,
	        newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("cowshadowscenario2", "cowshadowscenario2.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that some cows are yellow.</p>")
		,
	        newText ("<p> How will you reward the baby dragon? </p>")
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
	       newText ("<p> Now let's see who the shadows belong to. Pam-pam! It's the yellow cows! </p>")
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
  newText ("<p>  Now let's play the shadow game with the dogs. </p>"),
	       newText ("<p> We have got two pairs of blue dogs, and two pairs of yellow dogs. <p>")
	       ,
	newImage("fourbluedogssmall", "fourbluedogssmall.png")
        .print()
,
	       
newImage("fouryellowdogssmall", "fouryellowdogssmall.png")
        .print()
    ,
 newText ("<p> Now all the dogs have gone behind the curtain. <p>")
,
	 newKey(" ")
        .wait()
)        
	    
;

PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> The baby dragon has to describe what he thinks is behind the shadow. </p>")
	       ,
   newText ("<p> If it's the best description, you have to reward the baby dragon with a big apple. </p>"),
   newText ("<p> If it's not the best description, you'll just give him a small apple.  </p>")
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
		newText ("<p> Let's look at the shadows, and see what the baby dragon says.</p>")
		,
		newImage ("dogshadowscenario3","dogshadowscenario3.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is possible that some dogs are blue. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
	
		newText ("<p> Baby Dragon: It is certain that all dogs are yellow. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
	       newText ("<p> Oh, look, one pair of yellow dogs and one pair of blue dogs have come in front of the curtain. </p>")
	          ,    
	       newText ("<p> Now there are four dogs in front of the curtain: two yellow dogs and two blue dogs! </p>")
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
		newText ("<p> Now let's see what the baby dragon says about the shadows. </p>")
		,
		newImage ("dogshadowscenario4","dogshadowscenario4.png")
               .print ()
		,

		newText ("<p> Baby Dragon: It is possible that some dogs are blue. </p>")
	       ,
	        newText ("<p> How will you reward the baby dragon? </p>")
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

		newText ("<p> Baby Dragon: It is certain that some dogs are blue. </p>")
	       ,
	        newText ("<p> How will you reward the baby dragon? </p>")
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
	       newText ("<p> Now let's see who the shadows belong to! </p>")
	       ,
	       newText ("<p> The shadows are a pair of yellow dogs and a pair of blue dogs! </p>")
			,
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
	       newText ("<p> Now let's play the shadow game with the frogs. </p>")
	        ,
	        newText ("<p>  We have got two pairs of purple frogs, and two pairs of red frogs. <p>")
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
	       newText ("<p> All the frogs have now gone behind the curtain. <p>")
	       ,
	       newKey(" ")
        .wait()
	       
	      )	
;

PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> Now a pair of red frogs has come in front of the curtain. <p>")  
	       ,
  newText ("<p> The baby dragon has to describe what he thinks is behind the shadows. </p>")
	       ,
   newText ("<p> If it's the best description, you have to reward the baby dragon with a big apple. </p>"),
   newText ("<p> If it's not the best description, you'll just give him a small apple.  </p>")
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
		newText ("<p> Let's look at the shadows, and see what the baby dragon says.</p>")
		,
		newImage ("frogshadowscenario1","frogshadowscenario1.png")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is possible that some frogs are red. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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

		newText ("<p> Baby Dragon: It is certain that all frogs are purple. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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

		newText ("<p> Baby Dragon: It is possible that all frogs are purple. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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

		newText ("<p> Baby Dragon: It is certain that some frogs are red. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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

		newText ("<p> Baby Dragon: It is possible that some frogs are purple. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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

		newText ("<p> Baby Dragon: It is possible that all frogs are red. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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

		newText ("<p> Baby Dragon: It is possible that some frogs are yellow. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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

		newText ("<p> Baby Dragon: It is certain that some frogs are purple. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
	       newText ("<p> Oh, look, another pair of red frogs has come in front of the curtain. Now there are four red frogs in front of the curtain.</p>")
	          ,    
	       newText ("<p> So the shadows are not the red frogs! </p>")
			,
      newImage ("frogshadowscenario2", "frogshadowscenario2.png")
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
		newText ("<p> Let's look at the shadows, and see what the baby dragon says.</p>")
		,
		newImage ("frogshadowscenario2","frogshadowscenario2.png")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is possible that some frogs are purple. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("frogshadowscenario2","frogshadowscenario2.png")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is certain that all frogs are purple. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("frogshadowscenario2","frogshadowscenario2.png")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is certain that some frogs are red. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("frogshadowscenario2","frogshadowscenario2.png")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is possible that all frogs are purple. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("frogshadowscenario2","frogshadowscenario2.png")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is certain that some frogs are purple. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
	       newText ("<p> Now let's see who the shadows belong to. Pam-pam! It's the purple frogs! </p>")
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




PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p>  Now let's play the shadow game with the cats. </p>"),
	       newText ("<p> We have got two pairs of blue cats, and two pairs of pink cats. <p>")
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
 newText ("<p> Now all the cats have gone behind the curtain. <p>")
,
	 newKey(" ")
        .wait()
)
;

PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> Now a pair of pink cats has come in front of the curtain. <p>")  
	       ,
  newText ("<p> The baby dragon has to describe what he thinks is behind the shadows. </p>")
	       ,
  newText ("<p> If it's the best description, you have to reward the baby dragon with a big apple. </p>"),
   newText ("<p> If it's not the best description, you'll just give him a small apple.  </p>")
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
		newText ("<p> Let's look at the shadows, and see what the baby dragon says.</p>")
		,
		newImage ("catshadowscenario1","catshadowscenario1.png")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is possible that some cats are blue. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
	
		newText ("<p> Baby Dragon: It is certain that some cats are pink. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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

		newText ("<p> Baby Dragon: It is possible that all cats are blue. </p>")
	       ,
	        newText ("<p> How will you reward the baby dragon? </p>")
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

		newText ("<p> Baby Dragon: It is possible that some cats are orange. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("catshadowscenario1", "catshadowscenario1.png")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
		,
		newText ("<p> Baby Dragon: It is certain that all cats are blue.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("catshadowscenario1", "catshadowscenario1.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that all cats are pink.</p>")
		,
	        newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("catshadowscenario1", "catshadowscenario1.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that some cats are pink.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("catshadowscenario1", "catshadowscenario1.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that some cats are blue.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
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
	       newText ("<p> Oh, look, another pair of pink cats has come in front of the curtain. Now there are four pink cats in front of the curtain.</p>")
	          ,    
	       newText ("<p> So the shadows are not the pink cats! </p>")
			,
      newImage ("catshadowscenario2", "catshadowscenario2.png")
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
		newText ("<p> Now let's see what the baby dragon says about the shadows. </p>"),
		newImage ("catshadowscenario2", "catshadowscenario2.png")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
	       ,
		newText ("<p> Baby Dragon: It is possible that some cats are blue.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("catshadowscenario2", "catshadowscenario2.png")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
		,
		newText ("<p> Baby Dragon: It is certain that some cats are pink.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("catshadowscenario2", "catshadowscenario2.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that all cats are blue.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("catshadowscenario2", "catshadowscenario2.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that all cats are blue.</p>")
		,
	        newText ("<p> How will you reward the baby dragon? </p>")
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
		newImage ("catshadowscenario2", "catshadowscenario2.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that some cats are blue.</p>")
		,
	        newText ("<p> How will you reward the baby dragon? </p>")
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
	       newText ("<p> Now let's see who the shadows belong to. Pam-pam! It's the blue cats! </p>")
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
  newText ("<p>  Now let's play the shadow game with the cows. </p>"),
	       newText ("<p> We have got two pairs of green cows, and two pairs of yellow cows. <p>")
	       ,
	newImage("fourgreencowssmall", "fourgreencowssmall.png")
        .print()
,
	       
newImage("fouryellowcowssmall", "fouryellowcowssmall.png")
        .print()
    ,
 newText ("<p> Now all the cows have gone behind the curtain. <p>")
,
	 newKey(" ")
        .wait()
)        
	    
;

PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> The baby dragon has to describe what he thinks is behind the shadow. </p>")
	       ,
  newText ("<p> If it's the best description, you have to reward the baby dragon with a big apple. </p>"),
   newText ("<p> If it's not the best description, you'll just give him a small apple.  </p>")
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
		newText ("<p> Let's look at the shadows, and see what the baby dragon says.</p>")
		,
		newImage ("cowshadowscenario3","cowshadowscenario3.png")
               .print ()
		,
		newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is possible that some cows are yellow. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
	
		newText ("<p> Baby Dragon: It is certain that all cows are green. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
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
	       newText ("<p> Oh, look, one pair of yellow cows and one pair of green cows have come in front of the curtain. </p>")
	          ,    
	       newText ("<p> Now there are four cows in front of the curtain: two yellow cows and two green cows! </p>")
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
		newText ("<p> Now let's see what the baby dragon says about the shadows. </p>")
		,
		newImage ("cowshadowscenario4","cowshadowscenario4.png")
               .print ()
		,

		newText ("<p> Baby Dragon: It is possible that some cows are yellow. </p>")
	       ,
	        newText ("<p> How will you reward the baby dragon? </p>")
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

		newText ("<p> Baby Dragon: It is certain that some cows are yellow. </p>")
	       ,
	        newText ("<p> How will you reward the baby dragon? </p>")
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
	       newText ("<p> Now let's see who the shadows belong to! </p>")
	       ,
	       newText ("<p> The shadows are a pair of green cows and a pair of yellow cows! </p>")
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
	       newText ("<p> Thank you for your participation! The survey code for MTurk is: supercutey4. Please copy-paste it to MTurk. </p>")
	       .print()
	       ,
	 newText("<p> The baby dragon thanks you for the apples, and so does the wizard! Bubbye! </p>")
        .print(),
    newButton("void")
        .wait()
	       )
;
  
