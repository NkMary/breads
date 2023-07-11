const React = require('react')
const Default = require('./layouts/Default')

function error404 (html) {
    return (
        <html>
            <head>
            <title>{html.title || 'error404'}</title>
                <body>
                <h1>404: Page not found</h1>
                <p>Oops, sorry we can't find this page!</p>
                <img src="http://placekitten.com/500/500" alt="Cat that is very dorry he can't find your page" />
                </body>
            </head>
        </html> 
    )
}
module.exports = error404