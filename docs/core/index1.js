function mxscript(src, onLoad, id, dataAppKey, noWrite, onError)
{
    var defer = onLoad == null && !noWrite;
    
     if(false)
    {
        var s = document.createElement('script');
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('defer', 'true');
        s.setAttribute('src', src);

        if (id != null)
        {
            s.setAttribute('id', id);
        }
        
        if (dataAppKey != null)
        {
            s.setAttribute('data-app-key', dataAppKey);
        }
        
        if (onLoad != null)
        {
            var r = false;
        
            s.onload = s.onreadystatechange = function()
            {
                if (!r && (!this.readyState || this.readyState == 'complete'))
                {
                      r = true;
                      onLoad();
                }
              };
        }

        if (onError != null)
        {
            s.onerror = function(e)
            {
                onError('Failed to load ' + src, e);
            };
        }
          
          var t = document.getElementsByTagName('script')[0];
          
          if (t != null)
          {
              t.parentNode.insertBefore(s, t);
          }
    }
    else
    {
        document.write('<script src="' + src + '"' + ((id != null) ? ' id="' + id +'" ' : '') +
            ((dataAppKey != null) ? ' data-app-key="' + dataAppKey +'" ' : '') + '></scr' + 'ipt>');
    }
};



mxscript(  '/core/graphEdit/js/Init.js');
mxscript( '/core/graphEdit/deflate/pako.min.js');
mxscript( '/core/graphEdit/deflate/base64.js');
mxscript(  '/core/graphEdit/jscolor/jscolor.js');
mxscript( '/core/graphEdit/sanitizer/sanitizer.min.js');
mxscript(  '/core/mxClient.min.js');  
mxscript(  '/core/graphEdit/js/EditorUi.js'); 
mxscript(  '/core/graphEdit/js/Editor.js'); 
mxscript(  '/core/graphEdit/config/bpmList.js');  
mxscript(  '/core/graphEdit/js/Sidebar.js'); 
mxscript(  '/core/graphEdit/js/Graph.js'); 
mxscript(  '/core/graphEdit/js/Format.js'); 
mxscript(  '/core/graphEdit/js/Shapes.js'); 
mxscript(  '/core/graphEdit/js/Actions.js'); 
mxscript(  '/core/graphEdit/js/Menus.js');  
mxscript(  '/core/graphEdit/js/Toolbar.js');  
mxscript(  '/core/graphEdit/js/Dialogs.js');  
   
     
          