let
 gulp  = require("gulp"),
 server = require("gulp-server-livereload");



gulp.task("default", function() {
 gulp.src('./src')
 .pipe(server({
	 livereload:true,
	 directoryListing:{
		 enable:true,
		 path:'./src'
	 },
	 open:false,
 }));
});
