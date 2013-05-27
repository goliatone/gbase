TODO: Add new module definition to support AMD, CommonJS, and window export.


```
(function (window) {
    'use strict';
    // var s
    /**
     * Expose {% =name%}
     */
    // AMD suppport
    if (typeof window.define === 'function' && window.define.amd !== undefined) {
        window.define('{% =name%}', [], function () {
            return {% =name%};
        });

    // CommonJS suppport
    } else if (typeof module !== 'undefined' && module.exports !== undefined) {
        module.exports = {% =name%};

    // Default
    } else {
        window.{% =name%} = {% =name%};
    }

}(this));
```

TODO: Make bower components optional, use prompts. Have app and module mode?