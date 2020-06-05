var calcComplexity = function(password) {
    var complexity = 0;

    var regExps = [
        /[a-z]/,
        /[A-Z]/,
        /[0-9]/,
        /.{8}/,
        /.{16}/,
        /[!-//:-@[-`{-Ÿ]/
    ];

    regExps.forEach(function (regexp) {
        if(regexp.test(password)) {
            complexity++;
        }
    })

    return{
        value: complexity,
        max: regExps.length,
    };
};

var checkPasswordStrength = function(password) {
    var progress = document.querySelector("#passwordComplexity"),
    complexity = calcComplexity(this.value);

    progress.value = complexity.value;
    progress.max = complexity.max;
}

var input = document.querySelector("#passwordField");
input.addEventListener('keyup', checkPasswordStrength);