<!-- VERSION[] = "320@(#) common.js 320.16@(#) 5/10/06 14:30:56"; -->

var timeout_url = "";
function timeoutRedirect(){
if (timeout_url == "")
    timout_url = "/";
if( navigator.appVersion.charAt( 0 ) < '3' )
   location = timeout_url;
else
   location.replace( timeout_url );
return false;
}
var timer = null;
function startTimeout(time, url)
{
   if( timer != null )
       clearTimeout(timer);
   timeout_url = url;		
   timer = setTimeout('timeoutRedirect()', time);
}

function onSelectChange(obj)
{
  var index = obj.selectedIndex;
  if (obj.options[index].value.substr(0,1) == '+')
      {
      location.replace(obj.options[index].value.substr(1));
      }
  else
      {
      location.replace("/search/"+obj.options[index].value.substr(0,1)+"?"+obj.options[index].value.substr(1));
      }
}

function getObj(name) {
    if (document.getElementById)
        obj = document.getElementById(name);
    else if (document.all)
        obj = document.all[name];
    else if (document.layers)
        obj = document.layers[name];
    return obj;
}

function process_save(saveall) {
    obj = getObj('save_func');
    if (saveall) 
        obj.value = 'save_all_page';
    else
        obj.value = 'save_marked';
    obj.form.submit();
}

function replace_or_redraw( new_URL )
{
//var oBase = document.all.tags('base');
//if (oBase && oBase.target) oBase.target = _self;
if( navigator.appVersion.charAt( 0 ) < '3' )
	location = new_URL;
else
	location.replace( new_URL );
return false;
}

// patroninfo script  

function close_it( )
{
window.close();
return false;
}

function removesome(myform, oldURL, doall)
{
var i;
var newURL = oldURL;
for (i = 0; i < myform.elements.length; i++)
	{
	if (myform.elements[i].type != 'checkbox') continue;
	newURL += '&' + myform.elements[i].name + '=';
	if (!doall)
		newURL += (myform.elements[i].checked ? '1' : '0');
	else
		newURL += '1';
	}
replace_or_redraw(newURL);
return false;
}

function removesomeconfirm(myform, oldURL, doall, msg, framed)
{
var i;
var newURL = oldURL;
if (confirm(msg))
	{
    for (i = 0; i < myform.elements.length; i++)
    {
    	if (myform.elements[i].type != 'checkbox') 
    	    continue;
    	newURL += '&' + myform.elements[i].name + '=';
    	if (!doall)
    		newURL += (myform.elements[i].checked ? '1' : '0');
    	else
    		newURL += '1';
	}
   if (framed)
       replace_or_redraw_parent(newURL);
   else
       replace_or_redraw(newURL);
	}
return false;
}

function removecheckedconfirm(myform, oldURL, msg, framed)
{
var i;
var ie=0;
var newURL=oldURL;  
if(navigator.appName.indexOf('Explorer')>-1) 
     ie=1;
if (confirm(msg))     
	{
    for (i = 0; i < myform.elements.length; i++)  
    {
       if (ie && i >= 200) 
            break;     
    	if (myform.elements[i].type != 'checkbox') 
    	    continue;   
       if (myform.elements[i].checked) 
    	    newURL += '&' + myform.elements[i].name + '=1';
	}
   if (framed)
       replace_or_redraw_parent(newURL);
   else
       replace_or_redraw(newURL);
	}
return false;
}

function removechecked(myform, oldURL, framed)
{
var i;
var ie=0;
var newURL = oldURL;
    if (navigator.appName.indexOf("Explorer")>-1) 
        ie=1;
    for (i = 0; i < myform.elements.length; i++)
    {
       if (ie && i >= 200) 
            break;     
    	if (myform.elements[i].type != 'checkbox') 
    	    continue;
       if (myform.elements[i].checked) 
    	    newURL += '&' + myform.elements[i].name + '=1';
       else 
    	    newURL += '&' + myform.elements[i].name + '=0';
	}
   if (framed)
       replace_or_redraw_parent(newURL);
   else
       replace_or_redraw(newURL);
return false;
}

function removeallconfirm(myform, newURL, msg, framed)
{
if (confirm(msg))
	{
	if (framed)
       replace_or_redraw_parent(newURL);
	else
       replace_or_redraw(newURL);
	}
return false;
}

function replace_or_redraw_parent( new_URL )
{
//var oBase = document.all.tags('base');
//if (oBase && oBase.target) oBase.target = _self;
if( navigator.appVersion.charAt( 0 ) < '3' )
	parent.location = new_URL;
else
	parent.location.replace( new_URL );
return false;
}

function open_new_htpatpay_window( new_URL )
{
var w = (window.open(new_URL, 'patwin', 'width=760,height=550,status=yes,scrollbars=yes,resizable'));
w.focus();
return false;
}

function open_new_window( new_URL )
{
var w = (window.open(new_URL, 'patwin', 'width=550,height=550,status=yes,scrollbars=yes,resizable'));
w.focus();
return false;
}

function onClickProcessAll( new_URL, action )
{
if (confirm("This will affect all items. Are you sure?")) {
	new_URL = new_URL + "?" + action + "all";
	replace_or_redraw( new_URL );
	return false;
	}
}

function onClickProcessSome( current_form, old_URL, action )
{
var i;
var n;
new_URL = old_URL + "?" + action + "some=TRUE";
for (i = 0; i < current_form.elements.length; i++ )
    {
    if( current_form.elements[ i ].type != "checkbox" )
			continue; 
    if (! current_form.elements[ i ].checked )
        continue;
    element_name = current_form.elements[ i ].name;
    element_value = current_form.elements[ i ].value;
    new_URL = new_URL + "&" + element_name + "=" + element_value;
    }
replace_or_redraw( new_URL );
return false;
}

