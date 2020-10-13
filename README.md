# Starter-template

Make sure you have node.js, git bash installed

To clone a git - 
'git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY' - without the inverted commas and replace the link with the link of the file you wanted to clone

Open project folder in your text editor such as VSCode, open up terminal and change the terminal to bash. You can also right click in the folder and 'git bash here'. 

Type 'npm init' - this will initalise npm

Type 'npm install' - this will install node modules

--------------------------------------------------------

To run auto compiler

Make sure gulp is up to date by 'npm install -g gulp'

Run 'gulp watch'

Now everything should be set up, run 'gulp watch' this will auto compile sass into css and run browser sync which will automatically refresh the page when files are saved. This applies to html, css and js

---------------------------------------------------------

check .gitignore file and ensure that node_modules file is in there as you do not need to upload this file.

---------------------------------------------------------

GitHub uploads

Make sure you do a pull request before pushing your work to GitHub when working collaboratively. 

run 'git checkout (branch name)' - git checkout -b <branch> origin/<branch> creates a new branch based on origin/<branch>, and does not contact the remote repository. It looks at origin/<branch> as it currently exists in your local repository.

run 'git pull' - git pull contacts the remote repository identified by origin and looks for updates. It fetches any updates and then merges the changes into the target branch. It does not create a new branch.

run 'git add . ' git add will add files you specify into local repository ready to be pushed to Git. In this case we will use period to add all the files.

run 'git commit -m "new commit" ' - this will add a message to your commited files

Finally run 'git push' - this will push the files to Git.