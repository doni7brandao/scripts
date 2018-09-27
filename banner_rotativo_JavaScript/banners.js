<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sem título</title>
<link rel="stylesheet" href="flexslider.css" type="text/css">
<script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script type="text/javascript" src="jquery.flexslider.js"></script>
<script type="text/javascript" src="jquery.flexslider-min.js"></script>
<script type="text/javascript" charset="utf-8">
  $(window).load(function() {
    $('.flexslider').flexslider({
        controlsContainer: '.flex-container'
    });
  });
</script>

</head>
<body>
<div class="flex-container">
<div class="flexslider">

  <ul class="slides">
    <li>
      <img src="https://2.bp.blogspot.com/-fgs6CvZkUYE/W60AzDN9pHI/AAAAAAAAADQ/MyrTXSL1uFcEzbnS2Nd0pOjiJPLb7T9zgCLcBGAs/s1600/supermercado_jks.gif" />
    </li>
    <li>
      <img src="https://4.bp.blogspot.com/-M6QKneQsB8M/W60A2IWN99I/AAAAAAAAADU/NBzYDAyrTR4sm4TlQ9xMh9D5mU6jUfWnwCLcBGAs/s1600/guerraconstru%25C3%25A7%25C3%25B5es.jpg" />
    </li>
    <li>
      <img src="https://2.bp.blogspot.com/-fgs6CvZkUYE/W60AzDN9pHI/AAAAAAAAADQ/MyrTXSL1uFcEzbnS2Nd0pOjiJPLb7T9zgCLcBGAs/s1600/supermercado_jks.gif" />
    </li>
  </ul>
</div>
</div>
</body>
</html>




<script language="JavaScript">
function Banners(){
  var MNews = new Array(); 
  MNews[0]= '<a href="#" target=_blank><img src="https://2.bp.blogspot.com/-fgs6CvZkUYE/W60AzDN9pHI/AAAAAAAAADQ/MyrTXSL1uFcEzbnS2Nd0pOjiJPLb7T9zgCLcBGAs/s1600/supermercado_jks.gif" width=728 height=90 border=0 alt="Supermercado JKS"></a>'
  MNews[1]= '<a href="#" target=_blank><img src="https://4.bp.blogspot.com/-M6QKneQsB8M/W60A2IWN99I/AAAAAAAAADU/NBzYDAyrTR4sm4TlQ9xMh9D5mU6jUfWnwCLcBGAs/s1600/guerraconstru%25C3%25A7%25C3%25B5es.jpg" width=728 height=90 border=0 alt="Supermercado JKS"></a>'
  var Numero = Math.floor(Math.random()*1);
  document.write(MNews[Numero]);
}
</script>
<script language="JavaScript">Veja_Banner = Banners();</script>