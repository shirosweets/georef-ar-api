"use strict";

const DisableTryItOutPlugin = function() {
    return {
	statePlugins: {
	    spec: {
		wrapSelectors: {
		    allowTryItOutFor: () => () => false
		}
	    }
	}
    }
}

window.onload = function() {
    const ui = SwaggerUIBundle({
        url: "https://raw.githubusercontent.com/datosgobar/georef-api/master/docs/open-api/spec/openapi.json",
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
            SwaggerUIBundle.presets.apis
        ],
	plugins: [
	    DisableTryItOutPlugin
	],
	defaultModelsExpandDepth: -1 // Remover modelos
    })

    window.ui = ui
}