function onClickProcessSomeHolds( current_form, old_URL, action )
{
var i;
var n;
new_URL = old_URL + "?" + action + "some=TRUE";
for (i = 0; i < current_form.elements.length; i++ )
	{
	if( current_form.elements[ i ].type == "checkbox" ) {  
		if( current_form.elements[ i ].checked )
		element_value = "1";
		else continue;
		}
	else if( current_form.elements[ i ].type == "select-one" ){
	     element_value = current_form.elements[ i ].options[current_form.elements[ i ].selectedIndex].value; 
	     }
	else continue;
	element_name = current_form.elements[ i ].name;
    new_URL = new_URL + "&" + element_name + "=" + element_value;
	}
replace_or_redraw( new_URL );
return false;
}

//SORT FUNCTIONS
function sortBrowse(){
  if( document.searchtool.searchtype != null && savedTag != null )
    document.searchtool.searchtype.options.selectedIndex = savedTag;
  if( document.searchtool.searcharg != null && savedSearch != null )
    document.searchtool.searcharg.value = savedSearch;
  if( document.searchtool.searchscope != null && savedScope != null )
    document.searchtool.searchscope.options.selectedIndex = savedScope;
    document.searchtool.submit();
}
function sortExactBrowse()
{
    var new_url;

    var k = sortExactBrowseURL.lastIndexOf("indexsort=");
    var selector = document.searchtool.sortdropdown;
    var sortopt = selector.options[ selector.selectedIndex ].value;
    if( k == -1) new_url = sortExactBrowseURL + "/indexsort=" + sortopt;
    else new_url = sortExactBrowseURL.substring(0, k) + "indexsort=" + sortopt;
    window.location = new_url;
}

function initSort()
{
if( document.searchtool.searchtype != null )
    savedTag = document.searchtool.searchtype.options.selectedIndex;
else savedTag = null;
if( document.searchtool.searcharg != null )
    savedSearch = document.searchtool.searcharg.value;
else savedSearch = null;
if( document.searchtool.searchscope != null )
    savedScope = document.searchtool.searchscope.options.selectedIndex;
else savedScope = null;

    if( !document.getElementById("sortdropdown") )
    {
        var anchorPlacement = document.getElementById("sort_cell");
        //create sort select and add it to the DOM
        var newSortSelect = createSelect("sortdropdown",sortTypes, sortLabels, sortSelectedValue);
        addContent(newSortSelect, anchorPlacement );
        if( sortButtonText != null)
        {
            var newSortButton = createButton(sortButtonText,"sortbutton");
            newSortButton.onclick = eval(sortButtonEvent);
            addContent(newSortButton, anchorPlacement);
        }
    }
    toggleSort();
}
function toggleSort()
{
    //* added get element by id */
    var selector = document.getElementById("searchtype");
    selectedTag = selector.options[selector.options.selectedIndex].value;

    //* removed test for nn4 since we don't support it */
    //* added global var for sort tags */
    var sortSelect = document.getElementById("sortdropdown");
    if(sortSelect)
    {
        if(nonSortTags.search(selectedTag) != -1 )
        {
            sortSelect.className = "hideElem";
        }
        else
        {
            sortSelect.className = "showInlineElem";
        }
        sortSelect.options.selectedIndex = sortSelectedValue;
    }
}

function createSelect(sName,sTypes, sLabels, sSelectedValue)
{
    var newSelect = document.createElement("SELECT");
    newSelect.setAttribute("name", sName);
    //toggleSort is predicated on this id
    newSelect.setAttribute("id", sName);
    for(var i=0; i < sTypes.length; i++)
    {
        if (sSelectedValue != null && sSelectedValue == sTypes[i])
        {
            newSelect.selectedIndex= i;
        }
        newSelect.options[i] = new Option(sLabels[i],sTypes[i]);
    }
    return newSelect;
}

function createButton(sValue,sName)
{
    var newButton = document.createElement("INPUT");
    newButton.setAttribute("type","button");
    newButton.setAttribute("value",sValue);
    newButton.setAttribute("name",sName);
    newButton.setAttribute("id",sName);
    return newButton;
}

function addContent(nodeObj,parentNode)
{
    parentNode.appendChild(nodeObj);
}


//support for "clear form" button:
//note: the form name and the element names correspond to the js in
//websrchhelp.c:srchhelp_x_advancesearchformbegin().
//form.reset() does not work like we would like... have to
//explicitly clear the fields.

function iiiDoReset_1()
{
var name = "search";
if (document.getElementById)
	obj = document.getElementById(name);
else if (document.all)
	obj = document.all[name];
else if (document.layers)
	obj = document.layers[name];
obj.reset();

for (var i = 0; i < obj.elements.length; i++)
	{
	var x = obj.elements[i];
	if (x.name.substr(0,10) == "fieldLimit") x.selectedIndex = 0;
	else if (x.name.substr(0,7) == "boolean") x.selectedIndex = 0;
	else if (x.name == "SORT") x.selectedIndex = 0;
	else if (x.name == "sortdropdown") x.selectedIndex = 0;
	else if (x.name == "searchscope") x.selectedIndex = savedScopeIndex;
	else if (x.type == "text") x.value = "";
	else if (x.type == "select-one") x.selectedIndex = -1;
	else if (x.type == "select-multiple") x.selectedIndex = -1;
	else if (x.type == "checkbox") x.checked = false;
	}
}

