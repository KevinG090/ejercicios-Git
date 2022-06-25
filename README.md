# Ejercicios-Git 
Este repositorio tiene como objetivo poner en practica los diferentes comandos que nos puede facilitar la comunicacion entre git y github :tw-1f603:  

>Considero importante profundizar en git (control de versiones) ya que en el tema laboral :briefcase: es usado con fecuencia.

## Comandos para tener en cuenta :dart:

### Basicos 🟢
* git init
* git add .
* git commit -m "(*mensaje*) "
* git pull/push origin master
<br>

* git branch --list
* git branch (*nombre de la nueva rama*)
* git checkout (*nombre de la rama*)
<br>

* cd (*nombre archivo/capeta*)
* cd ..
* git clean
* git status
* git log
* code .
* pwd
* ls

### Intermedio 🟡
* git commit -am "(*mensaje*) "
* git remote / git remote -v
* git merge (*nombre de la rama*)
<br>

* git config --global user.name (*Tu nombre aquí*)
* git config --global user.email (*ejemplo@example.com*)
<br>

* git tag 
* git tag -a (*nombre del TAG*) -m "(*comentario*)" (*numero del commit*)
* git push origin --tags
* git tag -d (*nombre del TAG*)
* git push origin :refs/tags/(*nombre del TAG*)
<br>

* git log --all --graph --decorate --oneline 
* git clone (*direccion del repositorio*)
* git remote add origin (*direccion del repositorio*)
* git remote set url (*direccion del repositorio*)
<br>

* git branch -m (*nuevo nombre de la rama*)
* git branch -D (*nombre de la rama*)
* git push origin --delete (*nombre de la rama*)
<br>

* git diff
* git diff (*commit A*) (*commit B*)
* git show
<br>

* history
* alias
* alias (*nombre del alias*)="(*codigo/comando*)"

### Avanzado 🔴
* gitk
* vi (*nombre del archivo*)
* git rm --cached (*nombre archivo*)
* git rebase (*nombre de la rama*)
<br>

* git stash 
* git stash save "mensaje identificador del elemento del stashed"
* git stash list
* git stash pop  -> recuperar los cambios del ultimo stash
* git stash drop -> elimina el stash 

para mas, ir a: https://platzi.com/clases/1557-git-github/19984-stash/

### Extras  :checkered_flag:
* para salir de la consola ***VIM*** tecleamos **ESC+SHIFT+Z+Z**
* para limpiar la consola podemos teclear **Ctrl+L**
