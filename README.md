Puedes crear nuevas ramas usando el comando git branch <branch_name>. Luego puede cambiar a su nueva sucursal usando git checkout <branch_name>. 
You can also create a new branch and change to it in a single command by using the -b flag with checkout, in the form git checkout -b <branch_name>.

git push origin +name+
will push your branch to a your remote repository

git branch 
will diplay all of your branches and the actual you been working on will have an asterisc *

You can add files, commit to this branch, and push changes to your repo, just like you would with the main branch. Everything is the same except when you push the changes, you’d use git push origin rps-ui instead of git push origin main, since we’re pushing to our new branch.