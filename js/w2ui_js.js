
    var pstyle = 'border: 1px solid #dfdfdf; padding: 5px;';
    var toolstyle= 'background-color:#6a9eb5;color:#FFF;';
    var mainlayout={
	    layout:{
		name:'mainlayout',
		panels:[
		    {type:'top',size:100,style:pstyle,resizable: true}, // VALUE 1 OF PANEL IS TOP  
		    {type:'main',style:pstyle,resizable: true}, // VALUE 1 OF PANEL IS LEFT
		    {type:'preview',size:700,hidden:false,style:pstyle,resize:true,resizable: true}, // VALUE 1 OF PANEL IS MAIN
		    {type:'right',size:500,style:pstyle,resizable: true,
			tabs:{
			    active: 'tab1',
			    name:'tabs',
			    tabs: [
						{ id: 'tab1', caption: 'customer' ,style:'color:red;' },
						{ id: 'tab2', caption: 'Employees' },
						{ id: 'tab3', caption: 'Suppliers'},
						{ id: 'tab4', caption: 'Orderitem'}
				],
					onClick: function (target, data) { 
					    w2ui['mainlayout_right_tabs'].set('tab3', { caption: ''+ new_data() +'' });
					    w2ui['mainlayout_right_tabs'].refresh();
					    func_layoutClick(target, $(data.subItem).attr('id'));
						    // console.log(mainlayout.tabs);	   
					} 
			}	    
	    
		    } // VALUE 1 OF PANEL IS RIGHT
		],
	    }
	};
    var layPopup = {
    name: 'layPopup',
    padding: 4,
    panels: [
        { type: 'main', minSize: 300, overflow: 'hidden',style:pstyle }
    ]
};
	
    var gmain={
	grid:{
	    name:'gmain',
	    multiSearch: true,
	    show:{
		toolbar: true,
		footer: true,
	    },
	    toolbar:{
		name:'toolbar',
		style:toolstyle ,
		items:[ { type: 'button', id: 'add', caption: 'Add',icon:'fa fa-plus'}],
		onClick:function(event){
		    switch (event.target){
			case 'add':
			   w2confirm('<h3>are you ok <i class="fa fa-question-circle fa-2x" aria-hidden="true"> </i></h3>  ',function(btn){
			       console.log(btn);
			       if(btn=='Yes'){
			       popup(w2ui.fuser,w2ui.layPopup);
			       }else{
				   if(btn=='No'){
				       this.close();
				   }
			       }
			   });
			    
			 break;
		    }
		    
		}
	    },
	    columns:[
	    { field: 'recid', caption: 'ID', size: '50px', sortable: true, attr: 'align=center' },
            { field: 'lname', caption: 'Last Name', size: '30%', sortable: true },
            { field: 'fname', caption: 'First Name', size: '30%', sortable: true },
            { field: 'email', caption: 'Email', size: '40%' },
            { field: 'sdate', caption: 'Start Date', size: '120px' },
	],
	searches: [
            { field: 'recid', caption: 'ID ', type: 'int' },
            { field: 'lname', caption: 'Last Name', type: 'text' },
            { field: 'fname', caption: 'First Name', type: 'text' },
            { field: 'email', caption: 'Email', type: 'list', options: { items: ['peter@gmail.com', 'jim@gmail.com', 'jdoe@gmail.com']} },
            { field: 'sdate', caption: 'Start Date', type: 'date' }
        ],
	    records:[
	    { recid: 1, fname: 'Jane', lname: 'Doe', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 2, fname: 'Stuart', lname: 'Motzart', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 3, fname: 'Jin', lname: 'Franson', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 4, fname: 'Susan', lname: 'Ottie', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 5, fname: 'Kelly', lname: 'Silver', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 6, fname: 'Francis', lname: 'Gatos', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 7, fname: 'Mark', lname: 'Welldo', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 8, fname: 'Thomas', lname: 'Bahh', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 9, fname: 'Sergei', lname: 'Rachmaninov', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 20, fname: 'Jill', lname: 'Doe', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 21, fname: 'Frank', lname: 'Motzart', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 22, fname: 'Peter', lname: 'Franson', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 23, fname: 'Andrew', lname: 'Ottie', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 24, fname: 'Manny', lname: 'Silver', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 25, fname: 'Ben', lname: 'Gatos', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 26, fname: 'Doer', lname: 'Welldo', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 27, fname: 'Shashi', lname: 'Bahh', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 28, fname: 'Av', lname: 'Rachmaninov', email: 'jdoe@gmail.com', sdate: '4/3/2012' }
	    ],
	    
	}
    };
    var gpreview={
	    grid:{
		name:'gpreview',
		limit: 100,
		total:200,
		//url:'data.php',
		multiSearch: true,
		show:{
		   // toolbar:true,
		    footer:true,
		    
		},
		columns:[
		    { field: 'recid', caption: 'ID', size: '50px', sortable: true, attr: 'align=center' },
		    { field: 'lname', caption: 'Last Name', size: '30%', sortable: true },
		    { field: 'fname', caption: 'First Name', size: '30%', sortable: true },
		    { field: 'email', caption: 'Email', size: '40%' },
		    { field: 'sdate', caption: 'Start Date', size: '120px' },
		],
		
        searches: [
            { field: 'recid', caption: 'ID ', type: 'int' },
            { field: 'lname', caption: 'Last Name', type: 'text' },
            { field: 'fname', caption: 'First Name', type: 'text' },
            { field: 'email', caption: 'Email', type: 'list', options: { items: ['peter@gmail.com', 'jim@gmail.com', 'jdoe@gmail.com']} },
            { field: 'sdate', caption: 'Start Date', type: 'date' }
        ],
		records:[],
		
	    }
	
    }
