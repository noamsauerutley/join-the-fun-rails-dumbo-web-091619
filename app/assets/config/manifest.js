
if using_sprockets4?
config.assets.precompile  = %w( manifest.js )
else
config.assets.precompile  = [LOOSE_APP_ASSETS, /(?:\/|\\|\A)application\.(css|js)$/]
end