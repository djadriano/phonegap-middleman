# -------------------------------
# Requires
# -------------------------------

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

    def build_properties( app_url, middleman_build_folder, os_type )

      bash_command = 'cd ' + app_url + ';'
      bash_command = bash_command + 'rm -R assets/www/* ;'
      bash_command = bash_command + 'cp -r ' + middleman_build_folder + ' assets/www/;'

      if os_type == 'ios'
        bash_command = bash_command + './cordova/build && ./cordova/emulate;'
      elsif os_type == 'android'
        bash_command = bash_command + './cordova/build && ./cordova/run;'
      end

    end

    def registered( app )

      build_bash_cmd = build_properties(
        '~/Documents/Studies/phonegap_apps/android_test/',
        '~/Documents/Studies/phonegap_apps/phonegap_middleman/build/*',
        'android'
      )

      # after execute the build execute the bash commands
      app.after_build do |builder|
        builder.run(build_bash_cmd)
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