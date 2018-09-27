<script language="JavaScript">
function Banners(){
	var MNews = new Array(); 
	MNews[0]= '<a href="http://links.sitedesejado.com/imagens.html" target=_blank><img src="1º_imagem.gif" width=468 height=60 border=0 alt="Clique Aqui"></a>'
	var Numero = Math.floor(Math.random()*1);
	document.write(MNews[Numero]);
	MNews[1]= '<a href="http://links.sitedesejado.com/imagens.html" target=_blank><img src="2º_imagem.jpg" width=468 height=60 border=0 alt="Clique Aqui"></a>'
	var Numero = Math.floor(Math.random()*1);
	document.write(MNews[Numero]);
	MNews[2]= '<a href="http://links.sitedesejado.com/imagens.html" target=_blank><img src="3º_imagem.gif" width=468 height=60 border=0 alt="Clique Aqui"></a>'
	var Numero = Math.floor(Math.random()*1);
	document.write(MNews[Numero]);
}
</script>
<script language="JavaScript">Veja_Banner = Banners();</script>