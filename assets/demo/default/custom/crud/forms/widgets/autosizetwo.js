var Autosize = {
	init: function() {
		var i, t;
		i = $("#m_autosize_1"), t = $("#m_autosize_2"), autosize(i), autosize(t), autosize.update(i), autosize.update(t)
	}
};
jQuery(document).ready(function() {
	Autosize.init()
});