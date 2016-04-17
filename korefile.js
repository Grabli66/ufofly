var solution = new Solution('New Project');
var project = new Project('New Project');
project.setDebugDir('build/ios');
project.addSubProject(Solution.createProject('build/ios-build'));
project.addSubProject(Solution.createProject('/Users/Grabli66/haxelib/kha/16,1,2'));
project.addSubProject(Solution.createProject('/Users/Grabli66/haxelib/kha/16,1,2/Kore'));
solution.addProject(project);
return solution;
