require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'tmpdir'
require 'jekyll'
require 's3_website'

task :default => :serve

desc 'Install dependencies'
task :install do
  system 'bundle install'

  unless File.exist?('package.json')
    system 'npm init'
  end

  system 'npm install -g browser-sync'
end

desc 'Build site with Jekyll'
task :build do
  system 'bundle exec jekyll build'
end

desc 'Watch jekyll files'
task :jekyllwatch do
  system 'bundle exec jekyll serve --watch --baseurl="" --drafts --incremental'
end

def jekyll(opts = '')
  system 'rm -rf _site'
  system 'jekyll ' + opts
end

desc "Generate and publish site to thinkshout.com on Amazon S3."
task :publish => [:build] do
  system 'bundle exec s3_website push'
end

# Run development tasks on separate threads
task :serve do
  threads = []
  %w{jekyllwatch}.each do |task|
    threads << Thread.new(task) do |devtask|
      Rake::Task[devtask].invoke
    end
  end
  threads.each {|thread| thread.join}
end
