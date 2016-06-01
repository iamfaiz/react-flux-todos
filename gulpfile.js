var elixir = require('laravel-elixir');

elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'build';

elixir(function (mix) {
	mix.browserify('app.js');
});