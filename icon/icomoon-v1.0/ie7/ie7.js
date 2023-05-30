/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-start': '&#xe910;',
		'icon-icon-cart': '&#xe900;',
		'icon-icon-check': '&#xe901;',
		'icon-icon-clock': '&#xe902;',
		'icon-icon-eye': '&#xe903;',
		'icon-icon-heart': '&#xe904;',
		'icon-icon-home': '&#xe905;',
		'icon-icon-login': '&#xe906;',
		'icon-icon-login-mobile': '&#xe907;',
		'icon-icon-menu': '&#xe908;',
		'icon-icon-mesenger': '&#xe909;',
		'icon-icon-shap': '&#xe90a;',
		'icon-icon-shop': '&#xe90b;',
		'icon-icon-small-cart': '&#xe90c;',
		'icon-icon-small-down': '&#xe90d;',
		'icon-icon-small-next': '&#xe90e;',
		'icon-icon-small-prev': '&#xe90f;',
		'icon-icon-top': '&#xe911;',
		'icon-icon-track-list': '&#xe912;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
