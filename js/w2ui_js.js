
    var pstyle = 'border: 1px solid #dfdfdf; padding: 5px;';
    var mainlayout={
	    layout:{
		name:'mainlayout',
		panels:[
		    {type:'top',size:100,style:pstyle}, // VALUE 1 OF PANEL IS TOP  
		    {type:'main',style:pstyle}, // VALUE 1 OF PANEL IS LEFT
		    {type:'preview',size:700,hidden:false,style:pstyle,resize:true}, // VALUE 1 OF PANEL IS MAIN
		    {type:'right',size:500,style:pstyle}, // VALUE 1 OF PANEL IS RIGHT
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
	    show:{
		toolbar: true,
		footer: true,
	    },
	    toolbar:{
		name:'toolbar',
		items:[ { type: 'button', id: 'append', caption: 'Append', icon: 'w2ui-icon-plus' }],
		onClick:function(event){
		    switch (event.target){
			case 'append':
				popup(w2ui.fuser,w2ui.layPopup);  
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
		url:'data.php',
		show:{
		    toolbar:true,
		    footer:true,
		    
		},
		columns:[
		    { field: 'recid', caption: 'ID', size: '50px', sortable: true, attr: 'align=center' },
		    { field: 'lname', caption: 'Last Name', size: '30%', sortable: true },
		    { field: 'fname', caption: 'First Name', size: '30%', sortable: true },
		    { field: 'email', caption: 'Email', size: '40%' },
		    { field: 'sdate', caption: 'Start Date', size: '120px' },
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
	    url:'comm.php',
	     formHTML: 
                '<div class="w2ui-page page-0">'+
                '    <div class="w2ui-field">'+
                '        <label>First Name:</label>'+
                '        <div>'+
                '           <input name="first_name" type="text" maxlength="100" style="width: 250px"/>'+
                '        </div>'+
                '    </div>'+
                '    <div class="w2ui-field">'+
                '        <label>Last Name:</label>'+
                '        <div>'+
                '            <input name="last_name" type="text" maxlength="100" style="width: 250px"/>'+
                '        </div>'+
                '    </div>'+
                '    <div class="w2ui-field">'+
                '        <label>Email:</label>'+
                '        <div>'+
                '            <input name="email" type="text" style="width: 250px"/>'+
                '        </div>'+
                '    </div>'+
                '</div>'+
                '<div class="w2ui-buttons">'+
                '    <button class="btn" name="reset">Reset</button>'+
                '    <button class="btn" name="save">Save</button>'+
                '</div>',
	    fields : [
		{ field: 'first_name', type: 'text', required: true },
                { field: 'last_name', type: 'text', required: true },
                { field: 'email', type: 'email' },
	    ],
	    record: { 
		first_name    : 'sokha',
		last_name     : 'visal',
		email         : 'jdoe@email.com'
	    },
	    postData: {
		param1 : 'value1', 
		param2 : 'value2'
	    },
	     actions: {
                "save": function (target, data) { 
		    console.log(target);
		    this.save();
		    
		},
                "reset": function () { this.clear(); },
            } 
	}    
};
    
// ------- function create layout ------ //
$(function () {
  $('#layout').w2layout(mainlayout.layout);
    // header initial 
    w2ui['mainlayout'].load('top','header.php');
    // gride initial 
    w2ui['mainlayout'].content('main',$().w2grid(gmain.grid));
    w2ui['mainlayout'].content('preview',$().w2grid(gpreview.grid));
    $().w2layout(layPopup);
    $().w2form(fuser.form);
    
});

// -------- function form popup --------- //
function popup(obj,lobj) {
    w2popup.open({
        title   : 'Form in a Popup',
        body    : '<div id="form" style="width: 100%; height: 100%;"></div>',
        style   : 'padding: 15px 0px 0px 0px',
        width   : 500,
        height  : 300, 
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