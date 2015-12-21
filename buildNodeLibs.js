var nodeLibs = require('node-libs-browser');
var replace = require('replace-in-file');
var fs = require('fs');
var path = require('path');
var walk = require('walk');

/* this script looks for and replaces all the require calls in node_modules or
 * elsewhere that are not available to react-native, with those provided by
 * node-libs-browser. it's hacky and groce. sry. */

var nodePackNames = Object.keys(nodeLibs)

// remove util, messes things up
nodePackNames.splice(nodePackNames.indexOf("util", 1));

var walker = walk.walk("./node_modules");
walker
  .on("file", fileHandler)
  .on("end", endHandler);


function fileHandler(root, fileStat, next) {
  nodePackNames.map(function(thisPkgName) {
    var originalRequire = "require('" + thisPkgName + "')";
    var newRequire = "require('node-libs-browser')." + thisPkgName;
    
    replace({
      files: path.resolve(root, fileStat.name),
      replace: originalRequire,
      with: newRequire
    }, function(error, changedFiles) {
      //Catch errors
      if (error) {
        return console.error('Error occurred:', error);
      }
      if (changedFiles.length > 0) {
        // List changed files
        console.log('Modified files:', changedFiles.join(', '));
      }
    });
  });
  // move to next file
  next();
}


function endHandler() {
  console.log("all done");
}
