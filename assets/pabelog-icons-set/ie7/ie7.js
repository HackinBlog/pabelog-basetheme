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
		el.innerHTML = '<span style="font-family: \'pabelog-icons-set\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-bubble': '&#xe936;',
		'icon-bubble1': '&#xe937;',
		'icon-bubble-text': '&#xe938;',
		'icon-bubble-text1': '&#xe939;',
		'icon-bubble-dots': '&#xe93a;',
		'icon-bubble-dots1': '&#xe93b;',
		'icon-bubbles': '&#xe93c;',
		'icon-bubbles1': '&#xe93d;',
		'icon-cloud-download1': '&#xea8f;',
		'icon-tag': '&#xe900;',
		'icon-heart': '&#xe902;',
		'icon-info': '&#xe903;',
		'icon-stop': '&#xe901;',
		'icon-alert': '&#xe904;',
		'icon-checklist': '&#xe905;',
		'icon-light-bulb': '&#xe907;',
		'icon-search1': '&#xe906;',
		'icon-thumbsdown': '&#xe908;',
		'icon-thumbsup': '&#xe909;',
		'icon-unverified': '&#xe911;',
		'icon-notification': '&#xea08;',
		'icon-facebook': '&#xe90a;',
		'icon-twitter-old': '&#xe90b;',
		'icon-share': '&#xe90c;',
		'icon-feed': '&#xe90d;',
		'icon-bird': '&#xe90e;',
		'icon-chat': '&#xe90f;',
		'icon-envelope': '&#xe910;',
		'icon-arrow-left': '&#xe914;',
		'icon-arrow-right': '&#xe915;',
		'icon-check': '&#xe912;',
		'icon-chevron-left': '&#xe913;',
		'icon-chevron-right': '&#xe91b;',
		'icon-download-cloud': '&#xe91c;',
		'icon-download': '&#xe91d;',
		'icon-menu': '&#xe916;',
		'icon-rotate-ccw': '&#xe91e;',
		'icon-search': '&#xe917;',
		'icon-share-2': '&#xe918;',
		'icon-thumbs-down': '&#xe919;',
		'icon-thumbs-up': '&#xe91a;',
		'icon-twitter': '&#xe91f;',
		'icon-x': '&#xe920;',
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