// End grid block //  
 
// block form //
var fuser={
	form:{
	    name:'fuser',
	    header:'User Form',
	    formHTML:'<div id="form" style="width: 750px;">'+
		    '<div class="w2ui-page page-0">'+
		    '<div class="w2ui-field">'+
		    '<label>First Name:</label>'+
          '<div>'+
                '<input name="first_name" type="text" maxlength="100" size="60"/>'+
            '</div>'+
			'</div>'+
			'<div class="w2ui-field">'+
			'<label>Last Name:</label>'+
			'<div>'+
			'<input name="last_name" type="text" maxlength="100" size="60"/>'+
			'</div>'+
			'</div>'+
			'<div class="w2ui-field">'+
			'<label>Comments:</label>'+
			'<div>'+
			'<textarea name="comments" type="text" style="width: 100%; height: 80px; resize: none"></textarea>'+
			'</div>'+
			'</div>'+
			'</div>'+
			'<div class="w2ui-page page-1">'+
			'<div class="w2ui-field">'+
			'<label>Address:</label>'+
			'<div>'+
			'<input name="address1" type="text" maxlength="100" style="width: 100%"/>'+
			'</div>'+
			'</div>'+
			'<div class="w2ui-field">'+
			'<label>Line 2:</label>'+
			'<div>'+
			'<input name="address2" type="text" maxlength="100" style="width: 100%"/>'+
			'</div>'+
			'</div>'+
			'<div class="w2ui-field">'+
			'<label>City:</label>'+
			'<div>'+
			'<input name="city" type="text" maxlength="50" size="25"/>'+
			'</div>'+
			'</div>'+
			'<div class="w2ui-field">'+
			'<label>State:</label>'+
			'<div>'+
			'<input name="state" type="text" maxlength="2" size="2"/>'+
			'</div>'+
			'</div>'+
			'<div class="w2ui-field">'+
			'<label>Zip:</label>'+
			'<div>'+
			'<input name="zip" type="text" maxlength="10" size="10"/>'+
			'</div>'+
			'</div>'+
			'</div>',
       
		    
	    
        fields : [
            { field: 'first_name', type: 'text', required: true },
            { field: 'last_name',  type: 'text', required: true },
            { field: 'comments',   type: 'text'},
            { field: 'address1', type: 'text', required: true },
            { field: 'address2', type: 'text' },
            { field: 'city', type: 'text', required: true },
            { field: 'state', type: 'text', required: true },
            { field: 'zip', type: 'int', required: true },
            { field: 'short_bio', type: 'text' },
            { field: 'talk_name', type: 'text', required: true },
            { field: 'description', type: 'text' }
        ],
        tabs: [
            { id: 'tab1', caption: 'General' },
            { id: 'tab2', caption: 'Address'},
            { id: 'tab3', caption: 'About' }
        ],
	   
	     actions: {
                "save": function (target, data) { 
		    this.save();
		   
			console.log(data);
		    
		},
                "reset": function () { this.clear(); },
            } 
	}    
};
var frmEditLinkError = {
    name: 'frmEditLinkError',
    // header: 'Edit linkError',
    formHTML: 
	    '<div class="w2ui-page page-0">'+ 	   
	   '<div class="" style="width:350px;float:left; height:480px; padding:5px;" > ' +
	   '<br>'+
	   '<br>'+
		   
	    '	<div class="w2ui-field" style="margin-left:5px;">'+		    
		    '<div style="float: left;">'+
			'<div>&nbsp;Link Item URL:</div>'+
			'<input id="ItemURL"   name="ItemURL" type="text"  style="width: 320px; height:30px; resize: none;margin:5px;" spellcheck=false /><input  id="btngetvalue" type="button" name="btnGetvalue" value="Get Value" style="float:right;margin:3px;" onclick="return func_getValue();"> </div>'+
	      '	</div>'+
	       
	    '	<div class="w2ui-field" style="margin-left:5px;">'+		    
		    '<div style="float: left;">'+
			'<div>&nbsp;Link Image URL:</div>'+
			'<textarea id="ImageURL" name="ImageURL" type="text"  style="width: 320px; height:60px; resize: none;margin:5px;" spellcheck=false></textarea>'+
		    '</div>'+
	      '	</div>'+	      	       
	    '	<div class="w2ui-field" style="margin-left:5px;">'+		    
		    '<div style="float: left;">'+
		    '<div>&nbsp;Title Item:</div>'+
		    '<textarea id="ItemTitle" name="ItemTitle" type="text"  style="width:320px; height:130px; resize: none;margin:5px;" spellcheck=false></textarea>'+
		'</div>'+
	      '	</div>'+	      
	    '	<div class="w2ui-field" style="margin-left:5px;">'+		    
		    '<div style="float: left;">'+
			'<div>&nbsp;Price:</div>'+
			'<textarea id="ItemPrice" name="ItemPrice" type="text"  style="width: 320px; height:60px; resize: none;margin:5px;" spellcheck=false></textarea>'+
		    '</div>'+	      
	    '	</div>'+
	    '<div class="w2ui-label" style="width:200px; text-align:left; margin:14px;"><input id="CheckBackUp" name="CheckBackUp" type="checkbox" value="true" checked  onClick="" /"> Backup before upload </div>'+
	      '	<div class="w2ui-field">'+
			'<div style="float: left;"><textarea id="Id" name="Id" type="text"  style="width: 50px; height:30px; resize: none;margin:5px; display:none;" spellcheck=false  ></textarea></div>'+
			  ' <input type ="button" name="btnGenerate" value="Generate" style="float:right;margin:5px;" onclick="func_generate();">'+			  
	    '	</div>'+

		   '</div>'+
		
	    '<div style="width:320px;float:left; height:480px; padding:5px;" > ' +
	   
	    '	 <div class="w2ui-field" >'+  
	    '	 <div style="float:right;">'+
		    '<div  style="margin:10px;" >Div Link Item Error: </div>'+
		    '<textarea  id="txtlinkerror" name="Divlinkerror" type="text" style="width:315px; height: 200px; float:left; resize: none; background-color:#FFF; color:black; " readonly></textarea>'+
		'</div>'+
	    '	</div>'+
	   
	    '	<div class="w2ui-field" >'+  	     
		    '<div style="float:right;">'+
			'<div style="margin:10px;">New Div Link Item Generate: </div>'+
			'<textarea  id="Divlinkgenerate" name="Divlinkgenerate" type="text"  style="width: 315px; height:200px;margine:5px; float:left; resize: none "   onkeyup="NewDivGenerate(this)"></textarea>'+
		    '</div>'+
	      '	</div>'+
	   
		   '</div>'+
		
		    '<div style="width:340px;float:left; height:480px; padding:5px;" > ' +
			'<div style="margin:10px;">Preview HTML </div>'+
			     '<div id="PreviewHTML"  name="HTML" style="width:650px; border:1px solid #CCCCCC; height:430px;float:left;padding:5px;background-color:#FFF;">'+			    
		             '</div>'+
		     '</div>'+
	     '<div style="clear:both;"></div>'+
	'</div>'+
	
       
       '<div class="w2ui-buttons" style="height:70px;">'+
	'	<input type="button" value="Upload" name="Save" onclick="func_Upload();" >'+
       '	<input type="button" value="Cancel" name="Cancel">'+
	'       <input type="button" style="float:left;margin:0px 0px 0px 25px;" value="Download" name="Download" onclick="return func_Download();">'+
        '</div>',
		//'</div>',
    fields: [
        { name: 'Id',		    type: 'text'},
	{ name: 'Divlinkgenerate', type: 'text'},
        { name: 'Divlinkerror',	    type: 'text'},
        { name: 'ItemURL',	    type: 'text' },
        { name: 'ImageURL',	    type: 'text'},
        { name: 'ItemTitle',        type: 'text' },
        { name: 'ItemPrice',	    type: 'text' },
	{ name: 'CheckBackUp',	    type: 'bit'},
	 //{ name: 'HTML',	    type: 'text' }
    ],
	  actions: {
	      Cancel: function (){
		  this.clear();
		  w2ui['lErrorDetail'].toggle('right', window.instant);
	  }
	 
	  
	  
      }
		
};
var test_tab={
    tabs:{
	name: 'tabs',
	active: 'tab1',
	tabs: [
	    { id: 'tab1', caption: 'Tab 1' },
	    { id: 'tab2', caption: 'Tab 2' },
	    { id: 'tab3', caption: 'Tab 3' },
	    { id: 'tab4', caption: 'Tab 4' }
	],
	onClick: function(event){
	    if(event.target=='tab1'){
	     w2ui.tabs.set('tab3', { caption: ''+ new_data() +'' });
	      w2ui.tabs.refresh();
	    }
	}
    }
    
};
 function new_data(){
     var newdata ='<i class="fa fa-user fa-2x" aria-hidden="true"></i> <span class="badge">42</span>';
     return newdata;
 }
  function new_data1(){
     var newdata1 ='<i class="fa fa-map-marker fa-2x" aria-hidden="true"></i> <span class="badge">5</span>';
     return newdata1;
 }
 function new_data2(){
     var newdata2 ='<i class="fa fa-tachometer fa-2x" aria-hidden="true"></i> <span class="badge">2</span>';
     return newdata2;
 }
  function new_data3(){
     var newdata3 ='<i class="fa fa-home fa-2x" aria-hidden="true"></i> <span class="badge">12</span>';
     return newdata3;
 }
