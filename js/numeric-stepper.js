;(function($) {
    $.fn.extend({
        numericStepper: function(options) {
            return this.each(function() {
                new $.NumericStepper(this, options);
            });
        }
    });

    $.NumericStepper = function(el, options) {
        options = $.extend({}, {
            divider : 10,
            maxstep: 100,
            value: 573,

            change: function() {}
        }, options);

        var $el = $(el);
        var context = this;

        $el.addClass('numeric-stepper');
        $el.html('<a class="numeric-stepper__button numeric-stepper__left" href="javascript: void(0);">&minus;</a>' +
            '<a class="numeric-stepper__button numeric-stepper__right" href="javascript: void(0);">+</a>' +
            '<div class="numeric-stepper__body">573</div>');

        var left = $('.numeric-stepper__left', $el);
        var right = $('.numeric-stepper__right', $el);
        var body = $('.numeric-stepper__body', $el);

        var value = options.value;
        var divider = options.divider;
        var maxstep = options.maxstep;
        var step = 1;

        function render() {
            $(body).html(value);
        }

        function calcStepLeft() {
            step = 1
            while (step < value && step <= maxstep) {
                step *= divider;
            }

            if (step > 1 ) step /= divider;

            // не считаем значения меньше 0
            if (value - step >= 0) value -= step;
        }

        function calcStepRight() {
            step = 1;
            while (step <= value && step <= maxstep) {
                step *= divider;
            }

            if (step > 1) step /= divider;

            value += step;

        }

        $(left).click(function() {
            //value -= step;
            calcStepLeft();
            render();
        });

        $(right).click(function() {
            //value += step;
            calcStepRight();
            render();
        });

        render();
    };

})(jQuery);