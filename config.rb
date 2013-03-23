# -------------------------------
# Requires
# -------------------------------
require "middleman-smusher"

# -------------------------------
# Variables
# -------------------------------
@app_url       = "cd ~/Documents/Studies/phonegap_apps/ios_test/"
@copy_command  = "rm -R www && mv ~/Documents/Studies/phonegap_apps/phonegap_middleman/build www"
@build_command = "./cordova/build && ./cordova/emulate"

# -------------------------------
# Sets
# -------------------------------
set :css_dir   , 'stylesheets'
set :js_dir    , 'javascripts'
set :images_dir, 'images'

# -------------------------------
# Modules
# -------------------------------
module Phonegap
  class << self
    def registered(app)
      app.after_build do |builder|
        builder.run(@app_url + '&&' + @copy_command)
        builder.run(@app_url + '&&' + @build_command)
      end
    end
    alias :included :registered
  end
end

::Middleman::Extensions.register(:phonegap, Phonegap)

# -------------------------------
# Activates
# -------------------------------
activate :phonegap
activate :livereload
activate :minify_html

# -------------------------------
# Build-specific configuration
# -------------------------------
configure :build do

  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Use relative URLs
  activate :relative_assets

end