var onloadCallback = function () {
    for (var i = 0; i < jQuery(".wpcf7-recaptcha").length; i++) {
        widgetId = grecaptcha.render( ('wdm-nocapt-recapt-id-' + i), {
            'sitekey': wdm_recaptcha.sitekey,
            'theme': wdm_recaptcha.theme
        } );
    }
};
