var public_vars = public_vars || {};

;(function($, window, undefined){

    "use strict";

    $(document).ready(function()
    {
        // Main Vars
        public_vars.$body                 = $("body");
        public_vars.$pageContainer        = public_vars.$body.find(".page-container");
        public_vars.$sidebarMenu          = public_vars.$pageContainer.find('.sidebar-menu');

        // Perfect Scrollbar
        if($.isFunction($.fn.perfectScrollbar))
        {
            if(public_vars.$sidebarMenu.hasClass('fixed'))
                ps_init();

            $(".ps-scrollbar").each(function(i, el)
            {
                var $el = $(el);

                $el.perfectScrollbar({
                    wheelPropagation: false
                });
            });

            // Scrollable
            $("div.scrollable").each(function(i, el)
            {
                var $this = $(el),
                    max_height = parseInt(attrDefault($this, 'max-height', 200), 10);

                max_height = max_height < 0 ? 200 : max_height;

                $this.css({maxHeight: max_height}).perfectScrollbar({
                    wheelPropagation: true
                });
            });
        }

        // Login Form Label Focusing
        $(".login-form .form-group:has(label)").each(function(i, el)
        {
            var $this = $(el),
                $label = $this.find('label'),
                $input = $this.find('.form-control');

            $input.on('focus', function()
            {
                $this.addClass('is-focused');
            });

            $input.on('keydown', function()
            {
                $this.addClass('is-focused');
            });

            $input.on('blur', function()
            {
                $this.removeClass('is-focused');

                if($input.val().trim().length > 0)
                {
                    $this.addClass('is-focused');
                }
            });

            $label.on('click', function()
            {
                $input.focus();
            });

            if($input.val().trim().length > 0)
            {
                $this.addClass('is-focused');
            }
        });

    });

})(jQuery, window);


// Element Attribute Helper
function attrDefault($el, data_var, default_val)
{
    if(typeof $el.data(data_var) != 'undefined')
    {
        return $el.data(data_var);
    }

    return default_val;
}