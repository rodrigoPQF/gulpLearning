const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHTML, appJS, appIMG } = require('./gulpTasks/app')
const { depsCSS, depsFonts} = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')


module.exports.default = series(
    parallel(
        series(appHTML, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)

