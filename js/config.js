var nAplicacion ="CGPHA";
var urlMapea = "http://mapea-sigc.juntadeandalucia.es";
var contextos = "wmcfile=http://www.callejerodeandalucia.es/wmc/context_cdau_callejero.xml*Callejero,http://www.callejerodeandalucia.es/wmc/context_cdau_satelite.xml*Satélite";
var layers = "http://www.ideandalucia.es/services/dera_patrimonio/wfs/?SERVICE=WFS&VERSION=1.0.0&REQUEST=GetFeature&TYPENAME=dera_patrimonio:pt01_pat_inmueble&SRSNAME=EPSG:25830";
var layers = "http://www.ideandalucia.es/services/dera_patrimonio/wfs/?SERVICE=WFS&VERSION=1.0.0&REQUEST=GetFeature&TYPENAME=dera_patrimonio:pt02_pat_conjunto&SRSNAME=EPSG:25830";
var urlGeosearch = "http://geobusquedas-sigc.juntadeandalucia.es/geobusquedas/sigc/search";
var extra = "operations=searchstreet";
/******************* Proyecciones *********************/
var prj25830 ="+proj=utm +zone=30 +ellps=GRS80 +units=m +no_defs";

