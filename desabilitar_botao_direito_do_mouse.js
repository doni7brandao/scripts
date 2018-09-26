<!-- Código para desabilitar o botão direito do mouse --> 

<script type='text/javascript'>
 
function disableselect(e){ 
return false 
} 

function reEnable(){ 
return true
} 

document.onselectstart=new Function (&quot;return false&quot;) 
document.oncontextmenu=new Function (&quot;return false&quot;) 

if (window.sidebar){ 
document.onmousedown=disableselect 
document.onclick=reEnable
}

</script>