// ------- function create layout ------ //
$(function () {
  $('#layout').w2layout(mainlayout.layout);
    // header initial 
    w2ui['mainlayout'].load('top','header.php');
    // gride initial 
    w2ui['mainlayout'].content('main',$().w2grid(gmain.grid));
    //w2ui['mainlayout'].content('preview',$().w2grid(gpreview.grid));
   //  $().w2tabs(test_tab.tabs);
    $().w2layout(layPopup);
    $().w2form(fuser.form);
    $().w2form(frmEditLinkError);
    $().w2grid(gpreview.grid);
    $().w2tabs(test_tab.tabs);
   // w2ui['mainlayout tabs'].w2tabs(tabs.tabs);
    func_layoutClick('tab1','');
    func_notification();
});
function func_notification(){
    w2ui['mainlayout_right_tabs'].set('tab1', { caption: ''+ new_data() +'' });
    w2ui['mainlayout_right_tabs'].set('tab2', { caption: ''+ new_data1() +'' });
    w2ui['mainlayout_right_tabs'].set('tab3', { caption: ''+ new_data2() +'' });
    w2ui['mainlayout_right_tabs'].set('tab4', { caption: ''+ new_data3() +'' });
    w2ui['mainlayout_right_tabs'].refresh();
    
}
function func_layoutClick(target,tID) {
	//月次目標
	if (target == 'tab1'){	
		w2ui['mainlayout'].content('right',w2ui.gpreview);
	//分類目標
	} else if (target == 'tab2'){
		w2ui['mainlayout'].content('right','<div class=""><h3>User</h3></div>');
	//システム設定
	} else if (target == 'tab3'){
		
		w2ui['mainlayout'].content('right',w2ui.tabs);
		
	//仕入先マスタ
        }
        else if (target == 'tab4')
        {
       // w2ui['mainlayout'].content('right', $().w2grid(gpreview.grid));
	} else {
		this.owner.content('right','test');
	}
}
// -------- function form popup --------- //
function popup(obj,lobj) {
    w2popup.open({
        title   : 'Form in a Popup',
        body    : '<div id="form" style="width: 100%; height: 100%;"></div>',
        style   : 'padding: 15px 0px 0px 0px',
        width   : 700,
        height  : 700, 
        showMax : true,
	overflow  : 'hidden',
        color     : '#333',
        speed     : '0.3',
        opacity   : '0.8',
        modal     : true,
        showClose : true,
        showMax   : true,
        onClose   : function (event) { console.log('close'); },
        onMax     : function (event) { console.log('max'); },
        onMin     : function (event) { console.log('min'); },
        onOpen: function (event) {
            event.onComplete = function () {
                // specifying an onOpen handler instead is equivalent to specifying an onBeforeOpen handler, which would make this code execute too early and hence not deliver.
                $('#w2ui-popup #form').w2render(obj);
		
            }
        }
    });
}
// -------- function form popup --------- //

